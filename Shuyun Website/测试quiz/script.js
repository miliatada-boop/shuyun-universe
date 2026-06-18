/* ─── ARCHETYPES ─── */
const archetypes = {
  advisor: {
    code: "HTA",
    name: "High-Trust Advisor",
    zh: "高信任顾问型",
    tagline: "你最强的资产是判断力，不是时间。",
    rarity: "在参与诊断的 Founder 中，高信任顾问型约占 22%，是最依赖判断力资产的商业原型。",
    summary: "你天然适合通过深度诊断、战略顾问和1:1陪跑来创造价值。你的商业不该靠量取胜，而是靠精准和稀缺性。",
    offer: "Founder诊断、战略顾问、1:1陪跑、私董会席位、高客单咨询包。",
    delivery: "深度访谈、诊断报告、月度顾问会、关键节点决策支持。",
    audience: "已有业务基础、问题复杂、愿意为判断力付费的Founder/IP。",
    peak: "当你深度介入一个关键决策，看到对方因为你的判断而豁然开朗——你感到精准和有力，而不是疲惫。",
    stress: "当你在碎片化答疑、对不适合的人反复解释，感觉自己的判断力在被廉价消耗——这是透支信号。",
    block: "你把太多精力耗在低价答疑、碎片化沟通和边界不清的服务上。",
    tired: "你累，不是因为不够专业，而是因为你把高价值判断拆成了太多低价值响应。",
    risks: [
      "边界不清，用服务量证明价值导致高认知低利润",
      "过度定制每个客户，无法沉淀可复用资产",
      "缺少筛选机制，低意愿客户消耗大量精力",
      "定价过低，客户不珍视你的判断力",
    ],
    build: "付费诊断入口 + 高客单顾问包 + 案例资产库 + 清晰服务边界",
    partner: "社群构建型（CB）是你最理想的搭档——你输出判断力，他们帮你建立高质量人群入口，让优质客户主动找到你。",
    firstStep: "找一个你能帮他做出关键决策的人，安排一次45分钟免费诊断，结束后只问自己：对方是否主动问「这个能继续深入吗」。",
    growth: [
      "发布高判断力商业拆解内容，建立认知权威",
      "设计付费诊断Session作为筛选入口",
      "把咨询过程沉淀成Decision Map方法论",
      "建立季度顾问/私董会型高客单产品",
      "用案例和转介绍驱动低成本增长",
    ],
    earlyGrowth: [
      "写出你能帮人做出的5类关键决策，确认你的判断力定位",
      "做一次免费诊断，记录对方愿意付费的真实信号",
      "用1-2个真实案例验证：有人愿意为你的判断力付钱",
      "设计第一个付费诊断Session（3小时，有明确产出）",
      "把第一个客户的结果写成可传播的决策案例",
    ],
    highTicketGrowth: [
      "把核心问题做成付费诊断入口，不直接卖顾问套餐",
      "诊断结束后自然引导进入3-6个月陪跑方案",
      "设计清晰的服务边界文件，让客户知道包括什么",
      "每季度发布一个方法论内容，建立定价锚点",
      "用前3个高客单案例建立转介绍飞轮",
    ],
    ctaText: "申请 Founder 商业结构诊断",
    ctaSubject: "High-Trust Advisor 诊断咨询申请",
  },

  community: {
    code: "CB",
    name: "Community Builder",
    zh: "社群构建型",
    tagline: "你最强的资产是人与人之间的连接，不是内容产出。",
    rarity: "在参与诊断的 Founder 中，社群构建型约占 19%，是最擅长创造关系型商业价值的原型。",
    summary: "你天然擅长把人聚起来、定义议题、建立有秩序的信任场。你的商业不是单次交付，而是一个持续运转的关系生态。",
    offer: "付费圈层、主题会员社群、共学营、行业私域网络、年度会员计划。",
    delivery: "社群节奏、固定栏目、成员匹配、主题讨论、线上/线下聚会。",
    audience: "需要同频人群、资源互相看见、持续输入与支持的专业人士。",
    peak: "当你看到你召集的人在没有你主持时依然深度对话——圈层开始自运转了，这是你最有力量的状态。",
    stress: "当你在独自维持一个沉默的社群，用情感能量换取活跃度，感觉像一个人在撑着整个空间——这是透支信号。",
    block: "你在「维持热闹」上耗能太多，却没有把社群价值真正产品化。",
    tired: "你累，是因为你在亲自托举所有连接，而不是让社群结构替你维持秩序。",
    risks: [
      "社群边界过宽，成员质量不稳定导致价值稀释",
      "内容和互动节奏完全依赖你个人状态",
      "缺少产品化的续费理由，复购靠感情不靠结构",
      "没有成员筛选机制，社群文化难以稳定",
    ],
    build: "入群门槛 + 成员分层机制 + 固定内容节奏 + 年度会员体系",
    partner: "系统设计型（SD）是你最理想的搭档——你聚人，他们把社群运营变成可复制的流程和工具，让圈层不依赖你的个人状态。",
    firstStep: "本周召集3-5个你认为最同频的人做一次非正式圆桌——不设主题，只观察：哪个话题让所有人停不下来，那就是你社群的核心议题。",
    growth: [
      "明确你最想聚集的人群类型和准入标准",
      "设计会员准入门槛和分层结构",
      "建立每周/每月固定社群仪式感",
      "让成员案例成为对外传播资产",
      "从社群延伸到顾问、活动和高阶圈层",
    ],
    earlyGrowth: [
      "明确你最想聚集的20类人，写出他们的身份和痛点",
      "用一次免费主题圆桌（5-10人）测试圈层吸引力",
      "建立第一个小群，设定2-3条准入门槛",
      "运营第一个月，记录哪些话题让成员最活跃",
      "设计第一个低价会员方案，测试续费意愿",
    ],
    ctaText: "申请社群产品化结构诊断",
    ctaSubject: "Community Builder 诊断咨询申请",
  },

  experience: {
    code: "EC",
    name: "Experience Creator",
    zh: "体验设计型",
    tagline: "你最强的资产是让人发生真实改变的能力。",
    rarity: "在参与诊断的 Founder 中，体验设计型约占 24%，是最擅长创造可感知转变的原型。",
    summary: "你天然擅长把抽象理念变成可感知的体验，让用户在短时间内发生状态、认知或行动上的真实转变。",
    offer: "沉浸式工作坊、训练营、体验课、主题Retreat、转化型营期。",
    delivery: "体验流程、现场引导、任务设计、即时反馈、阶段性成果展示。",
    audience: "知道自己需要改变，但缺少场域、节奏和外部推动力的人。",
    peak: "当你看到参与者在体验结束时的眼神变化——真实转变发生了，不只是知识传递——这是你最有力量的状态。",
    stress: "当你把同一个体验重新设计了第七遍，每次开营都像在从零创作，精彩但筋疲力尽——这是透支信号。",
    block: "你每次都重新设计体验，导致交付精彩但复用率低、利润率不够。",
    tired: "你累，是因为你把每次体验都当成新作品，而没有把它变成可复用的结构。",
    risks: [
      "过度依赖现场能量和个人状态，难以稳定交付",
      "前端筛选薄弱，错误的人进来破坏体验质量",
      "后端复购路径缺失，用户体验结束后流失",
      "体验产品标准化不足，无法扩大规模",
    ],
    build: "低门槛体验入口 + 模块化体验流程 + 后端复购路径",
    partner: "社群构建型（CB）是你最理想的搭档——你设计转变，他们帮你建立让体验持续传播的社群生态，让每次营期结束后参与者自发连接。",
    firstStep: "写出你最擅长帮人完成的一种具体转变，用一句话描述「参与前 vs 参与后的状态」——这就是你最核心的产品承诺，也是最强的传播素材。",
    growth: [
      "设计一个90分钟标准体验课作为入口",
      "把体验流程拆解成3-5个可复用模块",
      "收集并传播用户的真实转变故事",
      "升级为高价工作坊或多日沉浸营",
      "建立体验后的长期陪伴和升级路径",
    ],
    lightDeliveryGrowth: [
      "列出体验交付中最耗时的5个环节，按频率排序",
      "把高频前置问题做成录播或FAQ，减少重复沟通",
      "为每期体验写清楚「包括什么/不包括什么」的边界文件",
      "将体验拆成标准模块，让助手或合作者可以协助执行",
      "用录播或异步任务替代1v1答疑，让内容脱离个人状态",
    ],
    earlyGrowth: [
      "一句话说清楚：你的体验能帮人完成什么具体转变",
      "找5个真实用户做免费体验，只记录他们的真实反应",
      "收集3个「体验前后」的真实故事作为传播素材",
      "把体验流程写成3-5个固定环节，让它可以重复",
      "办第一期小型收费体验（3-8人），验证有人愿意付费",
    ],
    ctaText: "申请体验产品设计与复用诊断",
    ctaSubject: "Experience Creator 诊断咨询申请",
  },

  system: {
    code: "SD",
    name: "System Designer",
    zh: "系统设计型",
    tagline: "你最强的资产是把复杂能力变成可复制结构的能力。",
    rarity: "在参与诊断的 Founder 中，系统设计型约占 18%，是最稀缺的执行力驱动型原型。",
    summary: "你天然擅长把专业能力变成流程、工具、模板和可重复的系统。你真正的资产不是时间，而是可复制的结构。",
    offer: "模板库、工具包、Notion系统、自动化工作流、SaaS原型、Founder OS。",
    delivery: "产品化工具、系统搭建、流程交付、自动化配置、数据看板。",
    audience: "有明确问题、愿意自助执行、需要系统和流程提升效率的Founder/团队。",
    peak: "当你搭建的系统在你不在场时稳定运转，客户按流程自助解决了问题——你感到真正的杠杆感，这是你最有力量的状态。",
    stress: "当你花了几周搭了一个精美的系统，却完全没有人使用——建造欲盖过了市场信号，这是透支信号。",
    block: "你容易太早沉迷搭系统，忽略用户是否真的愿意为这个问题付费。",
    tired: "你累，是因为你还在人工解释系统价值，而不是让产品结构自己完成教育。",
    risks: [
      "产品过重、功能过多，销售太弱导致商业闭环不清",
      "太早投入系统建设，却还没验证市场需求",
      "系统漂亮但找不到对的客户，导致销售困难",
      "用工具思维服务需要人情温度的客户群体",
    ],
    build: "最小可售模板 + 系统搭建服务 + 订阅式产品路径",
    partner: "高信任顾问型（HTA）是你最理想的搭档——你建系统，他们帮你找到真正愿意为系统价值付高价的客户，让你的工具不缺高质量销售入口。",
    firstStep: "找一个你亲历过的重复低效问题，今天用一页纸写出解决它的流程，明天发给3个人让他们试用，只问一个问题：愿意为此付多少。",
    growth: [
      "选一个高频商业痛点，做最简单的一页模板",
      "免费发给10个潜在用户，只问一个问题：愿意为此付多少",
      "根据反馈迭代后设定低价试售",
      "围绕系统搭建提供配套服务，提升客单",
      "逐步发展为订阅型工具或Founder OS",
    ],
    earlyGrowth: [
      "找一个你亲历过的重复低效问题，记录成一套流程",
      "把这个流程做成最简单的一页模板，不需要任何工具",
      "免费发给10个人，收集他们愿意付多少的真实反馈",
      "用反馈迭代2-3次后以低价试售",
      "根据第一批用户的使用行为决定是否继续投入",
    ],
    highTicketGrowth: [
      "把核心能力做成付费诊断而非直接卖系统",
      "诊断后引导进入3-6个月系统搭建+陪跑套餐",
      "找到愿意为「确定性」付费而非自己摸索的客户",
      "用第一个成功案例做成方法论内容",
      "用案例和转介绍驱动高客单复购",
    ],
    ctaText: "申请 Founder OS 系统搭建诊断",
    ctaSubject: "System Designer 诊断咨询申请",
  },

  hybrid: {
    code: "HF",
    name: "Hybrid Founder",
    zh: "混合型 Founder",
    tagline: "你的优势在于整合，你的风险在于分散。",
    rarity: "在参与诊断的 Founder 中，混合型约占 17%，是商业整合能力最强、也最需要架构支撑的原型。",
    summary: "你在判断力、体验创造、关系构建和系统化之间都有天然适配度。这是优势，也是陷阱——没有清晰架构，你会被多线业务拖散。",
    offer: "Founder OS、分层产品矩阵、年度陪伴计划、社群+系统+顾问组合。",
    delivery: "诊断入口、系统工具、社群支持、高客单顾问、周期性复盘。",
    audience: "已有用户基础，需要从个人能力升级为商业系统的 Founder/IP。",
    peak: "当你的多条产品线开始互相引流，而不是互相竞争你的时间——系统在运转，而不是你在推动。",
    stress: "当你同时推进3条以上产品线，每条都有进展但没有一条真正跑起来，感觉越努力越分散——这是透支信号。",
    block: "你什么都能做，结果每条线都不够聚焦，增长靠个人硬撑。",
    tired: "你累，是因为你在经营一个未来很大的系统，却还没有给它搭出操作系统。",
    risks: [
      "产品线过散、承诺过多、交付链路过长",
      "每条线都在增长，但彼此没有连接和协同",
      "看似全面但缺少主承诺，用户不知道你是谁",
      "难以规模化，所有线路都依赖个人时间驱动",
    ],
    build: "一个主商业承诺 + 清晰产品阶梯 + 统一客户入口",
    partner: "系统设计型（SD）是你最理想的搭档——你有最完整的业务图景，他们帮你把多条线整合成可自动运转的系统，让整体大于各部分之和。",
    firstStep: "写下你现有的所有产品/服务线，圈出其中「最容易出单的一条」，接下来30天只做这一条——其他的暂停，不是放弃。",
    growth: [
      "确定一个主商业承诺，让所有产品都指向它",
      "把Offer拆成四层产品阶梯",
      "用诊断工具作为统一入口",
      "把客户数据沉淀到统一CRM",
      "让每条产品线都能引向下一个更高层级",
    ],
    earlyGrowth: [
      "先停下所有线路：写出现在最容易赚到第一笔钱的那一件事",
      "只做这一件事，验证有人愿意为它付费",
      "第一条线稳定出单之前，不新增任何产品线",
      "记录第一批客户：他们是谁、为什么来、结果如何",
      "等第一条线稳定（每月3-5单）再考虑第二条线",
    ],
    lightDeliveryGrowth: [
      "列出所有消耗你时间的交付环节，按频率排序",
      "把最高频问题做成自助答案库（文档/FAQ/录播）",
      "为每个产品写清楚「不包括什么」，设定明确服务边界",
      "1v1服务设定更高门槛，只有付费诊断才能进入",
      "用固定产品替代所有定制沟通，脱离个人状态依赖",
    ],
    ctaText: "申请 Founder OS 整体路径诊断",
    ctaSubject: "Hybrid Founder 诊断咨询申请",
  },
};

/* ─── SECONDARY BLENDS ─── */
const blends = {
  "advisor+community":    "你不只是单纯的判断力顾问——你天然懂得如何把高价值用户聚合在一起。你的顾问业务可以逐步演化出高质量圈层产品。",
  "advisor+experience":   "你的判断力背后有体验设计的直觉——你的咨询让客户在过程中发生真实的认知转变，而不只是获得建议。",
  "advisor+system":       "你是最擅长产品化自己方法论的顾问型 Founder——你天然想把诊断过程变成可复制的框架和工具。",
  "community+advisor":    "你不只是连接人，你还能做判断——你的社群价值在于你的眼光和筛选标准，而不只是热闹度。",
  "community+experience": "你擅长用体验制造圈层黏性——你的社群不是信息群，而是每次聚集都有真实状态转变的场域。",
  "community+system":     "你天然想把社群运营流程化——你会是最懂得用系统维持圈层秩序、而不依赖个人状态的社群创始人。",
  "experience+advisor":   "你的体验有深度诊断的维度——你不只是带人感受，你还能帮人看见他们自己看不见的盲区。",
  "experience+community": "你天然知道如何让体验产生社群效应——你的营期结束后，参与者会自发连接，而不是各自离开。",
  "experience+system":    "你有最强的模块化体验潜力——你不满足于每次从头设计，你想把精彩体验变成可复制的结构。",
  "system+advisor":       "你不只是做工具——你能为工具背后的判断逻辑定价。你的系统产品有机会演化出高客单的顾问层。",
  "system+community":     "你天然想把系统卖给一个圈层而不是单个用户——最适合你的商业模型是「系统 + 会员」的组合。",
  "system+experience":    "你做的系统不是冷冰冰的工具——你懂得让用户第一次接触就感受到价值，而不需要学习成本。",
};

/* ─── QUESTIONS ─── */
function q(text, a, b, c, d) {
  return { text, kind: "core", options: [
    [a, "advisor"], [b, "community"], [c, "experience"], [d, "system"],
  ]};
}
function p(text, key, opts) {
  return { text, kind: "profile", profileKey: key, options: opts.map((o, i) => [o, String(i)]) };
}

const coreQuestions = [
  q("有整天时间推进你的业务，你会先做什么？",
    "深度访谈一个潜在客户，搞清楚他真正的问题",
    "组织一次小型主题聚集，把同频的人连接在一起",
    "设计或优化一套体验课程的流程",
    "搭建一个可以重复使用的模板或工作流"),

  q("你最希望用户事后说的一句话是？",
    "「你一眼就看出了我最核心的问题」",
    "「在这里我找到了真正同频的人」",
    "「这次体验让我真的改变了」",
    "「这套系统彻底解放了我的时间」"),

  q("如果让你设计一个低门槛的引流产品，你会做？",
    "一次付费商业诊断（60分钟，针对核心问题）",
    "一场主题圆桌（10人左右，高质量人群）",
    "一次体验课（90分钟，让人感受到真实转变）",
    "一个免费模板包（可以直接拿来用的工具）"),

  q("让一个陌生人第一次感受到你的价值，你会怎么做？",
    "发布一篇精准拆解，让对方说「这就是我的问题」",
    "邀请他进入你的圈子，感受氛围和人群质量",
    "给他一次体验，让他亲自感受到状态的变化",
    "展示一套清晰框架，让对方看见你有完整方法论"),

  q("你最不愿意把时间花在哪件事上？",
    "对不适合的人反复解释基础概念",
    "在沉默的群里一个人独自维持氛围",
    "把精彩的体验压缩成枯燥的线上录播",
    "重复解释同一套流程，每次从零开始"),

  q("如果业务要规模化，你第一个想做的是？",
    "把判断框架产品化，变成可交付的诊断",
    "建立筛选机制，让高质量成员互相创造价值",
    "把体验流程模块化，可以反复开营",
    "把交付标准化成工具、模板和自动化流程"),

  q("有人重复问你同一个问题，你第一反应是？",
    "我需要更清晰地发布我的判断框架",
    "我应该建立一个让成员互相解答的机制",
    "我可以设计一次体验来彻底解决这个问题",
    "该把这个问题做成自助工具或FAQ了"),

  q("什么时刻让你最有成就感？",
    "帮一个人在关键决策时看清方向",
    "见证一群人在你的场域里建立深度连接",
    "看到参与者在体验结束时发生了真实转变",
    "看到一个系统在你不在场时稳定运转"),

  q("你最自然的内容表达方式是？",
    "拆解真实决策，输出清晰的判断框架",
    "提出值得深度讨论的议题，聚集同频的人",
    "记录真实的体验过程，让读者感受到状态变化",
    "输出可以直接使用的框架、清单或模板"),

  q("你对「理想商业资产」的定义是？",
    "累积的客户案例和决策方法论",
    "高质量的会员圈层和人际关系网络",
    "可反复开营的招牌体验产品",
    "持续销售的系统、工具或课程"),

  q("你最适合服务的用户是？",
    "已有一定基础、卡在关键决策节点的人",
    "需要进入高质量圈层、找到同频伙伴的人",
    "知道自己需要改变，但缺少场域和外部推动的人",
    "有具体问题、需要系统和工具提升效率的人"),

  q("如果你有一个助手，最先让他接手什么？",
    "诊断前的资料整理和客户背景调研",
    "社群成员的日常维护和活动组织",
    "体验课的物料准备和现场执行支持",
    "重复流程的标准化文档和工具搭建"),

  q("哪种交付节奏最适合你？",
    "少量客户，在关键节点深度介入",
    "持续运营一群筛选过的人",
    "集中式高强度交付，然后进入复盘沉淀",
    "前期搭建系统，后期低频维护迭代"),

  q("你对「高客单产品」的第一想象是？",
    "1对1深度诊断或战略顾问陪跑",
    "小人数高密度的私密圈层或年度会员",
    "沉浸式工作坊或多日深度训练营",
    "定制化系统搭建或长期技术支持合约"),

  q("你最怕自己的产品被人描述成什么？",
    "「这只是个咨询，谁都能提供这种建议」",
    "「这个社群没活跃度，进去没意思」",
    "「这次体验和普通课程没什么区别」",
    "「这套系统用起来太复杂，根本搞不懂」"),

  q("你心目中最理想的增长路径是？",
    "高判断力内容建立权威 → 付费诊断筛选 → 长期顾问",
    "议题内容吸引圈层 → 主题活动试水 → 付费会员社群",
    "体验类内容传播 → 收费体验课 → 高价工作坊或训练营",
    "痛点内容吸引流量 → 免费工具获客 → 付费系统/订阅"),

  q("如果只保留一种用户关系，你会保留？",
    "少数深度信任、长期合作的核心客户",
    "一个高质量、可自运转的会员圈层",
    "一批每年会回来参加营期的体验用户",
    "一批持续使用你工具和系统的订阅用户"),

  q("你对「起步变现」的理解是？",
    "找到第一个愿意为你的判断力付费的人",
    "聚集第一批高质量的人，建立第一个圈子",
    "做第一次收费体验，验证有人愿意为转变付费",
    "做第一个最小可售卖的工具或模板"),

  q("你觉得什么样的人最难成为你的好客户？",
    "不愿意深入思考、只想要快速答案的人",
    "不愿意真正融入圈子、只想旁观的人",
    "拒绝行动、只想停在脑子里转的人",
    "期望系统替他思考而不是辅助执行的人"),

  q("当你感觉「业务该升级了」，第一反应是什么？",
    "提高客单价，更精准地筛选高意愿客户",
    "提高圈层质量，让成员有更强的归属感",
    "设计更高阶的体验，让转变更彻底",
    "系统化交付，让更多人能复制这套方法"),
];

const profileQuestions = [
  p("你目前的商业阶段是？", "stage", [
    "刚起步，还在摸索商业模式和方向",
    "有方向，正在设计或验证第一个Offer",
    "已有收入，但交付越来越重",
    "收入稳定，想升级客单价或规模化",
  ]),
  p("你现在最主要的收入形式？", "revenue", [
    "还没有稳定商业收入",
    "咨询/顾问/1对1服务",
    "课程/工作坊/活动",
    "工具/模板/系统产品",
  ]),
  p("你每周能投入业务建设的时间大约是？", "time", [
    "10小时以内",
    "10-20小时",
    "20-30小时",
    "30小时以上",
  ]),
  p("你现在最迫切想解决的问题是？", "need", [
    "找到最适合自己的商业模式",
    "设计出第一个能卖出去的产品",
    "让交付变得更轻、更可复制",
    "把业务升级为可规模化的系统",
  ]),
  p("你希望这份诊断帮你做什么？", "goal", [
    "认清自己最适合哪条路",
    "设计高客单产品或服务",
    "减轻交付负担",
    "建立可自动化的商业入口",
  ]),
];

const CONTACT_EMAIL = "miliatada@gmail.com";

/* ─── ARCHETYPE COLORS ─── */
const archetypeColors = {
  advisor:   { primary: "#B8955A", dim: "rgba(184,149,90,.08)",  line: "rgba(184,149,90,.28)"  },
  community: { primary: "#5A9B7F", dim: "rgba(90,155,127,.08)",  line: "rgba(90,155,127,.28)"  },
  experience:{ primary: "#C47A5A", dim: "rgba(196,122,90,.08)",  line: "rgba(196,122,90,.28)"  },
  system:    { primary: "#5A82B8", dim: "rgba(90,130,184,.08)",  line: "rgba(90,130,184,.28)"  },
  hybrid:    { primary: "#8B6AB8", dim: "rgba(139,106,184,.08)", line: "rgba(139,106,184,.28)" },
};

/* ─── STATE ─── */
const allQuestions = [...coreQuestions, ...profileQuestions];
const answers = allQuestions.map(q => q.kind === "core" ? [] : null);
let cur = 0;

/* ─── DOM ─── */
const progFill = document.getElementById("prog-fill");
const qIdx     = document.getElementById("qIdx");
const qCat     = document.getElementById("qCat");
const qText    = document.getElementById("qText");
const qHint    = document.getElementById("qHint");
const optsEl   = document.getElementById("opts");
const btnBack  = document.getElementById("btnBack");
const btnNext  = document.getElementById("btnNext");

/* ─── HELPERS ─── */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function setProgress(n, total) {
  progFill.style.width = (n / total * 100) + "%";
}

/* ─── FLOW ─── */
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("prog").style.display = "block";
  cur = 0;
  renderQ();
  showScreen("s-question");
  setProgress(0, allQuestions.length);
});

function renderQ() {
  const q = allQuestions[cur];
  const isCore = q.kind === "core";
  const sel = answers[cur];

  document.getElementById("s-question").scrollTop = 0;

  if (isCore) {
    qIdx.textContent = String(cur + 1).padStart(2, "0") + " / " + coreQuestions.length;
    qCat.textContent = "行为诊断";
  } else {
    const profileIdx = cur - coreQuestions.length;
    qIdx.textContent = String(profileIdx + 1).padStart(2, "0") + " / " + profileQuestions.length;
    qCat.textContent = "背景校准";
  }
  qText.textContent = q.text;
  qHint.className   = isCore ? "q-hint" : "q-hint hidden";

  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const isSelected = isCore ? sel.includes(i) : sel === i;
    const isDimmed   = isCore && sel.length === 2 && !isSelected;
    const btn = document.createElement("button");
    btn.className = "opt" + (isSelected ? " sel" : "") + (isDimmed ? " dim" : "");
    btn.innerHTML = `<span class="opt-dot"></span><span class="opt-txt">${opt[0]}</span>`;
    btn.addEventListener("click", () => pick(i));
    optsEl.appendChild(btn);
  });

  btnBack.disabled = cur === 0;
  refreshNext();
}

function pick(i) {
  const q = allQuestions[cur];
  if (q.kind === "profile") {
    answers[cur] = i;
  } else {
    const sel = answers[cur];
    const idx = sel.indexOf(i);
    if (idx >= 0) {
      sel.splice(idx, 1);
    } else if (sel.length < 2) {
      sel.push(i);
    } else {
      sel.shift();
      sel.push(i);
    }
  }
  renderQ();
}

function refreshNext() {
  const q = allQuestions[cur];
  const hasAnswer = q.kind === "core" ? answers[cur].length > 0 : answers[cur] !== null;
  btnNext.classList.toggle("on", hasAnswer);
  const isLast = cur === allQuestions.length - 1;
  btnNext.textContent = isLast ? "查看报告 →" : "继续 →";
}

btnBack.addEventListener("click", () => {
  if (cur > 0) { cur--; renderQ(); setProgress(cur, allQuestions.length); }
});

function startCalcAnimation() {
  const msgs = [
    "分析你的行为偏好…",
    "识别你的商业原型…",
    "匹配你的增长路径…",
    "生成个性化报告…",
  ];
  let i = 0;
  const el = document.getElementById("calcMsg");
  return setInterval(() => {
    i = (i + 1) % msgs.length;
    el.style.opacity = "0";
    setTimeout(() => { el.textContent = msgs[i]; el.style.opacity = "1"; }, 260);
  }, 700);
}

btnNext.addEventListener("click", () => {
  const q = allQuestions[cur];
  const hasAnswer = q.kind === "core" ? answers[cur].length > 0 : answers[cur] !== null;
  if (!hasAnswer) return;
  if (cur < allQuestions.length - 1) {
    cur++;
    renderQ();
    setProgress(cur, allQuestions.length);
  } else {
    showScreen("s-calc");
    setProgress(allQuestions.length, allQuestions.length);
    const calcTimer = startCalcAnimation();
    setTimeout(() => { clearInterval(calcTimer); buildResults(); }, 2400);
  }
});

/* ─── SCORING ─── */
function getScores() {
  const scores = { advisor: 0, community: 0, experience: 0, system: 0 };
  coreQuestions.forEach((q, i) => {
    (answers[i] || []).forEach(idx => {
      const type = q.options[idx][1];
      if (scores[type] !== undefined) scores[type]++;
    });
  });
  return scores;
}

function getProfile() {
  const p = {};
  profileQuestions.forEach((q, i) => {
    const ansIdx = answers[coreQuestions.length + i];
    p[q.profileKey] = ansIdx !== null ? q.options[ansIdx][0] : "";
  });
  return p;
}

function getTopKey(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][1];
  const second = sorted[1][1];
  if (top > 4 && second / top >= 0.75) return "hybrid";
  return sorted[0][0];
}

/* ─── PERSONALIZED INTRO ─── */
function buildPersonalizedIntro(profile, meta) {
  const stageMap = [
    ["起步",    "你目前处于商业探索的早期阶段"],
    ["有方向",  "你已经有了方向，正在验证第一个 Offer"],
    ["已有收入","你的业务已经跑通，但交付越来越重"],
    ["收入稳定","你的业务已有稳定收入，正在寻找升级路径"],
  ];
  const needMap = [
    ["适合",  "最迫切的是找到最适合自己的商业模式"],
    ["设计",  "最想做的是设计出第一个能卖出去的产品"],
    ["交付",  "最想解决的是让交付变轻、可复制"],
    ["升级",  "正在寻找把业务升级为可规模化系统的路径"],
  ];

  let stageDesc = "你处于独立创业的关键阶段";
  for (const [k, v] of stageMap) {
    if (profile.stage && profile.stage.includes(k)) { stageDesc = v; break; }
  }
  let needDesc = "正在寻找更清晰的商业方向";
  for (const [k, v] of needMap) {
    if (profile.need && profile.need.includes(k)) { needDesc = v; break; }
  }

  return `${stageDesc}，${needDesc}。这份报告基于你的 20 道行为选择——你在真实场景下的第一反应，比你「认为自己是什么类型」更可信。你的行为模式指向一个清晰的商业原型：<strong>${meta.zh}</strong>。`;
}

/* ─── RESULTS ─── */
function buildResults() {
  const scores  = getScores();
  const profile = getProfile();
  const topKey  = getTopKey(scores);
  const meta    = archetypes[topKey];
  const sorted  = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const maxPts  = sorted[0][1];

  /* routing */
  const isEarly        = (profile.stage && profile.stage.includes("起步")) ||
                         (profile.revenue && profile.revenue.includes("还没有"));
  const needHighTicket = (topKey === "system" || topKey === "advisor") &&
                         profile.goal && (profile.goal.includes("高客单") || profile.goal.includes("升级"));
  const needLightDel   = (topKey === "hybrid" || topKey === "experience") &&
                         profile.need && profile.need.includes("交付");
  const isLowTime      = profile.time && profile.time.includes("10小时以内");

  let growthSteps = meta.growth;
  if      (isEarly        && meta.earlyGrowth)         growthSteps = meta.earlyGrowth;
  else if (needHighTicket && meta.highTicketGrowth)     growthSteps = meta.highTicketGrowth;
  else if (needLightDel   && meta.lightDeliveryGrowth) growthSteps = meta.lightDeliveryGrowth;

  /* secondary blend */
  const primaryScoreKey = sorted[0][0];
  const secondKey       = sorted[1][0];
  const secondScore     = sorted[1][1];
  const blendKey = topKey === "hybrid"
    ? `${primaryScoreKey}+${secondKey}`
    : `${topKey}+${secondKey}`;
  const blendText   = blends[blendKey] || "";
  const showSecondary = secondScore >= 3 && maxPts > 0 && (secondScore / maxPts) >= 0.4;
  const secondPct   = maxPts > 0 ? Math.round(secondScore / maxPts * 100) : 0;

  /* score bars: top 3 */
  const scoreBars = sorted.slice(0, 3).map(([key, score]) => {
    const pct   = maxPts > 0 ? (score / maxPts * 100).toFixed(0) : 0;
    const isTop = key === sorted[0][0];
    const color = isTop ? "#B8955A" : "rgba(232,226,216,.25)";
    return `<div class="score-row">
      <span class="score-lbl">${archetypes[key].zh}</span>
      <div class="score-track"><div class="score-bar" style="background:${color}" data-w="${pct}%"></div></div>
      <span class="score-val">${score}分</span>
    </div>`;
  }).join("");

  const ctaSubject = encodeURIComponent(meta.ctaSubject);
  const ctaBody = encodeURIComponent(
    `你好，我刚完成了「找到你真正适合的产品模式」诊断。\n\n类型：${meta.name}（${meta.zh}）\n阶段：${profile.stage}\n需求：${profile.need}\n\n想申请一次诊断。`
  );

  const profileTags = [profile.stage, profile.need, profile.goal]
    .filter(Boolean)
    .map(t => `<span class="r-tag">${t}</span>`)
    .join("");

  const color = archetypeColors[topKey] || archetypeColors.advisor;
  let sn = 1;
  const secHead = (label) => `<div class="sec-head">
    <span class="sec-n">${String(sn++).padStart(2,"0")}</span>
    <span class="sec-t">${label}</span><div class="sec-rule"></div>
  </div>`;

  document.getElementById("rWrap").innerHTML = `
    <div class="r-hero" style="--arch-color:${color.primary}">
      <div class="arch-code">${meta.code}</div>
      <div class="arch-zh">${meta.zh}</div>
      <div class="arch-en">${meta.name}</div>
      <div class="arch-tagline">${meta.tagline}</div>
      <div class="arch-tags">${profileTags}</div>
      <p class="arch-rarity">${meta.rarity}</p>
    </div>

    <p class="r-intro">${buildPersonalizedIntro(profile, meta)}</p>

    <div class="score-section">
      ${secHead("诊断全景")}
      <div class="score-grid">${scoreBars}</div>
    </div>

    <div class="firststep-box" style="border-color:${color.primary};background:${color.dim}">
      <div class="firststep-lbl" style="color:${color.primary}">本周第一步</div>
      <p class="firststep-txt">${meta.firstStep}</p>
      ${isLowTime ? `<p class="firststep-note">你每周可投入时间有限——这一步设计得足够轻，不需要大块时间，重要的是今天就开始。</p>` : ""}
    </div>

    <div class="r-sec">
      ${secHead("你的商业原型")}
      <p class="gap-desc">${meta.summary}</p>
    </div>

    <div class="r-sec">
      ${secHead("巅峰 vs 透支")}
      <div class="build-box">
        <div class="build-lbl">你最有力量的状态</div>
        <div class="build-txt">${meta.peak}</div>
        <div class="build-lbl" style="margin-top:18px;border-top:1px solid rgba(232,226,216,.08);padding-top:18px">透支的信号</div>
        <div class="build-txt" style="color:rgba(158,168,178,.7)">${meta.stress}</div>
      </div>
    </div>

    <div class="r-sec">
      ${secHead("最适合你的产品结构")}
      <div class="build-box">
        <div class="build-lbl">最适合卖什么</div>
        <div class="build-txt" style="margin-bottom:16px">${meta.offer}</div>
        <div class="build-lbl">推荐交付方式</div>
        <div class="build-txt" style="margin-bottom:16px">${meta.delivery}</div>
        <div class="build-lbl">最适合服务的用户</div>
        <div class="build-txt">${meta.audience}</div>
      </div>
    </div>

    <div class="r-sec">
      ${secHead("当前最大卡点")}
      <p class="gap-desc">${meta.block}</p>
      <div style="margin-top:20px">
        <div class="build-box">
          <div class="build-lbl">为什么越来越累</div>
          <div class="build-txt">${meta.tired}</div>
        </div>
      </div>
    </div>

    <div class="r-sec">
      ${secHead("当前风险")}
      <ul class="blist risk">${meta.risks.map(r => `<li>${r}</li>`).join("")}</ul>
    </div>

    <div class="r-sec">
      ${secHead("下一阶段应该建立什么")}
      <div class="build-box">
        <div class="build-lbl">核心系统</div>
        <div class="build-txt">${meta.build}</div>
      </div>
    </div>

    <div class="r-sec">
      ${secHead("推荐增长路径")}
      <ul class="blist steps">${growthSteps.map(s => `<li>${s}</li>`).join("")}</ul>
    </div>

    ${showSecondary && blendText ? `
    <div class="r-sec">
      ${secHead("你的第二特质")}
      <div class="build-box">
        <div class="build-lbl">${archetypes[secondKey].zh} 倾向（第二特质，${secondPct}%）</div>
        <div class="build-txt">${blendText}</div>
      </div>
    </div>` : ""}

    <div class="r-sec">
      ${secHead("你最需要的搭档")}
      <div class="build-box">
        <div class="build-txt">${meta.partner}</div>
      </div>
    </div>

    <div class="capture-box" style="border-color:${color.line};background:${color.dim}">
      <div class="capture-lbl" style="color:${color.primary}">把这份诊断存下来</div>
      <div class="capture-title">获取你的专属增长方案</div>
      <p class="capture-sub">输入邮箱，我会在 1–2 个工作日内回复你，附上针对<strong style="color:var(--chalk);font-weight:400">${meta.zh}</strong>的具体增长方案和下一步建议。</p>
      <div class="capture-form" id="captureForm">
        <input type="email" id="emailInput" placeholder="你的邮箱地址" autocomplete="email" />
        <button class="btn" id="submitEmailBtn" style="border-color:${color.line};color:var(--chalk)">发送 →</button>
      </div>
      <p class="capture-note" id="captureNote"></p>
    </div>

    <div class="cta-row">
      <a class="btn btn-primary" href="mailto:${CONTACT_EMAIL}?subject=${ctaSubject}&body=${ctaBody}" style="background:${color.primary};border-color:${color.primary}">${meta.ctaText} →</a>
      <button class="btn-subtle" id="shareBtn">复制结果摘要</button>
    </div>
    <button class="btn-text-link" id="restartBtn">重新诊断</button>

    <div class="next-step-box" style="border-color:${color.line}">
      <div class="next-step-label" style="color:${color.primary}">下一步</div>
      <div class="next-step-title">发现你的品牌视觉人格</div>
      <p class="next-step-desc">商业原型决定你卖什么、怎么卖。视觉人格决定你看起来像谁。<br>完成第二份测评，获得你的专属品牌视觉系统。</p>
      <a class="btn next-step-btn" href="./%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%A7%86%E8%A7%89%E8%AE%BE%E8%AE%A1%20v2.html?from=${topKey}&zh=${encodeURIComponent(meta.zh)}" style="border-color:${color.line}">开始视觉人格测评 →</a>
    </div>
  `;

  showScreen("s-result");
  document.getElementById("s-result").scrollTop = 0;

  setTimeout(() => {
    document.querySelectorAll(".score-bar").forEach(el => {
      el.style.width = el.dataset.w;
    });
  }, 200);

  document.getElementById("submitEmailBtn").addEventListener("click", () => {
    const email = document.getElementById("emailInput").value.trim();
    const note  = document.getElementById("captureNote");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.className   = "capture-note error";
      note.textContent = "请输入有效的邮箱地址";
      return;
    }
    document.getElementById("captureForm").style.display = "none";
    note.className   = "capture-note success";
    note.textContent = "已收到！我会在 1–2 个工作日内回复你。";

    const scoresStr = Object.entries(scores).map(([k, v]) => `${k}:${v}`).join(" | ");
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type:      "founder",
        email:     email,
        archetype: `${meta.name}（${meta.zh}）`,
        stage:     profile.stage   || "",
        revenue:   profile.revenue || "",
        goal:      profile.goal    || "",
        time:      profile.time    || "",
        need:      profile.need    || "",
        scores:    scoresStr,
      }),
    }).catch(() => {});
  });

  document.getElementById("shareBtn").addEventListener("click", () => {
    const text = `我的 Founder 商业原型：${meta.name}｜${meta.zh}\n\n${meta.summary}\n\n最适合卖：${meta.offer}\n\n「找到你真正适合的产品模式」`;
    const btn  = document.getElementById("shareBtn");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = "已复制 ✓";
        setTimeout(() => btn.textContent = "复制结果摘要", 2000);
      });
    } else {
      const ta = Object.assign(document.createElement("textarea"), { value: text });
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
      btn.textContent = "已复制 ✓";
      setTimeout(() => btn.textContent = "复制结果摘要", 2000);
    }
  });

  document.getElementById("restartBtn").addEventListener("click", () => {
    allQuestions.forEach((q, i) => { answers[i] = q.kind === "core" ? [] : null; });
    cur = 0;
    renderQ();
    showScreen("s-question");
    setProgress(0, allQuestions.length);
  });
}
