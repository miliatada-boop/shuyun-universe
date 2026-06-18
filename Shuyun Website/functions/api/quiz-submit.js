/**
 * Cloudflare Pages Function — POST /api/quiz-submit
 * CREATE (no record_id): write full quiz record + 答题汇总 to Feishu
 * UPDATE (with record_id): append contact to 业务描述 + 答题汇总
 */

const APP_TOKEN   = 'CKKQbQP7ha4Qsrs68p2cInHhnid';
const TABLE_ID    = 'tblHILxVCBfLmWbM';
const FEISHU_BASE = 'https://open.feishu.cn/open-apis';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try { body = await request.json(); }
  catch { return json({ error: 'Invalid JSON' }, 400); }

  const token = await getToken(env);
  if (!token) return json({ error: 'No auth configured' }, 500);

  // ── UPDATE MODE ──
  if (body.record_id) {
    const { record_id, bizDesc, contact } = body;

    // GET existing record to read current 答题汇总
    const getRes = await fetch(
      `${FEISHU_BASE}/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records/${record_id}`,
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
    const getData = await getRes.json();
    const existing = getData.data?.record?.fields || {};

    const bizLines = [bizDesc || ''].filter(Boolean);
    if (contact) bizLines.push(`\n联系方式：${contact}`);

    const prevSummary = typeof existing['答题汇总'] === 'string'
      ? existing['答题汇总']
      : (Array.isArray(existing['答题汇总']) ? existing['答题汇总'].map(b => b?.text || '').join('') : '');
    const newSummary = contact
      ? prevSummary.replace(/\n联系方式：.*$/, '') + `\n联系方式：${contact}`
      : prevSummary;

    const res = await feishuPut(
      `${FEISHU_BASE}/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records/${record_id}`,
      token,
      { fields: { '业务描述': bizLines.join('\n'), '答题汇总': newSummary } }
    );
    const d = await res.json();
    if (d.code !== 0) return json({ error: 'Update failed', detail: d }, 500);
    return json({ ok: true });
  }

  // ── CREATE MODE ──
  const b = body;

  const bizLines = [b.bizDesc || ''].filter(Boolean);
  if (b.contact) bizLines.push(`\n联系方式：${b.contact}`);

  const goalLines = [
    b.productType ? `产品结构：${b.productType}` : '',
    b.pricing     ? `定价区间：${b.pricing}` : '',
    b.goal12m     ? `12个月目标：${b.goal12m}` : '',
    b.vision3y    ? `三年愿景：${b.vision3y}` : '',
    b.painPoints  ? `品牌卡点：${b.painPoints}` : '',
    b.obstacle    ? `最大障碍：${b.obstacle}` : '',
    b.upgrade     ? `最想升级：${b.upgrade}` : '',
  ].filter(Boolean);

  const targetFull = [b.targetCustomer, goalLines.length ? '\n' + goalLines.join('\n') : ''].filter(Boolean).join('\n');

  const fields = {
    '姓名品牌名':      b.name || '匿名',
    '视觉原型':        b.archetype || '',
    '品牌人格':        `${archetypeCn(b.archetype)} · ${archetypeEn(b.archetype)}`,
    '品牌感受':        b.brandFeel || '',
    '关键词':         b.keywords || '',
    '色彩方向':        b.colorDir || '',
    '业务描述':        bizLines.join('\n'),
    '目标客户':        targetFull,
    'MJ摄影Prompt':   b.mjPhoto || '',
    'MJ Logo Prompt': b.mjLogo || '',
    '文案语气Prompt':  b.mjCopy || '',
    '答题汇总':        buildSummary(b),
    '日期':           Date.now(),
  };

  const res = await feishuPost(
    `${FEISHU_BASE}/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records`,
    token,
    { fields }
  );
  const d = await res.json();
  if (d.code !== 0) return json({ error: 'Write failed', detail: d }, 500);

  return json({ ok: true, record_id: d.data?.record?.record_id });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

// ── Summary builder ──
function buildSummary(b) {
  const lines = [];
  const add = (label, val) => { if (val) lines.push(`${label}：${val}`); };
  const sec = (t) => lines.push(`\n─ ${t} ─`);

  lines.push(`【${b.name} · ${archetypeCn(b.archetype)} ${archetypeEn(b.archetype)}】`);

  // ── 品牌原型（生成结论，AI生成视觉的核心依据）──
  sec('品牌原型');
  add('描述',     b.arcDesc);
  add('关键词',   b.arcTraits);
  add('色彩系统', b.arcColors);
  add('字体方向', b.arcFonts);
  add('摄影方向', b.arcPhoto);
  add('整体气质', b.arcMood);
  add('色彩名称', b.paletteName);
  add('MJ摄影',   b.mjPhoto);
  add('MJ Logo',  b.mjLogo);
  add('文案语气', b.mjCopy);

  // ── 用户答题内容 ──
  sec('视觉直觉');
  add('品牌空间感', b.spaceLabel);
  add('色彩方向',   b.colorDir);
  add('字体偏好',   b.typoLabel);
  add('视觉语言',   b.brandFeel);
  add('品牌气质词', b.keywords);

  sec('你的业务');
  add('业务描述',   b.bizDesc);
  add('产品结构',   b.productType);
  add('定价区间',   b.pricing);
  add('活跃平台',   b.platforms);

  sec('你的受众');
  add('目标客户',     b.targetCustomer);
  add('目标客户收入', b.targetIncLabel);
  add('当前客户收入', b.curIncLabel);
  add('客户城市',     b.citys);
  add('获客渠道',     b.channels);

  sec('你的声音');
  add('表达方式',   b.mjCopy);
  add('核心竞争力', b.coreStrength);
  add('内容节奏',   b.rhythmLabel);
  add('话题领域',   b.topics);
  add('品牌信念',   b.belief);

  sec('你的卡点');
  add('最不满意', b.painPoints);
  add('最想升级', b.upgrade);
  add('最大障碍', b.obstacle);

  sec('你的野心');
  add('12个月目标', b.goal12m);
  add('三年愿景',   b.vision3y);

  if (b.contact) { lines.push(''); add('联系方式', b.contact); }

  return lines.join('\n');
}

// ── Helpers ──

async function getToken(env) {
  if (env.FEISHU_PAT) return env.FEISHU_PAT;
  if (env.FEISHU_APP_ID && env.FEISHU_APP_SECRET) {
    const r = await fetch(`${FEISHU_BASE}/auth/v3/tenant_access_token/internal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app_id: env.FEISHU_APP_ID, app_secret: env.FEISHU_APP_SECRET }),
    });
    const d = await r.json();
    return d.code === 0 ? d.tenant_access_token : null;
  }
  return null;
}

function feishuPost(url, token, body) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function feishuPut(url, token, body) {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function archetypeCn(code) {
  return { A:'清醒派', B:'感知派', C:'力场派', D:'流动派' }[code] || code;
}

function archetypeEn(code) {
  return { A:'THE SAGE', B:'THE LUMINARY', C:'THE ARCHITECT', D:'THE ALCHEMIST' }[code] || '';
}
