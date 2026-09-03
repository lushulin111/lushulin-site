// ============================================
// 个人简历网站 - 内容配置（所有文字都在这里改）
// ============================================

const SITE_CONFIG = {
  // 基本信息
  name: "陆姝霖",
  enName: "Lu Shulin",
  title: "知识产品架构师 · 转化链路设计者",
  subtitle: "五年知识付费课程交付，单场转化最高 <strong>18%</strong>（行业均值 <strong>5%</strong>）。<br>带过团队，把讲师能力拆成可复制的 SOP，跨行摄影从零跑通 IP 冷启动。<br>擅长把复杂产品，拆成零基础用户也能听懂的内容结构。",

  // 联系方式（请替换成你的真实信息）
  contacts: {
    email: "lushulin98@qq.com",
    location: "湖南 · 长沙"
  },

  // 核心数据（首屏展示用）
  heroStats: [
    { number: "253", suffix: "W", label: "单月业绩峰值" },
    { number: "18", suffix: "%", label: "单场最高转化率" },
    { number: "5", suffix: "年", label: "知识付费深耕" },
    { number: "5000", suffix: "+", label: "高净值付费学员" }
  ],

  // 核心能力标签（首页展示 · 方案C 杂志拉页 · 每行异构 widget）
  coreCapabilities: [
    { icon: "💎", title: "高客单价转化", en: "High-ticket Conversion", desc: "3000+ 课程产品转化，转化率 2-3 倍行业均值",
      widget: { type: "bars", label: "转化对比", mine: { v: 18, l: "我" }, ind: { v: 5, l: "行业" } } },
    { icon: "🔧", title: "冷启动 SOP 设计", en: "Cold-start SOP", desc: "18 场销转直播，平均转化 5%，验证可复制",
      widget: { type: "ticks", label: "销转直播场次", n: 18 } },
    { icon: "📐", title: "课程研发", en: "Course Design", desc: "独立设计 11 条摄影入门系列视频，矩阵账号数据第一",
      widget: { type: "list", label: "代表课程", items: ["摄影入门 · 零基础", "约拍实战 · 全链路", "审美进阶 · 镜头语言"] } },
    { icon: "🧬", title: "团队复制", en: "Team Scaling", desc: "从 3 人到 15 人，月营收 20W→150W",
      widget: { type: "ba", label: "规模与营收", cols: [{ k: "团队规模", from: "3 人", to: "15 人" }, { k: "月营收", from: "20W", to: "150W" }] } },
    { icon: "🎛️", title: "ROI 优化", en: "ROI Optimization", desc: "投放 ROI 从 1:1.8 提升至 1:3.5",
      widget: { type: "ratio", label: "投放回报比", from: "1 : 1.8", to: "1 : 3.5", pct: 64 } },
    { icon: "🤖", title: "AI 产品规划与落地", en: "AI Product Strategy & POC", desc: "独立完成 AI 知识库 + 智能体从 0 到 1 规划，含行业调研与成本测算，并落地 7 个可运行原型",
      widget: { type: "doctag", label: "交付物", t: "11 章 完整方案", n: "约万字 · 调研到退出策略", tag: "AI Strategy" } }
  ],

  // 核心能力板块首位独立方框：与其他讲师的不同
  capabilityDiff: {
    label: "我和其他讲师的不同：",
    text: "我下场做过内容。选题、文案、口播全流程自己出，运营协助分发，播得好不好、用户留不留得下来，数据会直接告诉我。<br><br>这种「自己干过」带来的用户体感，是只坐在直播间讲课的人很难有的。它让我做课程设计时，天然站在学员那边想问题——哪一步会卡住、什么说法能听懂，而不是凭经验拍脑袋。"
  },

  // 关于我（长文版，放工作经历下方）
  aboutLong: {
    subtitle: "把复杂的东西讲简单，让人听得懂、学得会。",
    photo: "个人照片/生活照1.webp",
    blocks: [
      { type: "p", html: "我做了<strong>5年</strong>知识付费的课程内容交付。" },
      { type: "p", html: "前两年做高客单价课程转化：单场最高<strong>18%</strong>（行业均值<strong>5%</strong>），单月业绩<strong>253W</strong>。之后带团队，<strong>3人扩到15人</strong>，月营收<strong>20W涨到150W</strong>——把讲师能力拆成可复制的SOP，新人上岗从<strong>15天压到9天</strong>。" },
      { type: "p", html: "最近一年跨行做摄影教育，从零切入。选题、文案、口播自己出，运营只管分发。单条视频播放 <strong>50W+</strong>，矩阵账号多期数据排名第 1，精准引流 <strong>500+</strong>。同期把 100 部电影镜头审美解析做成了体系，并据此规划了 <strong>AI 知识库 + 智能体</strong>的落地方案——<strong>11 章</strong>，含行业调研与成本测算；还独立完成了「<strong>摄影教育 AI 工具矩阵</strong>」——<strong>7 个可运行原型</strong>，覆盖获客到运营全链路（详见「AI 产品规划」板块）。从方案到落地，全程我一人完成。" },
      { type: "h3", html: "我擅长的三件事：" },
      { type: "ul", items: [
        "<strong>课程研发</strong>：从0到1设计课程框架，原创内容多次被竞对借鉴",
        "<strong>转化链路搭建</strong>：从流量到成交的全流程设计",
        "<strong>内容产能标准化</strong>：把个人能力变成团队可复制的方法论"
      ]},
      { type: "h3", html: "我在找的：" },
      { type: "p", html: "有清晰用户教育场景、明确课程产品线、愿意把方法论复制给团队的地方。课程研发、内容产品、讲师方向都开放聊聊；同时也希望回报与这份履历相匹配。" },
      { type: "h3", html: "我能帮你解决：" },
      { type: "ul", items: [
        "有一套内容或素材，但不知道怎么变成能卖的课程产品",
        "课程做出来了，转化率却卡住，用户听完不买单",
        "团队里好讲师的经验沉淀不下来，新人全靠带、效率上不去",
        "有大量现成内容资产，想用 AI 做成知识库或智能体，但不知道从哪下手"
      ]},
      { type: "p", html: "这四件事，我过去五年都实际做过。" }
    ]
  },

  // IP 作品展示（首页最下方）
  ipShowcase: {
    comparisonImage: "抖音视频数据/抖音视频数据对比.webp",
    videos: [
      {
        file: "抖音视频数据/美资视频截图.webp",
        title: "数据最高原创口播长视频截图示例",
        desc: "这条原创教学长视频播放 50W+、点赞 7000+，整个【摄影入门教学合集】为公司引流 500+ 精准用户",
        douyinLink: "https://v.douyin.com/ie30F36pVyo/"
      }
    ],
    // 数据对比说明（可选，配在图片下方）
    compareCaption: "抖音矩阵账号真实数据对比：我的原创内容收藏点赞比多数达到 90% 以上，明显高于账号均值，持续吸引精准用户"
  },

  // 课程设计展示
  courseShowcase: {
    parts: [
      {
        key: "startup",
        label: "创业类课程",
        active: true,
        video: "TK公开课视频/TK公开课切片.mp4",
        poster: "TK公开课视频/视频封面.webp",
        videoTitle: "TK公开课·三差模型直播切片",
        // 左侧文字（三差模型设计理念）
        blocks: [
          { type: "title", text: "三差模型 · 课程设计复盘" },
          { type: "subtitle", text: "模型结构" },
          { type: "list", items: [
            "信息差 → 用户不知道 TK 能赚钱，也不知道怎么做",
            "能力差 → 用户知道但不具备拍摄、剪辑、外语等执行能力",
            "资源差 → 用户没有货源、没有流量、没有官方背书"
          ]},
          { type: "line", text: "对应解决方案：行业趋势科普 → AI 工具替代 → 报白 + 供应链对接" },
          { type: "subtitle", text: "设计逻辑" },
          { type: "p", text: "模型的思路是「问题前置」。开课前 30 分钟，先用三个「差」让学员对上号，产生「老师说的就是我」的感觉，再一个一个给出对应的解决办法。这么做是为了先打消学员最大的担心——「老师到底能不能解决我的问题」，后面的内容才听得进去。" },
          { type: "subtitle", text: "适用场景" },
          { type: "p", text: "这套框架更适合低门槛、高焦虑感的赛道（如副业、赚钱、速成类内容），用户需要先被“说动”才会“听进去”。" },
          { type: "subtitle", text: "局限性" },
          { type: "p", text: "三差模型本质上是营销脚本结构，不是严格的教学设计结构。三个“差”之间的逻辑边界并不严密（例如信息差和能力差在实际场景中高度重叠），且“能力差”更多是被工具“绕过”而非真正“解决”。但它作为课前的信任建立和破冰工具，是高效的——前提是课程正课内容本身能接住前面建立的期待。" }
        ]
      },
      {
        key: "interest",
        label: "兴趣类课程",
        active: true,
        chain: [
          {
            title: "公域引流课程",
            img: "摄影公开课课程设计/口播视频录制.webp?v=3",
            desc: {
              title: "公域引流·摄影入门系列课程研发思路",
              points: [
                ["受众定位", "面向零基础摄影爱好者，聚焦日常拍摄刚需痛点"],
                ["内容设计", "简化专业理论，采用实操技巧+画面对比，学习门槛低"],
                ["流量适配", "内容适配短视频切片、直播宣讲，具备传播亮点"],
                ["转化设计", "课程预留内容缺口，温和铺垫长期系统课程，实现流量沉淀"]
              ]
            }
          },
          {
            title: "私域销转课程",
            img: "摄影公开课课程设计/1.webp",
            desc: {
              title: "私域销转｜摄影入门训练营研发思路",
              points: [
                ["课程定位", "面向零基础小白，以短周期训练营形式做私域精准锁客与筛选"],
                ["内容结构", "设置双节闭环，第一节纯实操干货，主打快速出效果、建立信任；第二节补全体系缺口、展示师资服务、输出学员成果"],
                ["销转逻辑", "先靠干货留存种草，再靠价值差、服务差、效果差完成温和转化，提升私域成交率"]
              ]
            }
          },
          {
            title: "VIP系列小课",
            img: "摄影公开课课程设计/VIP小课研发.webp",
            desc: {
              title: "VIP 附属｜约拍小灶提升课 研发思路",
              points: [
                ["课程定位", "面向想学接单、不会客户沟通的进阶学员，作为系统课 VIP 专属增值小课"],
                ["内容架构", "设置三节专项录播课，覆盖沟通、策划、客片维稳三大痛点"],
                ["配套权益", "附赠专属约拍工具包，实现话术、模板、流程直接落地"],
                ["课程价值", "补齐「会拍照不会接单」短板，强化 VIP 课程差异化与交付质感"]
              ]
            }
          }
        ]
      },
      {
        key: "compare",
        label: "课程设计对比",
        active: true,
        comparison: [
          { dim: "用户驱动", startup: "焦虑驱动，决策周期短，当场转化", interest: "兴趣驱动，决策周期长，需信任积累" },
          { dim: "核心顾虑", startup: "“你是不是骗我的？”", interest: "“我能不能学会？”" },
          { dim: "开场逻辑", startup: "问题前置：直接戳中“你为什么不赚钱”", interest: "认知冲突：先颠覆“你对这件事的理解是错的”" },
          { dim: "方法论性质", startup: "营销脚本结构，降低决策门槛", interest: "教学设计结构，搭建认知路径" },
          { dim: "内容走向", startup: "问题 → 解决方案 → 资源 → 逼单", interest: "认知 → 底层逻辑 → 系统方法 → 复盘" },
          { dim: "转化方式", startup: "外部稀缺感驱动：名额、时间、优惠", interest: "内部获得感驱动：认知收获、作业完成、持续期待" },
          { dim: "话术基调", startup: "紧迫感、制造焦虑", interest: "专业性、制造“啊哈时刻”" }
        ],
        summary: "不同赛道需要不同的设计逻辑。创业课解决的是“信不信”，摄影课解决的是“能不能”。话术只是表达形式，底层都是在制造认知冲突、建立信任、给出路径——但课程终点决定了框架的入口和方向不同。终点是“付款”还是“学会”，决定了整节课的走向。"
      },
    ]
  },

  // ============================================================
  // AI 工具矩阵（7 个 demo）—— 板块主内容（2026-08-24 升级）
  // 项目：摄影教育 AI 工具矩阵 · 独立产品设计 × 7 个可运行原型
  // 归属：产品设计 / 业务逻辑 / 原型架构由我主导，开发环节 AI 辅助
  // ============================================================
  aiMatrix: {
    hero: {
      kicker: "AI Product · Photography Education",
      title: "AI 产品项目",
      en: "7 demo product matrix for photography education",
      intro: "把摄影教育的 7 个业务痛点，做成 7 个能现场演示的 AI 工具——从 PRD 到原型，独立走完全流程。",
      metrics: [
        { num: "7", unit: "个", lab: "可运行原型" },
        { num: "6", unit: "个", lab: "业务环节" },
        { num: "1", unit: "份", lab: "完整 PRD" }
      ]
    },
    // 业务链路：6 环节 7 工具
    link: {
      title: "从获客到运营，每个环节都有一个 AI 工具解决痛点",
      desc: "按某摄影教育公司业务链路排，从获客到营销六个环节一个产品。",
      steps: [
        { stage: "获客", stageEn: "Acquisition", tools: ["机位分享"] },
        { stage: "售前", stageEn: "Conversion", tools: ["学习规划"] },
        { stage: "教学", stageEn: "Teaching", tools: ["拍摄脚本"] },
        { stage: "交付", stageEn: "Delivery", tools: ["作品点评", "课堂总结"] },
        { stage: "运营", stageEn: "Operation", tools: ["督学预警"] },
        { stage: "营销", stageEn: "Marketing", tools: ["海报生成"] }
      ]
    },
    // 7 个工具
    tools: [
      { key: "spot", num: "01", stage: "获客", stageEn: "Acquisition",
        name: "机位分享",
        oneLiner: "输入城市查看已收录机位+参考图，机位卡片附来源链接可核对。",
        pain: "攻略散落各平台，无积累、无信任背书",
        solution: "机位卡片化+每条附来源链接+AI 示意参考图（标注非实拍）",
        metrics: [
          { num: "3", unit: "个", lab: "当前收录机位" },
          { num: "可扩", unit: "", lab: "覆盖城市" }
        ],
        shotInput: "assets/poc/demo-spot-input.webp",
        shotOutput: "assets/poc/demo-spot-output.webp",
        demoLink: "assets/ai-demo/spot.html"
      },
      { key: "learning", num: "02", stage: "售前", stageEn: "Conversion",
        name: "学习规划生成器",
        oneLiner: "输入学员信息，3 分钟出三阶段个性化学习规划书。",
        pain: "销售靠口述课程体系，学员感知不到个性化",
        solution: "四维诊断（基础/兴趣/时间/设备）+ 8 板块规划书 + 购机引导",
        metrics: [
          { num: "8", unit: "块", lab: "规划书板块" },
          { num: "示意", unit: "", lab: "生成耗时" }
        ],
        shotInput: "assets/poc/demo-learning-input.webp",
        shotOutput: "assets/poc/demo-learning-output.webp",
        demoLink: "assets/ai-demo/learning.html"
      },
      { key: "script", num: "03", stage: "教学", stageEn: "Teaching",
        name: "拍摄脚本生成器",
        oneLiner: "输入风格词（日系/港风/夜景等 16 类），自动产出 8 大板块完整脚本。",
        pain: "手写一套脚本要半天，质量靠讲师个人发挥",
        solution: "16 风格库 + 8 板块模板 + 服装日常化约束 + 镜头表 + 器材分级",
        metrics: [
          { num: "16", unit: "类", lab: "内置风格" },
          { num: "示意", unit: "", lab: "半天→5 分钟" }
        ],
        shotInput: "assets/poc/demo-script-input.webp",
        shotOutput: "assets/poc/demo-script-output.webp",
        demoLink: "assets/ai-demo/script.html"
      },
      { key: "critic", num: "04", stage: "交付", stageEn: "Delivery",
        name: "AI 作品点评",
        oneLiner: "上传学员作品，6 维度结构化点评+改进参考图。",
        pain: "点评质量靠讲师个人，批量评作业效率低",
        solution: "6 维诊断（构图/光线/色彩/技术/创意/后期）+ 先肯定后建议 + 改进参考图",
        metrics: [
          { num: "6", unit: "维", lab: "点评维度" },
          { num: "2", unit: "档", lab: "快速/深度" }
        ],
        shotInput: "assets/poc/demo-critic-input.webp",
        shotOutput: "assets/poc/demo-critic-output.webp",
        demoLink: "assets/ai-demo/critic.html"
      },
      { key: "summary", num: "05", stage: "交付", stageEn: "Delivery",
        name: "课堂总结生成器",
        oneLiner: "导入老师逐字稿，自动出笔记+思维导图，发学员复习+售后留档。",
        pain: "班主任手写课堂笔记，费时且口径不一",
        solution: "大白话笔记+思维导图+双版本（学员/内部）+ 离线可演示",
        metrics: [
          { num: "示意", unit: "≥90%", lab: "笔记覆盖率" },
          { num: "1", unit: "分钟", lab: "单篇生成" }
        ],
        shotInput: "assets/poc/demo-summary-input.webp",
        shotOutput: "assets/poc/demo-summary-output.webp",
        demoLink: "assets/ai-demo/summary.html"
      },
      { key: "duoxue", num: "06", stage: "运营", stageEn: "Operation",
        name: "督学预警助手",
        oneLiner: "自动扫学员出勤/作业，按规则分级预警（黄/橙/红），一键生成关怀话术。",
        pain: "流失发现太晚，月底才看见",
        solution: "5 条预警规则+分级排序+AI 话术+触达闭环+误报申诉",
        metrics: [
          { num: "5", unit: "条", lab: "预警规则" },
          { num: "示意", unit: "≥30%", lab: "挽回率（钱袋子指标）" }
        ],
        shotInput: "assets/poc/demo-duoxue-input.webp",
        shotOutput: null,
        demoLink: "assets/ai-demo/duoxue.html"
      },
      { key: "poster", num: "07", stage: "营销", stageEn: "Marketing",
        name: "海报生成器",
        oneLiner: "锁品牌规范（字体/配色/LOGO），10 分钟出大促海报。",
        pain: "找设计排期等半天，品牌风格不统一",
        solution: "618/双十一/通用模板+品牌锁+AI 文案+一键导出",
        metrics: [
          { num: "示意", unit: "", lab: "1 天→10 分钟" },
          { num: "3", unit: "套", lab: "内置节点模板" }
        ],
        shotInput: "assets/poc/demo-poster-input.webp",
        shotOutput: "assets/poc/demo-poster-output.webp",
        demoLink: "assets/ai-demo/poster.html"
      }
    ],
    // 方法论 3 条
    methods: [
      { num: "M-01",
        title: "规则引擎 vs 大模型",
        en: "Rules over LLMs for the deterministic layer",
        desc: "预警/诊断/筛选用规则引擎（零幻觉、零成本、可解释），文案/内容生成才接大模型。规则定结构，LLM 填内容——演示版已验证此架构。"
      },
      { num: "M-02",
        title: "指标先行",
        en: "North star + per-stage metrics",
        desc: "每个工具都设计北极星+分环节指标，且必须三件套齐全：现状基线、目标值、验证方式。指标标「立项时摸底」的，立项第一周完成摸底回填。"
      },
      { num: "M-03",
        title: "合规红线",
        en: "Compliance by design",
        desc: "不承诺学习效果、收集学员信息加用途告知、权限隔离（班主任只看本班）、模型调用最小化数据。合规是设计阶段就要进的事，不是上线前补的。"
      }
    ],
    // 交付物
    outputs: [
      { kind: "PRD", title: "PRD 脱敏版", flag: "· 可在线查看", url: "assets/files/ai-toolbox-prd.html", desc: "含用户故事·功能·优先级·验收·指标·选型·合规" },
      { kind: "Demo", title: "7 个演示原型", url: "#", desc: "界面与交互示意（截图见上方各工具卡）· 内部演示版" },
      { kind: "Report", title: "8 页 POC 汇报（内部）", url: "#", desc: "面向管理层的可行性汇报（不公开）" }
    ],
    // 指标口径说明（工具卡 metrics 真数 vs 估算）
    note: "标注「示意」的为估算目标，其余为原型内置参数",
    // 归属与口径
    foot: "产品设计 / 业务逻辑 / 原型架构由我主导，开发环节 AI 辅助 · 演示数据为示意",
    // 电影审美方案（降级为一行引用）
    archive: {
      label: "延伸方案",
      title: "《100 部电影镜头审美解析》AI 化落地方案",
      en: "Personal knowledge asset AI-ification · 11 chapters · ~10k words",
      points: [
        "独立完成的方案（11 章 / 约万字），覆盖调研·测算·选型·退出策略",
        "面向「个人内容资产 → AI 知识库/智能体」场景的可复用方法论"
      ],
      note: "本项目（7 个 demo）展示公司业务侧产品落地能力；电影审美方案展示个人内容资产 AI 化能力——两者打通「手里有一堆内容资产 → 变成 AI 知识库或智能体」的完整链路。"
    }
  },

  // ============================================================
  // 已降级：原《电影审美手册》AI 化 6 步档案夹（aiProjects）—— 保留为 02 子块数据源
  // 上方 aiMatrix 已覆盖主体使用场景；保留数据作为延伸引用与历史查阅
  // ============================================================
  // 原 AI 产品规划（《电影审美手册》AI 化落地方案）—— 6 步框架档案夹
  aiProjects: [
    {n:"01", en:"Define", t:"先定义问题，不上来就写代码", tag:"假设没验证前不投钱做工程",
     shortT:"定义", shortEN:"DEFINE",
     metricA:{num:"2", unit:"件", lab:"这次要回答的问题", note:"知识库检索 + 智能体对标"},
     metricB:{num:"1", unit:"条红线", lab:"验证前不动工程开发", note:"先证伪、再投入"},
     input:"这个方案要回答两个问题：能不能把《100 部电影镜头审美解析》变成 AI 能检索、能对标的产物，以及值不值得做。",
     did:"我把问题拆成两件事：知识库要让讲师 5 秒搜到「对称构图的电影案例」；智能体要学员发张照片就能对标电影镜头、拿到具体改法。先定下第一道红线，假设没验证之前不投钱做工程开发。",
     output:"一份问题定义 + 一条工程开发的红灯规则，所有后续决策都有尺可量。",
     note:"「不投钱做工程开发。」假设没验证之前，这是底线。",
     foot:"这一步的产出决定后面所有动作的发力点：先证伪、再投入，避免一上来就堆人堆钱。"},
    {n:"02", en:"Differentiate", t:"调研竞品，定差异化", tag:"我们不打分，只对标",
     shortT:"调研", shortEN:"DIFFERENTIATE",
     metricA:{num:"2", unit:"家", lab:"关键竞品拆解", note:"Adobe Indigo / 豆包"},
     metricB:{num:"1", unit:"套", lab:"自己的审美基准", note:"100 部电影镜头本身"},
     input:"市场上已有方案的边界在哪里：Adobe Indigo 用统一标准打分、用户拍个剪影它说欠曝；豆包遇到创意照片却按普通街拍分析。",
     did:"我把两家拉出来对照，看他们错在哪、我们能补什么。结论很直接：我们不打分，只对标。审美基准用 100 部电影镜头本身，多元、能解释，不像「natural look」那种一刀切。",
     output:"一套差异化主张：不打分的对标、解释得通的审美基准，避开竞品都踩过的坑。",
     note:"「我们不打分，只对标。」审美基准用电影镜头本身，才能解释。",
     foot:"差异化不是把竞品的功能抄过来一遍，是找到他们做错的点我们能补的那一块。"},
    {n:"03", en:"Segments", t:"想清楚谁会用", tag:"群里发一条，5 分钟验证",
     shortT:"用户", shortEN:"SEGMENTS",
     metricA:{num:"4", unit:"类人", lab:"分层用户", note:"门槛完全不同"},
     metricB:{num:"5", unit:"分钟", lab:"最低成本验证", note:"群里发一条试水"},
     input:"这次的方案要覆盖四类完全不同的人：讲师、运营、中老年学员、路人。",
     did:"我给每类人画了门槛：讲师要快搜案例；运营要素材检索；中老年学员要零操作（大白话、大字体、一键发送）；路人要免费试用即转化。然后把验证成本压到极低，群里发一条消息，5 分钟就知道有没有人感兴趣。",
     output:"四类用户分层 + 验证清单，谁先做、做到什么程度，一目了然。",
     note:"「群里发一条消息，5 分钟就能验证有没有人感兴趣。」",
     foot:"用户分层不是 PPT 上的分类，是各自门槛、验证成本要拆开看，不混在一起评估。"},
    {n:"04", en:"Numbers", t:"算账，把风险摆上台面", tag:"成本可控 + 资产可复用",
     shortT:"算账", shortEN:"NUMBERS",
     metricA:{num:"3.8\u20137.8", unit:"万", lab:"第一年成本区间", note:"工具 / 内容 / 编程师 / 维护"},
     metricB:{num:"0.5\u20132", unit:"%", lab:"行业真实转化率", note:"重算回本要两年以上"},
     input:"钱、时间、风险，这些都得摆在台面上。",
     did:"我把四层成本（工具 / 内容 / 编程师 / 维护）拆开估，第一年大概 3.8 到 7.8 万；这里我刻意不用乐观假设。查行业从「刷到内容」到「主动传照片互动」的真实转化率也只 0.5% 到 2%，按这个数重算，回本要两年以上。所以汇报时我建议讲「成本可控 + 资产可复用」，别在没数据前许诺回本。",
     output:"一份不被乐观假设污染的成本测算 + 汇报口径，坏消息也写进去。",
     note:"「刻意不用乐观假设。」没数据前许诺回本，往往就是被劝退的开始。",
     foot:"好消息是失败有底线，智能体黄了，知识库还能用在备课、课程增值、客服、公众号，真正亏掉的最多一万三。"},
    {n:"05", en:"Phased", t:"分阶段走，每步能退", tag:"48 小时近乎零成本先验证",
     shortT:"分阶段", shortEN:"PHASED",
     metricA:{num:"48", unit:"小时", lab:"第一轮零成本验证", note:"检索 / Prompt / 兴趣 / 版权"},
     metricB:{num:"400", unit:"条", lab:"通过后再投入录入", note:"不过就停"},
     input:"在没验证之前就堆钱堆人，行业里这种故事太多，这是这一阶段要避开的坑。",
     did:"我设了一个近乎零成本的验证实验：检索准不准、Prompt 有用没、学员感不感兴趣、版权有没有雷，全测一遍，48 小时内能跑完。过了再投钱做 400 条录入和 MVP，不过就停。",
     output:"一份带「退出策略」的分阶段方案：每一步的投入额、可证伪指标、止损条件写齐。",
     note:"「每步能退。」没验证就堆资源的项目，几乎都没有好结局。",
     foot:"分阶段不是给老板看的台阶，是真的让自己有得退、走得稳。"},
    {n:"06", en:"Governance", t:"人和治理不能省", tag:"凑不齐完美人选也能推进",
     shortT:"治理", shortEN:"GOVERNANCE",
     metricA:{num:"3", unit:"类人", lab:"统筹角色要同时具备", note:"摄影 / AI 工具 / 业务理解"},
     metricB:{num:"3", unit:"档", lab:"人才降级方案", note:"理想 / 拆分 / 最小"},
     input:"这次项目要成，最难的不是技术，是人。统筹角色得同时懂摄影、会用 AI 工具、理解公司业务，这三类人市场上一时凑不齐。",
     did:"我没死磕完美人选，而是做了三档降级方案：理想档（一人三能）、拆分档（三人分工补齐）、最小档（先跑通一个最小闭环再说人才）。保证没有完美人选也能推进。",
     output:"一份现实可行的人才预案，把「找不到 A+ 就不做」挡在门外。",
     note:"「没完美人选也能推进。」这是这条线能从立项走到上线的真正关键。",
     foot:"这套框架不限于这一个项目：定义 / 调研 / 分层 / 算账 / 分步 / 治理，凡是「手里有一堆内容资产、想变成 AI 知识库或智能体」的场景，都能套。"}
  ],

  // 工作经历
  experiences: [
    {
      company: "某摄影教育机构",
      icon: "📷",
      role: "高级讲师",
      period: "2025.08 - 至今",
      location: "长沙",
      highlights: [
        "<strong>独立内容冷启动：</strong>自主完成选题、文案、口播全流程，单条视频最高播放 50W+，点赞 7000+",
        "<strong>系统性内容产出：</strong>独立设计11条原创摄影入门系列长视频，分发至矩阵账号后多期数据排名第1",
        "<strong>协作转化赋能：</strong>与运营团队协作完成剪辑与分发，系列视频为公司引流500+精准用户",
        "<strong>AI 化路径探索：</strong>独立产出《电影审美手册》并完成 AI 化路径规划，落地「摄影教育 AI 工具矩阵」（7 个可运行原型，覆盖获客到运营全链路，详见「AI 产品规划」板块）"
      ],
      coreSkill: "独立 IP 原创内容创作 + AI 化产品规划"
    },
    {
      company: "峰行跨境",
      icon: "🌐",
      role: "高级讲师",
      period: "2025.01 - 2025.08",
      location: "长沙",
      highlights: [
        "<strong>跨行业快速学习：</strong>从零切入跨境领域，短期内独立完成行业认知与内容体系搭建",
        "<strong>私域直播转化：</strong>从 0 搭建私域直播 SOP，首月 18 场销转直播，平均转化率 5%",
        "<strong>高客单产品设计：</strong>独立设计 3680 元课程产品，单月新增付费用户 200+"
      ],
      coreSkill: "跨行业快速学习"
    },
    {
      company: "电广境界",
      icon: "📺",
      role: "高级讲师",
      period: "2024.01 - 2024.12",
      location: "长沙",
      highlights: [
        "<strong>公开课转化：</strong>独立设计 3000 元公开课内容结构，单场最高转化率 10%（行业均值 4.2%）",
        "<strong>高净值用户筛选：</strong>筛选高净值用户（LTV≥3000 元），累计转化 5000+ 付费 VIP",
        "<strong>投放 ROI 优化：</strong>同步优化投放 ROI 从 1:1.8 提升至 1:3.5，单月业绩 253W"
      ],
      coreSkill: "高客单价产品转化链路优化"
    },
    {
      company: "聚料文化",
      icon: "🧱",
      role: "高级讲师 / 团队负责人",
      period: "2022.10 - 2023.12",
      location: "长沙",
      highlights: [
        "<strong>团队规模扩张：</strong>带团队从 3 人扩至 15 人，月营收从 20W 做到 150W",
        "<strong>讲师能力 SOP 化：</strong>把优秀讲师的能力拆成可复制的 SOP——新人上岗周期从 15 天压到 9 天",
        "<strong>课程转化：</strong>独立设计 990 元课程，单场转化率最高 18%（行业均值 5%）"
      ],
      coreSkill: "内容产能标准化 + 团队复制"
    },
    {
      company: "诺舟教育",
      icon: "🚣",
      role: "高级讲师",
      period: "2021.05 - 2022.08",
      location: "长沙",
      highlights: [
        "<strong>转化链路标准化：</strong>建立流量分级 - 话术库 - 逼单节点全流程体系，转化率稳定在 4%-8%",
        "<strong>课程 GMV：</strong>独立设计 3000 元课程，单月 GMV 120W"
      ],
      coreSkill: "转化全链路标准化"
    }
  ],

};
