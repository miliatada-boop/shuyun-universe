// Credentials stored in Cloudflare environment variables for security
const LARK_APP_ID     = env?.LARK_APP_ID || "";
const LARK_APP_SECRET = env?.LARK_APP_SECRET || "";
const BITABLE_APP     = env?.BITABLE_APP || "";

// 品牌问卷表
const BRAND_TABLE     = "tblHILxVCBfLmWbM";
// 创始人诊断表
const FOUNDER_TABLE   = "tblAOMkaZ1SC0qii";
// 品牌视觉档案 v3
const VISUAL_V3_TABLE = "tblFwKsxOVWJTTuR";

async function getTenantToken() {
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: LARK_APP_ID, app_secret: LARK_APP_SECRET }),
  });
  const j = await res.json();
  return j.tenant_access_token;
}

async function writeRecord(token, tableId, fields) {
  const res = await fetch(
    `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP}/tables/${tableId}/records`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    }
  );
  return res.json();
}

export async function onRequestPost(context) {
  const cors = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
  try {
    const data = await context.request.json();
    const token = await getTenantToken();

    let body;

    if (data.type === "founder") {
      // 创始人诊断：来自测试quiz
      body = await writeRecord(token, FOUNDER_TABLE, {
        "邮箱":     data.email      || "",
        "商业原型": data.archetype  || "",
        "当前阶段": data.stage      || "",
        "收入状态": data.revenue    || "",
        "核心目标": data.goal       || "",
        "时间投入": data.time       || "",
        "核心需求": data.need       || "",
        "得分详情": data.scores     || "",
      });
    } else if (data.type === "visual_v3") {
      // 品牌视觉档案 v3
      body = await writeRecord(token, VISUAL_V3_TABLE, {
        "品牌名":   data.name      || "",
        "邮箱":     data.email     || "",
        "视觉原型": data.archetype || "",
        "完整档案": data.doc       || "",
      });
    } else {
      // 品牌问卷：来自 brand-questionnaire
      body = await writeRecord(token, BRAND_TABLE, {
        "姓名品牌名":     data.name        || "",
        "业务描述":       data.business    || "",
        "目标客户":       data.audience    || "",
        "品牌感受":       data.feeling     || "",
        "品牌人格":       data.personality || "",
        "关键词":         data.keywords    || "",
        "色彩方向":       data.colorDir    || "",
        "MJ摄影Prompt":  data.prompt_photo || "",
        "MJ Logo Prompt": data.prompt_logo  || "",
        "文案语气Prompt": data.prompt_voice || "",
      });
    }

    return new Response(JSON.stringify({ ok: body.code === 0, feishu: body }), { headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500, headers: cors });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
