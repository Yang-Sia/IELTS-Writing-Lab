const storageKey = "ielts-writing-lab-v4";

const task1Modules = [
  {
    title: "Line Graph 折线图",
    detail: "训练趋势：rise, fall, fluctuate, remain stable, reach a peak。"
  },
  {
    title: "Bar Chart 柱状图",
    detail: "训练比较：最高/最低、组间差异、明显变化。"
  },
  {
    title: "Table 表格",
    detail: "训练筛选：不要全写数字，先找最大值、最小值和异常值。"
  },
  {
    title: "Pie Chart 饼图",
    detail: "训练比例：account for, make up, represent, respectively。"
  },
  {
    title: "Map 地图",
    detail: "训练方位和变化：be replaced by, be converted into, be expanded。"
  },
  {
    title: "Process 流程图",
    detail: "训练顺序和被动语态：first, then, subsequently, be transported。"
  }
];

const bookMethodModules = [
  {
    title: "1. 先读评分标准",
    badge: "TR / CC / LR / GRA",
    points: ["Task Response: 是否真正回答题目", "Coherence and Cohesion: 段落是否连贯", "Lexical / Grammar: 表达是否准确稳定"],
    practice: "练习方式：每次写完先检查有没有跑题、段落是否清楚，再看词汇语法。"
  },
  {
    title: "2. Task 2 ABC审题法",
    badge: "ABC审题法",
    points: ["先判断题型", "圈出关键词和限定范围", "确定立场和两个主体段方向"],
    practice: "练习方式：看到题目先写中文审题卡，再进入英文输出。"
  },
  {
    title: "3. 大作文题型分类",
    badge: "优缺点 / 观点 / 论述 / 报告 / 混合",
    points: ["优缺点类: 比较利弊", "观点类: 明确立场", "报告类: 原因和解决办法", "混合类: 分清两个任务"],
    practice: "练习方式：先识别题型，再决定开头和两个主体段怎么写。"
  },
  {
    title: "4. 主体段结构训练",
    badge: "开头 / 主体 / 连接 / 结尾",
    points: ["一个主体段只服务一个 main idea", "用原因、影响、例子展开", "段末回扣题目"],
    practice: "练习方式：先练主体段，再练整篇，不急着套模板。"
  },
  {
    title: "5. 语言准确度和翻译",
    badge: "换词 / 减少中式英文 / 句型变化",
    points: ["先保证主谓宾清楚", "再处理被动、从句、there be、it 形式主语", "最后做自然换词"],
    practice: "练习方式：用 100句翻译训练准确表达，而不是只背高级词。"
  },
  {
    title: "6. Task 1 图表作文",
    badge: "动态图 / 静态图 / 流程图 / 地图",
    points: ["动态图抓趋势", "静态图抓比较", "流程图和地图抓顺序与变化"],
    practice: "练习方式：先写 overview，再写细节。"
  },
  {
    title: "7. 常见错误清单",
    badge: "冠词 / 单复数 / 谓语 / 词性 / 句子结构",
    points: ["优先消灭高频语法错误", "检查连接词是否自然", "避免句子结构混乱"],
    practice: "练习方式：每次保存练习时写一条错误记录。"
  }
];

const academicSourceLessons = [
  {
    title: "IELTS 官方 Academic Test Format",
    label: "官方规则",
    url: "https://ielts.org/take-a-test/test-types/ielts-academic-test",
    why: "用它校准考试格式，避免课程跑偏。",
    absorb: "网站所有训练只围绕 Academic Writing：Task 1 图表描述和 Task 2 议论文。"
  },
  {
    title: "IELTS 官方 Scoring in Detail",
    label: "分数意识",
    url: "https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail",
    why: "用它理解 7 分以上不是背高级词，而是能处理复杂语言和详细推理。",
    absorb: "加入 7.5+ 能力地图：清楚立场、充分展开、准确表达、稳定复杂句。"
  },
  {
    title: "IELTS 官方 Writing Resources",
    label: "四项评分",
    url: "https://ielts.org/take-a-test/preparation-resources/writing-test-resources",
    why: "官方明确写作按 TR / CC / LR / GRA 四项评分。",
    absorb: "每次作文复盘都按四项评分标准分类问题，而不是只改语法。"
  },
  {
    title: "IELTS 官方 Academic Sample Questions",
    label: "安全题源",
    url: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test",
    why: "官方样题最适合做题型和难度基准。",
    absorb: "题库要标记来源：官方样题、剑桥真题、课堂练习题，避免混在一起。"
  },
  {
    title: "British Council Writing Practice",
    label: "练习入口",
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing",
    why: "它把练习和考试类型入口分清楚。",
    absorb: "网站明确只保留 Academic 写作路线，Task 1/Task 2 入口要清晰。"
  },
  {
    title: "British Council Academic Writing Tests",
    label: "限时训练",
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic",
    why: "适合学习真实考试练习的呈现方式。",
    absorb: "后续加入限时模式：Task 1 20 分钟、Task 2 40 分钟、最后 5 分钟检查。"
  },
  {
    title: "IELTS Advantage Task 2",
    label: "流程训练",
    url: "https://www.ieltsadvantage.com/writing-task-2/",
    why: "它把 Task 2 拆成审题、计划、开头、主体段、结尾。",
    absorb: "网站训练路径固定为：审题 -> 提纲 -> 主体段 -> 整篇 -> 反馈。"
  },
  {
    title: "IELTS Liz Task 2",
    label: "自学结构",
    url: "https://ieltsliz.com/ielts-writing-task-2/",
    why: "它把信息、题目、技巧、范文和练习课放在同一页。",
    absorb: "我们的模块也按信息区、技巧区、范文拆解、互动练习、复盘记录来组织。"
  },
  {
    title: "IELTS Buddy Task 2",
    label: "诊断式课程",
    url: "https://www.ieltsbuddy.com/ielts-writing-task-2.html",
    why: "它强调先找到弱点，再按弱点训练。",
    absorb: "左侧课程目录继续按弱点拆：审题弱、观点弱、段落弱、衔接弱、语言弱。"
  },
  {
    title: "IELTS Mentor Sample Answers",
    label: "题库索引",
    url: "https://www.ielts-mentor.com/writing-sample/writing-task-2",
    why: "它的优势是题量大、题目索引清楚。",
    absorb: "以后题库用题号、话题、题型、难点、范文拆解来管理，不直接堆范文。"
  }
];

const absorbedTrainingLoop = [
  {
    step: "01 官方边界",
    source: "IELTS / British Council",
    action: "只练 Academic Writing：Task 1 图表 + Task 2 议论文，不包含非 Academic Task 1。",
    siteUse: "Academic 标准页和 Task 1 / Task 2 入口"
  },
  {
    step: "02 审题拆任务",
    source: "IELTS Advantage",
    action: "先判断题型、关键词、限定词和任务数量，再决定立场。",
    siteUse: "第二阶段：审题方法 + 题目例子卡"
  },
  {
    step: "03 先计划再写",
    source: "IELTS Advantage / British Council",
    action: "Task 2 先用 5-10 分钟列提纲，再写两个主体段。",
    siteUse: "题目展开区：建议主体段"
  },
  {
    step: "04 按弱点训练",
    source: "IELTS Buddy",
    action: "把问题分成审题弱、观点弱、段落弱、衔接弱、语言弱。",
    siteUse: "左侧三阶段课程目录"
  },
  {
    step: "05 题库要可索引",
    source: "IELTS Mentor / IELTS Liz",
    action: "题目按主题、分支、题型、来源和难点管理，不只堆题目。",
    siteUse: "03 主题词汇：近年题型方向与题目例子"
  },
  {
    step: "06 写后复盘",
    source: "IELTS 官方评分标准",
    action: "每篇作文按 TR / CC / LR / GRA 四项复盘，而不是只改语法。",
    siteUse: "第三阶段：批改复盘 + 练习记录"
  }
];

const grammarWritingPoints = [
  {
    id: "svo",
    name: "主谓宾结构",
    purpose: "让 Task 2 句子先有清楚的动作关系：谁做什么，什么影响什么。基础弱的学生先把主谓宾写稳，再谈复杂句。",
    example: "Governments should provide affordable public transport.",
    error: "缺谓语，或一个句子里堆多个动词：Government should affordable public transport.",
    exercises: [
      { title: "识别练习", task: "标出例句中的主语、谓语和宾语：Schools should teach practical skills." },
      { title: "造句练习", task: "用 education / government / technology 各写 1 个 SVO 观点句。" },
      { title: "改错/升级练习", task: "修改：Many students lack of confidence when write essays." }
    ]
  },
  {
    id: "there-be",
    name: "There be 句型",
    purpose: "用来引出现象、问题、原因或趋势，适合开头背景句和原因段第一句。",
    example: "There are several reasons why traffic congestion is getting worse.",
    error: "There has many people... / There are many students feel stressed.",
    exercises: [
      { title: "识别练习", task: "判断句子中的 there be 在引出现象还是原因：There is a growing demand for online education." },
      { title: "造句练习", task: "用 environment / health / cities 各写 1 个 there be 现象句。" },
      { title: "改错/升级练习", task: "修改：There have many reasons cause unemployment." }
    ]
  },
  {
    id: "it-structure",
    name: "It is + adj. + to do / that",
    purpose: "用来写评价、立场和重要性，比中文直译更像议论文表达。",
    example: "It is important to protect children from harmful online content.",
    error: "It is benefit to... / It is important students learn...",
    exercises: [
      { title: "识别练习", task: "判断例句中 it 是形式主语还是普通代词：It is difficult for governments to control online misinformation." },
      { title: "造句练习", task: "用 necessary / unfair / difficult 各写 1 个 Task 2 观点句。" },
      { title: "改错/升级练习", task: "修改：It is benefit for students to study abroad." }
    ]
  },
  {
    id: "tense",
    name: "基础时态",
    purpose: "区分现在事实、过去到现在的变化、未来可能影响，让论证时间线更清楚。",
    example: "Online learning has become more common in recent years.",
    error: "同一段里时态乱跳：Technology changed life and improves education and will created jobs.",
    exercises: [
      { title: "识别练习", task: "判断句子为什么用现在完成时：Remote work has changed the way people communicate." },
      { title: "造句练习", task: "围绕 technology 写 1 个现在事实句、1 个过去到现在变化句、1 个未来影响句。" },
      { title: "改错/升级练习", task: "修改：In recent years, online courses become more popular and changed education." }
    ]
  },
  {
    id: "plural-nouns",
    name: "名词单复数",
    purpose: "减少低级语法错误，尤其是 students, governments, skills, resources 这些高频可数名词。",
    example: "Students need opportunities to develop practical skills.",
    error: "student need many opportunity / government should provide resource",
    exercises: [
      { title: "识别练习", task: "圈出例句中的可数名词复数：Schools should offer students more opportunities." },
      { title: "造句练习", task: "用 skills / resources / problems 各写 1 个观点句。" },
      { title: "改错/升级练习", task: "修改：Child need many skill to solve problem in future." }
    ]
  },
  {
    id: "articles",
    name: "冠词",
    purpose: "让名词短语更准确：泛指用 a/an，特指用 the，抽象概念很多时候不用冠词。",
    example: "A balanced curriculum can prepare students for the workplace.",
    error: "the education is important / a public transport can reduce pollution",
    exercises: [
      { title: "识别练习", task: "解释例句中 A balanced curriculum 和 the workplace 为什么用不同冠词。" },
      { title: "造句练习", task: "用 a policy / the government / education 各写 1 句。" },
      { title: "改错/升级练习", task: "修改：The technology is useful in the modern society." }
    ]
  },
  {
    id: "adj-adv",
    name: "形容词和副词",
    purpose: "形容词修饰名词，副词修饰动词/形容词/整句，用来提高表达精确度。",
    example: "Strict regulations can significantly reduce pollution.",
    error: "significant reduce / government should strict control pollution",
    exercises: [
      { title: "识别练习", task: "标出例句中的形容词和副词，并说明各自修饰什么。" },
      { title: "造句练习", task: "用 effective / significantly / increasingly 各写 1 个 Task 2 句子。" },
      { title: "改错/升级练习", task: "修改：Online learning is convenience and can easy help students." }
    ]
  },
  {
    id: "comparatives",
    name: "比较级和最高级",
    purpose: "服务对比论证：比较效率、公平、成本、长期影响，而不是只写 more good。",
    example: "Public transport is more affordable than private cars.",
    error: "more better / more cheaper / the most effective way than",
    exercises: [
      { title: "识别练习", task: "找出例句比较的两个对象和比较标准。" },
      { title: "造句练习", task: "用 more efficient than / less harmful than / the most effective way 各写 1 句。" },
      { title: "改错/升级练习", task: "修改：Online classes are more better than traditional classes." }
    ]
  },
  {
    id: "passive",
    name: "被动语态",
    purpose: "写政策、法律、公共服务和社会措施时，突出动作本身而不是动作执行者。",
    example: "More public money should be allocated to healthcare.",
    error: "be allocate / should be spend / policies should introduced",
    exercises: [
      { title: "识别练习", task: "标出例句中的被动结构，并说明为什么这里适合用被动。" },
      { title: "造句练习", task: "用 should be provided / can be reduced / must be protected 各写 1 句。" },
      { title: "改错/升级练习", task: "修改：More money should spend on public transport." }
    ]
  },
  {
    id: "noun-clauses",
    name: "名词性从句",
    purpose: "把一个完整想法变成主语、宾语或表语，适合写更学术的观点句。",
    example: "What matters most is whether students can apply knowledge in real life.",
    error: "that 乱用导致句子断裂：That students learn skills is important is true.",
    exercises: [
      { title: "识别练习", task: "找出例句中的 What 从句和 whether 从句分别充当什么成分。" },
      { title: "造句练习", task: "用 what / whether / that 各写 1 个观点句。" },
      { title: "改错/升级练习", task: "修改：Whether children use phones too much it is a serious problem." }
    ]
  },
  {
    id: "relative-clauses",
    name: "定语从句",
    purpose: "补充说明人、事物或政策，让句子信息更具体，但不要无限加长。",
    example: "Students who lack digital access may fall behind.",
    error: "从句缺主语或重复代词：Students who they lack access may fall behind.",
    exercises: [
      { title: "识别练习", task: "找出例句中的先行词和定语从句。" },
      { title: "造句练习", task: "用 who / which / that 各写 1 个 Task 2 句子。" },
      { title: "改错/升级练习", task: "修改：People who they live in cities face more pressure." }
    ]
  },
  {
    id: "adverbial-clauses",
    name: "状语从句",
    purpose: "写因果、让步、条件和时间关系，是主体段展开逻辑的核心工具。",
    example: "Although technology improves efficiency, it may reduce face-to-face communication.",
    error: "because 和 so 同时出现：Because public transport is cheap, so people use it.",
    exercises: [
      { title: "识别练习", task: "判断例句是让步、原因还是条件关系。" },
      { title: "造句练习", task: "用 although / because / if 各写 1 个 Task 2 句子。" },
      { title: "改错/升级练习", task: "修改：Although online learning is useful, but it has limitations." }
    ]
  },
  {
    id: "non-finite",
    name: "非谓语基础",
    purpose: "压缩句子、连接信息，但前提是主语关系清楚，不能为了高级而乱用。",
    example: "Living in large cities, many people rely heavily on public transport.",
    error: "非谓语主语不一致：Living in large cities, traffic is a serious problem.",
    exercises: [
      { title: "识别练习", task: "判断例句中 Living in large cities 的逻辑主语是谁。" },
      { title: "造句练习", task: "用 living / facing / having 各写 1 个句子，主题可选城市、工作、教育。" },
      { title: "改错/升级练习", task: "修改：Using public transport, pollution can be reduced." }
    ]
  }
];

const grammarPracticeBank = {
  svo: {
    identifyPrompt: "Schools should teach practical skills.",
    identify: [
      { label: "主语", answer: "Schools" },
      { label: "谓语", answer: "should teach" },
      { label: "宾语", answer: "practical skills" }
    ],
    orderPrompt: "点击词块，排序成一个正确的 SVO 句子。",
    chunks: ["should", "Governments", "provide", "affordable", "public transport"],
    orderAnswer: ["Governments", "should", "provide", "affordable", "public transport"],
    correctionPrompt: "Government should affordable public transport.",
    correctionAnswer: "Governments should provide affordable public transport."
  },
  "there-be": {
    identifyPrompt: "There is a growing demand for online education.",
    identify: [
      { label: "There be 结构", answer: "There is" },
      { label: "被引出的现象", answer: "a growing demand" },
      { label: "主题范围", answer: "online education" }
    ],
    orderPrompt: "点击词块，排序成一个 there be 现象句。",
    chunks: ["several", "There", "reasons", "are", "for unemployment"],
    orderAnswer: ["There", "are", "several", "reasons", "for unemployment"],
    correctionPrompt: "There have many reasons cause unemployment.",
    correctionAnswer: "There are many reasons for unemployment."
  },
  "it-structure": {
    identifyPrompt: "It is difficult for governments to control online misinformation.",
    identify: [
      { label: "形式主语", answer: "It" },
      { label: "评价形容词", answer: "difficult" },
      { label: "真正动作", answer: "to control online misinformation" }
    ],
    orderPrompt: "点击词块，排序成 It is + adj. + to do 句子。",
    chunks: ["important", "is", "to protect", "It", "children"],
    orderAnswer: ["It", "is", "important", "to protect", "children"],
    correctionPrompt: "It is benefit for students to study abroad.",
    correctionAnswer: "It is beneficial for students to study abroad."
  },
  tense: {
    identifyPrompt: "Remote work has changed the way people communicate.",
    identify: [
      { label: "时态结构", answer: "has changed" },
      { label: "主语", answer: "Remote work" },
      { label: "影响对象", answer: "the way people communicate" }
    ],
    orderPrompt: "点击词块，排序成现在完成时句子。",
    chunks: ["has", "more common", "Online learning", "become", "recently"],
    orderAnswer: ["Online learning", "has", "become", "more common", "recently"],
    correctionPrompt: "In recent years, online courses become more popular.",
    correctionAnswer: "In recent years, online courses have become more popular."
  },
  "plural-nouns": {
    identifyPrompt: "Schools should offer students more opportunities.",
    identify: [
      { label: "复数名词 1", answer: "Schools" },
      { label: "复数名词 2", answer: "students" },
      { label: "复数名词 3", answer: "opportunities" }
    ],
    orderPrompt: "点击词块，排序成单复数正确的句子。",
    chunks: ["need", "Students", "practical", "skills"],
    orderAnswer: ["Students", "need", "practical", "skills"],
    correctionPrompt: "Child need many skill to solve problem.",
    correctionAnswer: "Children need many skills to solve problems."
  },
  articles: {
    identifyPrompt: "A balanced curriculum can prepare students for the workplace.",
    identify: [
      { label: "泛指冠词", answer: "A" },
      { label: "特指冠词", answer: "the" },
      { label: "零冠词名词", answer: "students" }
    ],
    orderPrompt: "点击词块，排序成冠词正确的句子。",
    chunks: ["balanced", "A", "curriculum", "is", "important"],
    orderAnswer: ["A", "balanced", "curriculum", "is", "important"],
    correctionPrompt: "The technology is useful in the modern society.",
    correctionAnswer: "Technology is useful in modern society."
  },
  "adj-adv": {
    identifyPrompt: "Strict regulations can significantly reduce pollution.",
    identify: [
      { label: "形容词", answer: "Strict" },
      { label: "副词", answer: "significantly" },
      { label: "被修饰的动词", answer: "reduce" }
    ],
    orderPrompt: "点击词块，排序成形容词/副词正确的句子。",
    chunks: ["can", "Strict", "significantly", "regulations", "reduce pollution"],
    orderAnswer: ["Strict", "regulations", "can", "significantly", "reduce pollution"],
    correctionPrompt: "Online learning is convenience and can easy help students.",
    correctionAnswer: "Online learning is convenient and can easily help students."
  },
  comparatives: {
    identifyPrompt: "Public transport is more affordable than private cars.",
    identify: [
      { label: "比较对象 A", answer: "Public transport" },
      { label: "比较级", answer: "more affordable" },
      { label: "比较对象 B", answer: "private cars" }
    ],
    orderPrompt: "点击词块，排序成比较句。",
    chunks: ["is", "Public transport", "than", "private cars", "cheaper"],
    orderAnswer: ["Public transport", "is", "cheaper", "than", "private cars"],
    correctionPrompt: "Online classes are more better than traditional classes.",
    correctionAnswer: "Online classes are better than traditional classes."
  },
  passive: {
    identifyPrompt: "More public money should be allocated to healthcare.",
    identify: [
      { label: "情态动词", answer: "should" },
      { label: "被动结构", answer: "be allocated" },
      { label: "对象", answer: "healthcare" }
    ],
    orderPrompt: "点击词块，排序成被动语态句子。",
    chunks: ["should", "More money", "allocated", "be", "to healthcare"],
    orderAnswer: ["More money", "should", "be", "allocated", "to healthcare"],
    correctionPrompt: "More money should spend on public transport.",
    correctionAnswer: "More money should be spent on public transport."
  },
  "noun-clauses": {
    identifyPrompt: "What matters most is whether students can apply knowledge.",
    identify: [
      { label: "主语从句", answer: "What matters most" },
      { label: "系动词", answer: "is" },
      { label: "表语从句", answer: "whether students can apply knowledge" }
    ],
    orderPrompt: "点击词块，排序成名词性从句句子。",
    chunks: ["is", "What matters most", "whether", "students can apply knowledge"],
    orderAnswer: ["What matters most", "is", "whether", "students can apply knowledge"],
    correctionPrompt: "Whether children use phones too much it is a serious problem.",
    correctionAnswer: "Whether children use phones too much is a serious problem."
  },
  "relative-clauses": {
    identifyPrompt: "Students who lack digital access may fall behind.",
    identify: [
      { label: "先行词", answer: "Students" },
      { label: "定语从句", answer: "who lack digital access" },
      { label: "主句谓语", answer: "may fall behind" }
    ],
    orderPrompt: "点击词块，排序成定语从句句子。",
    chunks: ["who", "may fall behind", "Students", "lack digital access"],
    orderAnswer: ["Students", "who", "lack digital access", "may fall behind"],
    correctionPrompt: "People who they live in cities face more pressure.",
    correctionAnswer: "People who live in cities face more pressure."
  },
  "adverbial-clauses": {
    identifyPrompt: "Although technology improves efficiency, it may reduce communication.",
    identify: [
      { label: "从属连词", answer: "Although" },
      { label: "让步内容", answer: "technology improves efficiency" },
      { label: "主句观点", answer: "it may reduce communication" }
    ],
    orderPrompt: "点击词块，排序成让步状语从句。",
    chunks: ["online learning is useful,", "Although", "it has limitations"],
    orderAnswer: ["Although", "online learning is useful,", "it has limitations"],
    correctionPrompt: "Although online learning is useful, but it has limitations.",
    correctionAnswer: "Although online learning is useful, it has limitations."
  },
  "non-finite": {
    identifyPrompt: "Living in large cities, many people rely on public transport.",
    identify: [
      { label: "非谓语结构", answer: "Living in large cities" },
      { label: "逻辑主语", answer: "many people" },
      { label: "主句谓语", answer: "rely on" }
    ],
    orderPrompt: "点击词块，排序成非谓语句子。",
    chunks: ["Living in large cities,", "many people", "on public transport", "rely"],
    orderAnswer: ["Living in large cities,", "many people", "rely", "on public transport"],
    correctionPrompt: "Using public transport, pollution can be reduced.",
    correctionAnswer: "By using public transport, people can reduce pollution."
  }
};

const grammarPracticeVariants = {
  svo: [
    {
      identifyPrompt: "Education improves career prospects.",
      identify: [
        { label: "主语", answer: "Education" },
        { label: "谓语", answer: "improves" },
        { label: "宾语", answer: "career prospects" }
      ],
      orderPrompt: "点击词块，排序成一个正确的 SVO 句子。",
      chunks: ["improves", "career prospects", "Education"],
      orderAnswer: ["Education", "improves", "career prospects"]
    },
    {
      identifyPrompt: "Parents shape children's values.",
      identify: [
        { label: "主语", answer: "Parents" },
        { label: "谓语", answer: "shape" },
        { label: "宾语", answer: "children's values" }
      ],
      orderPrompt: "点击词块，排序成一个家庭主题 SVO 句子。",
      chunks: ["children's values", "Parents", "shape"],
      orderAnswer: ["Parents", "shape", "children's values"]
    }
  ],
  "there-be": [
    {
      identifyPrompt: "There are many benefits of public transport.",
      identify: [
        { label: "There be 结构", answer: "There are" },
        { label: "被引出的现象", answer: "many benefits" },
        { label: "主题范围", answer: "public transport" }
      ],
      orderPrompt: "点击词块，排序成一个 there be 现象句。",
      chunks: ["many benefits", "There", "of recycling", "are"],
      orderAnswer: ["There", "are", "many benefits", "of recycling"]
    },
    {
      identifyPrompt: "There is a serious shortage of affordable housing.",
      identify: [
        { label: "There be 结构", answer: "There is" },
        { label: "被引出的现象", answer: "a serious shortage" },
        { label: "主题范围", answer: "affordable housing" }
      ],
      orderPrompt: "点击词块，排序成一个城市主题 there be 句子。",
      chunks: ["There", "in large cities", "a shortage", "is", "of housing"],
      orderAnswer: ["There", "is", "a shortage", "of housing", "in large cities"]
    }
  ],
  "it-structure": [
    {
      identifyPrompt: "It is necessary to reduce carbon emissions.",
      identify: [
        { label: "形式主语", answer: "It" },
        { label: "评价形容词", answer: "necessary" },
        { label: "真正动作", answer: "to reduce carbon emissions" }
      ],
      orderPrompt: "点击词块，排序成 It is + adj. + to do 句子。",
      chunks: ["necessary", "is", "It", "to reduce carbon emissions"],
      orderAnswer: ["It", "is", "necessary", "to reduce carbon emissions"]
    },
    {
      identifyPrompt: "It is unfair to ignore low-income families.",
      identify: [
        { label: "形式主语", answer: "It" },
        { label: "评价形容词", answer: "unfair" },
        { label: "真正动作", answer: "to ignore low-income families" }
      ],
      orderPrompt: "点击词块，排序成社会公平主题句。",
      chunks: ["unfair", "to ignore", "It", "low-income families", "is"],
      orderAnswer: ["It", "is", "unfair", "to ignore", "low-income families"]
    }
  ],
  tense: [
    {
      identifyPrompt: "Technology has transformed modern workplaces.",
      identify: [
        { label: "时态结构", answer: "has transformed" },
        { label: "主语", answer: "Technology" },
        { label: "影响对象", answer: "modern workplaces" }
      ],
      orderPrompt: "点击词块，排序成现在完成时句子。",
      chunks: ["has transformed", "Technology", "modern workplaces"],
      orderAnswer: ["Technology", "has transformed", "modern workplaces"]
    },
    {
      identifyPrompt: "Many cities have invested in public transport.",
      identify: [
        { label: "时态结构", answer: "have invested" },
        { label: "主语", answer: "Many cities" },
        { label: "主题范围", answer: "public transport" }
      ],
      orderPrompt: "点击词块，排序成城市主题现在完成时句子。",
      chunks: ["in public transport", "have", "Many cities", "invested"],
      orderAnswer: ["Many cities", "have", "invested", "in public transport"]
    }
  ],
  "plural-nouns": [
    {
      identifyPrompt: "Children need safe places to play.",
      identify: [
        { label: "复数名词 1", answer: "Children" },
        { label: "复数名词 2", answer: "places" },
        { label: "不定式目的", answer: "to play" }
      ],
      orderPrompt: "点击词块，排序成单复数正确的句子。",
      chunks: ["safe places", "Children", "need", "to play"],
      orderAnswer: ["Children", "need", "safe places", "to play"]
    },
    {
      identifyPrompt: "Governments should create more jobs.",
      identify: [
        { label: "复数名词 1", answer: "Governments" },
        { label: "谓语结构", answer: "should create" },
        { label: "复数名词 2", answer: "jobs" }
      ],
      orderPrompt: "点击词块，排序成就业主题句。",
      chunks: ["more jobs", "Governments", "should create"],
      orderAnswer: ["Governments", "should create", "more jobs"]
    }
  ],
  articles: [
    {
      identifyPrompt: "The government should support a healthy lifestyle.",
      identify: [
        { label: "特指冠词", answer: "The" },
        { label: "泛指冠词", answer: "a" },
        { label: "被修饰名词", answer: "lifestyle" }
      ],
      orderPrompt: "点击词块，排序成冠词正确的句子。",
      chunks: ["support", "a healthy lifestyle", "should", "The government"],
      orderAnswer: ["The government", "should", "support", "a healthy lifestyle"]
    },
    {
      identifyPrompt: "An effective policy can reduce crime.",
      identify: [
        { label: "泛指冠词", answer: "An" },
        { label: "形容词", answer: "effective" },
        { label: "零冠词名词", answer: "crime" }
      ],
      orderPrompt: "点击词块，排序成法律主题句。",
      chunks: ["can reduce", "An", "crime", "effective policy"],
      orderAnswer: ["An", "effective policy", "can reduce", "crime"]
    }
  ],
  "adj-adv": [
    {
      identifyPrompt: "Online platforms can greatly improve access to education.",
      identify: [
        { label: "副词", answer: "greatly" },
        { label: "被修饰的动词", answer: "improve" },
        { label: "主题名词", answer: "access to education" }
      ],
      orderPrompt: "点击词块，排序成副词位置正确的句子。",
      chunks: ["can", "greatly", "access to education", "Online platforms", "improve"],
      orderAnswer: ["Online platforms", "can", "greatly", "improve", "access to education"]
    },
    {
      identifyPrompt: "Effective policies can gradually reduce pollution.",
      identify: [
        { label: "形容词", answer: "Effective" },
        { label: "副词", answer: "gradually" },
        { label: "被修饰的动词", answer: "reduce" }
      ],
      orderPrompt: "点击词块，排序成环境主题句。",
      chunks: ["can", "Effective policies", "reduce pollution", "gradually"],
      orderAnswer: ["Effective policies", "can", "gradually", "reduce pollution"]
    }
  ],
  comparatives: [
    {
      identifyPrompt: "Preventive care is cheaper than emergency treatment.",
      identify: [
        { label: "比较对象 A", answer: "Preventive care" },
        { label: "比较级", answer: "cheaper" },
        { label: "比较对象 B", answer: "emergency treatment" }
      ],
      orderPrompt: "点击词块，排序成健康主题比较句。",
      chunks: ["than", "cheaper", "emergency treatment", "Preventive care", "is"],
      orderAnswer: ["Preventive care", "is", "cheaper", "than", "emergency treatment"]
    },
    {
      identifyPrompt: "Cities are more crowded than rural areas.",
      identify: [
        { label: "比较对象 A", answer: "Cities" },
        { label: "比较级", answer: "more crowded" },
        { label: "比较对象 B", answer: "rural areas" }
      ],
      orderPrompt: "点击词块，排序成城市主题比较句。",
      chunks: ["more crowded", "than", "Cities", "are", "rural areas"],
      orderAnswer: ["Cities", "are", "more crowded", "than", "rural areas"]
    }
  ],
  passive: [
    {
      identifyPrompt: "Strict rules should be introduced.",
      identify: [
        { label: "情态动词", answer: "should" },
        { label: "被动结构", answer: "be introduced" },
        { label: "被执行对象", answer: "Strict rules" }
      ],
      orderPrompt: "点击词块，排序成被动语态句子。",
      chunks: ["be introduced", "Strict rules", "should"],
      orderAnswer: ["Strict rules", "should", "be introduced"]
    },
    {
      identifyPrompt: "Children must be protected from harmful content.",
      identify: [
        { label: "情态动词", answer: "must" },
        { label: "被动结构", answer: "be protected" },
        { label: "保护对象", answer: "Children" }
      ],
      orderPrompt: "点击词块，排序成媒体主题被动句。",
      chunks: ["from harmful content", "must", "Children", "be protected"],
      orderAnswer: ["Children", "must", "be protected", "from harmful content"]
    }
  ],
  "noun-clauses": [
    {
      identifyPrompt: "Whether education is fair matters to society.",
      identify: [
        { label: "主语从句", answer: "Whether education is fair" },
        { label: "主句谓语", answer: "matters" },
        { label: "影响范围", answer: "society" }
      ],
      orderPrompt: "点击词块，排序成名词性从句句子。",
      chunks: ["matters", "Whether education is fair", "to society"],
      orderAnswer: ["Whether education is fair", "matters", "to society"]
    },
    {
      identifyPrompt: "What students need is practical guidance.",
      identify: [
        { label: "主语从句", answer: "What students need" },
        { label: "系动词", answer: "is" },
        { label: "表语", answer: "practical guidance" }
      ],
      orderPrompt: "点击词块，排序成教育主题名词性从句。",
      chunks: ["is", "practical guidance", "What students need"],
      orderAnswer: ["What students need", "is", "practical guidance"]
    }
  ],
  "relative-clauses": [
    {
      identifyPrompt: "People who recycle regularly can reduce waste.",
      identify: [
        { label: "先行词", answer: "People" },
        { label: "定语从句", answer: "who recycle regularly" },
        { label: "主句谓语", answer: "can reduce" }
      ],
      orderPrompt: "点击词块，排序成定语从句句子。",
      chunks: ["People", "can reduce waste", "who recycle regularly"],
      orderAnswer: ["People", "who recycle regularly", "can reduce waste"]
    },
    {
      identifyPrompt: "Cities that invest in trains can reduce congestion.",
      identify: [
        { label: "先行词", answer: "Cities" },
        { label: "定语从句", answer: "that invest in trains" },
        { label: "主句谓语", answer: "can reduce" }
      ],
      orderPrompt: "点击词块，排序成交通主题定语从句。",
      chunks: ["can reduce congestion", "that invest in trains", "Cities"],
      orderAnswer: ["Cities", "that invest in trains", "can reduce congestion"]
    }
  ],
  "adverbial-clauses": [
    {
      identifyPrompt: "If schools teach life skills, students may become more independent.",
      identify: [
        { label: "从属连词", answer: "If" },
        { label: "条件内容", answer: "schools teach life skills" },
        { label: "主句结果", answer: "students may become more independent" }
      ],
      orderPrompt: "点击词块，排序成条件状语从句。",
      chunks: ["If", "students become independent", "schools teach life skills,"],
      orderAnswer: ["If", "schools teach life skills,", "students become independent"]
    },
    {
      identifyPrompt: "Because public transport is reliable, fewer people drive.",
      identify: [
        { label: "从属连词", answer: "Because" },
        { label: "原因内容", answer: "public transport is reliable" },
        { label: "主句结果", answer: "fewer people drive" }
      ],
      orderPrompt: "点击词块，排序成原因状语从句。",
      chunks: ["fewer people drive", "Because", "public transport is reliable,"],
      orderAnswer: ["Because", "public transport is reliable,", "fewer people drive"]
    }
  ],
  "non-finite": [
    {
      identifyPrompt: "Facing high living costs, young people delay marriage.",
      identify: [
        { label: "非谓语结构", answer: "Facing high living costs" },
        { label: "逻辑主语", answer: "young people" },
        { label: "主句谓语", answer: "delay" }
      ],
      orderPrompt: "点击词块，排序成非谓语句子。",
      chunks: ["young people", "delay marriage", "Facing high living costs,"],
      orderAnswer: ["Facing high living costs,", "young people", "delay marriage"]
    },
    {
      identifyPrompt: "Having access to online courses, students can study independently.",
      identify: [
        { label: "非谓语结构", answer: "Having access to online courses" },
        { label: "逻辑主语", answer: "students" },
        { label: "主句谓语", answer: "can study" }
      ],
      orderPrompt: "点击词块，排序成教育主题非谓语句子。",
      chunks: ["students", "Having access to online courses,", "can study independently"],
      orderAnswer: ["Having access to online courses,", "students", "can study independently"]
    }
  ]
};

const coursePhases = [
  {
    id: "stage1",
    title: "01 第一阶段：语言地基",
    badge: "句子 -> 小段落",
    audience: ["初中生", "英语基础较弱", "备考时间较长", "还不能稳定写出完整英文句子的学生"],
    goals: ["建立基础语法意识", "积累 Task 2 高频主题词汇", "写观点句、原因句、结果句和例子句", "写出简单但逻辑清楚的小段落"],
    modules: [
      {
        id: "foundation-grammar",
        title: "01 基础语法",
        goal: "让每个语法点服务 Task 2 写作，不做孤立语法课。",
        students: "基础弱、句子常缺谓语、单复数和冠词错误多的学生。",
        knowledge: grammarWritingPoints.map((point) => point.name),
        lecture: "先给写作用途，再看 Task 2 句子，最后立刻做替换和纠错。",
        board: "语法点 -> 写作用途 -> 主题例句 -> 常见错误 -> 立即输出",
        examples: ["It is necessary to give students equal access to educational resources.", "There are several reasons why young people struggle to find stable jobs."],
        exercises: ["用同一主题写 3 个 SVO 观点句。", "把 5 个中文政策句改成被动语态。", "用 although / because / if 合并短句。"],
        homework: "每天选 1 个主题，写 8 个准确句子，并标出主语、谓语和宾语。",
        errors: ["中文顺序直译", "谓语缺失", "冠词和单复数忽略", "复杂句写长但关系不清"],
        future: ["给每个语法点补 10 道填空题", "补学生错句库", "补顾家北翻译练习对应页"]
      },
      {
        id: "sentence-patterns",
        title: "02 句型训练",
        goal: "把观点、原因、结果、例子、让步和对比变成可重复使用的句型。",
        students: "能写句子但表达单一、只会 because / so 的学生。",
        knowledge: ["观点句", "原因句", "结果句", "举例句", "对比句", "让步句", "强调句", "倒装句", "非谓语句", "名词化表达"],
        lecture: "每个句型都和主题词汇绑定，例如科技、工作、政府题；先普通句，再升级句。",
        board: "功能句型 -> 普通句 -> 升级句 -> 主题替换 -> 学生造句",
        examples: ["Technology improves workplace efficiency.", "Not only does technology improve workplace efficiency, but it also raises concerns about privacy and unemployment.", "The expansion of online learning has made education more accessible."],
        exercises: ["把 5 个普通句升级成让步句。", "用 not only...but also 写 3 个科技/教育句。", "把动词表达改成名词化表达。"],
        homework: "每个主题写 1 个观点句、1 个原因句、1 个结果句、1 个例子句。",
        errors: ["倒装只背结构不服务观点", "强调句过度使用", "名词化后句子没有谓语", "非谓语主语不一致"],
        future: ["补 50 个句型替换卡", "补句型默写题", "补不同分数段句型对比"]
      },
      {
        id: "topic-vocabulary",
        title: "03 主题词汇",
        goal: "建立 13 个 Task 2 高频主题的核心词伙、输入句型和可迁移表达。",
        students: "词汇零散、背了不会放进观点句的学生。",
        knowledge: ["政府", "动物", "工作", "教育", "生活", "科技", "广告媒体", "犯罪", "城市发展", "家庭", "环境", "健康", "语言文化"],
        lecture: "每个主题按照：核心词伙 -> 输入句型 -> 句型迁移 -> 填空/排序/造句练习。",
        board: "主题 -> 词伙 -> 例句 -> 句型功能 -> 互动练习 -> 输出句",
        examples: ["allocate public money according to social needs", "reduce the risk of reoffending", "Exposure to foreign cultures can broaden students' horizons."],
        exercises: ["每个主题先做词伙识别。", "把输入句型拆成可复用结构。", "用同一表达迁移到一个新题目。"],
        homework: "每天完成 1 个主题：5 个词组默写 + 5 个造句 + 1 个小段落。",
        errors: ["只背单词不背搭配", "中文观点套高级词导致不自然", "一个词不会迁移到不同题目"],
        future: ["继续给每个主题补真题", "给每个主题补更多配对/填空/默写", "补同义替换和易错表达"]
      },
      {
        id: "opinion-sentences",
        title: "04 观点句训练",
        goal: "训练学生从中文观点稳定转成英文观点句。",
        students: "有想法但英文第一句写不出来的学生。",
        knowledge: ["简单观点句", "带原因的观点句", "带让步的观点句", "带对比的观点句", "更学术的观点句"],
        lecture: "先中文判断立场，再选句型骨架，最后加入主题词汇。",
        board: "中文观点 -> 立场词 -> 句型骨架 -> 主题词 -> 英文观点句",
        examples: ["Schools should not focus only on practical skills because academic subjects develop transferable abilities.", "Although online learning is convenient, it cannot fully replace face-to-face interaction."],
        exercises: ["给 10 个中文观点写英文观点句。", "把简单观点句升级成带原因版本。", "把绝对观点改成更稳的学术观点。"],
        homework: "每天 10 个中文观点转英文，标出观点核心词。",
        errors: ["观点太绝对", "句子像翻译腔", "原因和观点重复"],
        future: ["补观点句评分标准", "补中英对照观点库", "补口头快速反应训练"]
      },
      {
        id: "mini-paragraph",
        title: "05 小段落训练",
        goal: "写 4-6 句的清楚小段落，为主体段做准备。",
        students: "能写单句但段落展开空、散、重复的学生。",
        knowledge: ["Topic sentence", "Explanation", "Reason", "Result", "Example", "Link back"],
        lecture: "先中文思路，再英文句子框架，最后替换表达和补例子。",
        board: "观点句 -> 解释 -> 原因 -> 结果 -> 例子 -> 回扣题目",
        examples: ["Public transport should be improved because it gives commuters a practical alternative to private cars. When buses and trains are reliable, people are less likely to drive every day."],
        exercises: ["给中文思路补英文句子框架。", "给一个观点补原因、结果和例子。", "把 3 句扩成 6 句小段落。"],
        homework: "每周 5 个小段落，每段必须包含回扣句。",
        errors: ["例子太长", "原因和结果混在一起", "段末不回题"],
        future: ["补基础版/6.5版/7+版小段落对比", "补学生作业批改模板"]
      }
    ]
  },
  {
    id: "stage2",
    title: "02 第二阶段：论证与段落",
    badge: "审题 -> 主体段",
    audience: ["能写基本句子", "有一定词汇量", "文章逻辑空、散、重复", "不知道主体段如何展开的学生"],
    goals: ["学会审题", "学会生成观点", "掌握常见论证手法", "写出完整主体段", "能写开头和结尾"],
    modules: [
      ["argument-question", "01 审题方法", ["判断题型", "圈关键词", "找限定范围", "判断是否需要表态", "分析 only / all / always / never", "判断几个任务", "避免跑题"], "题型 -> 关键词 -> 限定范围 -> 任务数量 -> 立场"],
      ["idea-generation", "02 观点生成", ["个人", "家庭", "学校", "社会", "政府", "经济", "短期影响", "长期影响", "正面影响", "负面影响"], "对象角度 -> 时间角度 -> 影响方向 -> 可写观点"],
      ["cause-effect", "03 因果论证", ["观点", "原因", "结果", "回扣题目"], "Point -> Why -> So what -> Link back"],
      ["comparison", "04 对比论证", ["A/B 优势", "短期/长期", "个人/社会", "效率/公平"], "比较对象 -> 比较标准 -> 判断更重要的一方"],
      ["examples", "05 举例论证", ["具体例子", "泛化例子", "错误例子"], "观点 -> 例子一句话 -> 解释例子如何证明观点"],
      ["concession", "06 让步反驳", ["Although A is true, B is more important because...", "避免两边都写但没有立场"], "承认对方 -> 转折 -> 强化自己立场"],
      ["intro-conclusion", "07 开头结尾", ["背景改写", "题目改写", "立场句", "不同题型开头", "总结立场", "避免新观点"], "背景句 -> 改写题目 -> 立场 / 总结立场 -> 总结主体段"],
      ["body-paragraph", "08 主体段写法", ["基础版", "6.5 分版", "7+ 分版", "Topic sentence", "Explanation", "Reason", "Result", "Example", "Link back"], "Topic sentence -> Explanation -> Reason -> Result -> Example -> Link back"]
    ].map(([id, title, knowledge, board]) => ({
      id, title,
      goal: "以主体段和论证为核心，让观点能展开、能回题、能支撑立场。",
      students: "句子基本能写，但展开空泛、重复或跑题的学生。",
      knowledge,
      lecture: "用真题先做中文审题和观点生成，再把论证链转成英文主体段。",
      board,
      examples: ["Although this view is understandable, the long-term social cost is more serious.", "This policy can reduce inequality because it gives low-income families access to essential services."],
      exercises: ["给题目圈关键词并判断任务数量。", "用一个观点写原因、结果和回扣。", "把空泛段落改成完整主体段。"],
      homework: "每天 1 道题只写审题卡 + 1 个主体段。",
      errors: ["没有明确立场", "例子不能证明观点", "两段观点重复", "段落最后没有回扣题目"],
      future: ["补更多真题审题卡", "补学生段落批改记录", "补不同题型主体段范文"]
    }))
  },
  {
    id: "stage3",
    title: "03 第三阶段：成篇训练",
    badge: "整篇 -> 考前",
    audience: ["已经能写主体段", "需要整篇输出", "准备考试", "需要稳定分数和提分的学生"],
    goals: ["掌握常见题型结构", "40 分钟内完成文章", "按评分标准自查", "通过批改复盘持续提分"],
    modules: [
      ["agree-disagree", "01 同不同意", ["完全同意", "完全不同意", "部分同意", "双主体段结构", "常见错误"], "立场 -> 两个理由 -> 回扣"],
      ["discussion", "02 双边讨论", ["Discuss both views and give your opinion", "两边观点平衡", "自己观点位置", "避免只讨论不表态"], "View A -> View B -> My opinion"],
      ["advantages", "03 优缺点", ["advantages and disadvantages", "outweigh", "利弊比较", "判断哪边更重要"], "Advantage -> Disadvantage -> 判断权重"],
      ["two-question", "04 双问题", ["causes and solutions", "problems and solutions", "reasons and effects", "两个问题如何分段"], "Question 1 paragraph -> Question 2 paragraph"],
      ["mixed-question", "05 混合题", ["两个不同任务拆分", "避免漏答", "安排段落"], "任务 A -> 任务 B -> 共同立场"],
      ["timed-training", "06 限时训练", ["5 分钟审题", "5 分钟列提纲", "25 分钟正文", "5 分钟检查", "10 分钟审题", "15 分钟主体段", "40 分钟整篇"], "审题 -> 提纲 -> 正文 -> 检查"],
      ["revision", "07 批改复盘", ["Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy", "主要问题", "可保留表达", "必须修改句", "下次目标"], "评分项 -> 问题 -> 修改 -> 下次训练"],
      ["exam-template", "08 考前模板", ["题型稳定结构", "高频开头句", "高频结尾句", "主体段连接句", "常见主题观点", "考前检查清单"], "题型模板 -> 主题观点 -> 检查清单"]
    ].map(([id, title, knowledge, board]) => ({
      id, title,
      goal: "把段落能力组合成稳定整篇输出，重点服务考试时间和评分标准。",
      students: "能写主体段，但整篇结构不稳、时间不够或复盘无方向的学生。",
      knowledge,
      lecture: "先固定题型结构，再做限时输出，最后用四项评分标准复盘。",
      board,
      examples: ["In conclusion, although this policy may be costly, it is justified because it improves social equality.", "The advantages outweigh the disadvantages when the long-term benefits are considered."],
      exercises: ["给题型选结构。", "40 分钟整篇写作。", "按 TR / CC / LR / GRA 做自查。"],
      homework: "每周 2 篇整文 + 1 次批改复盘 + 1 张下次训练目标卡。",
      errors: ["开头背模板但不回应题目", "结尾出现新观点", "主体段和题型任务不匹配", "写完不复盘"],
      future: ["补各题型范文库", "补限时训练计时器", "补批改表导出功能"]
    }))
  }
];

const task2Topics = {
  education: {
    name: "1. 教育 Education",
    branches: ["学校与家庭教育", "大学教育与职业教育", "在线教育", "课程设置与考试", "教育公平", "教师的作用"],
    vocab: ["curriculum", "employability", "critical thinking", "educational resources", "equal access"],
    question: "Some people believe that schools should focus more on practical skills than academic subjects. To what extent do you agree or disagree?",
    guide: "核心：教育的目的是什么？短期就业技能 vs 长期思维能力。",
    viewpoint: "学校可以增加实践内容，但不应削弱学术科目，因为学术训练提供更底层的迁移能力。",
    phrases: [
      "give students access to a wide range of educational resources",
      "develop transferable skills",
      "build a strong academic foundation",
      "prepare students for the demands of the modern workplace"
    ],
    mainIdeas: [
      "思路一：支持学术科目。学术科目不是“没用的理论”，它训练推理、分析和解决问题的能力，这些能力可以迁移到不同职业。",
      "思路二：支持平衡。学校应该加入实践技能，但不能让实用技能取代学术学习，因为学生未来需要的不只是某一份工作的技能。"
    ],
    chain: "观点: 学术科目仍然重要 -> 原因: 它训练推理和抽象思维 -> 影响: 学生未来能适应不同工作 -> 例子: 数学和科学培养解决问题能力 -> 回扣: 学校不应只服务短期就业。",
    teaching: "教学重点：让学生从“二选一”升级到“承认A但强调B更底层”。"
  },
  technology: {
    name: "2. 科技 Technology",
    branches: ["日常便利", "人工智能与自动化", "网络与社交媒体", "信息获取", "隐私与数据安全", "数字鸿沟"],
    vocab: ["digital literacy", "automation", "privacy", "accessibility", "online platforms"],
    question: "Digital technology has changed the way people learn. Is this a positive or negative development?",
    guide: "核心：科技提高效率，但也可能削弱深度思考。",
    viewpoint: "科技本身不是问题，关键是它是否被用来支持主动学习，而不是替代思考。",
    phrases: [
      "enable students to study at their own pace",
      "make high-quality resources accessible",
      "reduce face-to-face interaction",
      "be distracted by digital entertainment"
    ],
    mainIdeas: [
      "思路一：科技是积极的，因为它让学生更容易获得资源，并按照自己的节奏学习。",
      "思路二：科技也有风险，如果学生只是被动看视频或依赖工具，深度思考会变弱。"
    ],
    chain: "观点: 科技在正确引导下是积极的 -> 原因: 它扩大资源获取 -> 影响: 学生可以个性化学习 -> 例子: 录播课帮助学生反复复习难点 -> 回扣: 科技应服务学习质量。",
    teaching: "教学重点：科技题不要只写 convenient，要写行为、能力和长期影响。"
  },
  government: {
    name: "3. 政府与公共政策 Government",
    branches: ["公共资金分配", "政府与个人责任", "法律监管", "公共服务", "税收", "国际合作"],
    vocab: ["public funding", "regulation", "welfare", "budget allocation", "public services"],
    question: "Some people think governments should spend more money on public services rather than arts. To what extent do you agree or disagree?",
    guide: "核心：公共资源有限时，基本服务和文化价值如何排序？",
    viewpoint: "公共服务应优先，但艺术不应被完全忽视，因为它也有文化和社会价值。",
    phrases: [
      "allocate public money according to social needs",
      "improve access to essential services",
      "preserve cultural identity",
      "place a heavier burden on taxpayers"
    ],
    mainIdeas: [
      "思路一：公共服务优先，因为医疗、交通、教育直接影响人的基本生活质量。",
      "思路二：艺术也值得支持，因为它能保存文化身份、提升城市吸引力，但预算应低于基本服务。"
    ],
    chain: "观点: 基础公共服务优先 -> 原因: 医疗、交通影响基本生活 -> 影响: 改善公平和社会稳定 -> 例子: 公共交通让低收入者更容易就业 -> 回扣: 艺术重要但基本需求更紧急。",
    teaching: "教学重点：政府题要写 policy -> people -> society。"
  },
  environment: {
    name: "4. 环境与动物 Environment",
    branches: ["气候变化", "污染", "能源资源", "垃圾处理", "动物保护", "个人与政府责任"],
    vocab: ["sustainability", "carbon emissions", "renewable energy", "consumer behavior", "environmental regulation"],
    question: "Some people believe individuals can do little to improve the environment, and only governments and large companies can make a difference. To what extent do you agree or disagree?",
    guide: "核心：个人行动和系统改变谁更有效？",
    viewpoint: "政府和企业影响更大，但个人消费选择也能推动市场变化。",
    phrases: [
      "reduce carbon emissions",
      "encourage sustainable consumption",
      "introduce stricter environmental regulations",
      "make environmentally friendly choices easier"
    ],
    mainIdeas: [
      "思路一：政府和企业更有力量，因为它们能改变生产方式、基础设施和规则。",
      "思路二：个人也有作用，因为消费选择会影响市场需求，并推动企业改变。"
    ],
    chain: "观点: 系统力量更大但个人仍重要 -> 原因: 政策和生产方式决定选择空间 -> 影响: 绿色基础设施让环保行为更容易 -> 例子: 公共交通投资减少开车依赖 -> 回扣: 环境改善需要制度和个人共同作用。",
    teaching: "教学重点：环境题要写 incentives, regulation, consumption patterns。"
  },
  health: {
    name: "5. 健康与生活方式 Health",
    branches: ["公共医疗", "饮食肥胖", "体育锻炼", "心理健康", "工作压力", "个人与政府责任"],
    vocab: ["public healthcare", "obesity", "mental health", "sedentary lifestyle", "preventive measures"],
    question: "Some people think governments should be responsible for improving public health. Others believe individuals should take responsibility. Discuss both views and give your opinion.",
    guide: "核心：健康是个人选择，还是公共政策的结果？",
    viewpoint: "个人需要改变生活方式，但政府能通过教育、城市规划和医疗服务降低健康风险。",
    phrases: [
      "promote a healthier lifestyle",
      "take preventive measures",
      "reduce pressure on the healthcare system",
      "create public spaces for exercise"
    ],
    mainIdeas: [
      "思路一：个人要负责，因为饮食、运动和作息最终取决于自己的选择。",
      "思路二：政府也要负责，因为城市环境、医疗服务和公共教育会影响人的选择。"
    ],
    chain: "观点: 责任应共享 -> 原因: 个人选择受环境影响 -> 影响: 健康政策能让好选择更容易 -> 例子: 公园和运动设施鼓励锻炼 -> 回扣: 公共健康不能只靠个人自律。",
    teaching: "教学重点：健康题适合写 individual behavior + public environment。"
  },
  work: {
    name: "6. 工作、商业与经济 Work",
    branches: ["就业失业", "自动化", "远程办公", "工作生活平衡", "薪酬满意度", "全球贸易"],
    vocab: ["job satisfaction", "career prospects", "automation", "work-life balance", "financial stability"],
    question: "Some people think job satisfaction is more important than job security. Discuss both views and give your opinion.",
    guide: "核心：工作的稳定性和意义感哪个更重要？",
    viewpoint: "稳定性是基础，但满意度决定长期表现和心理健康。",
    phrases: [
      "provide financial stability",
      "increase long-term motivation",
      "lead to burnout",
      "maintain a healthy work-life balance"
    ],
    mainIdeas: [
      "思路一：工作稳定性更重要，因为它保证收入、安全感和基本生活。",
      "思路二：工作满意度也重要，因为它影响长期动力、心理健康和职业发展。"
    ],
    chain: "观点: 两者都重要 -> 原因: 收入稳定满足基本需求 -> 影响: 满意度影响动力和长期发展 -> 例子: 稳定但无意义的工作可能导致 burnout -> 回扣: 最好根据人生阶段平衡。",
    teaching: "教学重点：工作题适合写 realistic trade-off。"
  },
  family: {
    name: "7. 家庭、儿童与社会 Family",
    branches: ["父母与学校责任", "儿童成长", "老龄化", "代际关系", "性别角色", "社区关系"],
    vocab: ["parental guidance", "child development", "ageing population", "social responsibility", "community ties"],
    question: "Some people think parents should teach children how to be good members of society. Others believe schools should do this. Discuss both views and give your opinion.",
    guide: "核心：价值观教育主要来自家庭还是学校？",
    viewpoint: "家庭影响早期价值观，学校提供社会规则和集体环境，两者缺一不可。",
    phrases: [
      "shape children's values",
      "provide parental guidance",
      "learn social rules",
      "develop a sense of responsibility"
    ],
    mainIdeas: [
      "思路一：父母更重要，因为孩子最早从家庭中学习行为习惯和价值观。",
      "思路二：学校也重要，因为学校提供集体环境，让孩子学习合作、规则和社会责任。"
    ],
    chain: "观点: 家庭和学校共同负责 -> 原因: 家庭塑造习惯，学校提供社会化环境 -> 影响: 儿童既有道德基础也懂公共规则 -> 例子: 父母教诚实，学校训练合作 -> 回扣: 好公民教育需要双重支持。",
    teaching: "教学重点：家庭题常连接教育、社会责任和儿童发展。"
  },
  crime: {
    name: "8. 犯罪与法律 Crime",
    branches: ["犯罪原因", "惩罚与改造", "青少年犯罪", "监狱作用", "监控技术", "社会预防"],
    vocab: ["rehabilitation", "deterrence", "juvenile crime", "surveillance", "social prevention"],
    question: "Some people think criminals should be punished, while others believe they should be rehabilitated. Discuss both views and give your opinion.",
    guide: "核心：惩罚是为了报应、威慑，还是减少再犯？",
    viewpoint: "严重犯罪需要惩罚，但多数情况下改造更能减少长期犯罪率。",
    phrases: [
      "reduce the risk of reoffending",
      "act as a deterrent",
      "offer rehabilitation programmes",
      "address the root causes of crime"
    ],
    mainIdeas: [
      "思路一：惩罚有必要，因为它能体现法律后果，并威慑潜在犯罪者。",
      "思路二：改造更有长期价值，因为教育和职业培训能减少再次犯罪。"
    ],
    chain: "观点: 改造应成为重点 -> 原因: 很多犯罪来自教育和就业缺失 -> 影响: 技能训练降低再犯率 -> 例子: 监狱课程帮助犯人重新就业 -> 回扣: 社会安全来自减少重复犯罪。",
    teaching: "教学重点：犯罪题要区分 punishment, deterrence, rehabilitation。"
  },
  cities: {
    name: "9. 城市、住房与交通 Cities",
    branches: ["城市化", "住房短缺", "城乡差距", "公共交通", "交通拥堵", "城市规划"],
    vocab: ["urbanization", "housing shortage", "public transport", "traffic congestion", "urban planning"],
    question: "In many cities, traffic congestion is becoming a serious problem. What are the causes and what solutions can be taken?",
    guide: "核心：交通拥堵来自个人选择，还是城市规划问题？",
    viewpoint: "拥堵通常由城市扩张、私家车依赖和公共交通不足共同造成。",
    phrases: [
      "reduce dependence on private cars",
      "improve public transport networks",
      "ease traffic congestion",
      "make commuting more efficient"
    ],
    mainIdeas: [
      "思路一：拥堵的原因是城市扩张和私家车依赖，很多人没有好的替代交通方式。",
      "思路二：解决办法是改善公共交通和城市规划，让人们更愿意少开车。"
    ],
    chain: "观点: 改善公共交通是关键 -> 原因: 人们开车是因为替代选择差 -> 影响: 可靠交通能减少私家车使用 -> 例子: 地铁和公交专用道提升通勤效率 -> 回扣: 解决拥堵要改变出行结构。",
    teaching: "教学重点：城市题适合写 cause + solution，逻辑要具体。"
  },
  culture: {
    name: "10. 文化、媒体、旅游与全球化 Culture",
    branches: ["传统文化保护", "艺术价值", "广告消费", "新闻娱乐", "国际旅游", "全球文化趋同"],
    vocab: ["cultural identity", "heritage", "consumerism", "mass media", "globalisation"],
    question: "In many countries, traditional customs are disappearing. Is this a positive or negative development?",
    guide: "核心：传统是限制，还是身份认同和社会连接？",
    viewpoint: "有意义的传统应被保留，但限制个人自由的传统可以被调整。",
    phrases: [
      "preserve cultural identity",
      "strengthen social cohesion",
      "adapt to modern values",
      "maintain a sense of belonging"
    ],
    mainIdeas: [
      "思路一：传统应该保留，因为它连接家庭、语言、节日和身份认同。",
      "思路二：传统也需要更新，如果某些传统限制个人自由，就应该适应现代价值观。"
    ],
    chain: "观点: 有价值的传统不应消失 -> 原因: 它连接家庭、语言和社区记忆 -> 影响: 人们获得身份认同和归属感 -> 例子: 节日保留食物、故事和家庭仪式 -> 回扣: 现代化不等于抹掉文化。",
    teaching: "教学重点：抽象题先定义关键词，不要空谈 tradition。"
  }
};

const topicVocabularyLessons = {
  government: {
    title: "01 政府类",
    focus: "公共服务、税收、政府责任、公共资金分配。",
    chunks: [
      ["公共服务", "public services"],
      ["征税", "impose taxes"],
      ["提高公民意识", "raise people's awareness"],
      ["公民安全与福利", "the security and well-being of citizens"],
      ["公务员", "civil servants"],
      ["政府资助", "government grants"],
      ["纳税人的税务负担", "the tax burden on taxpayers"],
      ["减轻财政负担", "ease the government's financial burden"],
      ["充足资金", "sufficient funds"],
      ["预算赤字", "budget deficit"]
    ],
    sentences: [
      ["公民个人交税是政府收入的重要来源。", "Taxes paid by individual citizens are an important source of government revenue.", "非谓语作后置定语"],
      ["税收经常被投入到公交、学校和医院等基础设施。", "Tax money is often allocated to infrastructure projects such as improvements to public transport, schools and hospitals.", "被动语态"],
      ["政府需要财政资源来保证经济和环境的可持续发展。", "Governments need financial resources to ensure sustainable economic and environmental development.", "目的表达"]
    ],
    drill: {
      cloze: "Tax money is often ____ to public services.",
      answer: "allocated",
      order: ["should", "public money", "Governments", "allocate", "according to social needs"],
      orderAnswer: ["Governments", "should", "allocate", "public money", "according to social needs"]
    }
  },
  animals: {
    title: "02 动物类",
    focus: "动物实验、素食、野生动物保护、动物伦理。",
    chunks: [
      ["科学实验", "scientific research"],
      ["医疗实验", "medical tests"],
      ["道德错误", "morally wrong"],
      ["替代研究方法", "alternative methods of research"],
      ["素食主义者", "vegetarians"],
      ["均衡饮食", "a balanced diet"],
      ["野生动物保护", "wildlife conservation"],
      ["保护濒危物种", "protect endangered species"],
      ["自然栖息地", "natural habitats"],
      ["动物实验", "animal testing / animal experimentation"]
    ],
    sentences: [
      ["动物实验帮助我们提高医疗和科学知识。", "Animal testing helps to advance medical and scientific knowledge.", "因果论证开头"],
      ["在很多国家，化妆品行业的动物实验已经被禁止。", "Testing for the cosmetics industry is now banned in many countries.", "被动语态"],
      ["人类没有道德权利进行动物实验，因为动物生命应被尊重。", "Humans have no moral right to do experiments on animals since the lives of animals should be respected.", "since 原因句"]
    ],
    drill: {
      cloze: "Governments should protect ____ instead of keeping animals in artificial environments.",
      answer: "natural habitats",
      order: ["should", "be respected", "the lives of animals", "because"],
      orderAnswer: ["the lives of animals", "should", "be respected", "because"]
    }
  },
  work: {
    title: "03 工作类",
    focus: "职业前景、就业保障、工作生活平衡、失业与职业培训。",
    chunks: [
      ["好的职业前景", "better job prospects"],
      ["养老金和医疗保险", "pension and health insurance"],
      ["体面的收入", "a decent income"],
      ["公司内部升职", "promotions within the organization"],
      ["积累工作经验", "accumulate work experience"],
      ["职业满足感", "job satisfaction"],
      ["职业指导", "career advice"],
      ["职业课程", "vocational courses"],
      ["工作生活平衡", "a work-life balance"],
      ["灵活工作时间", "flexible working hours"]
    ],
    sentences: [
      ["很多人看重稳定工作，因为它提供养老金和医保。", "Many people value stable jobs because they provide pensions and health insurance.", "because 原因句"],
      ["职业课程可以帮助年轻人积累实用技能。", "Vocational courses can help young people acquire practical skills.", "观点句"],
      ["灵活的工作时间能让员工更好地平衡工作和家庭。", "Flexible working hours allow employees to combine work and family commitments more effectively.", "结果句"]
    ],
    drill: {
      cloze: "Flexible working hours help employees achieve a better ____.",
      answer: "work-life balance",
      order: ["can", "vocational courses", "employability", "improve"],
      orderAnswer: ["vocational courses", "can", "improve", "employability"]
    }
  },
  education: {
    title: "04 教育类",
    focus: "教育公平、课程设置、留学、线上学习、家庭与学校责任。",
    chunks: [
      ["学历", "qualification"],
      ["赚更高收入", "earn a higher salary"],
      ["道德观念", "moral values"],
      ["名牌大学", "prestigious universities"],
      ["开阔眼界", "broaden students' horizons"],
      ["语言障碍", "language barrier"],
      ["远程教育", "distance learning"],
      ["识字率", "literacy rates"],
      ["义务教育", "compulsory education"],
      ["更好就业前景", "better employment prospects"]
    ],
    sentences: [
      ["教育能提高就业前景，并帮助学生对社会作出贡献。", "Education can improve employment prospects and help students contribute positively to society.", "并列观点"],
      ["留学可以开阔学生眼界，但也可能带来语言障碍。", "Studying abroad can broaden students' horizons, but it may also create language barriers.", "让步对比"],
      ["政府应该让所有孩子接受义务教育。", "Governments should make education compulsory for all children.", "政策观点句"]
    ],
    drill: {
      cloze: "Studying abroad can broaden students' ____.",
      answer: "horizons",
      order: ["should", "compulsory", "Governments", "make education", "for all children"],
      orderAnswer: ["Governments", "should", "make education", "compulsory", "for all children"]
    }
  },
  life: {
    title: "05 生活类",
    focus: "城市生活、生活压力、住房、隐私、快节奏生活。",
    chunks: [
      ["改变生活的发明", "life-altering inventions"],
      ["财富分配", "wealth distribution"],
      ["社会动荡", "social unrest"],
      ["城市扩张", "urban sprawl"],
      ["人口激增", "population explosion"],
      ["快节奏生活", "a fast-paced modern life"],
      ["高额生活费用", "high cost of living"],
      ["住房问题", "housing problems"],
      ["保护隐私", "privacy protection"],
      ["交通拥堵", "traffic congestion"]
    ],
    sentences: [
      ["快节奏现代生活会导致压力相关疾病。", "A fast-paced modern life can lead to stress-related illnesses.", "因果句"],
      ["城市能提供更多就业机会，但生活成本也更高。", "Cities can offer more job opportunities, but they also have a higher cost of living.", "对比句"],
      ["住房问题会影响低收入家庭的生活质量。", "Housing problems can affect the quality of life of low-income families.", "影响句"]
    ],
    drill: {
      cloze: "A high ____ can place pressure on young workers.",
      answer: "cost of living",
      order: ["can", "stress-related illnesses", "fast-paced life", "lead to"],
      orderAnswer: ["fast-paced life", "can", "lead to", "stress-related illnesses"]
    }
  },
  technology: {
    title: "06 科技类",
    focus: "效率、自动化、沟通、数字鸿沟、医学科技。",
    chunks: [
      ["增加选择", "offer alternatives"],
      ["解放工人", "free workers from repetitive tasks"],
      ["提高效率", "enhance efficiency"],
      ["科学研究", "scientific research"],
      ["促进沟通", "promote communication"],
      ["加大贫富差距", "widen the gap between the rich and the poor"],
      ["改善人际关系", "improve interpersonal relationships"],
      ["使生活更便利", "make life more convenient"],
      ["医学突破", "medical breakthroughs"],
      ["获取知识和信息", "get wide access to knowledge and information"]
    ],
    sentences: [
      ["科技可以把工人从重复任务中解放出来。", "Technology can free workers from repetitive tasks.", "SVO 观点句"],
      ["现代科技提高效率，但也可能削弱面对面交流。", "Modern technology improves efficiency, but it may also reduce face-to-face communication.", "对比句"],
      ["互联网让学生更容易获取知识和信息。", "The Internet gives students wider access to knowledge and information.", "结果句"]
    ],
    drill: {
      cloze: "Automation can free workers from ____ tasks.",
      answer: "repetitive",
      order: ["can", "efficiency", "Technology", "enhance"],
      orderAnswer: ["Technology", "can", "enhance", "efficiency"]
    }
  },
  media: {
    title: "07 广告媒体类",
    focus: "广告影响、消费者、媒体娱乐、信息审查、品牌形象。",
    chunks: [
      ["电视广告", "TV commercials"],
      ["公益广告", "public-service ads"],
      ["虚假广告", "fake and illegal ads"],
      ["理性消费者", "wise consumers"],
      ["广告审查", "censorship of ads"],
      ["误导性信息", "misleading information"],
      ["醒目图片", "eye-catching pictures"],
      ["产品需求", "demand for products"],
      ["品牌形象", "brand image"],
      ["容易被广告影响", "be easily influenced by advertisements"]
    ],
    sentences: [
      ["广告可以提供信息，但也可能误导非理性消费者。", "Advertisements can provide information, but they may also mislead irrational consumers.", "对比句"],
      ["公益广告可以提高公众对社会问题的意识。", "Public-service ads can raise public awareness of social issues.", "功能句"],
      ["一些品牌把产品和更高社会地位联系起来。", "Some brands associate their products with a higher social status.", "媒体观点句"]
    ],
    drill: {
      cloze: "Public-service ads can raise public ____ of social issues.",
      answer: "awareness",
      order: ["can", "Advertisements", "consumers", "mislead"],
      orderAnswer: ["Advertisements", "can", "mislead", "consumers"]
    }
  },
  crime: {
    title: "08 犯罪类",
    focus: "犯罪预防、青少年犯罪、监狱、改造、社区服务。",
    chunks: [
      ["罪犯", "criminals / offenders"],
      ["违法活动", "illegal activities"],
      ["预防犯罪", "crime prevention"],
      ["青少年犯罪", "juvenile delinquency"],
      ["坐牢", "be put into prison"],
      ["改造", "rehabilitation"],
      ["惯犯", "re-offenders"],
      ["职业训练", "vocational training"],
      ["犯罪记录", "criminal records"],
      ["社区服务", "community service"]
    ],
    sentences: [
      ["职业训练可以降低再犯罪风险。", "Vocational training can reduce the risk of reoffending.", "因果观点"],
      ["社区服务让罪犯有机会回报社会。", "Community service gives offenders a chance to repay the community.", "结果句"],
      ["只把年轻罪犯关进监狱可能无法解决根本原因。", "Simply putting young offenders into prison may fail to address the root causes of crime.", "批判句"]
    ],
    drill: {
      cloze: "Rehabilitation can reduce the risk of ____.",
      answer: "reoffending",
      order: ["can", "community service", "help offenders", "repay the community"],
      orderAnswer: ["community service", "can", "help offenders", "repay the community"]
    }
  },
  city: {
    title: "09 城市发展类",
    focus: "城市化、交通、基础设施、分区、消费主义、绿色空间。",
    chunks: [
      ["城市化", "urbanization"],
      ["城市犯罪率上升", "rising urban crime rates"],
      ["就业机会", "employment opportunities"],
      ["公共基础设施", "public infrastructure"],
      ["生活节奏", "the pace of life"],
      ["社区感", "a sense of community"],
      ["城市功能分区", "functional zoning"],
      ["公共绿地", "public green space"],
      ["步行区", "car-free pedestrian zones"],
      ["完善公共交通", "improve public transport services"]
    ],
    sentences: [
      ["城市化能创造就业机会，但也会加重交通压力。", "Urbanization can create employment opportunities, but it may also increase traffic pressure.", "对比句"],
      ["公共绿地可以提升城市居民的生活质量。", "Public green space can improve the quality of life of urban residents.", "影响句"],
      ["完善公共交通能减少市民对私家车的依赖。", "Improving public transport can reduce citizens' reliance on private cars.", "非谓语主语"]
    ],
    drill: {
      cloze: "Improving public transport can reduce citizens' ____ on private cars.",
      answer: "reliance",
      order: ["can", "public green space", "quality of life", "improve"],
      orderAnswer: ["public green space", "can", "improve", "quality of life"]
    }
  },
  family: {
    title: "10 家庭类",
    focus: "家庭结构、育儿、老人照护、亲情关系、工作家庭平衡。",
    chunks: [
      ["核心家庭", "nuclear family"],
      ["大家庭", "extended family"],
      ["抚养孩子", "bring children up"],
      ["同伴压力", "peer pressure"],
      ["青少年犯罪", "juvenile delinquency"],
      ["单亲家庭", "single-parent families"],
      ["老人父母", "elderly parents"],
      ["家庭关系", "family ties"],
      ["情感支持", "emotional support"],
      ["工作家庭责任", "work and family commitments"]
    ],
    sentences: [
      ["父母应该为孩子的行为负责。", "Parents should take responsibility for their children's behaviour.", "责任句"],
      ["稳定的家庭关系能给孩子提供情感支持。", "Stable family ties can provide children with emotional support.", "影响句"],
      ["灵活工作制度帮助父母兼顾工作和家庭责任。", "Flexible working arrangements help parents combine work and family commitments.", "结果句"]
    ],
    drill: {
      cloze: "Stable family ties can provide children with ____ support.",
      answer: "emotional",
      order: ["should", "Parents", "for children's behaviour", "take responsibility"],
      orderAnswer: ["Parents", "should", "take responsibility", "for children's behaviour"]
    }
  },
  environment: {
    title: "11 环境类",
    focus: "全球变暖、污染、能源、包装垃圾、政府与个人责任。",
    chunks: [
      ["二氧化碳", "carbon dioxide"],
      ["温室效应", "greenhouse effect"],
      ["全球变暖", "global warming"],
      ["极端天气", "extreme weather conditions"],
      ["化石燃料", "fossil fuels"],
      ["野生动物栖息地", "wildlife habitats"],
      ["可再生能源", "renewable energy"],
      ["环保税", "green taxes"],
      ["不可降解塑料", "non-biodegradable plastics"],
      ["削减碳排放", "reduce carbon emissions"]
    ],
    sentences: [
      ["工厂和汽车排放会加剧全球变暖。", "Emissions from factories and cars can worsen global warming.", "因果句"],
      ["政府可以制定法律限制工厂排放。", "Governments can introduce laws to limit emissions from factories.", "政策句"],
      ["使用可再生能源有助于削减碳排放。", "Using renewable energy helps to reduce carbon emissions.", "非谓语主语"]
    ],
    drill: {
      cloze: "Renewable energy helps to reduce carbon ____.",
      answer: "emissions",
      order: ["can", "Governments", "green taxes", "impose"],
      orderAnswer: ["Governments", "can", "impose", "green taxes"]
    }
  },
  health: {
    title: "12 健康类",
    focus: "饮食、肥胖、运动、医保、现代生活方式。",
    chunks: [
      ["均衡饮食", "a balanced diet"],
      ["肥胖", "obesity"],
      ["糖尿病", "diabetes"],
      ["心脏病", "heart disease"],
      ["高血压", "high blood pressure"],
      ["保持身体健康", "maintain physical fitness"],
      ["经常锻炼", "exercise on a regular basis"],
      ["久坐生活方式", "sedentary lifestyles"],
      ["国家医保", "state health care"],
      ["副作用", "side effects"]
    ],
    sentences: [
      ["人体需要均衡饮食，因为不健康饮食会导致健康问题。", "The human body requires a balanced diet because an unhealthy diet can cause various health problems.", "because 原因句"],
      ["过度摄入垃圾食品会导致体重增加。", "Excessive intake of junk food can lead to weight gain.", "因果句"],
      ["经常运动是保持身体健康的重要前提。", "Regular exercise is essential for maintaining physical fitness.", "名词化表达"]
    ],
    drill: {
      cloze: "Regular exercise is essential for maintaining physical ____.",
      answer: "fitness",
      order: ["can", "junk food", "lead to", "weight gain"],
      orderAnswer: ["junk food", "can", "lead to", "weight gain"]
    }
  },
  culture: {
    title: "13 语言文化类",
    focus: "全球语言、文化认同、跨文化交流、外语学习。",
    chunks: [
      ["国际语言", "international languages"],
      ["主导语言", "dominant language"],
      ["少数民族语言", "minority languages"],
      ["语言全球化", "the globalization of languages"],
      ["跨文化交流", "cross-cultural communication"],
      ["接触外国文化", "exposure to foreign cultures"],
      ["英语能力好", "have a good command of English"],
      ["文化载体", "a carrier of culture"],
      ["文化认同", "cultural identity"],
      ["掌握外语", "master another language"]
    ],
    sentences: [
      ["英语是科技、科学和国际商务领域的主导语言。", "English is the dominant language of technology, science and international business.", "SVO 描述句"],
      ["接触外国文化可以拓展学生视野。", "Exposure to foreign cultures can broaden students' horizons.", "名词化主语"],
      ["少数语言构成一个国家文化认同的重要部分。", "Minority languages form an important part of a nation's cultural identity.", "文化观点句"]
    ],
    drill: {
      cloze: "Exposure to foreign cultures can broaden students' ____.",
      answer: "horizons",
      order: ["form", "Minority languages", "cultural identity", "part of"],
      orderAnswer: ["Minority languages", "form", "part of", "cultural identity"]
    }
  }
};

const topicVocabularyEnhancements = {
  government: {
    extraChunks: [["公共资金分配", "public spending allocation"], ["优先考虑基本需求", "prioritise basic needs"], ["社会稳定", "social stability"], ["公共利益", "the public interest"], ["财政资源有限", "limited financial resources"], ["有效监管", "effective regulation"]],
    logicIdeas: ["基本公共服务优先：医疗、教育、交通直接影响普通人的生活质量。", "政府干预要有限度：有些问题需要法律监管，但过度干预会压缩个人选择。", "税收要能解释给纳税人听：公共资金应流向能产生长期社会收益的领域。"],
    sentenceBank: [["政府应该优先把公共资金用于基本服务。", "Governments should prioritise essential public services when allocating public money.", "政策观点句"], ["有效监管可以保护公众利益。", "Effective regulation can protect the public interest without limiting personal freedom excessively.", "平衡句"], ["如果税收使用透明，公众更容易接受较高税负。", "If tax revenue is used transparently, citizens are more likely to accept a higher tax burden.", "条件句"]]
  },
  animals: {
    extraChunks: [["动物福利", "animal welfare"], ["伦理争议", "ethical controversy"], ["医学进步", "medical progress"], ["减少动物痛苦", "reduce animal suffering"], ["生态系统", "ecosystems"], ["生物多样性", "biodiversity"]],
    logicIdeas: ["动物实验题要平衡：医学收益真实存在，但非必要实验应被限制。", "动物保护不能只写同情心，也要写生态平衡和生物多样性。", "素食题可以从健康、伦理和环境三个角度展开。"],
    sentenceBank: [["动物实验在医学研究中仍有一定价值。", "Animal testing still has some value in medical research.", "让步句"], ["保护濒危物种有助于维持生态平衡。", "Protecting endangered species helps maintain ecological balance.", "影响句"], ["不必要的动物实验应该被更严格地限制。", "Unnecessary animal experiments should be subject to stricter restrictions.", "被动表达"]]
  },
  work: {
    extraChunks: [["职业安全感", "job security"], ["远程办公", "remote working"], ["职业发展", "career development"], ["员工福利", "employee benefits"], ["工作压力", "workplace pressure"], ["技能提升", "upskill / improve one's skills"]],
    logicIdeas: ["工作题常写现实权衡：收入、稳定性、兴趣和自由通常不能同时最大化。", "远程办公可以提高灵活性，但也可能削弱团队沟通和边界感。", "失业问题要从教育、职业培训和经济结构三方面找原因。"],
    sentenceBank: [["职业安全感会影响员工的长期生活规划。", "Job security can influence employees' long-term life planning.", "影响句"], ["远程办公使员工更容易平衡工作和家庭。", "Remote working makes it easier for employees to balance work and family life.", "结果句"], ["职业培训可以帮助工人适应劳动力市场变化。", "Job training can help workers adapt to changes in the labour market.", "解决方案句"]]
  },
  education: {
    extraChunks: [["教育公平", "educational equality"], ["学习动机", "learning motivation"], ["批判性思维", "critical thinking"], ["实践技能", "practical skills"], ["学术基础", "academic foundation"], ["个性化学习", "personalised learning"]],
    logicIdeas: ["教育题不要只写就业：还要写思维能力、社会责任和长期适应力。", "线上教育适合资源获取，但不能完全替代面对面互动。", "课程设置题适合写平衡：实用技能重要，学术基础也不能弱。"],
    sentenceBank: [["教育公平可以减少长期社会不平等。", "Educational equality can reduce long-term social inequality.", "因果观点"], ["批判性思维让学生更好地判断信息。", "Critical thinking enables students to evaluate information more effectively.", "能力句"], ["学校不应该只关注短期就业技能。", "Schools should not focus only on short-term employability skills.", "限制观点"]]
  },
  life: {
    extraChunks: [["生活质量", "quality of life"], ["物质主义", "materialism"], ["消费压力", "consumer pressure"], ["心理压力", "psychological stress"], ["社会孤立", "social isolation"], ["生活便利", "convenience in daily life"]],
    logicIdeas: ["生活类题常从现代化的代价展开：便利增加，但压力和孤独也增加。", "消费主义题可以写经济增长，也要写浪费、债务和价值观。", "城市生活题要连接住房、交通、就业和心理健康。"],
    sentenceBank: [["现代生活的便利并不一定带来更高幸福感。", "The convenience of modern life does not necessarily lead to greater happiness.", "反常识观点"], ["高生活成本会给年轻人造成巨大压力。", "A high cost of living can place considerable pressure on young people.", "影响句"], ["过度消费可能导致债务和资源浪费。", "Excessive consumption may lead to debt and a waste of resources.", "结果句"]]
  },
  technology: {
    extraChunks: [["人工智能", "artificial intelligence"], ["数字鸿沟", "the digital divide"], ["数据隐私", "data privacy"], ["自动化", "automation"], ["网络安全", "cybersecurity"], ["技术依赖", "dependence on technology"]],
    logicIdeas: ["科技题不要只写方便，要写效率、机会、公平、隐私和人际关系。", "AI 和自动化可以提升生产力，但会改变就业结构。", "数字鸿沟是高分点：技术发展可能扩大不同群体之间的差距。"],
    sentenceBank: [["自动化可以提高生产力，但也可能取代部分低技能工作。", "Automation can improve productivity, but it may also replace some low-skilled jobs.", "对比句"], ["数据隐私应该受到法律保护。", "Data privacy should be protected by law.", "被动观点"], ["数字鸿沟会限制弱势学生获得教育资源。", "The digital divide can limit disadvantaged students' access to educational resources.", "影响句"]]
  },
  media: {
    extraChunks: [["媒体素养", "media literacy"], ["虚假信息", "misinformation"], ["广告监管", "advertising regulation"], ["消费者行为", "consumer behaviour"], ["社会媒体平台", "social media platforms"], ["公众舆论", "public opinion"]],
    logicIdeas: ["广告媒体题要区分信息功能和操纵功能。", "儿童广告可以从心智不成熟和消费压力两个角度写。", "媒体监管要平衡：防止虚假信息，但不应过度限制表达自由。"],
    sentenceBank: [["媒体素养可以帮助人们识别误导性信息。", "Media literacy can help people identify misleading information.", "能力句"], ["广告会影响消费者行为，尤其是儿童。", "Advertisements can influence consumer behaviour, especially among children.", "影响句"], ["社交媒体平台应该承担更多审核责任。", "Social media platforms should take greater responsibility for content moderation.", "责任句"]]
  },
  crime: {
    extraChunks: [["法律威慑", "legal deterrence"], ["根本原因", "root causes"], ["社会不平等", "social inequality"], ["再融入社会", "reintegration into society"], ["严厉惩罚", "severe punishment"], ["预防性政策", "preventive policies"]],
    logicIdeas: ["犯罪题要避免只写惩罚，7+ 通常要写预防和改造。", "青少年犯罪可从家庭、学校、同伴压力和贫困解释。", "严厉惩罚有威慑作用，但不能解决教育和就业缺失等根本原因。"],
    sentenceBank: [["改造项目能帮助罪犯重新融入社会。", "Rehabilitation programmes can help offenders reintegrate into society.", "解决方案句"], ["严厉惩罚可能有威慑作用。", "Severe punishment may act as a deterrent.", "让步句"], ["解决犯罪的根本原因比单纯延长刑期更有效。", "Addressing the root causes of crime is more effective than simply extending prison sentences.", "比较句"]]
  },
  city: {
    extraChunks: [["城市规划", "urban planning"], ["住房负担能力", "housing affordability"], ["通勤时间", "commuting time"], ["公共设施", "public facilities"], ["空气质量", "air quality"], ["城市更新", "urban renewal"]],
    logicIdeas: ["城市题常用个人/社会双层：个人通勤压力，社会交通拥堵和污染。", "城市发展不能只追求经济，还要考虑住房、绿地和公共设施。", "交通题适合写公共交通、限车政策和城市规划组合方案。"],
    sentenceBank: [["良好的城市规划可以减少交通拥堵。", "Good urban planning can reduce traffic congestion.", "解决方案句"], ["住房负担能力影响年轻人的生活选择。", "Housing affordability affects young people's life choices.", "影响句"], ["增加公共绿地有助于改善空气质量和心理健康。", "Increasing public green space can improve air quality and mental health.", "双结果句"]]
  },
  family: {
    extraChunks: [["育儿责任", "parenting responsibilities"], ["代际关系", "intergenerational relationships"], ["儿童早期发展", "early childhood development"], ["家庭稳定", "family stability"], ["养老负担", "elderly care burden"], ["亲子沟通", "parent-child communication"]],
    logicIdeas: ["家庭题要写影响链：家庭环境 -> 儿童行为 -> 社会结果。", "父母和学校责任题适合写分工：家庭塑造价值观，学校提供规则和社交环境。", "老龄化题可以从家庭压力、公共服务和财政负担展开。"],
    sentenceBank: [["家庭稳定对儿童早期发展非常重要。", "Family stability is crucial for early childhood development.", "观点句"], ["良好的亲子沟通可以减少青少年行为问题。", "Good parent-child communication can reduce behavioural problems among teenagers.", "因果句"], ["养老负担不应完全落在家庭身上。", "The burden of elderly care should not fall entirely on families.", "政策观点"]]
  },
  environment: {
    extraChunks: [["环境可持续性", "environmental sustainability"], ["过度消费", "overconsumption"], ["垃圾分类", "waste sorting"], ["环保意识", "environmental awareness"], ["政府干预", "government intervention"], ["企业责任", "corporate responsibility"]],
    logicIdeas: ["环境题最好写多方责任：政府立法、企业减排、个人改变消费习惯。", "个人行动不是无效，但系统性改变通常影响更大。", "环保政策要说明代价和收益：短期成本换长期可持续。"],
    sentenceBank: [["政府干预对减少工业污染至关重要。", "Government intervention is essential for reducing industrial pollution.", "政策句"], ["个人消费习惯也会影响环境可持续性。", "Individual consumption habits can also affect environmental sustainability.", "补充观点"], ["企业应该为其碳排放承担责任。", "Companies should take responsibility for their carbon emissions.", "责任句"]]
  },
  health: {
    extraChunks: [["公共健康", "public health"], ["预防措施", "preventive measures"], ["医疗资源", "medical resources"], ["心理健康", "mental health"], ["健康意识", "health awareness"], ["生活方式疾病", "lifestyle-related diseases"]],
    logicIdeas: ["健康题不要只写个人自律，也要写政府、学校和食品行业的影响。", "预防比治疗更适合写公共政策，因为成本更低、影响更广。", "心理健康可以连接工作压力、城市生活和社交媒体。"],
    sentenceBank: [["预防措施比后期治疗更具成本效益。", "Preventive measures are more cost-effective than later treatment.", "比较句"], ["学校可以帮助学生建立健康意识。", "Schools can help students develop health awareness.", "教育连接"], ["心理健康问题会影响学习和工作效率。", "Mental health problems can affect academic and workplace performance.", "影响句"]]
  },
  culture: {
    extraChunks: [["文化多样性", "cultural diversity"], ["文化传承", "cultural heritage"], ["本土文化", "local culture"], ["全球文化", "global culture"], ["语言保护", "language preservation"], ["跨文化理解", "cross-cultural understanding"]],
    logicIdeas: ["语言文化题要避免只写英语有用，还要写文化身份和少数语言保护。", "全球化可以促进交流，但也可能削弱本土文化。", "学习外语的价值不仅是就业，还包括跨文化理解。"],
    sentenceBank: [["语言保护有助于维护文化多样性。", "Language preservation helps maintain cultural diversity.", "文化观点"], ["全球文化的传播可能削弱本土传统。", "The spread of global culture may weaken local traditions.", "负面影响"], ["外语学习可以促进跨文化理解。", "Learning a foreign language can promote cross-cultural understanding.", "正面影响"]]
  }
};

const topicQuestionExamples = {
  government: [
    ["公共服务", "观点类", "Governments should spend more money on public services such as health care and transport than on arts. To what extent do you agree or disagree?", "British Council Academic Writing practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"],
    ["税收", "讨论类", "Some people believe higher taxes are necessary to improve public services, while others think people should keep more of their income. Discuss both views and give your opinion.", "IELTS Mentor Task 2 sample bank", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["政府责任", "双问题", "What social problems should governments solve first, and what can individuals do to help?", "IELTS Buddy Task 2 topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["公共资金分配", "优缺点/权衡", "Some cities spend large amounts of public money on sports facilities. Do the advantages outweigh the disadvantages?", "IELTS Liz essay question collections", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["监管", "观点类", "Governments should control the price of basic goods such as food and fuel. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"]
  ],
  animals: [
    ["动物实验", "观点类", "Some people think animal testing is necessary for medical progress. Others believe it is morally wrong. Discuss both views and give your opinion.", "IELTS Liz topic question style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["动物园", "观点类", "Zoos are no longer necessary in the modern world. To what extent do you agree or disagree?", "IELTS Mentor Task 2 sample bank", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["野生动物保护", "双问题", "Why are many wild animals becoming endangered, and what can be done to protect them?", "IELTS Buddy Task 2 topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["素食", "讨论类", "Some people choose a vegetarian diet for ethical reasons, while others believe eating meat is natural. Discuss both views and give your opinion.", "IELTS Advantage Task 2 training style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["宠物与责任", "观点类", "Keeping animals as pets teaches children responsibility. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"]
  ],
  work: [
    ["工作时长", "观点类", "The working week should be shorter and workers should have longer weekends. To what extent do you agree or disagree?", "IELTS Mentor Essay #1529 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["大公司/小公司", "比较类", "It is better to work for a large company than a small one. To what extent do you agree or disagree?", "IELTS Mentor Essay #1524 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["求职标准", "观点类", "Employers should focus more on personal qualities than qualifications when hiring new staff. To what extent do you agree or disagree?", "IELTS Mentor Essay #1518 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["远程办公", "优缺点", "More people are working from home instead of travelling to offices. Do the advantages outweigh the disadvantages?", "IELTS Liz recent topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["职业变化", "原因/影响", "In the past, people often had one job for life, but now they change jobs more often. What are the reasons and effects?", "IELTS Mentor Essay #1526 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"]
  ],
  education: [
    ["教师作用", "观点类", "The academic success of students depends mainly on good teachers. To what extent do you agree or disagree?", "IELTS Mentor Essay #1519 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["实践技能", "观点类", "Schools should focus more on practical skills than academic subjects. To what extent do you agree or disagree?", "IELTS Advantage Task 2 training style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["线上教育", "利弊类", "Online learning is becoming increasingly common. Do the advantages outweigh the disadvantages?", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"],
    ["教育公平", "双问题", "Why do some children have less access to good education, and what can governments do to solve this problem?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["考试", "讨论类", "Some people think exams are the best way to measure students' ability, while others prefer continuous assessment. Discuss both views and give your opinion.", "IELTS Liz question collection style", "https://ieltsliz.com/100-ielts-essay-questions/"]
  ],
  life: [
    ["储蓄", "观点类", "It is important for everyone to save money for the future. To what extent do you agree or disagree?", "IELTS Mentor Essay #1531 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["消费主义", "观点类", "Individual greed and selfishness have become the basis of modern society. To what extent do you agree or disagree?", "IELTS Mentor Essay #1523 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["社会变化", "观点类", "Some people dislike changes in society and in their own lives. Why do they feel this way, and is this positive or negative?", "IELTS Mentor Essay #1527 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["生活压力", "双问题", "Modern life is becoming more stressful. What are the causes, and what solutions can you suggest?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["快节奏生活", "优缺点", "Fast-paced modern life gives people more opportunities but also creates more pressure. Do the advantages outweigh the disadvantages?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"]
  ],
  technology: [
    ["自动化", "利弊类", "Machines and robots are replacing human workers in many jobs. Do the advantages outweigh the disadvantages?", "IELTS Liz technology topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["网络学习", "观点类", "Digital technology has changed the way people learn. Is this a positive or negative development?", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"],
    ["隐私", "讨论类", "Some people think technology improves security, while others believe it reduces privacy. Discuss both views and give your opinion.", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["社交关系", "观点类", "Technology has made communication easier but has weakened real relationships. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["科技与贫富差距", "双问题", "Why can new technology widen the gap between rich and poor people, and how can this be reduced?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"]
  ],
  media: [
    ["新闻获取", "观点类", "The best way to get the news is through newspapers. To what extent do you agree or disagree?", "IELTS Mentor Essay #1517 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["广告影响", "观点类", "Advertising encourages people to buy things they do not need. To what extent do you agree or disagree?", "IELTS Liz advertising topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["儿童广告", "讨论类", "Some people think advertisements aimed at children should be banned. Others think parents should control children's choices. Discuss both views.", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["社交媒体", "利弊类", "Social media has changed how people receive information. Do the advantages outweigh the disadvantages?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["名人广告", "观点类", "Famous people are often used in advertisements. Is this a positive or negative development?", "IELTS Mentor Essay #1535 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"]
  ],
  crime: [
    ["惩罚与改造", "讨论类", "Some people think criminals should be punished, while others believe they should be rehabilitated. Discuss both views and give your opinion.", "IELTS Buddy Task 2 topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["青少年犯罪", "双问题", "What are the causes of juvenile crime, and what can be done to reduce it?", "IELTS Liz crime topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["监狱", "观点类", "Prison is the best way to reduce crime. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["社区服务", "观点类", "Community service is a better punishment than prison for minor crimes. To what extent do you agree or disagree?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["网络犯罪", "双问题", "Why is cybercrime increasing, and how can individuals and governments protect people online?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"]
  ],
  city: [
    ["城市化", "原因/影响", "More people are moving from rural areas to cities. What are the causes and effects of this trend?", "IELTS Liz city topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["交通拥堵", "双问题", "Traffic congestion is a serious problem in many cities. What are the causes and what solutions can you suggest?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["住房", "观点类", "Governments should provide affordable housing for people who cannot buy homes. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["购物与城市", "原因/影响", "The shopping habits of people depend more on their age group than on other factors. To what extent do you agree or disagree?", "IELTS Mentor Essay #1516 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["公共空间", "利弊类", "Cities are creating more car-free zones and public green spaces. Do the advantages outweigh the disadvantages?", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"]
  ],
  family: [
    ["离家独立", "观点类", "Young people should be encouraged to leave home when they become adults. To what extent do you agree or disagree?", "IELTS Mentor Essay #1520 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["父母与学校", "讨论类", "Some people think parents should teach children to be good members of society, while others believe schools should do this. Discuss both views and give your opinion.", "IELTS Liz family topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["老人照护", "讨论类", "Some people think families should look after elderly relatives, while others believe governments should provide care. Discuss both views.", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["儿童行为", "双问题", "Why do some children behave badly, and what can parents and schools do to solve this problem?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["工作家庭平衡", "观点类", "Employers should help workers balance work and family life. To what extent do you agree or disagree?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"]
  ],
  environment: [
    ["可持续生活", "观点类", "There is a growing emphasis on sustainable living and reducing environmental impact. Is this a positive development?", "IELTS Mentor Essay #1522 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["个人与政府", "观点类", "Individuals can do little to improve the environment, and only governments and large companies can make a difference. To what extent do you agree or disagree?", "IELTS Liz environment topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["消费与环境", "双问题", "How does consumer culture damage the environment, and what can be done to reduce this damage?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["本地产品", "观点类", "Consumers are choosing to buy goods that are produced locally. Is this a positive or negative development?", "IELTS Mentor Essay #1534 direction", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["能源", "讨论类", "Some people support the use of renewable energy, while others believe fossil fuels are still necessary. Discuss both views.", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"]
  ],
  health: [
    ["公共健康", "观点类", "Governments should be responsible for improving public health. To what extent do you agree or disagree?", "IELTS Liz health topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["饮食", "双问题", "Why are more people eating unhealthy food, and what can be done to encourage healthier diets?", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["运动", "观点类", "Schools should spend more time teaching children about exercise and healthy lifestyles. To what extent do you agree or disagree?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["医疗资源", "讨论类", "Some people think public money should be spent on preventing illness, while others think it should be spent on treating patients. Discuss both views.", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["心理健康", "原因/解决", "Mental health problems are becoming more common among young people. What are the causes and solutions?", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"]
  ],
  culture: [
    ["英语全球化", "观点类", "The spread of English as a global language has more advantages than disadvantages. To what extent do you agree or disagree?", "IELTS Liz language topic style", "https://ieltsliz.com/100-ielts-essay-questions/"],
    ["少数语言", "讨论类", "Some people believe minority languages should be protected, while others think this is too expensive. Discuss both views.", "IELTS Buddy topic practice", "https://www.ieltsbuddy.com/ielts-writing-task-2.html"],
    ["文化全球化", "观点类", "Global culture is making countries more similar. Is this a positive or negative development?", "IELTS Advantage Task 2 style", "https://www.ieltsadvantage.com/writing-task-2/"],
    ["传统文化", "双问题", "Why are traditional cultures disappearing, and what can be done to preserve them?", "IELTS Mentor public question bank style", "https://www.ielts-mentor.com/writing-sample/writing-task-2"],
    ["外语学习", "观点类", "Learning a foreign language should be compulsory in schools. To what extent do you agree or disagree?", "British Council Academic practice format", "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing/academic"]
  ]
};

const exerciseBank = {
  education: {
    matching: [
      ["curriculum", "课程设置"],
      ["employability", "就业能力"],
      ["equal access", "公平获得机会"]
    ],
    cloze: {
      sentence: "Digital platforms can ____ high-quality educational resources to students in remote areas.",
      answer: "give access to"
    },
    dictation: {
      chinese: "默写：学校可以增加实践技能，但不应削弱学术科目。",
      answer: "Schools can include more practical skills, but they should not weaken academic subjects."
    }
  },
  technology: {
    matching: [
      ["automation", "自动化"],
      ["privacy", "隐私"],
      ["digital literacy", "数字素养"]
    ],
    cloze: {
      sentence: "Online tools can ____ students to study at their own pace.",
      answer: "enable"
    },
    dictation: {
      chinese: "默写：科技只有在支持主动思考时才真正改善学习。",
      answer: "Technology improves learning only when it supports active thinking."
    }
  },
  government: {
    matching: [
      ["public funding", "公共资金"],
      ["regulation", "监管"],
      ["welfare", "福利"]
    ],
    cloze: {
      sentence: "Governments should ____ public money according to social needs.",
      answer: "allocate"
    },
    dictation: {
      chinese: "默写：公共服务应该优先，因为它们影响人们的基本生活。",
      answer: "Public services should be prioritized because they affect people's basic living standards."
    }
  },
  environment: {
    matching: [
      ["sustainability", "可持续性"],
      ["carbon emissions", "碳排放"],
      ["consumer behavior", "消费行为"]
    ],
    cloze: {
      sentence: "Stricter rules can reduce ____ and encourage cleaner production.",
      answer: "carbon emissions"
    },
    dictation: {
      chinese: "默写：环境改善需要制度改变和个人参与。",
      answer: "Environmental improvement requires both systemic change and individual participation."
    }
  },
  health: {
    matching: [
      ["obesity", "肥胖"],
      ["mental health", "心理健康"],
      ["preventive measures", "预防措施"]
    ],
    cloze: {
      sentence: "Public campaigns can encourage people to take ____ before health problems become serious.",
      answer: "preventive measures"
    },
    dictation: {
      chinese: "默写：公共健康不能只依赖个人自律。",
      answer: "Public health cannot rely only on individual self-discipline."
    }
  },
  work: {
    matching: [
      ["job satisfaction", "工作满意度"],
      ["financial stability", "经济稳定"],
      ["burnout", "职业倦怠"]
    ],
    cloze: {
      sentence: "A stable income gives employees a sense of ____.",
      answer: "financial stability"
    },
    dictation: {
      chinese: "默写：稳定性是基础，但满意度影响长期表现。",
      answer: "Security is the foundation, but satisfaction affects long-term performance."
    }
  },
  family: {
    matching: [
      ["parental guidance", "父母引导"],
      ["child development", "儿童发展"],
      ["community ties", "社区联系"]
    ],
    cloze: {
      sentence: "Schools provide a social environment where children learn rules and ____.",
      answer: "cooperation"
    },
    dictation: {
      chinese: "默写：家庭和学校都应该参与儿童价值观教育。",
      answer: "Both families and schools should be involved in children's moral education."
    }
  },
  crime: {
    matching: [
      ["rehabilitation", "改造"],
      ["deterrence", "威慑"],
      ["juvenile crime", "青少年犯罪"]
    ],
    cloze: {
      sentence: "Education and job training can reduce the risk of ____.",
      answer: "reoffending"
    },
    dictation: {
      chinese: "默写：改造比单纯惩罚更能减少再次犯罪。",
      answer: "Rehabilitation can reduce reoffending more effectively than punishment alone."
    }
  },
  cities: {
    matching: [
      ["urbanization", "城市化"],
      ["traffic congestion", "交通拥堵"],
      ["urban planning", "城市规划"]
    ],
    cloze: {
      sentence: "Reliable public transport can reduce people's ____ on private cars.",
      answer: "dependence"
    },
    dictation: {
      chinese: "默写：解决拥堵需要改变人们的出行结构。",
      answer: "Solving congestion requires changing the way people travel."
    }
  },
  culture: {
    matching: [
      ["cultural identity", "文化身份"],
      ["heritage", "遗产"],
      ["consumerism", "消费主义"]
    ],
    cloze: {
      sentence: "Traditional festivals help preserve a sense of ____.",
      answer: "cultural identity"
    },
    dictation: {
      chinese: "默写：现代化不应该意味着抹掉有价值的传统。",
      answer: "Modernization should not mean erasing valuable traditions."
    }
  }
};

const nativePhraseBank = [
  { topic: "education", en: "sth. be an arduous process", zh: "某事是一个需要付出艰苦努力的过程", definition: "a tiring process that requires a great deal of effort" },
  { topic: "education", en: "be very rewarding", zh: "有回报的", definition: "making someone feel satisfied" },
  { topic: "education", en: "someone's aspiration/pursuit", zh: "梦想，追求", definition: "someone's strong wish for achievement" },
  { topic: "education", en: "concentrate on sth.", zh: "集中精力于某事", definition: "direct someone's attention towards sth." },
  { topic: "education", en: "form the basis of sth.", zh: "为某事物打下基础", definition: "provide the ideas or actions from which sth. can develop" },
  { topic: "work", en: "job security", zh: "工作稳定性", definition: "being free from the threat of losing one's job" },
  { topic: "work", en: "be unemployed", zh: "失业的", definition: "be without a job" },
  { topic: "work", en: "job satisfaction", zh: "工作满意度", definition: "the pleasant feeling you get from a job" },
  { topic: "work", en: "be entitled to sth.", zh: "享有某种权利", definition: "be given the right to do sth." },
  { topic: "work", en: "a sense of fulfilment", zh: "成就感", definition: "the feeling that your abilities and interests are developed" },
  { topic: "technology", en: "become widely available", zh: "得到广泛的普及", definition: "can be easily obtained or used" },
  { topic: "technology", en: "break new ground", zh: "开拓新的领域", definition: "do something completely different from what has been done before" },
  { topic: "technology", en: "scientific breakthroughs", zh: "科学上的新突破", definition: "a scientific discovery or achievement" },
  { topic: "technology", en: "the advent of sth.", zh: "某种新科技、新产品或新制度的到来", definition: "the introduction of new technology, product or system" },
  { topic: "technology", en: "supersede / supplant sth.", zh: "取代过去的某种事物", definition: "replace something, often by being more powerful" },
  { topic: "government", en: "play a regulatory role", zh: "发挥监管者的作用", definition: "control an activity, process or industry" },
  { topic: "government", en: "regulate and oversee", zh: "监督管理，监管", definition: "watch and control something to ensure it works properly" },
  { topic: "government", en: "rules and regulations", zh: "规章制度", definition: "official rules that control the way things are done" },
  { topic: "government", en: "impose a ban on sth.", zh: "禁止某事物", definition: "officially order that sth. should be forbidden" },
  { topic: "government", en: "impose a burden on sb./sth.", zh: "给某人或事物造成负担", definition: "have a negative effect by causing trouble" },
  { topic: "environment", en: "dispose of sth.", zh: "处理掉，扔掉", definition: "get rid of sth. that you no longer need" },
  { topic: "environment", en: "disposable...", zh: "一次性的用品", definition: "designed to be thrown away after being used once" },
  { topic: "environment", en: "vicious circle", zh: "恶性循环", definition: "a situation in which one problem causes another" },
  { topic: "environment", en: "adverse effect", zh: "负面影响", definition: "negative effect" },
  { topic: "environment", en: "non-biodegradable material", zh: "生物不可降解的材料", definition: "material that cannot be broken down naturally" },
  { topic: "health", en: "life expectancy", zh: "人口的预期寿命", definition: "the number of years a person is expected to live" },
  { topic: "health", en: "extend life", zh: "延长寿命", definition: "make people live longer" },
  { topic: "health", en: "be health-conscious", zh: "注重健康的", definition: "concerned about nutrition and healthy habits" },
  { topic: "health", en: "an exercise regimen", zh: "健身计划", definition: "a programme of exercise for improving health" },
  { topic: "health", en: "an allergy to sth.", zh: "对某种物质的过敏", definition: "a medical condition caused by something eaten, touched or breathed" },
  { topic: "crime", en: "law-abiding citizens", zh: "遵纪守法的公民", definition: "people who respect and obey the law" },
  { topic: "crime", en: "the judicial system", zh: "司法系统", definition: "the system connected with courts, judges and legal decisions" },
  { topic: "crime", en: "pass new legislation", zh: "通过新的立法", definition: "pass a new law or a set of new laws" },
  { topic: "crime", en: "uphold an ordered society", zh: "维持社会稳定与安全", definition: "keep social order and safety" },
  { topic: "crime", en: "curb lawless behaviour", zh: "遏制违法行为", definition: "stop or control illegal conduct" },
  { topic: "culture", en: "multicultural society", zh: "多元文化社会", definition: "a society with many different customs and beliefs" },
  { topic: "culture", en: "cultural mosaic", zh: "多元的文化", definition: "a culture made up of many different things" },
  { topic: "culture", en: "disseminate", zh: "传播信息或知识", definition: "make information or knowledge available to many people" },
  { topic: "culture", en: "mainstream", zh: "主流的", definition: "accepted by most people as ordinary or normal" },
  { topic: "culture", en: "be customary", zh: "按惯例做某事", definition: "usual in a particular society or situation" },
  { topic: "family", en: "sth. runs in the family", zh: "在家族中世代相传", definition: "occur often in the family through generations" },
  { topic: "family", en: "be hereditary", zh: "是遗传的", definition: "be passed through the genes of a parent to a child" },
  { topic: "family", en: "someone's attachment to sb./sth.", zh: "对某人或事物的依恋", definition: "the feeling of liking sb./sth. very much" },
  { topic: "family", en: "be estranged from sb.", zh: "与亲友疏远的", definition: "not seeing friends or relatives very often" },
  { topic: "family", en: "family bonds", zh: "亲情，亲人间的感情纽带", definition: "a uniting force between family members" },
  { topic: "cities", en: "transport infrastructure", zh: "交通设施", definition: "the basic structure on which a transport system is built" },
  { topic: "cities", en: "road network", zh: "公路网", definition: "a large road system consisting of connected roads" },
  { topic: "cities", en: "traffic bottleneck", zh: "交通瓶颈", definition: "a place where a road is narrow or blocked" },
  { topic: "cities", en: "inch along", zh: "极为缓慢地行进", definition: "move very slowly" },
  { topic: "cities", en: "bumper-to-bumper", zh: "交通十分拥堵的", definition: "very close together and moving slowly" }
];

const lifeVocabularyTopics = {
  shopping: {
    name: "Shopping",
    zh: "买东西",
    parts: ["part1", "part2", "part3"],
    questions: {
      part1: "Do you enjoy shopping? What do you usually buy?",
      part2: "Describe something you bought that you were pleased with.",
      part3: "How has online shopping changed people's purchasing habits?"
    },
    memory: "<b>buy</b> 普通买 · <b>purchase</b> 正式买 · <b>get</b> 口语买 · <b>pick up</b> 顺便买 · <b>shop around</b> 货比三家 · <b>stock up on</b> 大量囤",
    categories: [
      {
        id: "buying",
        label: "表示“买”",
        hint: "先掌握语气和使用场景：普通、正式、口语和顺便购买。",
        words: [
          { word: "buy", meaning: "买；购买", tone: "最常见 · 通用", difference: "强调付钱买下某物，日常场景首选。", collocation: "buy something for someone", example: "I bought a birthday present for my sister.", translation: "我给妹妹买了一份生日礼物。" },
          { word: "purchase", meaning: "购买；购置", tone: "正式 · 商业/书面", difference: "含义接近 buy，但更正式，也可作名词。", collocation: "purchase goods online", example: "Tickets can be purchased online in advance.", translation: "门票可以提前在网上购买。" },
          { word: "get", meaning: "买到；弄到", tone: "口语 · 自然", difference: "重点是获得某物，不特别强调付款过程。", collocation: "get some milk", example: "I need to get some milk on my way home.", translation: "我回家路上得买点牛奶。" },
          { word: "pick up", meaning: "顺便买；取回", tone: "口语 · 顺路", difference: "常指路过某处时顺便购买少量东西。", collocation: "pick up some groceries", example: "Could you pick up some bread after work?", translation: "你下班后能顺便买些面包吗？" }
        ]
      },
      {
        id: "choosing",
        label: "逛街与选购",
        hint: "区分购物活动、随便看看、货比三家和最终挑选。",
        words: [
          { word: "go shopping", meaning: "去购物；逛街", tone: "日常活动", difference: "表示购物这项活动，不强调买了什么。", collocation: "go shopping for clothes", example: "We went shopping for winter clothes yesterday.", translation: "我们昨天去买冬装了。" },
          { word: "browse", meaning: "随便看看；浏览", tone: "无明确购买目标", difference: "只看商品，可能不会购买；线上线下都能用。", collocation: "browse online stores", example: "I was just browsing and did not intend to buy anything.", translation: "我只是随便看看，没打算买东西。" },
          { word: "shop around", meaning: "货比三家", tone: "比较选择", difference: "在决定购买前比较不同商家的价格或质量。", collocation: "shop around for the best deal", example: "It is worth shopping around before buying a laptop.", translation: "买笔记本电脑前值得货比三家。" },
          { word: "select", meaning: "挑选；选定", tone: "比 choose 正式", difference: "强调经过考虑后，从多个选项中选定一个。", collocation: "carefully select a product", example: "Customers can select a delivery time at checkout.", translation: "顾客可以在结账时选择配送时间。" }
        ]
      },
      {
        id: "bulk",
        label: "大量购买与囤货",
        hint: "表达为未来做准备，或通过一次买很多来降低成本。",
        words: [
          { word: "stock up on", meaning: "囤积；备足", tone: "为以后准备", difference: "后接要大量储备的物品，介词 on 不能漏。", collocation: "stock up on food", example: "People stocked up on food before the storm.", translation: "人们在暴风雨前囤积了食物。" },
          { word: "buy in bulk", meaning: "批量购买", tone: "强调数量与省钱", difference: "一次购买大量同类商品，通常价格更低。", collocation: "buy household goods in bulk", example: "Large families can save money by buying in bulk.", translation: "大家庭可以通过批量购买来省钱。" }
        ]
      },
      {
        id: "price",
        label: "价格与优惠",
        hint: "描述价格高低时，尽量使用准确评价，而不只说 cheap 或 expensive。",
        words: [
          { word: "affordable", meaning: "价格负担得起的", tone: "正面 · 常用于写作", difference: "价格在人们经济承受范围内，不等于质量差。", collocation: "affordable products / housing", example: "Online platforms give consumers access to more affordable products.", translation: "网络平台让消费者可以买到价格更实惠的产品。" },
          { word: "overpriced", meaning: "定价过高的", tone: "负面评价", difference: "不仅贵，而且贵得不合理、不值这个价格。", collocation: "an overpriced product", example: "The jacket looks stylish, but it is clearly overpriced.", translation: "这件夹克很时尚，但定价明显过高。" },
          { word: "a bargain", meaning: "便宜货；划算的交易", tone: "口语 · 正面", difference: "指价格远低于预期，买得非常划算。", collocation: "pick up a bargain", example: "I got this coat for half price—it was a real bargain.", translation: "这件外套我半价买的，真的很划算。" },
          { word: "good value for money", meaning: "物有所值", tone: "实用评价", difference: "重点是质量、用途与价格相比很值得，不一定便宜。", collocation: "offer good value for money", example: "The basic model offers good value for money.", translation: "基础款物有所值。" }
        ]
      },
      {
        id: "payment",
        label: "付款与结账",
        hint: "注意 pay、spend、afford 的句型不同。",
        words: [
          { word: "pay for", meaning: "为……付款", tone: "强调支付对象", difference: "pay 后接金额；pay for 后接商品或服务。", collocation: "pay for the meal", example: "She paid for the order by card.", translation: "她用银行卡支付了订单。" },
          { word: "spend ... on", meaning: "把……花在……上", tone: "强调花费", difference: "句型为 spend + 钱/时间 + on + 名词。", collocation: "spend money on clothes", example: "Young consumers often spend more money on experiences.", translation: "年轻消费者往往在体验上花更多钱。" },
          { word: "afford", meaning: "买得起；承担得起", tone: "能力与成本", difference: "通常接名词或 to do，不能说 afford to something。", collocation: "afford to buy", example: "Many students cannot afford to buy new textbooks.", translation: "许多学生买不起新教材。" },
          { word: "checkout", meaning: "结账处；结账流程", tone: "商店/网购", difference: "可指实体店收银区，也可指网购的最后付款页面。", collocation: "proceed to checkout", example: "You can apply the discount code at checkout.", translation: "你可以在结账时使用折扣码。" }
        ]
      },
      {
        id: "returns",
        label: "退换货与售后",
        hint: "保存 receipt，并分清 return、exchange 和 refund。",
        words: [
          { word: "return", meaning: "退货；归还", tone: "把商品退回", difference: "强调把不需要或有问题的商品交回商家。", collocation: "return an item", example: "You can return the item within 30 days.", translation: "你可以在30天内退回该商品。" },
          { word: "exchange", meaning: "换货；更换", tone: "换成另一件", difference: "不是拿回钱，而是换尺寸、颜色或另一件商品。", collocation: "exchange it for a larger size", example: "Could I exchange this shirt for a larger size?", translation: "我能把这件衬衫换成大一码的吗？" },
          { word: "refund", meaning: "退款；退还款项", tone: "拿回钱", difference: "既可作名词，也可作动词；强调钱被退回。", collocation: "request / receive a refund", example: "The company offered a full refund.", translation: "公司提供了全额退款。" },
          { word: "warranty", meaning: "保修；质保", tone: "售后保障", difference: "商品在规定期限内出现问题时的维修或更换承诺。", collocation: "under warranty", example: "The phone is still under warranty.", translation: "这部手机仍在保修期内。" }
        ]
      },
      {
        id: "online",
        label: "线上购物",
        hint: "按照下单、配送到收货的顺序记忆网购表达。",
        words: [
          { word: "place an order", meaning: "下单", tone: "订单开始", difference: "比 make an order 更自然，是固定搭配。", collocation: "place an order online", example: "I placed the order on Monday and received it today.", translation: "我周一下单，今天收到了。" },
          { word: "add to cart", meaning: "加入购物车", tone: "网购操作", difference: "美式英语常用 cart，英式网站也常见 basket。", collocation: "add an item to your cart", example: "Add the item to your cart before it sells out.", translation: "在商品售罄前把它加入购物车。" },
          { word: "out of stock", meaning: "缺货；售罄", tone: "库存状态", difference: "反义表达是 in stock，表示有现货。", collocation: "temporarily out of stock", example: "This colour is currently out of stock.", translation: "这个颜色目前缺货。" },
          { word: "delivery", meaning: "配送；送货", tone: "物流环节", difference: "shipping 更偏运输过程或运费；delivery 强调送到收件人。", collocation: "free / next-day delivery", example: "The store offers free next-day delivery.", translation: "这家商店提供免费的次日送达服务。" }
        ]
      },
      {
        id: "ielts",
        label: "雅思写作升级",
        hint: "把日常购物提升为消费行为、社会趋势和环境影响。",
        words: [
          { word: "consumerism", meaning: "消费主义", tone: "社会议题", difference: "指鼓励不断购买商品的社会观念，不等于普通 consumption。", collocation: "the rise of consumerism", example: "The rise of consumerism has increased the amount of household waste.", translation: "消费主义的兴起增加了家庭垃圾量。" },
          { word: "purchasing habits", meaning: "购买习惯", tone: "学术表达", difference: "描述消费者经常如何、为何以及在哪里购买。", collocation: "change purchasing habits", example: "Online advertising can influence young people's purchasing habits.", translation: "网络广告会影响年轻人的购买习惯。" },
          { word: "impulse buying", meaning: "冲动消费", tone: "无计划购买", difference: "指未提前计划、受情绪或促销刺激而购买。", collocation: "encourage impulse buying", example: "Limited-time discounts often encourage impulse buying.", translation: "限时折扣往往会刺激冲动消费。" },
          { word: "purchasing power", meaning: "购买力", tone: "经济表达", difference: "指个人或群体用现有收入能够购买商品和服务的能力。", collocation: "increase consumers' purchasing power", example: "Higher wages may increase consumers' purchasing power.", translation: "更高的工资可能提升消费者的购买力。" }
        ]
      }
    ]
  },
  food: {
    name: "Food",
    zh: "食物与用餐",
    parts: ["part1", "part2", "part3"],
    questions: {
      part1: "What kind of food do you enjoy eating?",
      part2: "Describe a memorable meal you had with other people.",
      part3: "Why are people's eating habits changing?"
    },
    memory: "<b>food</b> 泛指食物 · <b>dish</b> 一道菜 · <b>meal</b> 一顿饭 · <b>cuisine</b> 地方菜系 · <b>snack</b> 小吃 · <b>ingredient</b> 食材",
    categories: [
      {
        id: "food-basics",
        label: "食物与菜品",
        hint: "分清 food、dish、meal 和 cuisine：它们都和“吃”有关，但指代范围不同。",
        words: [
          { word: "food", meaning: "食物；食品", tone: "泛指 · 通常不可数", difference: "泛指供人或动物食用的东西；谈不同种类时也可用 foods。", collocation: "healthy / processed food", example: "Access to healthy food is essential for children's development.", translation: "获得健康食物对儿童成长至关重要。" },
          { word: "dish", meaning: "一道菜", tone: "具体菜品", difference: "指经过烹饪、端上桌的一道菜，不等于盘子里的所有 food。", collocation: "a traditional dish", example: "This restaurant is famous for its seafood dishes.", translation: "这家餐厅以海鲜菜肴闻名。" },
          { word: "meal", meaning: "一顿饭", tone: "用餐单位", difference: "指早餐、午餐或晚餐等完整的一餐，而不是某一道菜。", collocation: "have / skip a meal", example: "Families rarely have meals together during the week.", translation: "许多家庭工作日很少一起吃饭。" },
          { word: "cuisine", meaning: "菜系；烹饪风格", tone: "文化 · 正式", difference: "指某个国家或地区特有的烹饪传统和风格。", collocation: "local / Italian cuisine", example: "Trying local cuisine is an important part of travelling.", translation: "品尝当地菜肴是旅行的重要部分。" }
        ]
      },
      {
        id: "taste",
        label: "味道与口感",
        hint: "味道用 sweet、sour 等；口感用 crispy、tender 等。",
        words: [
          { word: "flavour", meaning: "风味；味道", tone: "综合味觉", difference: "包含食物的味道与香气；美式英语拼作 flavor。", collocation: "a rich / mild flavour", example: "Fresh herbs add flavour without adding much salt.", translation: "新鲜香草可以增加风味，却不会增加太多盐。" },
          { word: "spicy", meaning: "辛辣的；香料味浓的", tone: "味道", difference: "可指辣椒带来的辣，也可指加入多种香料；hot 更常强调辣度。", collocation: "spicy food", example: "I enjoy spicy food, but this curry is too hot for me.", translation: "我喜欢辛辣食物，但这份咖喱对我来说太辣了。" },
          { word: "crispy", meaning: "酥脆的", tone: "口感", difference: "形容薄而脆、咬下去有清脆声音；crunchy 通常更厚、更硬。", collocation: "crispy vegetables", example: "The vegetables should remain fresh and crispy.", translation: "这些蔬菜应该保持新鲜爽脆。" },
          { word: "tender", meaning: "嫩的；易咀嚼的", tone: "肉类口感", difference: "常形容肉或蔬菜柔软易咬，反义词是 tough。", collocation: "tender meat", example: "The meat was tender and full of flavour.", translation: "这块肉很嫩，而且味道浓郁。" }
        ]
      },
      {
        id: "cooking",
        label: "烹饪方式",
        hint: "按是否用水、油和直接热源来区分常见烹饪动词。",
        words: [
          { word: "boil", meaning: "煮沸；水煮", tone: "在沸水中", difference: "把食物放在沸腾液体里煮；boil 也可表示液体本身沸腾。", collocation: "boil an egg", example: "Boil the vegetables for five minutes.", translation: "把蔬菜煮五分钟。" },
          { word: "steam", meaning: "蒸", tone: "用蒸汽", difference: "食物不直接浸在水里，通常比 fry 少油。", collocation: "steamed fish", example: "Steaming helps vegetables retain more nutrients.", translation: "蒸制有助于蔬菜保留更多营养。" },
          { word: "grill", meaning: "烧烤；烤制", tone: "直接高温", difference: "用上方或下方直接热源烤；英美英语对设备用法略有差异。", collocation: "grilled chicken", example: "We grilled the vegetables instead of frying them.", translation: "我们烤了蔬菜，而不是油炸。" },
          { word: "bake", meaning: "烘焙；烤", tone: "烤箱干热", difference: "常用于面包、蛋糕，也可用于烤鱼或蔬菜。", collocation: "freshly baked bread", example: "The café serves freshly baked bread every morning.", translation: "这家咖啡馆每天早晨供应新鲜烘焙的面包。" }
        ]
      },
      {
        id: "restaurant",
        label: "餐厅点餐",
        hint: "从订位、看菜单、点餐到结账，按真实流程记忆。",
        words: [
          { word: "book a table", meaning: "预订餐桌", tone: "餐厅用语", difference: "英式英语常用 book，美式英语也常说 reserve a table。", collocation: "book a table for two", example: "I'd like to book a table for two at seven.", translation: "我想预订一张晚上七点的双人桌。" },
          { word: "order", meaning: "点餐；订单", tone: "动词/名词", difference: "在餐厅表示点菜，也能表示网购下单或订单本身。", collocation: "take / place an order", example: "Are you ready to order, or do you need more time?", translation: "您准备好点餐了吗，还是需要再看一会儿？" },
          { word: "the bill", meaning: "账单", tone: "英式餐厅用语", difference: "英式英语常说 ask for the bill；美式英语常说 check。", collocation: "ask for the bill", example: "Could we have the bill, please?", translation: "请给我们账单好吗？" },
          { word: "tip", meaning: "小费；给小费", tone: "服务费用", difference: "指在账单之外给服务人员的钱，不同国家习惯不同。", collocation: "leave a tip", example: "Service is included, so you do not need to leave a tip.", translation: "账单已含服务费，因此不必另留小费。" }
        ]
      },
      {
        id: "nutrition",
        label: "营养与健康",
        hint: "雅思写作中常用这些词讨论饮食、肥胖与公共健康。",
        words: [
          { word: "a balanced diet", meaning: "均衡饮食", tone: "健康核心表达", difference: "强调不同营养类别比例合理，而不只是少吃。", collocation: "maintain a balanced diet", example: "Schools should teach children how to maintain a balanced diet.", translation: "学校应该教儿童如何保持均衡饮食。" },
          { word: "nutritious", meaning: "有营养的", tone: "正面评价", difference: "形容含有身体需要的营养；nutritional 表示“与营养有关的”。", collocation: "nutritious meals", example: "Low-income families may struggle to afford nutritious meals.", translation: "低收入家庭可能难以负担营养餐。" },
          { word: "processed food", meaning: "加工食品", tone: "公共健康", difference: "经过工业加工的食品；ultra-processed food 指加工程度更高的产品。", collocation: "highly processed food", example: "Highly processed food often contains excessive salt and sugar.", translation: "高度加工食品通常含有过量盐和糖。" },
          { word: "obesity", meaning: "肥胖症", tone: "正式 · 医学/写作", difference: "比 overweight 严重，是医学上的健康状况。", collocation: "childhood obesity", example: "Sugary drinks contribute to rising rates of childhood obesity.", translation: "含糖饮料导致儿童肥胖率上升。" }
        ]
      },
      {
        id: "food-society",
        label: "雅思写作升级",
        hint: "从个人饮食提升到粮食浪费、食品安全与可持续农业。",
        words: [
          { word: "food waste", meaning: "食物浪费", tone: "环境议题", difference: "指可食用食物在家庭、餐厅或供应链中被丢弃。", collocation: "reduce food waste", example: "Clearer date labels could help households reduce food waste.", translation: "更清晰的日期标签可以帮助家庭减少食物浪费。" },
          { word: "food security", meaning: "粮食安全", tone: "社会政策", difference: "指所有人都能稳定获得足够、安全且有营养的食物。", collocation: "ensure food security", example: "Climate change poses a serious threat to global food security.", translation: "气候变化严重威胁全球粮食安全。" },
          { word: "sustainable agriculture", meaning: "可持续农业", tone: "环境 · 学术", difference: "在满足粮食需求的同时保护土壤、水和生态系统。", collocation: "promote sustainable agriculture", example: "Governments should invest in sustainable agriculture.", translation: "政府应该投资可持续农业。" },
          { word: "locally sourced", meaning: "本地采购的", tone: "供应链", difference: "指食材来自附近生产者，可减少运输但不必然更环保。", collocation: "locally sourced ingredients", example: "The restaurant uses locally sourced ingredients whenever possible.", translation: "这家餐厅尽可能使用本地采购的食材。" }
        ]
      }
    ]
  },
  travel: {
    name: "Travel",
    zh: "旅行与出行",
    parts: ["part1", "part2", "part3"],
    questions: {
      part1: "Do you like travelling? How often do you travel?",
      part2: "Describe a journey that you remember well.",
      part3: "What are the benefits and drawbacks of international tourism?"
    },
    memory: "<b>travel</b> 泛指旅行 · <b>trip</b> 一次往返 · <b>journey</b> 旅程过程 · <b>tour</b> 游览行程 · <b>commute</b> 通勤 · <b>destination</b> 目的地",
    categories: [
      {
        id: "travel-basics",
        label: "旅行基本词",
        hint: "travel、trip、journey 和 tour 的区别是旅行话题的基础。",
        words: [
          { word: "travel", meaning: "旅行；出行", tone: "泛指 · 通常不可数", difference: "泛指从一地到另一地或旅行活动；不能通常说 a travel。", collocation: "air / business travel", example: "Travel has become more affordable in recent decades.", translation: "近几十年来，旅行变得更负担得起。" },
          { word: "trip", meaning: "一次旅行；出行", tone: "具体一次 · 常含往返", difference: "强调一次具体的出行，可因工作或休闲。", collocation: "go on a business trip", example: "We are planning a short trip to Berlin.", translation: "我们正计划去柏林短途旅行。" },
          { word: "journey", meaning: "旅程；行程过程", tone: "强调从A到B", difference: "强调路上的过程、时间和经历，不一定包含游玩。", collocation: "a long train journey", example: "The journey takes approximately three hours by train.", translation: "这段旅程乘火车大约需要三小时。" },
          { word: "tour", meaning: "游览；巡回旅行", tone: "多地点参观", difference: "按路线参观多个景点，也可指演出或比赛巡演。", collocation: "a guided tour", example: "We joined a guided tour of the old town.", translation: "我们参加了老城区的导览游。" }
        ]
      },
      {
        id: "planning",
        label: "计划与预订",
        hint: "旅行前的关键词：目的地、行程、预订和住宿。",
        words: [
          { word: "destination", meaning: "目的地", tone: "旅行终点", difference: "指人或交通工具要前往的地方。", collocation: "a popular tourist destination", example: "The island has become a popular tourist destination.", translation: "这座岛已经成为热门旅游目的地。" },
          { word: "itinerary", meaning: "旅行计划；行程单", tone: "正式 · 计划", difference: "列出每天地点、交通和活动的详细安排。", collocation: "a detailed itinerary", example: "Our itinerary includes three cities in seven days.", translation: "我们的行程包括七天游览三座城市。" },
          { word: "book", meaning: "预订", tone: "酒店/交通", difference: "提前保留座位、房间或服务；reserve 含义相近且更正式。", collocation: "book a flight / room", example: "It is cheaper to book flights several weeks in advance.", translation: "提前几周预订航班通常更便宜。" },
          { word: "accommodation", meaning: "住宿；住处", tone: "英式 · 通常不可数", difference: "泛指酒店、民宿等住宿条件；不要写 accommodations 表示普通住宿。", collocation: "find affordable accommodation", example: "The price includes transport and accommodation.", translation: "该价格包含交通和住宿。" }
        ]
      },
      {
        id: "airport",
        label: "机场与飞行",
        hint: "按值机、安检、登机和到达的流程学习。",
        words: [
          { word: "check in", meaning: "办理值机；登记入住", tone: "机场/酒店", difference: "机场确认乘客并领取登机牌；酒店办理入住。名词写作 check-in。", collocation: "check in online", example: "Passengers can check in online 24 hours before departure.", translation: "乘客可在起飞前24小时在线值机。" },
          { word: "boarding pass", meaning: "登机牌", tone: "机场文件", difference: "通过安检后登机所需凭证，不等同于机票 ticket。", collocation: "show your boarding pass", example: "Please have your passport and boarding pass ready.", translation: "请准备好护照和登机牌。" },
          { word: "departure", meaning: "出发；起飞", tone: "正式 · 交通", difference: "depart 的名词；反义词 arrival 表示到达。", collocation: "departure time / lounge", example: "The departure was delayed because of bad weather.", translation: "航班因恶劣天气延迟起飞。" },
          { word: "layover", meaning: "中途停留；转机等待", tone: "航空旅行", difference: "两段航班之间在中转机场等待的一段时间。", collocation: "a two-hour layover", example: "We have a two-hour layover in Amsterdam.", translation: "我们要在阿姆斯特丹转机等待两小时。" }
        ]
      },
      {
        id: "transport",
        label: "交通与通勤",
        hint: "区分公共交通、换乘、通勤和交通延误。",
        words: [
          { word: "public transport", meaning: "公共交通", tone: "英式常用", difference: "包括公交、地铁和火车；美式英语常说 public transportation。", collocation: "reliable public transport", example: "Reliable public transport can reduce dependence on private cars.", translation: "可靠的公共交通可以减少对私家车的依赖。" },
          { word: "commute", meaning: "通勤；上下班往返", tone: "规律性出行", difference: "经常在住所和工作或学习地点之间往返。", collocation: "commute to work", example: "She commutes to work by train every day.", translation: "她每天乘火车通勤上班。" },
          { word: "transfer", meaning: "换乘；转乘", tone: "交通连接", difference: "从一辆车或一条线路换到另一辆或另一条。", collocation: "transfer to another line", example: "Transfer to Line 2 at the next station.", translation: "请在下一站换乘2号线。" },
          { word: "congestion", meaning: "拥堵；堵塞", tone: "正式 · 写作", difference: "traffic congestion 是雅思中比 traffic jam 更正式的表达。", collocation: "ease traffic congestion", example: "Flexible working hours may help ease traffic congestion.", translation: "弹性工作时间可能有助于缓解交通拥堵。" }
        ]
      },
      {
        id: "sightseeing",
        label: "观光与体验",
        hint: "描述景点、观光以及融入当地文化的旅行体验。",
        words: [
          { word: "sightseeing", meaning: "观光；游览", tone: "旅行活动", difference: "不可数名词，常与 go 连用：go sightseeing。", collocation: "go sightseeing", example: "We spent the morning sightseeing in the city centre.", translation: "我们上午在市中心观光。" },
          { word: "attraction", meaning: "景点；吸引人的事物", tone: "旅游地点", difference: "tourist attraction 指游客参观的地点或活动。", collocation: "a major tourist attraction", example: "The museum is one of the city's main attractions.", translation: "这座博物馆是该市的主要景点之一。" },
          { word: "landmark", meaning: "地标；标志性建筑", tone: "有辨识度", difference: "容易辨认、具有历史或象征意义的建筑或地点。", collocation: "a historic landmark", example: "The bridge is a well-known local landmark.", translation: "这座桥是当地著名的地标。" },
          { word: "immerse yourself in", meaning: "使自己沉浸于", tone: "文化体验", difference: "强调深度参与当地语言、文化或环境，而非走马观花。", collocation: "immerse yourself in local culture", example: "Staying with a local family helps travellers immerse themselves in the culture.", translation: "住在当地家庭有助于旅行者沉浸于当地文化。" }
        ]
      },
      {
        id: "tourism",
        label: "雅思写作升级",
        hint: "从个人旅行提升到大众旅游、当地经济和环境影响。",
        words: [
          { word: "mass tourism", meaning: "大众旅游；大规模旅游", tone: "社会议题", difference: "大量游客集中前往同一目的地，常带来拥挤与环境压力。", collocation: "the growth of mass tourism", example: "Mass tourism can place enormous pressure on small communities.", translation: "大众旅游会给小型社区带来巨大压力。" },
          { word: "overtourism", meaning: "过度旅游", tone: "现代旅游议题", difference: "游客数量超过目的地承载能力，损害居民生活或当地环境。", collocation: "tackle overtourism", example: "Some cities have introduced visitor limits to tackle overtourism.", translation: "一些城市通过限制游客数量来应对过度旅游。" },
          { word: "sustainable tourism", meaning: "可持续旅游", tone: "环境 · 学术", difference: "在创造经济收益的同时减少环境和文化损害。", collocation: "promote sustainable tourism", example: "Sustainable tourism should benefit both visitors and local residents.", translation: "可持续旅游应该同时惠及游客和当地居民。" },
          { word: "boost the local economy", meaning: "促进当地经济", tone: "影响表达", difference: "描述旅游消费如何创造就业并增加当地企业收入。", collocation: "tourism boosts the local economy", example: "International tourism can boost the local economy and create jobs.", translation: "国际旅游可以促进当地经济并创造就业。" }
        ]
      }
    ]
  }
};

const speakingVocabularyExpansion = {
  family: {
    name: "Family", zh: "家庭与亲人", parts: ["part1", "part2", "part3"],
    questions: { part1: "Do you spend much time with your family?", part2: "Describe a family member you admire.", part3: "How are family relationships changing in modern society?" },
    memory: "<b>close-knit</b> 关系紧密 · <b>get along with</b> 相处融洽 · <b>look up to</b> 敬佩 · <b>take after</b> 像某位亲人",
    categories: [
      { id: "relationships", label: "家庭关系", hint: "描述亲密程度、相处方式和家庭支持。", words: [
        { word: "close-knit", meaning: "关系紧密的", tone: "自然口语", difference: "形容家庭或群体成员彼此关系密切。", collocation: "a close-knit family", example: "I come from a close-knit family, so we talk almost every day.", translation: "我来自一个关系紧密的家庭，所以我们几乎每天聊天。" },
        { word: "get along with", meaning: "与……相处融洽", tone: "Part 1 高频", difference: "强调两个人关系和谐，后面直接接人。", collocation: "get along well with my parents", example: "I get along really well with my older sister.", translation: "我和姐姐相处得非常好。" },
        { word: "supportive", meaning: "给予支持的", tone: "正面性格", difference: "不仅是同意，还包括情感或实际帮助。", collocation: "supportive parents", example: "My parents have always been supportive of my decisions.", translation: "父母一直很支持我的决定。" },
        { word: "family gathering", meaning: "家庭聚会", tone: "生活场景", difference: "家人在节日、生日或周末聚在一起。", collocation: "attend a family gathering", example: "We usually have a large family gathering during the Spring Festival.", translation: "春节期间我们通常会举行大型家庭聚会。" }
      ]},
      { id: "family-people", label: "描述家人", hint: "Part 2 描述人物时结合性格、影响与具体事例。", words: [
        { word: "look up to", meaning: "敬佩；尊敬", tone: "人物题核心", difference: "因某人的品质或成就把对方视为榜样。", collocation: "look up to my grandfather", example: "I have always looked up to my mother because she is incredibly resilient.", translation: "我一直很敬佩母亲，因为她非常坚韧。" },
        { word: "take after", meaning: "像某位亲人", tone: "外貌/性格", difference: "表示遗传性地像家中某位年长成员。", collocation: "take after my father", example: "I take after my father in both appearance and personality.", translation: "我的外貌和性格都像父亲。" },
        { word: "reliable", meaning: "可靠的", tone: "性格描述", difference: "表示可以信任对方会履行承诺或提供帮助。", collocation: "a reliable person", example: "My brother is reliable, so I can always turn to him for help.", translation: "哥哥很可靠，所以我总能向他求助。" },
        { word: "have an influence on", meaning: "对……产生影响", tone: "Part 2/3", difference: "用于解释某人如何改变自己的价值观或选择。", collocation: "have a positive influence on me", example: "My grandmother has had a profound influence on the way I see life.", translation: "祖母对我的人生观产生了深远影响。" }
      ]},
      { id: "family-change", label: "家庭与社会", hint: "Part 3 讨论代际关系、家庭结构与现代生活。", words: [
        { word: "generation gap", meaning: "代沟", tone: "社会讨论", difference: "不同年龄群体在观念、习惯或价值观方面的差异。", collocation: "bridge the generation gap", example: "Open communication can help bridge the generation gap.", translation: "坦诚沟通有助于缩小代沟。" },
        { word: "extended family", meaning: "大家庭；扩展家庭", tone: "家庭结构", difference: "除父母子女外还包括祖父母、叔姨等亲属。", collocation: "live with an extended family", example: "Living with an extended family can provide practical support.", translation: "与大家庭同住能够提供实际帮助。" },
        { word: "work-life balance", meaning: "工作与生活平衡", tone: "现代议题", difference: "常用于解释工作如何影响家庭时间。", collocation: "maintain a healthy work-life balance", example: "Long working hours make it difficult to maintain a healthy work-life balance.", translation: "长时间工作让人难以维持健康的工作生活平衡。" },
        { word: "family bonds", meaning: "家庭纽带；亲情", tone: "抽象表达", difference: "指家庭成员间长期的情感联系。", collocation: "strengthen family bonds", example: "Shared activities can strengthen family bonds.", translation: "共同活动可以加强家庭纽带。" }
      ]}
    ]
  },
  home: {
    name: "Home", zh: "家与居住", parts: ["part1", "part2", "part3"],
    questions: { part1: "What do you like most about your home?", part2: "Describe a home you would like to live in.", part3: "Why is housing becoming less affordable in many cities?" },
    memory: "<b>home</b> 有归属感的家 · <b>house</b> 房屋建筑 · <b>neighbourhood</b> 社区 · <b>spacious</b> 宽敞",
    categories: [
      { id: "home-type", label: "住房与空间", hint: "分清 home 和 house，并描述户型与空间感。", words: [
        { word: "apartment", meaning: "公寓", tone: "美式常用", difference: "英式英语常说 flat；两者都指一套公寓住宅。", collocation: "a one-bedroom apartment", example: "I live in a small apartment near the city centre.", translation: "我住在市中心附近的一套小公寓里。" },
        { word: "spacious", meaning: "宽敞的", tone: "正面描述", difference: "表示空间大且活动舒适，比 big 更具体。", collocation: "a spacious living room", example: "The living room is bright and surprisingly spacious.", translation: "客厅明亮，而且出乎意料地宽敞。" },
        { word: "cosy", meaning: "温馨舒适的", tone: "英式拼写", difference: "不一定大，但让人感觉温暖、放松；美式拼作 cozy。", collocation: "a cosy bedroom", example: "My room is quite small, but it feels cosy.", translation: "我的房间很小，但感觉很温馨。" },
        { word: "feel at home", meaning: "感觉自在；有归属感", tone: "地道表达", difference: "不仅表示在自己家，也指在某地感觉舒适自然。", collocation: "make someone feel at home", example: "The friendly neighbours made me feel at home immediately.", translation: "友好的邻居让我立刻有了归属感。" }
      ]},
      { id: "neighbourhood", label: "社区与设施", hint: "描述居住地点、便利程度和社区氛围。", words: [
        { word: "neighbourhood", meaning: "社区；街区", tone: "居住区域", difference: "指住所周边的一片区域及其中的社区。", collocation: "a quiet neighbourhood", example: "It is a safe and quiet neighbourhood with plenty of green space.", translation: "这是一个安全安静、绿地充足的社区。" },
        { word: "within walking distance", meaning: "步行范围内", tone: "位置优势", difference: "表示距离近，可以轻松步行到达。", collocation: "within walking distance of shops", example: "Everything I need is within walking distance.", translation: "我需要的一切都在步行范围内。" },
        { word: "well-connected", meaning: "交通连接便利的", tone: "城市描述", difference: "表示公共交通或道路网络方便到达其他地区。", collocation: "well-connected by public transport", example: "The area is well-connected to the rest of the city.", translation: "这个地区与城市其他地方交通便利。" },
        { word: "sense of community", meaning: "社区归属感", tone: "Part 3", difference: "居民互相信任、参与和归属的感觉。", collocation: "create a sense of community", example: "Local events can create a stronger sense of community.", translation: "当地活动可以增强社区归属感。" }
      ]},
      { id: "housing", label: "住房社会议题", hint: "Part 3 讨论住房成本、城市化与生活质量。", words: [
        { word: "affordable housing", meaning: "可负担住房", tone: "政策表达", difference: "指普通或低收入群体能够承担的住房。", collocation: "provide affordable housing", example: "Governments need to provide more affordable housing in major cities.", translation: "政府需要在大城市提供更多可负担住房。" },
        { word: "cost of living", meaning: "生活成本", tone: "经济议题", difference: "包括住房、食品、交通等基本开支。", collocation: "the rising cost of living", example: "The rising cost of living forces many young people to share accommodation.", translation: "不断上涨的生活成本迫使许多年轻人合租。" },
        { word: "urban sprawl", meaning: "城市蔓延", tone: "学术表达", difference: "城市低密度地向郊区无序扩张。", collocation: "control urban sprawl", example: "Urban sprawl increases car dependence and infrastructure costs.", translation: "城市蔓延会增加汽车依赖和基础设施成本。" },
        { word: "quality of life", meaning: "生活质量", tone: "高频抽象词", difference: "综合描述居住舒适、健康、安全和满意程度。", collocation: "improve quality of life", example: "Good housing and public services improve residents' quality of life.", translation: "良好住房和公共服务能够改善居民生活质量。" }
      ]}
    ]
  },
  study: {
    name: "Study & Work", zh: "学习与工作", parts: ["part1", "part2", "part3"],
    questions: { part1: "Do you work or are you a student?", part2: "Describe a skill you would like to learn.", part3: "What skills will people need in the future workplace?" },
    memory: "<b>major in</b> 主修 · <b>workload</b> 工作量 · <b>hands-on</b> 实践性的 · <b>career prospects</b> 职业前景",
    categories: [
      { id: "study-life", label: "学习生活", hint: "回答专业、课程、学习压力和学习收获。", words: [
        { word: "major in", meaning: "主修", tone: "学生身份", difference: "后接专业名称；major 也可作名词表示专业。", collocation: "major in engineering", example: "I major in engineering because I enjoy solving practical problems.", translation: "我主修工程，因为我喜欢解决实际问题。" },
        { word: "workload", meaning: "学习量；工作量", tone: "可数整体概念", difference: "指某段时间必须完成的全部任务。", collocation: "a heavy workload", example: "My workload becomes much heavier before final exams.", translation: "期末考试前我的学习任务会重很多。" },
        { word: "hands-on", meaning: "实践性的", tone: "课程/经验", difference: "通过亲自操作学习，而不只是理论。", collocation: "hands-on experience", example: "The course gives students valuable hands-on experience.", translation: "这门课程为学生提供宝贵的实践经验。" },
        { word: "keep up with", meaning: "跟上；不落后于", tone: "自然短语", difference: "表示跟上课程、变化或工作进度。", collocation: "keep up with my studies", example: "Good time management helps me keep up with my studies.", translation: "良好的时间管理帮助我跟上学习进度。" }
      ]},
      { id: "work-life", label: "工作与职业", hint: "描述职业职责、满意度和未来发展。", words: [
        { word: "job satisfaction", meaning: "工作满意度", tone: "职业话题", difference: "来自工作意义、环境或成就的满足感。", collocation: "a high level of job satisfaction", example: "Flexible hours can improve employees' job satisfaction.", translation: "弹性工作时间可以提高员工的工作满意度。" },
        { word: "career prospects", meaning: "职业前景", tone: "未来发展", difference: "指未来晋升、收入和就业机会。", collocation: "improve career prospects", example: "Learning digital skills can improve young people's career prospects.", translation: "学习数字技能可以改善年轻人的职业前景。" },
        { word: "meet a deadline", meaning: "按时完成", tone: "工作动作", difference: "在规定日期前完成任务，不能说 catch a deadline。", collocation: "work hard to meet a deadline", example: "I sometimes work late to meet a tight deadline.", translation: "为了赶紧迫的截止日期，我有时会工作到很晚。" },
        { word: "sense of achievement", meaning: "成就感", tone: "积极感受", difference: "成功完成有挑战的事情后产生的满足。", collocation: "give me a sense of achievement", example: "Completing a difficult project gives me a real sense of achievement.", translation: "完成困难项目给我真正的成就感。" }
      ]},
      { id: "future-work", label: "教育与未来工作", hint: "Part 3 讨论技能、自动化和终身学习。", words: [
        { word: "transferable skills", meaning: "可迁移技能", tone: "学术/职业", difference: "可用于不同工作和行业的沟通、协作等能力。", collocation: "develop transferable skills", example: "University should help students develop transferable skills.", translation: "大学应帮助学生培养可迁移技能。" },
        { word: "lifelong learning", meaning: "终身学习", tone: "教育趋势", difference: "人在正式教育结束后持续更新知识和技能。", collocation: "encourage lifelong learning", example: "Rapid technological change makes lifelong learning essential.", translation: "快速的技术变化使终身学习至关重要。" },
        { word: "job security", meaning: "工作稳定性", tone: "劳动力议题", difference: "免于失业威胁的稳定感。", collocation: "provide greater job security", example: "Many workers value job security more than a high salary.", translation: "许多员工看重工作稳定性胜过高工资。" },
        { word: "work remotely", meaning: "远程工作", tone: "现代工作", difference: "在办公室以外通过数字工具完成工作。", collocation: "the option to work remotely", example: "Working remotely can save commuting time but may reduce social contact.", translation: "远程工作可以节省通勤时间，但可能减少社交接触。" }
      ]}
    ]
  },
  hobbies: {
    name: "Hobbies", zh: "兴趣与休闲", parts: ["part1", "part2", "part3"],
    questions: { part1: "What do you enjoy doing in your free time?", part2: "Describe a hobby you would like to try.", part3: "Why do adults have less leisure time than children?" },
    memory: "<b>be into</b> 喜欢 · <b>take up</b> 开始培养爱好 · <b>unwind</b> 放松 · <b>leisure time</b> 空闲时间",
    categories: [
      { id: "free-time", label: "兴趣与频率", hint: "不要只说 like；表达喜爱程度、开始时间和频率。", words: [
        { word: "be into", meaning: "很喜欢；对……感兴趣", tone: "自然口语", difference: "比 be interested in 更随意、更像真实口语。", collocation: "be really into photography", example: "I'm really into photography, especially street photography.", translation: "我非常喜欢摄影，尤其是街头摄影。" },
        { word: "take up", meaning: "开始培养某项爱好", tone: "动作短语", difference: "指开始一项持续性活动或兴趣。", collocation: "take up painting", example: "I took up swimming last year to become more active.", translation: "去年我开始游泳，希望让自己更活跃。" },
        { word: "from time to time", meaning: "偶尔", tone: "频率表达", difference: "表示不规律地偶尔发生，接近 occasionally。", collocation: "go hiking from time to time", example: "I go hiking with my friends from time to time.", translation: "我偶尔和朋友一起徒步。" },
        { word: "be passionate about", meaning: "热爱；充满热情", tone: "强烈兴趣", difference: "比 like 强烈，适合解释长期投入。", collocation: "be passionate about music", example: "I've been passionate about music since I was a child.", translation: "我从小就非常热爱音乐。" }
      ]},
      { id: "benefits", label: "休闲的益处", hint: "解释爱好如何影响情绪、健康与社交。", words: [
        { word: "unwind", meaning: "放松；松弛下来", tone: "地道口语", difference: "忙碌或压力之后逐渐放松。", collocation: "a good way to unwind", example: "Reading is my favourite way to unwind after work.", translation: "阅读是我下班后最喜欢的放松方式。" },
        { word: "clear my mind", meaning: "放空头脑；理清思绪", tone: "感受表达", difference: "暂时摆脱担忧或杂念，恢复专注。", collocation: "help me clear my mind", example: "Going for a run helps me clear my mind.", translation: "跑步有助于我放空头脑。" },
        { word: "socialise", meaning: "社交；与人交往", tone: "英式拼写", difference: "通过活动与他人相处；美式拼作 socialize。", collocation: "socialise with friends", example: "Team sports give people a chance to exercise and socialise.", translation: "团队运动让人们有机会锻炼和社交。" },
        { word: "creative outlet", meaning: "创造力的出口", tone: "高级自然表达", difference: "通过艺术或活动表达想法与情绪的方式。", collocation: "provide a creative outlet", example: "Painting provides a creative outlet for people with stressful jobs.", translation: "绘画为工作压力大的人提供了创造力出口。" }
      ]},
      { id: "leisure-society", label: "休闲与社会", hint: "Part 3 讨论屏幕时间、商业化休闲和生活节奏。", words: [
        { word: "leisure time", meaning: "闲暇时间", tone: "正式常用", difference: "不工作或学习时可自由安排的时间。", collocation: "spend leisure time", example: "People increasingly spend their leisure time on digital devices.", translation: "人们越来越多地把闲暇时间花在数字设备上。" },
        { word: "screen time", meaning: "屏幕使用时间", tone: "现代生活", difference: "使用手机、电脑、电视等屏幕的总时长。", collocation: "limit screen time", example: "Parents often struggle to limit their children's screen time.", translation: "父母常常难以限制孩子的屏幕时间。" },
        { word: "sedentary lifestyle", meaning: "久坐的生活方式", tone: "健康议题", difference: "日常活动量低、长时间坐着的生活模式。", collocation: "lead a sedentary lifestyle", example: "Passive entertainment can contribute to a sedentary lifestyle.", translation: "被动娱乐可能导致久坐的生活方式。" },
        { word: "recreational facilities", meaning: "休闲设施", tone: "城市政策", difference: "供运动、娱乐和休闲使用的公共场所与设备。", collocation: "invest in recreational facilities", example: "Cities should invest in accessible recreational facilities.", translation: "城市应该投资建设便利可达的休闲设施。" }
      ]}
    ]
  },
  technology: {
    name: "Technology", zh: "科技与网络", parts: ["part1", "part2", "part3"],
    questions: { part1: "What technology do you use every day?", part2: "Describe a useful piece of technology you own.", part3: "How might technology change the way people work and communicate?" },
    memory: "<b>user-friendly</b> 易用 · <b>rely on</b> 依赖 · <b>keep in touch</b> 保持联系 · <b>digital divide</b> 数字鸿沟",
    categories: [
      { id: "daily-tech", label: "日常科技", hint: "描述设备的用途、便利性和使用频率。", words: [
        { word: "user-friendly", meaning: "用户友好的；易用的", tone: "产品评价", difference: "设计直观，使用者不需要复杂学习。", collocation: "a user-friendly app", example: "The app is user-friendly, even for older people.", translation: "这个应用非常易用，即使老年人也能操作。" },
        { word: "rely on", meaning: "依赖；依靠", tone: "高频短语", difference: "表示日常功能离不开某人或某物。", collocation: "rely heavily on my phone", example: "I rely on my phone for navigation and communication.", translation: "我依靠手机导航和沟通。" },
        { word: "save time", meaning: "节省时间", tone: "好处展开", difference: "用于解释技术提高效率的具体结果。", collocation: "save a great deal of time", example: "Online banking saves me a great deal of time.", translation: "网上银行为我节省了大量时间。" },
        { word: "keep in touch", meaning: "保持联系", tone: "社交科技", difference: "持续与远方朋友或家人交流。", collocation: "keep in touch with friends", example: "Social media helps me keep in touch with friends abroad.", translation: "社交媒体帮助我与国外朋友保持联系。" }
      ]},
      { id: "tech-effects", label: "科技的影响", hint: "平衡便利与过度依赖、隐私等问题。", words: [
        { word: "screen addiction", meaning: "屏幕成瘾", tone: "负面影响", difference: "难以控制使用电子屏幕的行为。", collocation: "develop screen addiction", example: "Children may develop screen addiction without clear limits.", translation: "如果没有明确限制，儿童可能形成屏幕成瘾。" },
        { word: "privacy concerns", meaning: "隐私担忧", tone: "Part 3", difference: "对个人数据收集、存储或滥用的忧虑。", collocation: "raise privacy concerns", example: "Facial recognition technology raises serious privacy concerns.", translation: "人脸识别技术引发严重的隐私担忧。" },
        { word: "face-to-face interaction", meaning: "面对面交流", tone: "沟通对比", difference: "与 online communication 相对的线下直接交流。", collocation: "reduce face-to-face interaction", example: "Excessive phone use can reduce face-to-face interaction.", translation: "过度使用手机会减少面对面交流。" },
        { word: "digital divide", meaning: "数字鸿沟", tone: "社会公平", difference: "不同群体获得设备、网络和数字技能的差距。", collocation: "bridge the digital divide", example: "Affordable internet access is necessary to bridge the digital divide.", translation: "平价网络接入是弥合数字鸿沟的必要条件。" }
      ]},
      { id: "future-tech", label: "未来科技", hint: "Part 3 讨论自动化、人工智能和科技监管。", words: [
        { word: "artificial intelligence", meaning: "人工智能", tone: "正式全称", difference: "首次使用可写 artificial intelligence (AI)，之后使用 AI。", collocation: "advances in artificial intelligence", example: "Artificial intelligence is likely to transform many industries.", translation: "人工智能很可能改变许多行业。" },
        { word: "automation", meaning: "自动化", tone: "工作议题", difference: "用机器或软件自动完成原本由人执行的任务。", collocation: "the spread of automation", example: "Automation may replace routine jobs but create new roles.", translation: "自动化可能取代常规工作，但也会创造新岗位。" },
        { word: "technological innovation", meaning: "技术创新", tone: "学术表达", difference: "新技术、产品或方法的开发与应用。", collocation: "encourage technological innovation", example: "Public investment can encourage technological innovation.", translation: "公共投资可以鼓励技术创新。" },
        { word: "regulate", meaning: "监管；规范", tone: "政策动词", difference: "政府通过规则控制行业或活动。", collocation: "regulate technology companies", example: "Governments must regulate how companies use personal data.", translation: "政府必须监管企业使用个人数据的方式。" }
      ]}
    ]
  },
  health: {
    name: "Health", zh: "健康与运动", parts: ["part1", "part2", "part3"],
    questions: { part1: "What do you do to stay healthy?", part2: "Describe a healthy habit you have developed.", part3: "Who should be responsible for improving public health?" },
    memory: "<b>stay in shape</b> 保持身材 · <b>work out</b> 锻炼 · <b>cut down on</b> 减少 · <b>well-being</b> 身心健康",
    categories: [
      { id: "healthy-habits", label: "健康习惯", hint: "用具体动作解释如何保持身体健康。", words: [
        { word: "stay in shape", meaning: "保持良好体形", tone: "自然口语", difference: "强调通过运动维持身体状态。", collocation: "exercise to stay in shape", example: "I cycle to work to stay in shape.", translation: "我骑车上班以保持良好体形。" },
        { word: "work out", meaning: "锻炼；健身", tone: "口语动词", difference: "通常指有计划的体育锻炼；workout 合写时是名词。", collocation: "work out at the gym", example: "I try to work out three times a week.", translation: "我尽量每周锻炼三次。" },
        { word: "cut down on", meaning: "减少", tone: "习惯改变", difference: "减少某物的数量或频率，常接糖、咖啡或垃圾食品。", collocation: "cut down on sugar", example: "I'm trying to cut down on sugary drinks.", translation: "我正努力减少含糖饮料。" },
        { word: "get enough sleep", meaning: "获得充足睡眠", tone: "生活习惯", difference: "比 sleep enough 更常见自然。", collocation: "struggle to get enough sleep", example: "I feel much more productive when I get enough sleep.", translation: "睡眠充足时，我的效率高得多。" }
      ]},
      { id: "wellbeing", label: "身心健康", hint: "健康不仅是没有疾病，也包括情绪和心理状态。", words: [
        { word: "well-being", meaning: "身心健康；幸福状态", tone: "综合概念", difference: "同时涵盖身体、心理和生活满意度。", collocation: "mental and physical well-being", example: "Regular exercise improves both physical and mental well-being.", translation: "规律运动能改善身心健康。" },
        { word: "cope with stress", meaning: "应对压力", tone: "心理健康", difference: "管理压力并减少它对生活的影响。", collocation: "learn to cope with stress", example: "Young people need healthy ways to cope with stress.", translation: "年轻人需要学习健康的压力应对方式。" },
        { word: "feel run-down", meaning: "感觉疲惫虚弱", tone: "自然口语", difference: "因过劳或可能生病而感到身体状态差。", collocation: "feel tired and run-down", example: "I tend to feel run-down when I do not sleep properly.", translation: "睡不好时我往往会感觉疲惫虚弱。" },
        { word: "recharge my batteries", meaning: "恢复精力", tone: "口语比喻", difference: "通过休息或放松重新获得精神和体力。", collocation: "take a break to recharge my batteries", example: "A quiet weekend helps me recharge my batteries.", translation: "安静的周末能帮我恢复精力。" }
      ]},
      { id: "public-health", label: "公共健康", hint: "Part 3 讨论个人责任、政府政策和医疗资源。", words: [
        { word: "preventive healthcare", meaning: "预防性医疗", tone: "政策表达", difference: "通过筛查、疫苗和健康教育提前预防疾病。", collocation: "invest in preventive healthcare", example: "Preventive healthcare can reduce long-term medical costs.", translation: "预防性医疗可以降低长期医疗成本。" },
        { word: "health awareness", meaning: "健康意识", tone: "社会教育", difference: "公众对健康风险和良好习惯的认识。", collocation: "raise health awareness", example: "Schools can play a major role in raising health awareness.", translation: "学校可以在提高健康意识方面发挥重要作用。" },
        { word: "healthcare system", meaning: "医疗体系", tone: "宏观讨论", difference: "提供医疗服务的医院、人员、资金和政策整体。", collocation: "place pressure on the healthcare system", example: "An ageing population places pressure on the healthcare system.", translation: "人口老龄化给医疗体系带来压力。" },
        { word: "sedentary behaviour", meaning: "久坐行为", tone: "正式健康词", difference: "清醒时坐着或躺着、能量消耗很低的行为。", collocation: "reduce sedentary behaviour", example: "Workplaces should encourage employees to reduce sedentary behaviour.", translation: "工作场所应鼓励员工减少久坐行为。" }
      ]}
    ]
  }
};

Object.assign(lifeVocabularyTopics, speakingVocabularyExpansion);

const defaultState = {
  course: "task2",
  activeView: "learning-home",
  topic: "education",
  stage: "stage1",
  module: "foundation-grammar",
  grammarPoint: "svo",
  topicVocab: "government",
  topicVocabRevealed: {},
  lifeVocabularyTopic: "shopping",
  speakingPart: "part1",
  speakingSection: "bank",
  lifeVocabularyCategory: "buying",
  lifeVocabularyOpenCards: {},
  vocabularyFocusIndex: 0,
  vocabularyFocusRevealed: false,
  vocabularyVoiceAccent: "en-GB",
  vocabularyVoiceName: "",
  voiceProfileVersion: 0,
  pageFontScale: 100,
  vocabularyStudyStats: { reviewed: 0, remembered: 0 },
  questionBankPart: "part1",
  questionBankRegion: "mainland",
  questionBankStatus: "all",
  questionBankTopic: "all",
  questionBankLearningFilter: "all",
  speakingQuestionMarks: {},
  speakingPracticeLog: {},
  speakingMockNotes: {},
  grammarSet: {},
  grammarPractice: {},
  sidebarCollapsed: false,
  phraseMode: "match",
  phraseRound: [],
  phraseAnswers: {},
  phraseFeedback: "",
  phraseStats: { correct: 0, total: 0 },
  branchNote: "",
  vocabulary: "",
  angles: "",
  argumentChain: "",
  reflection: "",
  savedNote: "",
  feedback: "",
  matchingAnswers: {},
  clozeAnswer: "",
  dictationAnswer: "",
  exerciseFeedback: {}
};

let state = loadState();
let speakingMockQueue = [];
let speakingMockIndex = 0;
let speakingMockTimer = null;
let speakingMockRecorder = null;
let speakingMockChunks = [];

const fields = ["branchNote", "vocabulary", "angles", "argumentChain", "reflection"];

function loadState() {
  try {
    const savedState = JSON.parse(localStorage.getItem(storageKey));
    return { ...defaultState, ...savedState, activeView: "learning-home" };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function setActiveView(viewId, shouldScroll = true) {
  state.activeView = viewId;
  saveState();
  applyState();
  if (shouldScroll) {
    document.querySelector(`#${viewId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderVisiblePanels() {
  document.querySelectorAll(".content > .panel").forEach((panel) => {
    panel.hidden = panel.id !== state.activeView;
  });
  document.querySelectorAll(".utility-nav a").forEach((link) => {
    const targetsCurrentView = link.getAttribute("href") === `#${state.activeView}`;
    const moduleMatches = link.dataset.moduleShortcut
      ? state.module === link.dataset.moduleShortcut
      : !(state.activeView === "course-system" && state.module === "foundation-grammar" && link.getAttribute("href") === "#course-system");
    const questionPartMatches = link.dataset.questionPart
      ? state.questionBankPart === link.dataset.questionPart
      : true;
    const speakingSectionMatches = link.dataset.speakingSection
      ? state.speakingSection === link.dataset.speakingSection
      : true;
    link.classList.toggle("active", targetsCurrentView && moduleMatches && questionPartMatches && speakingSectionMatches);
  });
  const activeDomain = state.activeView === "learning-home"
    ? "home"
    : state.activeView === "settings"
    ? "settings"
    : state.activeView === "vocabulary-topics"
    ? "speaking"
    : state.activeView === "speaking-tips"
    ? "speaking"
    : state.activeView === "course-system" && state.module === "foundation-grammar"
      ? "foundation"
      : "writing";
  document.querySelectorAll(".primary-domain").forEach((domain) => {
    domain.open = domain.dataset.navDomain === activeDomain;
  });
}

function renderLearningSettings() {
  const scale = Number(state.pageFontScale) || 100;
  document.documentElement.style.fontSize = `${scale}%`;
  document.querySelectorAll("[data-setting-voice]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingVoice === state.vocabularyVoiceAccent);
  });
  document.querySelectorAll("[data-font-scale]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.fontScale) === scale);
  });
  populateNaturalVoiceOptions();
}

function scoreVoiceQuality(voice, targetLang) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang?.toLowerCase() || "";
  const target = targetLang.toLowerCase();
  let score = lang === target ? 60 : lang.startsWith(target.slice(0, 2)) ? 12 : 0;
  if (/premium|enhanced|natural|neural|siri/.test(name)) score += 130;
  if (/google uk english female|google us english/.test(name)) score += 115;
  if (/serena|ava|samantha|allison|karen|moira|sonia|aria|jenny|emma|libby|michelle|flo|sandy|shelley/.test(name)) score += 85;
  if (/daniel|aaron|fred|ralph|albert|zarvox|bad news|whisper|pipe organ|cellos/.test(name)) score -= 65;
  if (/compact|espeak|festival/.test(name)) score -= 110;
  if (voice.localService) score += 8;
  return score;
}

function getEnglishVoices() {
  if (!("speechSynthesis" in window)) return [];
  const targetLang = state.vocabularyVoiceAccent || "en-GB";
  return window.speechSynthesis.getVoices()
    .filter((voice) => voice.lang?.toLowerCase().startsWith("en"))
    .sort((a, b) => scoreVoiceQuality(b, targetLang) - scoreVoiceQuality(a, targetLang));
}

function getPreferredVoice() {
  const voices = getEnglishVoices();
  return voices.find((voice) => voice.name === state.vocabularyVoiceName)
    || voices.find((voice) => voice.lang === state.vocabularyVoiceAccent)
    || voices[0];
}

function populateNaturalVoiceOptions() {
  const select = document.querySelector("#naturalVoiceSelect");
  if (!select) return;
  const voices = getEnglishVoices();
  if (!voices.length) {
    select.innerHTML = '<option value="">等待浏览器载入声音…</option>';
    return;
  }
  if (Number(state.voiceProfileVersion || 0) < 2) {
    state.vocabularyVoiceName = "";
    state.voiceProfileVersion = 2;
  }
  const preferredVoice = getPreferredVoice();
  if (!state.vocabularyVoiceName && preferredVoice) {
    state.vocabularyVoiceName = preferredVoice.name;
    saveState();
  }
  select.replaceChildren(...voices.map((voice, index) => {
    const option = document.createElement("option");
    option.value = voice.name;
    const quality = /premium|enhanced|natural|neural|siri/i.test(voice.name) ? " · 高质量" : "";
    option.textContent = `${voice.name} · ${voice.lang}${quality}${index === 0 ? " · 推荐" : ""}`;
    option.selected = voice.name === state.vocabularyVoiceName;
    return option;
  }));
}

function renderHomeProgress() {
  const vocabularyReviewed = Number(state.vocabularyStudyStats?.reviewed) || 0;
  const speakingMarked = Object.values(state.speakingQuestionMarks || {}).filter(Boolean).length;
  const writingSaved = state.savedNote?.trim() ? 1 : 0;
  const phraseTotal = Number(state.phraseStats?.total) || 0;
  const phraseCorrect = Number(state.phraseStats?.correct) || 0;
  const phraseAccuracy = phraseTotal ? Math.round((phraseCorrect / phraseTotal) * 100) : 0;
  const activityTotal = vocabularyReviewed + speakingMarked + writingSaved + phraseTotal;

  document.querySelector("#homeVocabularyProgress").textContent = vocabularyReviewed;
  document.querySelector("#homeSpeakingProgress").textContent = speakingMarked;
  document.querySelector("#homeWritingProgress").textContent = writingSaved;
  document.querySelector("#homePhraseProgress").textContent = `${phraseAccuracy}%`;
  document.querySelector("#homeProgressSummary").textContent = activityTotal
    ? `已留下 ${activityTotal} 条学习记录`
    : "今天从第一项开始";
}

function getCurrentPhase() {
  return coursePhases.find((phase) => phase.id === state.stage) || coursePhases[0];
}

function getCurrentModule() {
  const phase = getCurrentPhase();
  return phase.modules.find((module) => module.id === state.module) || phase.modules[0];
}

function setStage(stageId) {
  const phase = coursePhases.find((item) => item.id === stageId) || coursePhases[0];
  state.stage = phase.id;
  state.module = phase.modules[0].id;
  state.activeView = "course-system";
  saveState();
  applyState();
  document.querySelector("#course-system").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setModule(moduleId) {
  state.module = moduleId;
  state.activeView = "course-system";
  saveState();
  applyState();
  document.querySelector("#course-system").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCourseNavigation() {
  document.querySelector("#sidebarCourseTree").innerHTML = coursePhases.map((phase) => `
    <div class="course-tree-stage ${phase.id === state.stage ? "open" : ""}">
      <button type="button" class="topic-nav-button stage-toggle ${phase.id === state.stage ? "active" : ""}" data-stage-id="${phase.id}">
        <span>${phase.title}</span>
        <small>${phase.badge}</small>
      </button>
      <div class="course-tree-modules">
        ${phase.modules.map((module) => `
          <button type="button" class="module-nav-button ${module.id === state.module ? "active" : ""}" data-module-id="${module.id}">
            <span>${module.title}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-stage-id]").forEach((button) => {
    button.addEventListener("click", () => setStage(button.dataset.stageId));
  });
  document.querySelectorAll("[data-module-id]").forEach((button) => {
    button.addEventListener("click", () => setModule(button.dataset.moduleId));
  });
}

function renderCourseSystem() {
  const phase = getCurrentPhase();
  const module = getCurrentModule();
  if (module.id === "foundation-grammar") {
    document.querySelector("#courseModuleDetail").innerHTML = `
      <div class="module-title-row">
        <div>
          <p class="eyebrow">${phase.title}</p>
          <h3>${module.title}</h3>
        </div>
        <span class="method-badge">${phase.badge}</span>
      </div>
      <div class="module-focus">
        <article><strong>教学目标</strong><p>${module.goal}</p></article>
        <article><strong>适合学生</strong><p>${module.students}</p></article>
      </div>
      <div class="grammar-lesson-layout">
        <aside class="grammar-point-list" aria-label="基础语法小节">
          ${grammarWritingPoints.map((point, index) => `
            <button type="button" class="grammar-point-button ${point.id === state.grammarPoint ? "active" : ""}" data-grammar-point="${point.id}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${point.name}</strong>
            </button>
          `).join("")}
        </aside>
        <div id="grammarLessonDetail" class="grammar-lesson-detail">
          ${renderGrammarLesson()}
        </div>
      </div>
      <details class="daily-fill module-more">
        <summary>每日填充模板</summary>
        <div class="daily-fill-grid">
          <label><span>今天补充的例句</span><textarea placeholder="把今天讲到的 Task 2 例句放这里。"></textarea></label>
          <label><span>学生课堂产出</span><textarea placeholder="记录学生写出的好句、错句或小段落。"></textarea></label>
          <label><span>下次要补</span><textarea placeholder="记录下一节课要补的主题、句型或错误。"></textarea></label>
        </div>
      </details>
    `;
    bindGrammarPointButtons();
    return;
  }
  if (module.id === "topic-vocabulary") {
    document.querySelector("#courseModuleDetail").innerHTML = renderTopicVocabularyModule();
    bindTopicVocabularyControls();
    return;
  }
  document.querySelector("#courseModuleDetail").innerHTML = `
    <div class="module-title-row">
      <div>
        <p class="eyebrow">${phase.title}</p>
        <h3>${module.title}</h3>
      </div>
      <span class="method-badge">${phase.badge}</span>
    </div>
    <div class="module-focus">
      <article><strong>教学目标</strong><p>${module.goal}</p></article>
      <article><strong>适合学生</strong><p>${module.students}</p></article>
    </div>
    <div class="course-detail-grid compact-detail-grid">
      ${renderCourseBlock("核心知识点", module.knowledge)}
      ${renderCourseBlock("课堂讲法", [module.lecture])}
      ${renderCourseBlock("板书结构", [module.board])}
      ${renderCourseBlock("示例句", module.examples)}
    </div>
    <details class="module-more" open>
      <summary>练习、作业和常见错误</summary>
      <div class="course-detail-grid">
        ${renderCourseBlock("学生练习", module.exercises)}
        ${renderCourseBlock("作业", [module.homework])}
        ${renderCourseBlock("常见错误", module.errors)}
        ${renderCourseBlock("后续可补充内容", module.future)}
      </div>
    </details>
    <details class="daily-fill module-more">
      <summary>每日填充模板</summary>
      <div class="daily-fill-grid">
        <label><span>今天补充的例句</span><textarea placeholder="把今天讲到的 Task 2 例句放这里。"></textarea></label>
        <label><span>学生课堂产出</span><textarea placeholder="记录学生写出的好句、错句或小段落。"></textarea></label>
        <label><span>下次要补</span><textarea placeholder="记录下一节课要补的主题、句型或错误。"></textarea></label>
      </div>
    </details>
  `;
}

function renderCourseBlock(title, items) {
  return `
    <article class="course-block">
      <strong>${title}</strong>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function getCurrentGrammarPoint() {
  return grammarWritingPoints.find((point) => point.id === state.grammarPoint) || grammarWritingPoints[0];
}

function getGrammarPracticeSets(pointId) {
  return [grammarPracticeBank[pointId], ...(grammarPracticeVariants[pointId] || [])].filter(Boolean);
}

function getGrammarSetIndex(pointId) {
  const sets = getGrammarPracticeSets(pointId);
  const savedIndex = state.grammarSet?.[pointId] || 0;
  return Math.min(Math.max(savedIndex, 0), sets.length - 1);
}

function getCurrentGrammarPractice(pointId) {
  return getGrammarPracticeSets(pointId)[getGrammarSetIndex(pointId)];
}

function getGrammarPracticeKey(pointId) {
  return `${pointId}:${getGrammarSetIndex(pointId)}`;
}

function renderGrammarLesson() {
  const point = getCurrentGrammarPoint();
  const practice = getCurrentGrammarPractice(point.id);
  const practiceSets = getGrammarPracticeSets(point.id);
  const setIndex = getGrammarSetIndex(point.id);
  const saved = getGrammarPracticeState(point.id);
  const identifyOptions = practice.identify.map((item) => item.answer).sort();
  return `
    <article class="grammar-lesson-card">
      <div class="grammar-lesson-head">
        <span class="method-badge">基础语法小节</span>
        <h4>${point.name}</h4>
      </div>
      <div class="grammar-lesson-main">
        <section>
          <strong>写作用途</strong>
          <p>${point.purpose}</p>
        </section>
        <section>
          <strong>Task 2 例句</strong>
          <p class="example-line">${point.example}</p>
        </section>
        <section>
          <strong>常见错误</strong>
          <p>${point.error}</p>
        </section>
      </div>
      <div class="grammar-practice-header">
        <div>
          <small>本句 ${setIndex + 1} / ${practiceSets.length}</small>
          <strong id="grammarAccuracy">${saved.feedback || "完成选择题和排序题后点击检查，会显示正确率和参考答案。"}</strong>
        </div>
        <div class="grammar-set-controls">
          <button type="button" class="secondary" id="prevGrammarSetBtn">上一句</button>
          <button type="button" class="secondary" id="nextGrammarSetBtn">换一句</button>
          <button type="button" class="secondary" id="resetGrammarPracticeBtn">重做本句</button>
        </div>
      </div>
      <div class="grammar-exercise-grid">
        <article class="grammar-exercise-card">
          <strong>识别练习</strong>
          <p>${practice.identifyPrompt}</p>
          <div class="grammar-identify-list">
            ${practice.identify.map((item, index) => `
              <label>
                <span>${item.label}</span>
                <select data-identify-index="${index}">
                  <option value="">选择答案</option>
                  ${identifyOptions.map((option) => `<option value="${option}">${option}</option>`).join("")}
                </select>
              </label>
            `).join("")}
          </div>
        </article>
        <article class="grammar-exercise-card">
          <strong>点击排序题</strong>
          <p>${practice.orderPrompt}</p>
          <div class="token-bank">
            ${practice.chunks.map((chunk, index) => `
              <button type="button" class="token-chip" data-order-token="${chunk}" data-token-index="${index}">${chunk}</button>
            `).join("")}
          </div>
          <div class="ordered-answer" id="orderedAnswer">${saved.order.map((chunk) => `<span>${chunk}</span>`).join("") || "<em>点击上面的词块组成句子</em>"}</div>
          <button type="button" class="secondary mini-action" id="clearOrderBtn">清空排序</button>
        </article>
      </div>
      <div class="grammar-answer-panel" id="grammarAnswerPanel">
        ${saved.checked ? renderGrammarReference(point.id) : "检查后这里会显示参考答案。"}
      </div>
      <button type="button" id="checkGrammarPracticeBtn">检查本节练习</button>
    </article>
  `;
}

function bindGrammarPointButtons() {
  document.querySelectorAll("[data-grammar-point]").forEach((button) => {
    button.addEventListener("click", () => {
      state.grammarPoint = button.dataset.grammarPoint;
      saveState();
      document.querySelectorAll("[data-grammar-point]").forEach((item) => {
        item.classList.toggle("active", item.dataset.grammarPoint === state.grammarPoint);
      });
      document.querySelector("#grammarLessonDetail").innerHTML = renderGrammarLesson();
      bindGrammarPracticeControls();
    });
  });
  bindGrammarPracticeControls();
}

function getGrammarPracticeState(pointId) {
  const empty = { identify: {}, order: [], checked: false, feedback: "" };
  return { ...empty, ...(state.grammarPractice?.[getGrammarPracticeKey(pointId)] || {}) };
}

function setGrammarPracticeState(pointId, nextState) {
  const key = getGrammarPracticeKey(pointId);
  state.grammarPractice = {
    ...(state.grammarPractice || {}),
    [key]: { ...getGrammarPracticeState(pointId), ...nextState }
  };
  saveState();
}

function setGrammarSet(pointId, nextIndex) {
  const sets = getGrammarPracticeSets(pointId);
  const index = (nextIndex + sets.length) % sets.length;
  state.grammarSet = {
    ...(state.grammarSet || {}),
    [pointId]: index
  };
  saveState();
  document.querySelector("#grammarLessonDetail").innerHTML = renderGrammarLesson();
  bindGrammarPracticeControls();
}

function bindGrammarPracticeControls() {
  const point = getCurrentGrammarPoint();
  const saved = getGrammarPracticeState(point.id);

  document.querySelectorAll("[data-identify-index]").forEach((select) => {
    select.value = saved.identify[select.dataset.identifyIndex] || "";
    select.addEventListener("change", (event) => {
      const nextIdentify = { ...getGrammarPracticeState(point.id).identify, [event.target.dataset.identifyIndex]: event.target.value };
      setGrammarPracticeState(point.id, { identify: nextIdentify, checked: false, feedback: "" });
    });
  });

  document.querySelectorAll("[data-order-token]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = getGrammarPracticeState(point.id);
      const nextOrder = [...current.order, button.dataset.orderToken];
      setGrammarPracticeState(point.id, { order: nextOrder, checked: false, feedback: "" });
      renderOrderedAnswer(nextOrder);
    });
  });

  document.querySelector("#clearOrderBtn")?.addEventListener("click", () => {
    setGrammarPracticeState(point.id, { order: [], checked: false, feedback: "" });
    renderOrderedAnswer([]);
  });

  document.querySelector("#prevGrammarSetBtn")?.addEventListener("click", () => {
    setGrammarSet(point.id, getGrammarSetIndex(point.id) - 1);
  });

  document.querySelector("#nextGrammarSetBtn")?.addEventListener("click", () => {
    setGrammarSet(point.id, getGrammarSetIndex(point.id) + 1);
  });

  document.querySelector("#resetGrammarPracticeBtn")?.addEventListener("click", () => {
    setGrammarPracticeState(point.id, { identify: {}, order: [], checked: false, feedback: "" });
    document.querySelector("#grammarLessonDetail").innerHTML = renderGrammarLesson();
    bindGrammarPracticeControls();
  });

  document.querySelector("#checkGrammarPracticeBtn")?.addEventListener("click", checkGrammarPractice);
}

function renderOrderedAnswer(order) {
  const target = document.querySelector("#orderedAnswer");
  if (!target) return;
  target.innerHTML = order.length ? order.map((chunk) => `<span>${chunk}</span>`).join("") : "<em>点击上面的词块组成句子</em>";
}

function normalizeGrammarValue(value) {
  return value.trim().toLowerCase().replace(/[.,!?。！？]/g, "").replace(/\s+/g, " ");
}

function checkGrammarPractice() {
  const point = getCurrentGrammarPoint();
  const practice = getCurrentGrammarPractice(point.id);
  const current = getGrammarPracticeState(point.id);
  let correct = 0;
  const total = practice.identify.length + 1;

  practice.identify.forEach((item, index) => {
    if (current.identify[index] === item.answer) correct += 1;
  });
  if (current.order.join(" ") === practice.orderAnswer.join(" ")) correct += 1;

  const accuracy = Math.round((correct / total) * 100);
  const feedback = `本句正确率 ${accuracy}% · ${correct}/${total}`;
  setGrammarPracticeState(point.id, { checked: true, feedback });
  document.querySelector("#grammarAccuracy").textContent = feedback;
  document.querySelector("#grammarAnswerPanel").innerHTML = renderGrammarReference(point.id);
}

function renderGrammarReference(pointId) {
  const practice = getCurrentGrammarPractice(pointId);
  return `
    <strong>参考答案</strong>
    <ul>
      ${practice.identify.map((item) => `<li>${item.label}: ${item.answer}</li>`).join("")}
      <li>排序题: ${practice.orderAnswer.join(" ")}</li>
    </ul>
  `;
}

function getCurrentTopicVocabularyLesson() {
  return topicVocabularyLessons[state.topicVocab] || topicVocabularyLessons.government;
}

function isTopicVocabRevealed(key) {
  return Boolean(state.topicVocabRevealed?.[key]);
}

function getRotatedItems(items, start, count) {
  if (!items.length) return [];
  return Array.from({ length: count }, (_, offset) => items[(start + offset) % items.length]);
}

function renderQuestionSupport(selectedKey, questionIndex, branch, type, question, topicChunks, logicIdeas, topicSentences) {
  const chosenIdeas = getRotatedItems(logicIdeas, questionIndex, 3);
  const chosenChunks = getRotatedItems(topicChunks, questionIndex * 3, 5);
  const chosenSentences = getRotatedItems(topicSentences, questionIndex * 2, 3);
  const modelSentences = chosenSentences.map(([, en]) => en);
  return `
    <details class="question-support">
      <summary>展开主体段观点 + 可用词伙 + 参考范文</summary>
      <div class="question-support-grid">
        <article>
          <strong>写前 5 步</strong>
          <ol>
            <li><b>审题</b>确认题型是 ${type}，圈出核心分支：${branch}。</li>
            <li><b>立场</b>先决定倾向，不要两边都写但没有判断。</li>
            <li><b>计划</b>用 2 个主体段承载主要论证，第三个观点作让步或备选。</li>
            <li><b>展开</b>每段按观点 -> 原因 -> 影响 -> 例子 -> 回扣写。</li>
            <li><b>检查</b>最后用 TR / CC / LR / GRA 四项快速复盘。</li>
          </ol>
        </article>
        <article>
          <strong>建议主体段</strong>
          <ol>
            <li><b>主体段 1</b>${chosenIdeas[0] || `先解释 ${branch} 为什么重要。`}</li>
            <li><b>主体段 2</b>${chosenIdeas[1] || `再分析 ${branch} 对个人或社会的影响。`}</li>
            <li><b>备选 / 让步</b>${chosenIdeas[2] || `承认另一方有道理，再回到自己的立场。`}</li>
          </ol>
        </article>
        <article>
          <strong>本题可用词伙</strong>
          <div class="support-phrase-list">
            ${chosenChunks.map(([zh, en]) => `<span><b>${zh}</b><em>${en}</em></span>`).join("")}
          </div>
        </article>
      </div>
      <strong class="score-check-title">评分自查</strong>
      <div class="score-check-grid">
        <article><b>TR</b><span>是否完整回答 ${type} 的任务？立场有没有清楚？</span></article>
        <article><b>CC</b><span>两个主体段是否各有一个中心？连接是否自然？</span></article>
        <article><b>LR</b><span>是否使用本题词伙，而不是重复 basic words？</span></article>
        <article><b>GRA</b><span>是否至少有 because / although / if / relative clause 等句型变化？</span></article>
      </div>
      <article class="model-answer-card">
        <strong>主体段示范</strong>
        <div class="model-legend">
          <span class="mark-connective">连接/结构</span>
          <span class="mark-phrase">主题词伙</span>
          <span class="mark-argument">论证动作</span>
        </div>
        <div class="model-paragraphs">
          <section>
            <span>主体段 1 示范</span>
            <p>
              <span class="mark-connective">First,</span> ${modelSentences[0] || "this issue can have a direct impact on individuals and society."}
              <span class="mark-argument">This idea matters because it explains one clear reason behind the writer's position.</span>
              <span class="mark-connective">As a result,</span> students can connect the point to <span class="mark-phrase">${chosenChunks[0]?.[1] || branch}</span> and <span class="mark-phrase">${chosenChunks[1]?.[1] || "the wider social impact"}</span>.
              <span class="mark-connective">For example,</span> a short, relevant example can show how this issue affects real people or institutions.
              <span class="mark-argument">This links back to the question by showing why ${branch} should be treated as a serious issue.</span>
            </p>
          </section>
          <section>
            <span>主体段 2 示范</span>
            <p>
              <span class="mark-connective">Second,</span> ${modelSentences[1] || "a wider social effect should also be considered."}
              <span class="mark-argument">This paragraph should develop a different angle rather than repeat the first body paragraph.</span>
              It can use topic expressions such as <span class="mark-phrase">${chosenChunks[2]?.[1] || "precise topic vocabulary"}</span> and <span class="mark-phrase">${chosenChunks[3]?.[1] || "long-term consequences"}</span>.
              <span class="mark-connective">Therefore,</span> the argument becomes more specific and easier to score well for Lexical Resource.
              <span class="mark-argument">The final sentence should clearly explain how this second point supports the overall position.</span>
            </p>
          </section>
          <section>
            <span>备选 / 让步段示范</span>
            <p>
              <span class="mark-connective">Admittedly,</span> ${modelSentences[2] || "there may be another side to the argument."}
              <span class="mark-argument">This concession prevents the essay from sounding one-sided, but it should not weaken the main position.</span>
              <span class="mark-connective">However,</span> this opposing view is less convincing when compared with <span class="mark-phrase">${chosenChunks[4]?.[1] || "the stronger long-term impact"}</span>.
              <span class="mark-connective">Overall,</span> the paragraph should return to the question and make the writer's judgement clear.
            </p>
          </section>
        </div>
      </article>
    </details>
  `;
}

function renderTopicVocabularyMatrix() {
  const lesson = getCurrentTopicVocabularyLesson();
  const selectedKey = Object.entries(topicVocabularyLessons).find(([, item]) => item === lesson)?.[0] || "government";
  const extension = topicVocabularyEnhancements[selectedKey] || { extraChunks: [], logicIdeas: [], sentenceBank: [] };
  const questionExamples = topicQuestionExamples[selectedKey] || [];
  const topicChunks = [...lesson.chunks, ...extension.extraChunks];
  const topicSentences = [...lesson.sentences, ...extension.sentenceBank];
  const orderAnswer = lesson.drill.orderAnswer.join(" ");
  return `
    <section class="topic-vocab-lesson">
      <div class="topic-vocab-tabs" aria-label="13 个主题词汇导航">
        ${Object.entries(topicVocabularyLessons).map(([key, item]) => `
          <button type="button" class="topic-vocab-tab ${key === selectedKey ? "active" : ""}" data-topic-vocab="${key}">
            ${item.title}
          </button>
        `).join("")}
      </div>
      <article class="topic-vocab-card">
        <div class="module-title-row compact-title-row">
          <div>
            <p class="eyebrow">Topic Vocabulary</p>
            <h4>${lesson.title}</h4>
          </div>
          <span class="method-badge">${lesson.focus}</span>
        </div>
        <div class="topic-vocab-stats">
          <article><strong>${topicChunks.length}</strong><span>核心词伙</span></article>
          <article><strong>${extension.logicIdeas.length}</strong><span>中文逻辑思路</span></article>
          <article><strong>${topicSentences.length}</strong><span>可迁移句子</span></article>
          <article><strong>${questionExamples.length}</strong><span>题目例子</span></article>
        </div>
        <div class="topic-vocab-section">
          <strong>核心词伙</strong>
          <p class="micro-hint">先看中文，心里想英文；点卡片后再看答案。</p>
          <div class="phrase-chip-grid">
            ${topicChunks.map(([zh, en], index) => {
              const revealKey = `${selectedKey}:chunk:${index}`;
              const revealed = isTopicVocabRevealed(revealKey);
              return `
              <button type="button" class="phrase-chip reveal-card ${revealed ? "revealed" : ""}" data-reveal-card="${revealKey}">
                <b>${zh}</b>
                <em>${revealed ? en : "点击看英文"}</em>
              </button>
            `;
            }).join("")}
          </div>
        </div>
        <div class="topic-vocab-section">
          <strong>中文逻辑思路</strong>
          <p class="micro-hint">先用中文抓住论证方向，再把词伙放进英文句子里。</p>
          <div class="topic-logic-grid">
            ${extension.logicIdeas.map((idea, index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <p>${idea}</p>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="topic-vocab-section">
          <strong>输入句型</strong>
          <p class="micro-hint">先根据中文和句型功能自己想英文，再点击查看参考句。</p>
          <div class="sentence-pattern-list">
            ${topicSentences.map(([zh, en, note], index) => {
              const revealKey = `${selectedKey}:sentence:${index}`;
              const revealed = isTopicVocabRevealed(revealKey);
              return `
              <button type="button" class="sentence-reveal-card ${revealed ? "revealed" : ""}" data-reveal-card="${revealKey}">
                <span><b>${note}</b><em>${zh}</em></span>
                <strong>${revealed ? en : "点击查看英文参考句"}</strong>
              </button>
            `;
            }).join("")}
          </div>
        </div>
        <div class="topic-vocab-section">
          <strong>近年题型方向与题目例子</strong>
          <p class="micro-hint">这些题目按公开题库、备考网站和官方 Academic 写作格式整理，作为真题风格训练，不标成官方原题。</p>
          <div class="topic-question-grid">
            ${questionExamples.map(([branch, type, question, source, url], index) => `
              <article>
                <div class="question-meta">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <b>${branch}</b>
                  <em>${type}</em>
                </div>
                <p>${question}</p>
                <a href="${url}" target="_blank" rel="noreferrer">${source}</a>
                ${renderQuestionSupport(selectedKey, index, branch, type, question, topicChunks, extension.logicIdeas, topicSentences)}
              </article>
            `).join("")}
          </div>
        </div>
        <div class="topic-vocab-section">
          <strong>练习任务</strong>
          <div class="topic-vocab-practice">
            <article>
              <span>填空默写</span>
              <p>${lesson.drill.cloze}</p>
              <small>答案：${lesson.drill.answer}</small>
            </article>
            <article>
              <span>点击排序素材</span>
              <p>${lesson.drill.order.join(" / ")}</p>
              <small>参考句：${orderAnswer}</small>
            </article>
            <article>
              <span>输出任务</span>
              <p>从本主题选择 3 个词伙，各写 1 个观点句；再选其中 1 句扩成“观点 -> 原因 -> 结果”。</p>
              <small>目标：不要只背词，要把词放进可评分的句子。</small>
            </article>
          </div>
        </div>
      </article>
    </section>
  `;
}

function bindTopicVocabularyControls() {
  document.querySelectorAll("[data-topic-vocab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.topicVocab = button.dataset.topicVocab;
      state.topicVocabRevealed = {};
      saveState();
      document.querySelector("#courseModuleDetail").innerHTML = renderTopicVocabularyModule();
      bindTopicVocabularyControls();
    });
  });
  document.querySelectorAll("[data-reveal-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.revealCard;
      state.topicVocabRevealed = {
        ...(state.topicVocabRevealed || {}),
        [key]: !isTopicVocabRevealed(key)
      };
      saveState();
      document.querySelector("#courseModuleDetail").innerHTML = renderTopicVocabularyModule();
      bindTopicVocabularyControls();
    });
  });
}

function renderTopicVocabularyModule() {
  const phase = getCurrentPhase();
  const module = getCurrentModule();
  return `
    <div class="module-title-row">
      <div>
        <p class="eyebrow">${phase.title}</p>
        <h3>${module.title}</h3>
      </div>
      <span class="method-badge">${phase.badge}</span>
    </div>
    <div class="module-focus">
      <article><strong>教学目标</strong><p>${module.goal}</p></article>
      <article><strong>适合学生</strong><p>${module.students}</p></article>
    </div>
    ${renderTopicVocabularyMatrix()}
    <details class="daily-fill module-more">
      <summary>每日填充模板</summary>
      <div class="daily-fill-grid">
        <label><span>今天补充的词伙</span><textarea placeholder="把今天新增的主题词伙放这里。"></textarea></label>
        <label><span>学生课堂产出</span><textarea placeholder="记录学生写出的好句、错句或小段落。"></textarea></label>
        <label><span>下次要补</span><textarea placeholder="记录下一节课要补的主题、句型或错误。"></textarea></label>
      </div>
    </details>
  `;
}

function renderCoursePanel() {
  const panel = document.querySelector("#coursePanel");
  if (state.course === "task1") {
    panel.innerHTML = `
      <div class="module-grid">
        ${task1Modules.map((item) => `
          <article class="mini-card">
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </article>
        `).join("")}
      </div>
    `;
  } else {
    panel.innerHTML = `
      <div class="course-summary">
        <strong>Task 2 大作文</strong>
        <p>核心顺序：评分标准 -> ABC审题 -> 题型分类 -> 两个主体段思路 -> 语言准确度。</p>
        <p>当前练习：先选话题看题目和好词好句，再用中文 main 思路带动英文主体段输出。</p>
      </div>
    `;
  }

  document.querySelectorAll(".course-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.course === state.course);
  });
}

function renderBookMethod() {
  document.querySelector("#bookMethodGrid").innerHTML = bookMethodModules.map((module) => `
    <article class="method-card">
      <span class="method-badge">${module.badge}</span>
      <strong>${module.title}</strong>
      <ul>
        ${module.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <p>${module.practice}</p>
    </article>
  `).join("");
}

function renderAcademicSources() {
  document.querySelector("#academicSourceGrid").innerHTML = `
    <div class="absorbed-loop">
      ${absorbedTrainingLoop.map((item) => `
        <article>
          <span>${item.step}</span>
          <strong>${item.action}</strong>
          <p><b>学习来源：</b>${item.source}</p>
          <p><b>网站落点：</b>${item.siteUse}</p>
        </article>
      `).join("")}
    </div>
    <div class="source-grid">
      ${academicSourceLessons.map((item) => `
        <article class="source-card">
          <div>
            <span class="method-badge">${item.label}</span>
            <strong>${item.title}</strong>
          </div>
          <p><b>为什么吸收：</b>${item.why}</p>
          <p><b>吸收到网站：</b>${item.absorb}</p>
          <a href="${item.url}" target="_blank" rel="noreferrer">查看来源</a>
        </article>
      `).join("")}
    </div>
  `;
}

function renderTopicGrid() {
  const grid = document.querySelector("#topicGrid");
  grid.innerHTML = Object.entries(task2Topics).map(([key, topic]) => `
    <article class="topic-card ${key === state.topic ? "selected" : ""}" data-topic-card="${key}">
      <strong>${topic.name}</strong>
      <div class="topic-columns">
        <span><b>常见分支</b>${topic.branches.join(" / ")}</span>
        <span><b>核心词汇</b>${topic.vocab.join(" / ")}</span>
        <span><b>两个思路</b>${topic.mainIdeas.join(" | ")}</span>
        <span><b>练习题</b>${topic.question}</span>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-topic-card]").forEach((card) => {
    card.addEventListener("click", () => {
      state.topic = card.dataset.topicCard;
      state.activeView = "practice";
      saveState();
      applyState();
      document.querySelector("#practice").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderTopicSelect() {
  document.querySelector("#sidebarTopicList").innerHTML = Object.entries(task2Topics).map(([key, topic]) => `
    <button type="button" class="topic-nav-button ${key === state.topic ? "active" : ""}" data-sidebar-topic="${key}">
      <span>${topic.name}</span>
      <small>${topic.branches.slice(0, 2).join(" / ")}</small>
    </button>
  `).join("");

  document.querySelectorAll("[data-sidebar-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      state.topic = button.dataset.sidebarTopic;
      state.matchingAnswers = {};
      state.clozeAnswer = "";
      state.dictationAnswer = "";
      state.exerciseFeedback = {};
      state.phraseRound = [];
      state.phraseAnswers = {};
      state.phraseFeedback = "已跟随左侧话题切换，系统会生成新的词组练习。";
      state.activeView = "practice";
      saveState();
      applyState();
      document.querySelector("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderPractice() {
  const topic = task2Topics[state.topic];
  document.querySelector("#topicName").textContent = topic.name;
  document.querySelector("#questionText").textContent = topic.question;
  document.querySelector("#questionGuide").textContent = topic.guide;
  document.querySelector("#coachTip").textContent = topic.teaching;
  renderTopicResources(topic);
}

function renderTopicResources(topic) {
  document.querySelector("#topicResourcePanel").innerHTML = `
    <div class="resource-grid">
      <article class="resource-card">
        <strong>这题可用好词好句</strong>
        <ul>
          ${topic.phrases.map((phrase) => `<li>${phrase}</li>`).join("")}
        </ul>
      </article>
      <article class="resource-card">
        <strong>两个 main 思路（中文）</strong>
        <ol>
          ${topic.mainIdeas.map((idea) => `<li>${idea}</li>`).join("")}
        </ol>
      </article>
    </div>
  `;
}

function renderInteractiveDrills() {
  const exercise = exerciseBank[state.topic];
  const meanings = exercise.matching.map((pair) => pair[1]).sort();
  document.querySelector("#matchingRows").innerHTML = exercise.matching.map(([term], index) => `
    <label class="match-row">
      <span>${term}</span>
      <select data-match-index="${index}">
        <option value="">选择中文含义</option>
        ${meanings.map((meaning) => `<option value="${meaning}">${meaning}</option>`).join("")}
      </select>
    </label>
  `).join("");

  document.querySelectorAll("[data-match-index]").forEach((select) => {
    select.value = state.matchingAnswers[select.dataset.matchIndex] || "";
    select.addEventListener("change", (event) => {
      state.matchingAnswers[event.target.dataset.matchIndex] = event.target.value;
      saveState();
    });
  });

  document.querySelector("#clozeSentence").textContent = exercise.cloze.sentence;
  document.querySelector("#clozeInput").value = state.clozeAnswer || "";
  document.querySelector("#dictationChinese").textContent = exercise.dictation.chinese;
  document.querySelector("#dictationInput").value = state.dictationAnswer || "";
  renderExerciseFeedback();
}

function getPhrasePool() {
  const topicPool = nativePhraseBank.filter((item) => item.topic === state.topic);
  return topicPool.length ? topicPool : nativePhraseBank;
}

function shuffleItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startPhraseRound() {
  const pool = getPhrasePool();
  const size = state.phraseMode === "match" ? 6 : 5;
  state.phraseRound = shuffleItems(pool).slice(0, size).map((item) => nativePhraseBank.indexOf(item));
  state.phraseAnswers = {};
  state.phraseFeedback = "新一组题已生成。完成后点击“检查本轮”。";
  saveState();
  renderPhraseDrill();
}

function renderPhraseDrill() {
  document.querySelector("#phraseTopicName").textContent = task2Topics[state.topic]?.name || "当前话题";

  document.querySelectorAll(".phrase-mode").forEach((button) => {
    button.classList.toggle("active", button.dataset.phraseMode === state.phraseMode);
  });

  if (!state.phraseRound.length) {
    startPhraseRound();
    return;
  }

  const roundItems = state.phraseRound.map((index) => nativePhraseBank[index]).filter(Boolean);
  const round = document.querySelector("#phraseRound");

  if (state.phraseMode === "match") {
    const meanings = shuffleItems(roundItems.map((item) => item.zh));
    round.innerHTML = roundItems.map((item, index) => `
      <label class="phrase-item">
        <span class="phrase-en">${item.en}</span>
        <small>${item.definition || "根据中文意思判断这个表达的用法。"}</small>
        <select data-phrase-answer="${index}">
          <option value="">选择中文含义</option>
          ${meanings.map((meaning) => `<option value="${meaning}">${meaning}</option>`).join("")}
        </select>
      </label>
    `).join("");
  } else {
    round.innerHTML = roundItems.map((item, index) => `
      <label class="phrase-item">
        <span class="phrase-zh">${index + 1}. ${item.zh}</span>
        <small>${state.phraseMode === "dictation" ? item.definition || "根据中文提示默写完整英文表达。" : "输入对应英文词组。"}</small>
        ${state.phraseMode === "dictation"
          ? `<textarea data-phrase-answer="${index}" placeholder="默写英文表达，例如：${item.en.split(" ")[0]} ..."></textarea>`
          : `<input data-phrase-answer="${index}" type="text" placeholder="输入英文词组">`}
      </label>
    `).join("");
  }

  document.querySelectorAll("[data-phrase-answer]").forEach((input) => {
    input.value = state.phraseAnswers[input.dataset.phraseAnswer] || "";
    input.addEventListener("input", (event) => {
      state.phraseAnswers[event.target.dataset.phraseAnswer] = event.target.value;
      saveState();
    });
    input.addEventListener("change", (event) => {
      state.phraseAnswers[event.target.dataset.phraseAnswer] = event.target.value;
      saveState();
    });
  });

  renderPhraseStats();
}

function normalizePhraseAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.,!?。！？]/g, "")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ");
}

function isPhraseCorrect(actual, expected) {
  const normalizedActual = normalizePhraseAnswer(actual);
  const normalizedExpected = normalizePhraseAnswer(expected);
  const alternatives = normalizedExpected.split("/").map((part) => part.trim()).filter(Boolean);
  return normalizedActual === normalizedExpected || alternatives.includes(normalizedActual);
}

function checkPhraseRound() {
  const roundItems = state.phraseRound.map((index) => nativePhraseBank[index]).filter(Boolean);
  const results = roundItems.map((item, index) => {
    const answer = state.phraseAnswers[index] || "";
    const correct = state.phraseMode === "match" ? answer === item.zh : isPhraseCorrect(answer, item.en);
    return { item, answer, correct };
  });
  const correctCount = results.filter((result) => result.correct).length;
  state.phraseStats.correct += correctCount;
  state.phraseStats.total += results.length;
  state.phraseFeedback = [
    `本轮：${correctCount} / ${results.length} 正确。`,
    ...results
      .filter((result) => !result.correct)
      .slice(0, 3)
      .map((result) => `再记一下：${result.item.zh} = ${result.item.en}`)
  ].join(" ");
  saveState();
  renderPhraseStats();
}

function renderPhraseStats() {
  const total = state.phraseStats.total || 0;
  const correct = state.phraseStats.correct || 0;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  document.querySelector("#phraseAccuracy").textContent = `正确率 ${accuracy}% · ${correct}/${total}`;
  document.querySelector("#phraseFeedback").textContent = state.phraseFeedback || "选择话题和模式后开始练习。";
}

function getVocabularyFocusWord(category) {
  const words = category?.words || [];
  if (!words.length) return null;
  const safeIndex = Math.abs(Number(state.vocabularyFocusIndex) || 0) % words.length;
  return { item: words[safeIndex], index: safeIndex, total: words.length };
}

function speakVocabularyWord(word) {
  if (!("speechSynthesis" in window) || !word) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = state.vocabularyVoiceAccent || "en-GB";
  utterance.rate = word.trim().includes(" ") ? 0.94 : 0.9;
  utterance.pitch = 1.03;
  const preferredVoice = getPreferredVoice();
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang;
  }
  window.speechSynthesis.speak(utterance);
}

function getPlainSpeakingText(html) {
  return String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function resetReferenceSpeakButtons() {
  document.querySelectorAll("[data-speak-reference]").forEach((button) => {
    button.classList.remove("playing");
    button.textContent = "🔊 朗读";
    button.setAttribute("aria-label", "朗读参考答案");
  });
}

function resetQuestionListenButtons() {
  document.querySelectorAll("[data-listen-question]").forEach((button) => {
    button.classList.remove("playing");
    button.textContent = "🎧 听题";
    button.setAttribute("aria-label", "播放口语题目");
  });
}

function resetSpeakingAudioButtons() {
  resetReferenceSpeakButtons();
  resetQuestionListenButtons();
}

function speakReferenceAnswer(button) {
  if (!("speechSynthesis" in window)) {
    button.textContent = "当前浏览器不支持";
    return;
  }
  const wasPlaying = button.classList.contains("playing");
  window.speechSynthesis.cancel();
  resetSpeakingAudioButtons();
  if (wasPlaying) return;
  const text = decodeURIComponent(button.dataset.speakReference || "");
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.vocabularyVoiceAccent || "en-GB";
  utterance.rate = 0.94;
  utterance.pitch = 1.03;
  const preferredVoice = getPreferredVoice();
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang;
  }
  button.classList.add("playing");
  button.textContent = "■ 停止";
  button.setAttribute("aria-label", "停止朗读参考答案");
  utterance.onend = resetSpeakingAudioButtons;
  utterance.onerror = resetSpeakingAudioButtons;
  window.speechSynthesis.speak(utterance);
}

function speakQuestionPrompt(button) {
  if (!("speechSynthesis" in window)) {
    button.textContent = "当前浏览器不支持";
    return;
  }
  const wasPlaying = button.classList.contains("playing");
  window.speechSynthesis.cancel();
  resetSpeakingAudioButtons();
  if (wasPlaying) return;
  const text = decodeURIComponent(button.dataset.listenQuestion || "");
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.vocabularyVoiceAccent || "en-GB";
  utterance.rate = 0.92;
  utterance.pitch = 1.03;
  const preferredVoice = getPreferredVoice();
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang;
  }
  button.classList.add("playing");
  button.textContent = "■ 停止";
  button.setAttribute("aria-label", "停止播放口语题目");
  utterance.onend = resetSpeakingAudioButtons;
  utterance.onerror = resetSpeakingAudioButtons;
  window.speechSynthesis.speak(utterance);
}

function renderQuestionListeningPractice(question) {
  const spokenQuestion = encodeURIComponent(getPlainSpeakingText(question));
  return `
    <div class="question-listening-practice">
      <div class="question-mask">
        <span class="question-hidden-message">题目已遮住 · 先听再回答</span>
        <p class="spoken-question-text">${question}</p>
      </div>
      <div class="question-listen-actions">
        <button type="button" data-listen-question="${spokenQuestion}" aria-label="播放口语题目">🎧 听题</button>
        <button type="button" data-reveal-question aria-expanded="false">显示题目</button>
      </div>
    </div>
  `;
}

function advanceVocabularyFocus(category, rating) {
  const focus = getVocabularyFocusWord(category);
  if (!focus) return;
  const stats = state.vocabularyStudyStats || { reviewed: 0, remembered: 0 };
  state.vocabularyStudyStats = {
    reviewed: stats.reviewed + 1,
    remembered: stats.remembered + (rating === "known" ? 1 : 0)
  };
  state.vocabularyFocusIndex = (focus.index + 1) % focus.total;
  state.vocabularyFocusRevealed = false;
  saveState();
  renderLifeVocabulary();
  renderLearningSettings();
}

function renderVocabularyFocusCard(category) {
  const focus = getVocabularyFocusWord(category);
  if (!focus) return;
  const { item, index, total } = focus;
  document.querySelector("#focusWordPosition").textContent = `${index + 1} / ${total}`;
  document.querySelector("#focusWordTone").textContent = item.tone;
  document.querySelector("#focusWordText").textContent = item.word;
  document.querySelector("#focusWordText").onclick = () => speakVocabularyWord(item.word);
  document.querySelector("#focusWordAnswer").innerHTML = state.vocabularyFocusRevealed
    ? `<strong>${item.meaning}</strong><p>${item.difference}</p><blockquote>${item.example}<small>${item.translation}</small></blockquote>`
    : "";
  document.querySelector("#focusWordAnswer").classList.toggle("visible", Boolean(state.vocabularyFocusRevealed));
  document.querySelector("#revealFocusWordBtn").textContent = state.vocabularyFocusRevealed ? "隐藏答案" : "显示答案";
  document.querySelectorAll("[data-voice-accent]").forEach((button) => {
    button.classList.toggle("active", button.dataset.voiceAccent === state.vocabularyVoiceAccent);
    button.onclick = () => {
      state.vocabularyVoiceAccent = button.dataset.voiceAccent;
      state.vocabularyVoiceName = "";
      saveState();
      renderVocabularyFocusCard(category);
      speakVocabularyWord(item.word);
    };
  });
  document.querySelector("#speakWordBtn").onclick = () => speakVocabularyWord(item.word);
  document.querySelector("#revealFocusWordBtn").onclick = () => {
    state.vocabularyFocusRevealed = !state.vocabularyFocusRevealed;
    saveState();
    renderVocabularyFocusCard(category);
  };
  document.querySelectorAll("[data-memory-rating]").forEach((button) => {
    button.onclick = () => advanceVocabularyFocus(category, button.dataset.memoryRating);
  });
  const stats = state.vocabularyStudyStats || { reviewed: 0, remembered: 0 };
  const accuracy = stats.reviewed ? Math.round((stats.remembered / stats.reviewed) * 100) : 0;
  document.querySelector("#focusStudyStats").textContent = stats.reviewed
    ? `已复习 ${stats.reviewed} 次 · 记住 ${stats.remembered} 次 · 掌握率 ${accuracy}%`
    : "点击发音听读，查看答案后选择记忆状态。";
}

function getSpeakingQuestionBankEntries() {
  return typeof speakingQuestionBank2026MayAugust === "undefined"
    ? []
    : speakingQuestionBank2026MayAugust.entries;
}

function getQuestionStatusLabel(status) {
  return { new: "新题", retained: "保留题", evergreen: "万年题" }[status] || status;
}

function getQuestionRegionLabel(region) {
  return region === "mainland" ? "大陆" : "非大陆";
}

const speakingCoachingBank = [
  {
    match: /food|dinner|meal/i,
    vocab: [
      ["seasonal fruit", "时令水果"], ["refreshing", "清爽的"], ["naturally sweet", "天然清甜的"],
      ["comfort food", "令人安心的食物"], ["versatile", "做法多样的"], ["a balanced diet", "均衡饮食"]
    ],
    variants: [
      `水果方向：My go-to choice is <mark>seasonal fruit</mark>, especially berries, because they are <mark>refreshing</mark> and <mark>naturally sweet</mark>.`,
      `主食方向：I would probably choose noodles. They are incredibly <mark>versatile</mark>, so I can have them in soup or stir-fried.`,
      `健康方向：I try to maintain <mark>a balanced diet</mark>, so I normally choose fresh food over highly processed snacks.`
    ]
  },
  {
    match: /family|friend|person|people|famous|sportsperson/i,
    vocab: [["close-knit", "关系紧密"], ["supportive", "给予支持的"], ["look up to", "敬佩"], ["reliable", "可靠的"], ["have a positive influence on", "产生积极影响"]],
    variants: [
      `关系方向：We are quite <mark>close-knit</mark>, and this person has always been extremely <mark>supportive</mark>.`,
      `人物方向：I really <mark>look up to</mark> this person because they are both hardworking and <mark>reliable</mark>.`
    ]
  },
  {
    match: /home|house|accommodation|area|city|hometown|place/i,
    vocab: [["cosy", "温馨的"], ["spacious", "宽敞的"], ["within walking distance", "步行可达"], ["well-connected", "交通便利"], ["sense of community", "社区归属感"]],
    variants: [
      `住房方向：It is not particularly large, but it feels <mark>cosy</mark> and gets plenty of natural light.`,
      `位置方向：The area is <mark>well-connected</mark>, and most daily necessities are <mark>within walking distance</mark>.`
    ]
  },
  {
    match: /work|job|stud|school|teacher|career|science/i,
    vocab: [["hands-on experience", "实践经验"], ["heavy workload", "繁重任务"], ["career prospects", "职业前景"], ["sense of achievement", "成就感"], ["transferable skills", "可迁移技能"]],
    variants: [
      `学习方向：The course gives me valuable <mark>hands-on experience</mark> and helps me develop <mark>transferable skills</mark>.`,
      `工作方向：The job can be demanding, but it offers good <mark>career prospects</mark> and a strong <mark>sense of achievement</mark>.`
    ]
  },
  {
    match: /technology|phone|app|social media|electric/i,
    vocab: [["user-friendly", "容易使用的"], ["rely on", "依赖"], ["save time", "节省时间"], ["keep in touch", "保持联系"], ["privacy concerns", "隐私担忧"]],
    variants: [
      `便利方向：It is extremely <mark>user-friendly</mark> and helps me <mark>save a great deal of time</mark>.`,
      `影响方向：Although technology helps people <mark>keep in touch</mark>, it also raises serious <mark>privacy concerns</mark>.`
    ]
  },
  {
    match: /travel|journey|country|lost|natural place/i,
    vocab: [["memorable journey", "难忘旅程"], ["breathtaking scenery", "壮丽景色"], ["immerse myself in", "沉浸于"], ["well worth visiting", "非常值得参观"], ["broaden my horizons", "开阔眼界"]],
    variants: [
      `体验方向：It was a truly <mark>memorable journey</mark>, mainly because of the <mark>breathtaking scenery</mark>.`,
      `文化方向：Travelling allows me to <mark>immerse myself in</mark> another culture and <mark>broaden my horizons</mark>.`
    ]
  },
  {
    match: /shop|shoes|mall|buy|service/i,
    vocab: [["shop around", "货比三家"], ["good value for money", "物有所值"], ["impulse buying", "冲动购物"], ["customer service", "顾客服务"], ["meet my needs", "满足需求"]],
    variants: [
      `商品方向：I usually <mark>shop around</mark> first because I want something that offers <mark>good value for money</mark>.`,
      `服务方向：The staff provided excellent <mark>customer service</mark> and quickly found a product that <mark>met my needs</mark>.`
    ]
  },
  {
    match: /hobby|sport|drawing|painting|music|talent|activity|walking/i,
    vocab: [["be really into", "非常喜欢"], ["take up", "开始培养"], ["a good way to unwind", "放松的好方式"], ["sense of achievement", "成就感"], ["from time to time", "偶尔"]],
    variants: [
      `兴趣方向：I am really <mark>into</mark> this activity because it is <mark>a good way to unwind</mark>.`,
      `成长方向：I <mark>took it up</mark> a few years ago, and improving gradually gives me a real <mark>sense of achievement</mark>.`
    ]
  },
  {
    match: /read|book|story|movie|film/i,
    vocab: [["gripping", "引人入胜的"], ["thought-provoking", "发人深省的"], ["storyline", "故事情节"], ["relate to", "产生共鸣"], ["leave a lasting impression", "留下深刻印象"]],
    variants: [
      `内容方向：The <mark>storyline</mark> was so <mark>gripping</mark> that I finished it in one sitting.`,
      `感受方向：I could really <mark>relate to</mark> the main character, and the ending <mark>left a lasting impression</mark> on me.`
    ]
  },
  {
    match: /animal|pet|plant|vegetable|environment/i,
    vocab: [["take care of", "照顾"], ["natural habitat", "自然栖息地"], ["raise awareness", "提高意识"], ["protect biodiversity", "保护生物多样性"], ["environmentally friendly", "环保的"]],
    variants: [
      `个人方向：Looking after it taught me how to be patient and <mark>take care of</mark> another living thing.`,
      `社会方向：Protecting animals in their <mark>natural habitat</mark> is essential for <mark>biodiversity</mark>.`
    ]
  }
];

const speakingQuestionAnswerBank = {
  "What is your favourite food?": {
    idea: "直接说具体食物 → 描述味道 → 补充什么时候吃",
    answer: `My favourite food is probably <mark>hot pot</mark>. I love its <mark>rich, spicy flavour</mark>, and I also enjoy sharing it with friends. I do not eat it very often, but it is always my first choice for a celebration.`,
    structure: `My favourite food is ___. I love its ___ flavour, and I also enjoy ___. I usually have it when ___.`,
    vocab: [["rich, spicy flavour", "浓郁辛辣的味道"], ["share it with friends", "和朋友一起分享"], ["my first choice", "我的首选"]]
  },
  "What kind of food did you like when you were young?": {
    idea: "说明小时候喜欢什么 → 给一个具体例子 → 对比现在",
    answer: `When I was young, I had <mark>a real sweet tooth</mark>, so I loved chocolate cake and ice cream. My parents only bought them <mark>as an occasional treat</mark>, which made them feel even more special. These days, I do not eat as much sugary food.`,
    structure: `When I was young, I was really into ___. For example, ___. These days, however, I ___.`,
    vocab: [["have a sweet tooth", "爱吃甜食"], ["an occasional treat", "偶尔享用的美食"], ["sugary food", "高糖食物"]]
  },
  "Do you eat different foods at different times of the year?": {
    idea: "先回答 Yes → 夏季举例 → 冬季对比例子",
    answer: `Yes, definitely. In summer, I tend to eat <mark>lighter and more refreshing food</mark>, such as salads and watermelon. In winter, I prefer <mark>hearty meals</mark> like soup or hot pot because they help me stay warm.`,
    structure: `Yes. In summer, I tend to eat ___ because ___. In winter, I prefer ___ since ___.`,
    vocab: [["refreshing food", "清爽的食物"], ["hearty meals", "丰盛暖胃的饭菜"], ["stay warm", "保持温暖"]]
  },
  "Has your favourite food changed since you were a child?": {
    idea: "明确说 Yes/No → 过去偏好 → 现在偏好及原因",
    answer: `Yes, it has changed quite a lot. As a child, I mainly liked fried food and sweet snacks, but now I prefer <mark>lighter, more nutritious meals</mark>. I think my taste has <mark>matured over time</mark>, and I am also more conscious of my health.`,
    structure: `Yes, it has. I used to prefer ___, whereas now I tend to choose ___. That is mainly because ___.`,
    vocab: [["nutritious meals", "营养丰富的饭菜"], ["mature over time", "随着时间逐渐成熟"], ["be conscious of", "意识到；关注"]]
  }
};

const speakingTopicExamples = {
  "Pets and Animals": ["dogs", "loyal and affectionate", "they help people relax"],
  "Sports team": ["my university basketball team", "energetic and well-organised", "team sports create a strong sense of belonging"],
  Hobby: ["photography", "creative and relaxing", "it helps me notice small details"],
  "Morning time": ["quiet mornings", "peaceful and productive", "I can organise my thoughts before the day gets busy"],
  Gifts: ["books or practical gifts", "thoughtful and useful", "they show that the giver understands me"],
  Reading: ["non-fiction books", "informative and thought-provoking", "I enjoy learning something useful"],
  Walking: ["walking in a nearby park", "refreshing and convenient", "it clears my mind"],
  Typing: ["typing on my laptop", "fast and efficient", "most of my study and work is digital"],
  Plants: ["small herbs such as mint", "easy to look after", "they make my home feel fresher"],
  "Public places": ["the local library", "quiet and well-maintained", "it gives people a comfortable place to study"],
  Rules: ["being punctual", "fair and necessary", "it shows respect for other people's time"],
  Shoes: ["comfortable trainers", "lightweight and practical", "I walk quite a lot during the day"],
  "Doing something well": ["cooking simple meals", "practical and satisfying", "I have practised it for years"],
  "Crowded place": ["the city centre at weekends", "lively but slightly overwhelming", "many people go there to shop and socialise"],
  "Going out": ["a quiet café with friends", "relaxed and enjoyable", "we can talk without being rushed"],
  "Staying with old people": ["spending time with my grandparents", "warm and meaningful", "I learn a lot from their experience"],
  "Growing vegetables/fruits": ["tomatoes and herbs", "rewarding and environmentally friendly", "fresh produce tastes better"],
  Chatting: ["chatting with close friends", "easy-going and supportive", "it helps us stay connected"],
  "Borrowing and lending": ["books and small everyday items", "convenient when handled responsibly", "it saves money and reduces waste"],
  Advertisement: ["short online video adverts", "memorable but sometimes intrusive", "they use music and clear images"],
  Museum: ["a local history museum", "educational and well-designed", "real objects make history easier to understand"],
  "Having a break": ["taking a short walk", "simple and refreshing", "it helps me return with better concentration"],
  Sharing: ["sharing food and useful information", "generous and practical", "it strengthens relationships"],
  Study: ["my current course", "challenging but rewarding", "it develops useful skills for my future"],
  Work: ["my current job", "demanding but rewarding", "it gives me practical experience and career opportunities"],
  "Home/accommodation": ["my apartment", "cosy and convenient", "it is close to the places I use every day"],
  Hometown: ["my hometown", "friendly and easy to get around", "it holds many childhood memories"],
  "The area you live in": ["my residential neighbourhood", "quiet and well-connected", "daily necessities are within walking distance"],
  "The city you live in": ["the city where I live", "international and lively", "there are many study and work opportunities"],
  "Day off": ["a slow day with a walk and a good meal", "restful and flexible", "it helps me recover from a busy week"],
  Dreams: ["vivid dreams", "unpredictable but interesting", "they sometimes reflect what I have been thinking about"],
  Keys: ["my house keys", "small but essential", "I need them every single day"]
};

const part1TopicChoiceBank = {
  Food: ["mango", "roast chicken", "noodles", "hotpot", "ice cream"],
  "Pets and Animals": ["a dog", "a cat", "a rabbit", "fish", "wild birds"],
  "Sports team": ["a national football team", "a university basketball team", "a local club", "an e-sports team"],
  Hobby: ["photography", "cooking", "reading", "cycling", "drawing"],
  "Morning time": ["having breakfast", "going for a walk", "checking my plan", "commuting", "sleeping in"],
  Gifts: ["a book", "a handmade card", "headphones", "flowers", "a practical household item"],
  Reading: ["novels", "biographies", "news articles", "self-help books", "online posts"],
  Walking: ["a nearby park", "the riverside", "my neighbourhood", "the city centre", "a hiking trail"],
  Typing: ["a laptop", "a tablet", "a phone", "a mechanical keyboard", "voice typing"],
  Plants: ["mint", "a small cactus", "tomatoes", "flowers", "indoor green plants"],
  "Public places": ["a library", "a public park", "a museum", "a shopping centre", "a community centre"],
  Rules: ["being punctual", "wearing a uniform", "keeping quiet", "traffic rules", "screen-time limits"],
  Shoes: ["trainers", "boots", "formal shoes", "sandals", "running shoes"],
  "Doing something well": ["cooking", "organising my time", "taking photos", "explaining ideas", "playing a sport"],
  "Crowded place": ["a shopping mall", "a train station", "a tourist attraction", "a concert", "a night market"],
  "Going out": ["a quiet café", "a cinema", "a park", "a restaurant", "a friend's home"],
  "Staying with old people": ["my grandparents", "an elderly neighbour", "older relatives", "senior volunteers"],
  "Growing vegetables/fruits": ["tomatoes", "strawberries", "herbs", "chillies", "apples"],
  Chatting: ["close friends", "family members", "classmates", "colleagues", "online friends"],
  "Borrowing and lending": ["books", "a charger", "an umbrella", "notes", "small amounts of money"],
  Advertisement: ["a short video advert", "a poster", "a social-media advert", "a celebrity campaign", "a product review"],
  Museum: ["a history museum", "an art gallery", "a science museum", "a local exhibition", "an online museum"],
  "Having a break": ["taking a short walk", "having tea", "listening to music", "stretching", "talking to a friend"],
  Sharing: ["food", "study notes", "photos", "useful information", "household items"],
  Study: ["my current course", "a favourite subject", "my major", "a group project", "a future study plan"],
  Work: ["my current job", "my daily responsibilities", "a recent project", "my colleagues", "a future career plan"],
  "Home/accommodation": ["my apartment", "my bedroom", "the living room", "a balcony", "my ideal home"],
  Hometown: ["a local landmark", "traditional food", "the weather", "friendly residents", "recent changes"],
  "The area you live in": ["public transport", "nearby shops", "a local park", "my neighbours", "the quiet streets"],
  "The city you live in": ["job opportunities", "public transport", "cultural events", "busy streets", "nightlife"],
  "Day off": ["sleeping a little longer", "meeting friends", "doing exercise", "watching a film", "preparing for the week"],
  Dreams: ["a vivid dream", "a recurring dream", "a dream job", "a travel goal", "a childhood ambition"],
  Keys: ["house keys", "a car key", "an electronic key card", "a spare key", "a key ring"]
};

const part1TopicContextBank = {
  "Morning time": "before class · on weekdays · at weekends",
  Gifts: "on birthdays · during festivals · for a close friend",
  Walking: "after dinner · on my way home · at weekends",
  "Public places": "with friends · when I need to study · during holidays",
  "Crowded place": "at weekends · during rush hour · on public holidays",
  "Going out": "on Friday evenings · after class · with close friends",
  "Staying with old people": "during family visits · at weekends · on traditional holidays",
  Study: "in class · during a group project · before an exam",
  Work: "at the office · during a project · when working with colleagues",
  "Home/accommodation": "after a busy day · with my family · when I need privacy",
  Hometown: "during my childhood · when friends visit · during festivals",
  "The area you live in": "on my daily commute · at weekends · when buying necessities",
  "The city you live in": "during rush hour · at night · when visitors arrive",
  "Day off": "on Saturday mornings · after a busy week · when the weather is good",
  Dreams: "when I wake up · during stressful periods · when planning my future"
};

const part1DetailedIdeaMaps = {
  Plants: {
    centre: "PLANTS",
    centreZh: "植物",
    intro: "先选一种自己真正见过或养过的植物，再从外观、需求、养护和作用中挑细节。",
    branches: [
      {
        title: "常见植物 Types",
        items: [
          ["cactus", "仙人掌"], ["succulent", "多肉植物"], ["spider plant", "吊兰"],
          ["rose", "玫瑰"], ["sunflower", "向日葵"], ["orchid", "兰花"],
          ["mint", "薄荷"], ["basil", "罗勒"], ["tomato plant", "番茄植株"]
        ]
      },
      {
        title: "生长需要 Needs",
        items: [
          ["plenty of sunlight", "充足阳光"], ["regular watering", "定期浇水"],
          ["well-drained soil", "排水良好的土壤"], ["a warm environment", "温暖环境"],
          ["plant nutrients", "植物养分"], ["enough space to grow", "足够生长空间"]
        ]
      },
      {
        title: "外观特点 Appearance",
        items: [
          ["bright green leaves", "鲜绿色叶片"], ["colourful petals", "彩色花瓣"],
          ["a pleasant fragrance", "宜人的香气"], ["thick leaves", "厚实叶片"],
          ["small and compact", "小巧紧凑"], ["fast-growing", "生长迅速的"]
        ]
      },
      {
        title: "照顾动作 Care",
        items: [
          ["plant seeds", "播种"], ["water the plant", "给植物浇水"],
          ["put it near a window", "放在窗边"], ["trim the leaves", "修剪叶片"],
          ["repot it", "换盆"], ["take good care of it", "好好照料它"]
        ]
      },
      {
        title: "喜欢原因 Benefits",
        items: [
          ["low-maintenance", "容易养护的"], ["brighten up a room", "让房间更有生气"],
          ["help me relax", "帮助我放松"], ["smell fresh", "闻起来清新"],
          ["use it in cooking", "用于烹饪"], ["give me a sense of achievement", "给我成就感"]
        ]
      }
    ],
    sample: [
      "I keep a small pot of mint near my kitchen window.",
      "It has bright green leaves and a fresh smell, and it only needs regular watering and plenty of sunlight.",
      "I enjoy looking after it because it brightens up the room and I can also use the leaves in drinks."
    ]
  }
};

function renderPart1DetailedIdeaMap(topic) {
  const map = part1DetailedIdeaMaps[topic];
  if (!map) return "";
  return `
    <div class="part1-detailed-map">
      <div class="part1-detail-map-title">
        <div><span>Topic Mind Map</span><strong>${map.centre} 中英双语思维导图</strong></div>
        <p>${map.intro}</p>
      </div>
      <div class="part1-detail-map-canvas">
        <div class="part1-detail-centre"><strong>${map.centre}</strong><span>${map.centreZh}</span></div>
        <div class="part1-detail-branches">
          ${map.branches.map((branch) => `
            <article>
              <h5>${branch.title}</h5>
              <div>${branch.items.map(([en, zh]) => `<p><b>${en}</b><span>${zh}</span></p>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="part1-detail-sample">
        <b>把思维导图变成三句话</b>
        ${map.sample.map((sentence, index) => `<p><span>${index + 1}</span>${sentence}</p>`).join("")}
      </div>
    </div>
  `;
}

function renderPart1TopicPlanner(entry) {
  const choices = part1TopicChoiceBank[entry.topic] || [speakingTopicExamples[entry.topic]?.[0] || entry.topic.toLowerCase()];
  const [, quality = "interesting and useful", reason = "it is closely connected with my daily life"] = speakingTopicExamples[entry.topic] || [];
  const contexts = part1TopicContextBank[entry.topic] || "in daily life · at weekends · with friends or family";
  return `
    <section class="part1-topic-planner">
      <header>
        <div><span>先选自己的答案</span><h4>${entry.topic} 怎么展开？</h4></div>
        <b>每道题都用 3 句话</b>
      </header>
      <div class="part1-planner-grid">
        <article>
          <strong>① 我可以讲什么？</strong>
          <div class="part1-choice-chips">${choices.map((choice) => `<span>${choice}</span>`).join("")}</div>
        </article>
        <article>
          <strong>② 从哪些方向描述？</strong>
          <p><b>特点</b>${quality}</p>
          <p><b>个人联系</b>${reason}</p>
          <p><b>具体场景</b>${contexts}</p>
        </article>
        <article class="part1-three-line-plan">
          <strong>③ 三句话怎么说？</strong>
          <p><b>1</b>先直接回答，并给一个具体选择</p>
          <p><b>2</b>补两个特点，或解释两个相关原因</p>
          <p><b>3</b>加人物、时间、地点或过去现在对比</p>
        </article>
      </div>
      ${renderPart1DetailedIdeaMap(entry.topic)}
      <p class="part1-planner-note">下面每一道题都可以展开查看：中文路线、三句话参考答案、可替换句型和重点词汇。</p>
    </section>
  `;
}

function buildPart1Reference(question, entry) {
  const [example, quality, reason] = speakingTopicExamples[entry.topic] || [entry.topic.toLowerCase(), "interesting and relevant to me", "it is part of my everyday life"];
  const lower = question.toLowerCase();
  let answer;
  let idea;
  let structure;
  if (/young|child|used to|in the past/.test(lower)) {
    idea = "回答过去的情况 → 给具体例子 → 简单对比现在";
    answer = `When I was younger, I was really into <mark>${example}</mark>. I found it <mark>${quality}</mark>, mainly because ${reason}. My preferences have changed a little since then, but I still have positive memories of it.`;
    structure = "When I was younger, I was really into ___. I liked it because ___. These days, ___.";
  } else if (/change|different now|compared/.test(lower)) {
    idea = "明确是否改变 → 过去与现在对比 → 解释原因";
    answer = `Yes, it has changed to some extent. I used to have a fairly simple view of <mark>${example}</mark>, whereas now I appreciate that it is <mark>${quality}</mark>. That change mainly comes from having more experience over time.`;
    structure = "Yes, it has changed. I used to ___, whereas now I ___. This is mainly because ___.";
  } else if (/how often|how much time|when do|what time/.test(lower)) {
    idea = "给出频率或时间 → 描述常见场景 → 解释原因";
    answer = `I normally spend time on <mark>${example}</mark> a few times a week, usually when I have a quiet evening or some free time at the weekend. I keep doing it because it is <mark>${quality}</mark> and ${reason}.`;
    structure = "I usually ___ a few times a week, especially when ___. I do this because ___.";
  } else if (/^why|why do|why is/.test(lower)) {
    idea = "先给核心原因 → 补充个人影响或例子";
    answer = `The main reason is that <mark>${example}</mark> is <mark>${quality}</mark>. More importantly, ${reason}, so it has a genuinely positive effect on my daily life.`;
    structure = "The main reason is that ___. More importantly, ___. For me, ___.";
  } else if (/^(do|did|are|is|can|would|have|has)/.test(lower)) {
    idea = "直接回答 Yes/No → 给细节 → 解释原因";
    answer = `Yes, generally speaking. I am quite interested in <mark>${example}</mark> because it is <mark>${quality}</mark>. In particular, ${reason}, so it fits naturally into my routine.`;
    structure = "Yes, generally speaking. I ___. In particular, ___. That is why ___.";
  } else {
    idea = "给出一个具体答案 → 描述特点 → 解释个人原因";
    answer = `I would probably say <mark>${example}</mark>. It is <mark>${quality}</mark>, and what I like most is that ${reason}. That is the first example that comes to mind.`;
    structure = "I would probably say ___. It is ___. What I like most is that ___.";
  }
  return {
    idea,
    answer,
    structure,
    vocab: [[example, "本题具体例子"], [quality, "描述特点"], [reason, "说明个人原因"]]
  };
}

function renderPart1QuestionWithAnswer(question, entry) {
  const reference = speakingQuestionAnswerBank[question] || buildPart1Reference(question, entry);
  const spokenAnswer = encodeURIComponent(getPlainSpeakingText(reference.answer));
  return `
    <li class="part1-question-item">
      ${renderQuestionListeningPractice(question)}
      <details class="question-reference-answer">
        <summary>查看具体参考答案</summary>
        <div class="reference-answer-body">
          <div><b>中文思路</b><p>${reference.idea}</p></div>
          <div>
            <div class="reference-answer-heading"><b>自然参考答案</b><button type="button" data-speak-reference="${spokenAnswer}" aria-label="朗读参考答案">🔊 朗读</button></div>
            <p class="english-reference-answer">${reference.answer}</p>
          </div>
          <div><b>可替换结构</b><p>${reference.structure}</p></div>
          <div class="reference-vocabulary"><b>重点词汇</b><p>${reference.vocab.map(([word, meaning]) => `<span><mark>${word}</mark><small>${meaning}</small></span>`).join("")}</p></div>
        </div>
      </details>
    </li>
  `;
}

function renderPart2Reference(entry) {
  const coach = getSpeakingCoach(entry);
  const example = coach.variants[0].replace(/^.*?：/, "");
  const spokenExample = encodeURIComponent(getPlainSpeakingText(example));
  return `
    <details class="question-reference-answer part2-reference-answer">
      <summary>查看 Part 2 参考结构与示范</summary>
      <div class="reference-answer-body">
        <div><b>1. 开场定位</b><p>I’d like to talk about a specific experience that still stands out clearly in my mind.</p></div>
        <div><b>2. 按题卡展开</b><p>先交代时间、地点和人物，再按照 cue card 顺序讲事件过程；每一点补一个行为、感官或感受细节。</p></div>
        <div>
          <div class="reference-answer-heading"><b>3. 话题示范句</b><button type="button" data-speak-reference="${spokenExample}" aria-label="朗读参考答案">🔊 朗读</button></div>
          <p class="english-reference-answer">${example}</p>
        </div>
        <div><b>4. 自然结尾</b><p>Looking back, I value this experience because it changed the way I think about the topic and gave me a lasting memory.</p></div>
        <div class="reference-vocabulary"><b>可用词汇</b><p>${coach.vocab.map(([word, meaning]) => `<span><mark>${word}</mark><small>${meaning}</small></span>`).join("")}</p></div>
      </div>
    </details>
  `;
}

function renderPart3QuestionWithAnswer(question, entry) {
  const coach = getSpeakingCoach(entry);
  const [firstWord, firstMeaning] = coach.vocab[0];
  const [secondWord, secondMeaning] = coach.vocab[1] || coach.vocab[0];
  const answer = `From my perspective, this issue has a significant influence on people's choices. The main reason is that it can be closely connected with <mark>${firstWord}</mark>, which affects both individuals and the wider community. For example, people may make very different decisions depending on their age, income or circumstances. However, the result is not always the same, and it may also depend on whether people have access to <mark>${secondWord}</mark>.`;
  const spokenAnswer = encodeURIComponent(getPlainSpeakingText(answer));
  return `
    <li class="part1-question-item">
      ${renderQuestionListeningPractice(question)}
      <details class="question-reference-answer">
        <summary>查看 Part 3 参考答案</summary>
        <div class="reference-answer-body">
          <div><b>中文思路</b><p>先给明确观点，再解释个人或社会原因，补一个现实例子，最后增加条件或让步。</p></div>
          <div>
            <div class="reference-answer-heading"><b>参考答案</b><button type="button" data-speak-reference="${spokenAnswer}" aria-label="朗读参考答案">🔊 朗读</button></div>
            <p class="english-reference-answer">${answer}</p>
          </div>
          <div><b>可替换结构</b><p>From my perspective, ___. The main reason is that ___. For example, ___. However, this may depend on ___.</p></div>
          <div class="reference-vocabulary"><b>重点词汇</b><p><span><mark>${firstWord}</mark><small>${firstMeaning}</small></span><span><mark>${secondWord}</mark><small>${secondMeaning}</small></span></p></div>
        </div>
      </details>
    </li>
  `;
}

function getSpeakingCoach(entry) {
  const text = `${entry.topic} ${entry.prompt || ""}`;
  return speakingCoachingBank.find((coach) => coach.match.test(text)) || {
    vocab: [["give a specific example", "给出具体例子"], ["from my perspective", "在我看来"], ["the main reason is that", "主要原因是"], ["as a result", "因此"], ["it depends on", "视情况而定"]],
    variants: [
      `个人经历：<mark>From my perspective</mark>, the best answer comes from a real experience and one clear detail.`,
      `观点讨论：<mark>The main reason is that</mark> this issue affects people differently, so <mark>it depends on</mark> their situation.`
    ]
  };
}

function getSpeakingQuestionKey(entry, part) {
  return `${part}:${entry.region}:${entry.status}:${entry.topic}`;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function renderSpeakingDailyProgress() {
  const marks = state.speakingQuestionMarks || {};
  const log = state.speakingPracticeLog || {};
  const todayCount = Object.values(log).filter((date) => date === getTodayKey()).length;
  const favoriteCount = Object.values(marks).filter((mark) => mark === "favorite").length;
  const weakCount = Object.values(marks).filter((mark) => mark === "weak").length;
  const target = 5;
  const percent = Math.min(100, Math.round((todayCount / target) * 100));
  document.querySelector("#speakingDailyProgress").innerHTML = `
    <div><span>今日任务</span><strong>${todayCount} / ${target}</strong><div class="daily-progress-meter"><i style="width:${percent}%"></i></div></div>
    <div><span>收藏题</span><strong>${favoriteCount}</strong></div>
    <div><span>薄弱题</span><strong>${weakCount}</strong></div>
    <div><span>累计练习</span><strong>${Object.keys(log).length}</strong></div>
  `;
}

function updateSpeakingQuestionMark(key, action) {
  const marks = { ...(state.speakingQuestionMarks || {}) };
  const log = { ...(state.speakingPracticeLog || {}) };
  if (action === "practiced") {
    log[key] = getTodayKey();
  } else {
    marks[key] = marks[key] === action ? "" : action;
  }
  state.speakingQuestionMarks = marks;
  state.speakingPracticeLog = log;
  saveState();
  renderSpeakingQuestionBank();
}

function renderSpeakingCoach(entry, part) {
  const coach = getSpeakingCoach(entry);
  const questionKey = getSpeakingQuestionKey(entry, part);
  const currentMark = state.speakingQuestionMarks?.[questionKey] || "";
  const practiced = Boolean(state.speakingPracticeLog?.[questionKey]);
  const routes = part === "part1"
    ? ["直接回答，不绕圈", "补一个具体细节或例子", "解释原因或个人感受"]
    : part === "part2"
      ? ["交代时间、地点和人物", "按 cue card 讲清事件过程", "加入感官或行为细节", "最后解释意义和感受"]
      : ["先给明确观点", "解释原因和影响", "给社会或生活例子", "补充让步、对比或条件"];
  const template = part === "part1"
    ? `I’d say ___ is my favourite / usual choice. What I like most about it is ___. For example, ___.`
    : part === "part2"
      ? `I’d like to talk about ___. It happened when ___. What made it memorable was ___. Looking back, I feel ___.`
      : `From my perspective, ___. The main reason is that ___. For example, ___. However, this may depend on ___.`;
  return `
    <section class="speaking-coach-card">
      <div class="coach-card-title"><span>答题训练</span><strong>结构 → 方向 → 词汇 → 自己练</strong></div>
      <div class="coach-layout">
        <div>
          <b>解题思路</b>
          <ol class="answer-route">${routes.map((route) => `<li>${route}</li>`).join("")}</ol>
        </div>
        <div>
          <b>可替换的回答方向</b>
          <div class="answer-variants">${coach.variants.map((variant) => `<p>${variant}</p>`).join("")}</div>
        </div>
      </div>
      <div class="highlight-vocabulary">
        <b>重点词汇</b>
        <div>${coach.vocab.map(([word, meaning]) => `<span><mark>${word}</mark><small>${meaning}</small></span>`).join("")}</div>
      </div>
      <div class="practice-template"><b>举一反三结构</b><p>${template}</p><small>把横线换成自己的真实经历；同一个结构可以练习本组中的其他问题。</small></div>
      <div class="question-study-actions">
        <button type="button" class="${currentMark === "favorite" ? "active" : ""}" data-question-action="favorite" data-question-key="${questionKey}">★ 收藏</button>
        <button type="button" class="${currentMark === "weak" ? "active weak" : ""}" data-question-action="weak" data-question-key="${questionKey}">! 薄弱题</button>
        <button type="button" class="${practiced ? "active practiced" : ""}" data-question-action="practiced" data-question-key="${questionKey}">${practiced ? "✓ 今日已练" : "完成练习"}</button>
      </div>
    </section>
  `;
}

function renderSpeakingQuestionBank() {
  const entries = getSpeakingQuestionBankEntries();
  const targetPart = state.questionBankPart || "part1";
  const partEntries = entries.filter((entry) => targetPart === "part1" ? entry.part === "part1" : entry.part === "part2");
  const topicSourceEntries = partEntries.filter((entry) => {
    const regionMatches = state.questionBankRegion === "all" || entry.region === state.questionBankRegion;
    const statusMatches = state.questionBankStatus === "all" || entry.status === state.questionBankStatus;
    return regionMatches && statusMatches;
  });
  const availableTopics = [...new Set(topicSourceEntries.map((entry) => entry.topic))].sort((a, b) => a.localeCompare(b, "en"));
  if (state.questionBankTopic !== "all" && !availableTopics.includes(state.questionBankTopic)) {
    state.questionBankTopic = "all";
  }
  const selectedStatusLabel = state.questionBankStatus === "all"
    ? "全部"
    : getQuestionStatusLabel(state.questionBankStatus);
  const filtered = entries.filter((entry) => {
    const partMatches = targetPart === "part1" ? entry.part === "part1" : entry.part === "part2";
    const regionMatches = state.questionBankRegion === "all" || entry.region === state.questionBankRegion;
    const statusMatches = state.questionBankStatus === "all" || entry.status === state.questionBankStatus;
    const topicMatches = state.questionBankTopic === "all" || entry.topic === state.questionBankTopic;
    const key = getSpeakingQuestionKey(entry, targetPart);
    const mark = state.speakingQuestionMarks?.[key] || "";
    const practiced = Boolean(state.speakingPracticeLog?.[key]);
    const learningMatches = state.questionBankLearningFilter === "all"
      || (state.questionBankLearningFilter === "favorite" && mark === "favorite")
      || (state.questionBankLearningFilter === "weak" && mark === "weak")
      || (state.questionBankLearningFilter === "unpracticed" && !practiced);
    return partMatches && regionMatches && statusMatches && learningMatches && topicMatches;
  });

  const statusPriority = { evergreen: 0, new: 1, retained: 2 };
  const sortedEntries = [...filtered].sort((a, b) =>
    (statusPriority[a.status] ?? 9) - (statusPriority[b.status] ?? 9)
  );
  const questionCount = sortedEntries.reduce((total, entry) => {
    if (targetPart === "part1") return total + (entry.questions?.length || 0);
    if (targetPart === "part3") return total + (entry.part3Questions?.length || 0);
    return total + 1;
  }, 0);
  document.querySelector("#speakingBankStats").innerHTML = `<strong>${filtered.length}</strong><span>组题目</span><strong>${questionCount}</strong><span>${targetPart === "part2" ? "题卡" : "小问"}</span>`;
  document.querySelectorAll("[data-question-part]").forEach((button) => {
    button.classList.toggle("active", button.dataset.questionPart === targetPart);
  });
  document.querySelector("#questionRegionFilter").value = state.questionBankRegion;
  document.querySelector("#questionStatusFilter").value = state.questionBankStatus;
  document.querySelector("#questionLearningFilter").value = state.questionBankLearningFilter;
  document.querySelector("#questionTopicFilter").innerHTML = `
    <option value="all">${selectedStatusLabel} Topic（${availableTopics.length}）</option>
    ${availableTopics.map((topic) => `<option value="${topic}">${topic}</option>`).join("")}
  `;
  document.querySelector("#questionTopicFilter").value = state.questionBankTopic || "all";
  if (state.speakingSection === "bank") {
    const partLabel = { part1: "Part 1", part2: "Part 2", part3: "Part 3" }[targetPart];
    document.querySelector("#vocabularyProgress").textContent = `5–8 月题库 · ${partLabel} · ${questionCount} 道`;
  }
  renderSpeakingDailyProgress();

  const renderBankCard = (entry, index) => {
    const meta = `<div class="bank-card-meta"><span>${String(index + 1).padStart(2, "0")}</span><b>${getQuestionStatusLabel(entry.status)}</b><em>${getQuestionRegionLabel(entry.region)}</em></div>`;
    if (targetPart === "part1") {
      return `<details class="question-bank-card"><summary>${meta}<strong>${entry.topic}</strong><small>${entry.questions.length} questions</small></summary>${renderPart1TopicPlanner(entry)}<ol>${entry.questions.map((question) => renderPart1QuestionWithAnswer(question, entry)).join("")}</ol>${renderSpeakingCoach(entry, targetPart)}</details>`;
    }
    if (targetPart === "part2") {
      return `<details class="question-bank-card"><summary>${meta}<strong>${entry.topic}</strong><small>Part 2 cue card</small></summary><div class="part2-card-content"><h4>${entry.prompt}</h4><span>You should say:</span><ul>${entry.cuePoints.map((point) => `<li>${point}</li>`).join("")}</ul><p>${entry.part3Questions.length} 个关联 Part 3 问题</p></div>${renderPart2Reference(entry)}${renderSpeakingCoach(entry, targetPart)}</details>`;
    }
    return `<details class="question-bank-card"><summary>${meta}<strong>${entry.topic}</strong><small>${entry.part3Questions.length} questions</small></summary><div class="part3-card-content"><p class="linked-part2">关联 Part 2：${entry.prompt}</p><ol>${entry.part3Questions.map((question) => renderPart3QuestionWithAnswer(question, entry)).join("")}</ol></div>${renderSpeakingCoach(entry, targetPart)}</details>`;
  };

  const statusGroups = [
    { id: "evergreen", title: "万年题", note: "长期高频，优先准备并反复练习" },
    { id: "new", title: "新题", note: "本考季新增，重点熟悉题意和表达" },
    { id: "retained", title: "保留题", note: "上一考季延续，保持熟练度" }
  ];
  let runningIndex = 0;
  const groupedPartOne = statusGroups.map((group) => {
    const groupEntries = sortedEntries.filter((entry) => entry.status === group.id);
    if (!groupEntries.length) return "";
    const groupQuestionCount = groupEntries.reduce((sum, entry) => sum + entry.questions.length, 0);
    const cards = groupEntries.map((entry) => renderBankCard(entry, runningIndex++)).join("");
    return `
      <section class="question-status-group status-${group.id}">
        <header><div><span>${group.title}</span><strong>${group.note}</strong></div><em>${groupEntries.length} 个 Topic · ${groupQuestionCount} 题</em></header>
        <div class="question-status-list">${cards}</div>
      </section>
    `;
  }).join("");

  document.querySelector("#speakingQuestionBankList").innerHTML = !sortedEntries.length
    ? `<div class="empty-question-bank"><strong>没有找到符合条件的题目</strong><p>可以尝试切换 Topic、地区、题目状态或学习状态。</p></div>`
    : targetPart === "part1"
      ? groupedPartOne
      : sortedEntries.map(renderBankCard).join("");

  document.querySelectorAll("[data-question-part]").forEach((button) => {
    button.onclick = () => {
      state.speakingSection = "bank";
      state.questionBankPart = button.dataset.questionPart;
      state.speakingPart = button.dataset.questionPart;
      state.questionBankTopic = "all";
      saveState();
      renderSpeakingQuestionBank();
    };
  });
  document.querySelector("#questionRegionFilter").onchange = (event) => {
    state.questionBankRegion = event.target.value;
    saveState();
    renderSpeakingQuestionBank();
  };
  document.querySelector("#questionStatusFilter").onchange = (event) => {
    state.questionBankStatus = event.target.value;
    saveState();
    renderSpeakingQuestionBank();
  };
  document.querySelector("#questionLearningFilter").onchange = (event) => {
    state.questionBankLearningFilter = event.target.value;
    saveState();
    renderSpeakingQuestionBank();
  };
  document.querySelector("#questionTopicFilter").onchange = (event) => {
    state.questionBankTopic = event.target.value;
    saveState();
    renderSpeakingQuestionBank();
  };
  document.querySelectorAll("[data-question-action]").forEach((button) => {
    button.onclick = () => updateSpeakingQuestionMark(button.dataset.questionKey, button.dataset.questionAction);
  });
  document.querySelectorAll("[data-speak-reference]").forEach((button) => {
    button.onclick = () => speakReferenceAnswer(button);
  });
  document.querySelectorAll("[data-listen-question]").forEach((button) => {
    button.onclick = () => speakQuestionPrompt(button);
  });
  document.querySelectorAll("[data-reveal-question]").forEach((button) => {
    button.onclick = () => {
      const practice = button.closest(".question-listening-practice");
      const revealed = practice.classList.toggle("revealed");
      button.textContent = revealed ? "重新遮住" : "显示题目";
      button.setAttribute("aria-expanded", String(revealed));
    };
  });
}

function shuffleSpeakingItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildSpeakingMockQueue() {
  const entries = getSpeakingQuestionBankEntries().filter((entry) => entry.region === "mainland");
  const part1Items = shuffleSpeakingItems(entries.filter((entry) => entry.part === "part1"))
    .slice(0, 3)
    .map((entry) => ({
      part: "Part 1",
      question: entry.questions[Math.floor(Math.random() * entry.questions.length)],
      seconds: 30,
      guide: "直接回答，再补充一个细节和原因。"
    }));
  const part2Entry = shuffleSpeakingItems(entries.filter((entry) => entry.part === "part2"))[0];
  const part2Item = {
    part: "Part 2",
    question: part2Entry.prompt,
    cuePoints: part2Entry.cuePoints,
    seconds: 60,
    guide: "准备时间：快速记录人物、时间、地点、过程和感受。"
  };
  const part3Items = shuffleSpeakingItems(part2Entry.part3Questions).slice(0, 3).map((question) => ({
    part: "Part 3",
    question,
    seconds: 60,
    guide: "给出观点，用原因和例子展开，最后补充条件或让步。"
  }));
  return [...part1Items, part2Item, ...part3Items];
}

function stopSpeakingMockTimer() {
  if (speakingMockTimer) window.clearInterval(speakingMockTimer);
  speakingMockTimer = null;
}

function startSpeakingMockTimer(seconds) {
  stopSpeakingMockTimer();
  let remaining = seconds;
  const timer = document.querySelector("#mockTimer");
  if (timer) timer.textContent = `${remaining}s`;
  speakingMockTimer = window.setInterval(() => {
    remaining -= 1;
    const currentTimer = document.querySelector("#mockTimer");
    if (currentTimer) currentTimer.textContent = remaining > 0 ? `${remaining}s` : "时间到";
    if (remaining <= 0) stopSpeakingMockTimer();
  }, 1000);
}

async function toggleSpeakingMockRecording() {
  const status = document.querySelector("#mockRecordingStatus");
  const button = document.querySelector("#mockRecordBtn");
  if (speakingMockRecorder?.state === "recording") {
    speakingMockRecorder.stop();
    button.textContent = "● 重新录音";
    status.textContent = "录音已结束，正在生成回放。";
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    status.textContent = "当前浏览器不支持录音，请使用最新版 Chrome 或 Safari。";
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    speakingMockChunks = [];
    speakingMockRecorder = new MediaRecorder(stream);
    speakingMockRecorder.ondataavailable = (event) => {
      if (event.data.size) speakingMockChunks.push(event.data);
    };
    speakingMockRecorder.onstop = () => {
      const blob = new Blob(speakingMockChunks, { type: speakingMockRecorder.mimeType || "audio/webm" });
      const player = document.querySelector("#mockAudioPlayback");
      player.src = URL.createObjectURL(blob);
      player.hidden = false;
      stream.getTracks().forEach((track) => track.stop());
      status.textContent = "可以回放并检查流利度、停顿和发音。";
    };
    speakingMockRecorder.start();
    button.textContent = "■ 停止录音";
    status.textContent = "正在录音…";
  } catch {
    status.textContent = "麦克风未授权。请允许浏览器使用麦克风后重试。";
  }
}

function renderSpeakingMockStage() {
  const stage = document.querySelector("#speakingMockStage");
  const item = speakingMockQueue[speakingMockIndex];
  if (!item) {
    stopSpeakingMockTimer();
    stage.innerHTML = `<div class="mock-complete"><strong>本轮模拟完成</strong><p>回到题库，把卡住的题目标记为“薄弱题”，再用答题结构重新练习。</p><button type="button" id="restartSpeakingMockBtn">再练一轮</button></div>`;
    document.querySelector("#restartSpeakingMockBtn").onclick = startSpeakingMock;
    return;
  }
  const noteKey = `${speakingMockIndex}:${item.part}:${item.question}`;
  stage.innerHTML = `
    <div class="mock-stage-head"><span>${item.part}</span><b>第 ${speakingMockIndex + 1} / ${speakingMockQueue.length} 题</b><strong id="mockTimer">${item.seconds}s</strong></div>
    <div class="mock-question-card">
      <p>${item.guide}</p>
      <h4>${item.question}</h4>
      ${item.cuePoints?.length ? `<ul>${item.cuePoints.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
    </div>
    <label class="mock-note-field"><span>回答笔记</span><textarea id="mockAnswerNote" placeholder="记录关键词、例子或刚才没有说好的地方。">${state.speakingMockNotes?.[noteKey] || ""}</textarea></label>
    <div class="mock-controls">
      <button type="button" id="mockRecordBtn">● 开始录音</button>
      <button type="button" id="mockNextBtn">下一题 →</button>
      <button type="button" id="mockExitBtn" class="secondary">结束本轮</button>
    </div>
    <p id="mockRecordingStatus" class="mock-recording-status">录音只保留在当前页面，不会上传。</p>
    <audio id="mockAudioPlayback" controls hidden></audio>
  `;
  document.querySelector("#mockAnswerNote").oninput = (event) => {
    state.speakingMockNotes = { ...(state.speakingMockNotes || {}), [noteKey]: event.target.value };
    saveState();
  };
  document.querySelector("#mockRecordBtn").onclick = toggleSpeakingMockRecording;
  document.querySelector("#mockNextBtn").onclick = () => {
    if (speakingMockRecorder?.state === "recording") speakingMockRecorder.stop();
    speakingMockIndex += 1;
    renderSpeakingMockStage();
  };
  document.querySelector("#mockExitBtn").onclick = () => {
    speakingMockIndex = speakingMockQueue.length;
    renderSpeakingMockStage();
  };
  startSpeakingMockTimer(item.seconds);
}

function startSpeakingMock() {
  speakingMockQueue = buildSpeakingMockQueue();
  speakingMockIndex = 0;
  renderSpeakingMockStage();
}

const speakingTopicQuestionMatchers = {
  shopping: /shop|shopping|mall|shoe|gift|advert|service|borrow|lend/i,
  food: /food|meal|dinner|fruit|vegetable|cook/i,
  travel: /travel|journey|foreign|lost|place|country/i,
  family: /family|friend|old people|person/i,
  home: /home|house|accommodation|area|city|hometown/i,
  study: /work|stud|job|career|school|science/i,
  hobbies: /hobby|sport|music|drawing|painting|walking|activity/i,
  technology: /technology|phone|app|typing|social media|electric/i,
  health: /health|sport|walking|food|vegetable/i
};

function getSeasonQuestionsForTopic(topicKey, part) {
  const matcher = speakingTopicQuestionMatchers[topicKey];
  if (!matcher) return [];
  const entries = getSpeakingQuestionBankEntries();
  const questions = [];
  entries.forEach((entry) => {
    const entryText = `${entry.topic} ${entry.prompt || ""} ${(entry.questions || []).join(" ")} ${(entry.part3Questions || []).join(" ")}`;
    if (!matcher.test(entryText)) return;
    if (part === "part1" && entry.part === "part1") questions.push(...(entry.questions || []));
    if (part === "part2" && entry.part === "part2" && entry.prompt) questions.push(entry.prompt);
    if (part === "part3" && entry.part === "part2") questions.push(...(entry.part3Questions || []));
  });
  return [...new Set(questions)].slice(0, 8);
}

const foodSpeakingIdeaMap = {
  choices: [
    { name: "水果 Fruit", examples: "apple · banana · mango · strawberry · watermelon", cue: "清爽、健康，适合讲颜色和口感" },
    { name: "肉类 Meat", examples: "chicken · beef · pork · lamb", cue: "适合讲烹饪方法、香味和嫩度" },
    { name: "主食 Staples", examples: "rice · noodles · bread · dumplings", cue: "熟悉、方便，容易联系家庭和童年" },
    { name: "甜品 Desserts", examples: "cake · ice cream · chocolate · cookies", cue: "适合讲甜味、心情和特殊场合" },
    { name: "聚餐菜 Shared dishes", examples: "hotpot · barbecue · roast dinner · seafood", cue: "适合讲朋友、家庭和社交氛围" }
  ],
  branches: [
    { label: "颜色 Colour", words: "red · yellow · green · orange · purple · golden-brown" },
    { label: "味道 Taste", words: "sweet · sour · savoury · spicy · rich · refreshing" },
    { label: "口感 Texture", words: "crunchy · juicy · tender · chewy · creamy · crispy" },
    { label: "原因 Reason", words: "nutritious · convenient · comforting · filling · good for sharing" },
    { label: "场景 Context", words: "at breakfast · after exercise · at weekends · in summer · with my family" }
  ],
  answers: [
    {
      tag: "水果方向",
      title: "Mango",
      sentences: [
        "My favourite food is mango, especially the ripe yellow kind.",
        "I love it because it is naturally sweet, juicy and really refreshing.",
        "I normally eat it as an afternoon snack in summer."
      ]
    },
    {
      tag: "肉类方向",
      title: "Roast chicken",
      sentences: [
        "My favourite food is roast chicken, particularly the one my mum makes.",
        "It is savoury and tender, and it also reminds me of family meals.",
        "We normally have it together at weekends or on special occasions."
      ]
    },
    {
      tag: "主食方向",
      title: "Noodles",
      sentences: [
        "My favourite food is noodles, especially beef noodles.",
        "What I like most is that they are filling, flavourful and very convenient.",
        "I often have a bowl for lunch when I do not have much time to cook."
      ]
    },
    {
      tag: "聚餐方向",
      title: "Hotpot",
      sentences: [
        "My favourite food is hotpot, especially Sichuan-style hotpot.",
        "It is rich in flavour, and it is also a very social meal.",
        "I normally have it with close friends at weekends, especially in winter."
      ]
    }
  ]
};

function renderFoodIdeaMap() {
  const container = document.querySelector("#foodIdeaMap");
  if (!container) return;
  const shouldShow = state.lifeVocabularyTopic === "food" && state.speakingPart === "part1";
  container.hidden = !shouldShow;
  if (!shouldShow) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `
    <div class="food-map-heading">
      <div>
        <p class="eyebrow">Build Your Own Answer</p>
        <h3>Food 选材思维导图</h3>
        <p>先选一种自己熟悉的食物，再从颜色、味道、口感、原因和场景中各挑一两个细节。答案不需要和别人一样。</p>
      </div>
      <span>选食物 → 挑特征 → 加场景</span>
    </div>
    <div class="food-map-canvas">
      <div class="food-map-centre"><small>TOPIC</small><strong>FOOD</strong><span>我能讲什么？</span></div>
      <div class="food-choice-list">
        ${foodSpeakingIdeaMap.choices.map((choice) => `
          <article>
            <strong>${choice.name}</strong>
            <p>${choice.examples}</p>
            <small>${choice.cue}</small>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="food-description-branches">
      ${foodSpeakingIdeaMap.branches.map((branch) => `
        <article><strong>${branch.label}</strong><p>${branch.words}</p></article>
      `).join("")}
    </div>
    <div class="food-answer-builder">
      <div class="food-answer-formula">
        <b>Part 1 三句话</b>
        <span>① 直接回答 + 具体种类</span>
        <span>② 两个特点或原因</span>
        <span>③ 时间、人物或场景</span>
      </div>
      <div class="food-sample-grid">
        ${foodSpeakingIdeaMap.answers.map((answer) => `
          <article>
            <header><span>${answer.tag}</span><strong>${answer.title}</strong></header>
            ${answer.sentences.map((sentence, index) => `<p><b>${index + 1}</b>${sentence}</p>`).join("")}
          </article>
        `).join("")}
      </div>
    </div>
    <aside class="food-transfer-tip">
      <b>四道 Food 题都能复用</b>
      <p><strong>favourite food</strong> 讲现在的选择；<strong>when you were young</strong> 换成童年食物；<strong>different times of the year</strong> 对比夏季和冬季；<strong>changed since childhood</strong> 对比过去和现在。</p>
    </aside>
  `;
}

function renderLifeVocabulary() {
  const topic = lifeVocabularyTopics[state.lifeVocabularyTopic] || lifeVocabularyTopics.shopping;
  const category = topic.categories.find((item) => item.id === state.lifeVocabularyCategory) || topic.categories[0];
  if (state.speakingSection === "vocabulary") {
    document.querySelector("#vocabularyProgress").textContent = `${topic.name} · ${topic.categories.length} 个分类 · ${topic.categories.reduce((sum, item) => sum + item.words.length, 0)} 个表达`;
  }
  document.querySelector("#vocabularyMemoryText").innerHTML = topic.memory;
  const partLabels = { part1: "Part 1 · 个人与日常", part2: "Part 2 · 人物地点事件", part3: "Part 3 · 社会观点" };
  const partTopics = Object.entries(lifeVocabularyTopics).filter(([, item]) => item.parts?.includes(state.speakingPart));
  document.querySelector("#vocabularyTopicBar").innerHTML = partTopics.map(([key, item], index) => `
    <button type="button" class="vocabulary-topic ${key === state.lifeVocabularyTopic ? "active" : ""}" data-life-topic="${key}">
      <span>${String(index + 1).padStart(2, "0")}</span><strong>${item.name}</strong><small>${item.zh}</small>
    </button>
  `).join("");
  document.querySelectorAll("[data-speaking-part]").forEach((button) => button.classList.toggle("active", button.dataset.speakingPart === state.speakingPart));
  const seasonQuestions = getSeasonQuestionsForTopic(state.lifeVocabularyTopic, state.speakingPart);
  document.querySelector("#speakingQuestionStrip").innerHTML = `
    <span>${partLabels[state.speakingPart]}</span>
    <div>
      <b>本 Topic 口语题</b>
      <p>${topic.questions?.[state.speakingPart] || "Use the vocabulary below to answer this topic."}</p>
      ${seasonQuestions.length ? `
        <details class="topic-season-questions">
          <summary>查看 5–8 月相关题目（${seasonQuestions.length}）</summary>
          <ol>${seasonQuestions.map((question) => `<li>${question}</li>`).join("")}</ol>
          <small>完整的逐题答案、结构和高亮词汇在本页上方“5–8 月雅思口语题库”中。</small>
        </details>
      ` : ""}
    </div>
  `;
  renderFoodIdeaMap();
  renderVocabularyFocusCard(category);
  document.querySelector("#vocabularyCategoryList").innerHTML = topic.categories.map((item, index) => `
    <button type="button" class="vocabulary-category-button ${item.id === category.id ? "active" : ""}" data-vocabulary-category="${item.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${item.label}</strong>
      <small>${item.words.length} 个表达</small>
    </button>
  `).join("");
  document.querySelector("#vocabularyCategoryIntro").innerHTML = `
    <p class="eyebrow">${topic.name} / ${category.label}</p>
    <h3>${category.label}</h3>
    <p class="muted">${category.hint}</p>
  `;
  document.querySelector("#vocabularyWordGrid").innerHTML = category.words.map((item, index) => {
    const cardKey = `${topic.name}:${category.id}:${index}`;
    const open = Boolean(state.lifeVocabularyOpenCards?.[cardKey]);
    return `
      <article class="vocabulary-word-card ${open ? "open" : ""}">
        <button type="button" class="vocabulary-word-summary" data-vocabulary-card="${cardKey}" aria-expanded="${open}">
          <span><strong>${item.word}</strong><small>${item.tone}</small></span>
          <b>${item.meaning}</b>
          <i>${open ? "收起 −" : "学习 +"}</i>
        </button>
        <div class="vocabulary-word-detail">
          <p><span>怎么区分</span>${item.difference}</p>
          <p><span>常用搭配</span><b>${item.collocation}</b></p>
          <blockquote>${item.example}<small>${item.translation}</small></blockquote>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-vocabulary-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lifeVocabularyCategory = button.dataset.vocabularyCategory;
      state.vocabularyFocusIndex = 0;
      state.vocabularyFocusRevealed = false;
      saveState();
      renderLifeVocabulary();
    });
  });
  document.querySelectorAll("[data-life-topic]").forEach((button) => {
    button.onclick = () => {
      const nextTopic = lifeVocabularyTopics[button.dataset.lifeTopic];
      if (!nextTopic) return;
      state.speakingSection = "vocabulary";
      state.lifeVocabularyTopic = button.dataset.lifeTopic;
      state.lifeVocabularyCategory = nextTopic.categories[0].id;
      state.vocabularyFocusIndex = 0;
      state.vocabularyFocusRevealed = false;
      saveState();
      renderLifeVocabulary();
    };
  });
  document.querySelectorAll("[data-speaking-part]").forEach((button) => {
    button.onclick = () => {
      state.speakingSection = "vocabulary";
      state.speakingPart = button.dataset.speakingPart;
      const firstTopic = Object.entries(lifeVocabularyTopics).find(([, item]) => item.parts?.includes(state.speakingPart));
      if (firstTopic && !lifeVocabularyTopics[state.lifeVocabularyTopic]?.parts?.includes(state.speakingPart)) {
        state.lifeVocabularyTopic = firstTopic[0];
        state.lifeVocabularyCategory = firstTopic[1].categories[0].id;
      }
      state.vocabularyFocusIndex = 0;
      state.vocabularyFocusRevealed = false;
      saveState();
      renderLifeVocabulary();
    };
  });
  document.querySelectorAll("[data-vocabulary-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.vocabularyCard;
      state.lifeVocabularyOpenCards = { ...(state.lifeVocabularyOpenCards || {}), [key]: !state.lifeVocabularyOpenCards?.[key] };
      saveState();
      renderLifeVocabulary();
    });
  });
}

function updateProgress() {
  const progressText = document.querySelector("#progressText");
  const progressBar = document.querySelector("#progressBar");
  if (!progressText || !progressBar) return;
  progressText.textContent = "实时查看";
  progressBar.style.width = "100%";
}

function renderSavedNote() {
  document.querySelector("#savedNote").textContent = state.savedNote || "还没有保存练习。";
}

function renderFeedback() {
  document.querySelector("#instantFeedback").innerHTML = state.feedback || "<strong>学习反馈</strong><p>完成练习后点击“生成学习反馈”，这里会告诉你下一步该补什么。</p>";
}

function renderExerciseFeedback() {
  document.querySelector("#matchingResult").textContent = state.exerciseFeedback.matching || "请选择每个词的中文含义。";
  document.querySelector("#clozeResult").textContent = state.exerciseFeedback.cloze || "注意大小写不重要，但拼写要准确。";
  document.querySelector("#dictationResult").textContent = state.exerciseFeedback.dictation || "尽量写完整观点句，不只是关键词。";
}

function applyState() {
  document.body.classList.toggle("sidebar-collapsed", Boolean(state.sidebarCollapsed));
  document.querySelector("#sidebarToggle").setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  document.querySelector(".toggle-text").textContent = state.sidebarCollapsed ? "显示侧栏" : "隐藏侧栏";
  renderCourseNavigation();
  renderCourseSystem();
  renderCoursePanel();
  renderAcademicSources();
  renderBookMethod();
  renderTopicGrid();
  renderTopicSelect();
  renderPractice();
  renderInteractiveDrills();
  renderPhraseDrill();
  renderLifeVocabulary();
  renderSpeakingQuestionBank();
  renderHomeProgress();
  renderFeedback();
  renderSavedNote();
  updateProgress();
  renderVisiblePanels();

  fields.forEach((id) => {
    document.querySelector(`#${id}`).value = state[id] || "";
  });

}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/[.!?。！？]/g, "").replace(/\s+/g, " ");
}

function checkMatchingAnswers() {
  const exercise = exerciseBank[state.topic];
  const correct = exercise.matching.filter(([, meaning], index) => state.matchingAnswers[index] === meaning).length;
  state.exerciseFeedback.matching = `配对结果：${correct} / ${exercise.matching.length} 正确。`;
  saveState();
  renderExerciseFeedback();
}

function checkClozeAnswers() {
  const expected = normalizeAnswer(exerciseBank[state.topic].cloze.answer);
  const actual = normalizeAnswer(state.clozeAnswer);
  state.exerciseFeedback.cloze = actual === expected ? "填空正确。这个表达可以放进你的表达库。" : `还不对。提示：答案是 ${exerciseBank[state.topic].cloze.answer}。`;
  saveState();
  renderExerciseFeedback();
}

function checkDictationAnswer() {
  const expected = normalizeAnswer(exerciseBank[state.topic].dictation.answer);
  const actual = normalizeAnswer(state.dictationAnswer);
  const expectedWords = expected.split(" ");
  const matched = expectedWords.filter((word) => actual.includes(word)).length;
  const score = Math.round((matched / expectedWords.length) * 100);
  state.exerciseFeedback.dictation = score >= 75 ? `默写基本合格，相似度约 ${score}%。可以再检查语法和拼写。` : `默写还需要补。参考句：${exerciseBank[state.topic].dictation.answer}`;
  saveState();
  renderExerciseFeedback();
}

function buildFeedback() {
  const advice = [];
  const vocabCount = state.vocabulary.split(/[,，、\n]/).map((item) => item.trim()).filter(Boolean).length;
  const topic = task2Topics[state.topic];

  if (!state.branchNote.trim()) advice.push("先从上面的两个中文 main 思路里选一个。");
  if (vocabCount < 2) advice.push("至少选 2 个上方好词好句，并尝试写成自己的句子。");
  if (state.angles.trim().length < 30) advice.push("中文展开逻辑还不够：补充原因、结果或例子。");
  if (state.argumentChain.trim().length < 80) advice.push("英文主体段草稿还太短，建议写到 80 词以上。");
  if (!state.reflection.trim()) advice.push("最后写一句修改记录：哪句话最需要改？");
  if (advice.length === 0) advice.push(`这次 ${topic.name} 练习结构完整。下一步可以扩写成 120-150 词主体段。`);

  state.feedback = `<strong>学习反馈</strong><ul>${advice.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  saveState();
  renderFeedback();
}

function fillModel() {
  const topic = task2Topics[state.topic];
  state.branchNote = topic.mainIdeas[0];
  state.vocabulary = topic.phrases.slice(0, 3).join("\n");
  state.angles = `原因：${topic.guide}\n结果：这个观点能解释学生/社会/政府为什么会受到影响。\n例子：可以用学校课程、公共服务或个人选择来举例。`;
  state.argumentChain = topic.chain;
  state.reflection = "修改重点：把中文思路转成英文时，注意不要只堆词，要写清楚 cause and effect。";
  state.feedback = `<strong>示范素材已填入</strong><p>你可以直接在示范基础上改写成自己的主体段。</p>`;
  saveState();
  applyState();
}

function savePractice() {
  const topic = task2Topics[state.topic];
  state.savedNote = [
    `IELTS Writing Lab - ${topic.name}`,
    "",
    `题目：${topic.question}`,
    `选择的 main 思路：${state.branchNote || "-"}`,
    "",
    "使用的好词好句：",
    state.vocabulary || "-",
    "",
    "中文展开逻辑：",
    state.angles || "-",
    "",
    "英文主体段草稿：",
    state.argumentChain || "-",
    "",
    "修改记录：",
    state.reflection || "-"
  ].join("\n");
  saveState();
  renderSavedNote();
}

document.querySelectorAll(".course-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.course = button.dataset.course;
    saveState();
    renderCoursePanel();
  });
});

document.querySelector("#sidebarToggle").addEventListener("click", () => {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  saveState();
  applyState();
});

document.querySelector("#startSpeakingMockBtn").addEventListener("click", startSpeakingMock);

document.querySelectorAll(".nav-domain[data-default-view] > summary").forEach((summary) => {
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    const domain = summary.parentElement;
    if (domain.open) {
      domain.open = false;
      return;
    }
    if (domain.dataset.defaultModule) {
      const targetPhase = coursePhases.find((phase) =>
        phase.modules.some((module) => module.id === domain.dataset.defaultModule)
      );
      if (targetPhase) {
        state.stage = targetPhase.id;
        state.module = domain.dataset.defaultModule;
      }
    }
    if (domain.dataset.defaultSpeakingSection) {
      state.speakingSection = domain.dataset.defaultSpeakingSection;
      state.questionBankPart = "part1";
      state.speakingPart = "part1";
    }
    setActiveView(domain.dataset.defaultView);
    domain.open = true;
    if (domain.dataset.defaultSpeakingSection) {
      window.setTimeout(() => document.querySelector(".speaking-bank")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  });
});

document.querySelectorAll(".utility-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const viewId = link.getAttribute("href").replace("#", "");
    if (link.dataset.speakingSection) {
      state.speakingSection = link.dataset.speakingSection;
    }
    if (link.dataset.questionPart) {
      state.questionBankPart = link.dataset.questionPart;
      state.speakingPart = link.dataset.questionPart;
    }
    if (link.dataset.moduleShortcut) {
      const targetModule = coursePhases.flatMap((phase) => phase.modules).find((module) => module.id === link.dataset.moduleShortcut);
      const targetPhase = coursePhases.find((phase) => phase.modules.some((module) => module.id === link.dataset.moduleShortcut));
      if (targetModule && targetPhase) {
        state.stage = targetPhase.id;
        state.module = targetModule.id;
      }
    } else if (viewId === "course-system" && state.module === "foundation-grammar") {
      state.stage = "stage1";
      state.module = "sentence-patterns";
    }
    setActiveView(viewId);
    if (link.dataset.innerTarget) {
      window.setTimeout(() => document.querySelector(`.${link.dataset.innerTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  });
});

document.querySelectorAll("[data-setting-voice]").forEach((button) => {
  button.addEventListener("click", () => {
    state.vocabularyVoiceAccent = button.dataset.settingVoice;
    state.vocabularyVoiceName = "";
    saveState();
    renderLearningSettings();
  });
});

document.querySelector("#naturalVoiceSelect").addEventListener("change", (event) => {
  state.vocabularyVoiceName = event.target.value;
  const voice = getEnglishVoices().find((item) => item.name === state.vocabularyVoiceName);
  if (voice) state.vocabularyVoiceAccent = voice.lang;
  saveState();
  renderLearningSettings();
  speakVocabularyWord("Learning English should sound clear, calm, and natural.");
});

document.querySelector("#previewVoiceBtn").addEventListener("click", () => {
  speakVocabularyWord("Learning English should sound clear, calm, and natural.");
});

document.querySelector("#autoVoiceBtn").addEventListener("click", () => {
  state.vocabularyVoiceName = "";
  state.voiceProfileVersion = 2;
  const recommended = getEnglishVoices()[0];
  if (recommended) {
    state.vocabularyVoiceName = recommended.name;
    state.vocabularyVoiceAccent = recommended.lang;
  }
  saveState();
  renderLearningSettings();
  speakVocabularyWord("Could you tell me a little about your hometown?");
});

if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", populateNaturalVoiceOptions);
}

document.querySelectorAll("[data-font-scale]").forEach((button) => {
  button.addEventListener("click", () => {
    state.pageFontScale = Number(button.dataset.fontScale);
    saveState();
    renderLearningSettings();
  });
});

fields.forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", (event) => {
    state[id] = event.target.value;
    saveState();
  });
});

document.querySelector("#feedbackBtn").addEventListener("click", buildFeedback);
document.querySelector("#modelBtn").addEventListener("click", fillModel);
document.querySelector("#saveBtn").addEventListener("click", savePractice);
document.querySelector("#copyModuleBtn").addEventListener("click", () => {
  const phase = getCurrentPhase();
  const module = getCurrentModule();
  state.savedNote = [
    `${phase.title} - ${module.title}`,
    "",
    `教学目标：${module.goal}`,
    `适合学生：${module.students}`,
    "",
    `核心知识点：${module.knowledge.join(" / ")}`,
    `课堂讲法：${module.lecture}`,
    `板书结构：${module.board}`,
    "",
    "示例句：",
    module.examples.map((item) => `- ${item}`).join("\n"),
    "",
    "学生练习：",
    module.exercises.map((item) => `- ${item}`).join("\n"),
    "",
    `作业：${module.homework}`,
    "",
    "常见错误：",
    module.errors.map((item) => `- ${item}`).join("\n"),
    "",
    "后续可补充内容：",
    module.future.map((item) => `- ${item}`).join("\n")
  ].join("\n");
  state.activeView = "record";
  saveState();
  applyState();
  renderSavedNote();
  document.querySelector("#record").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#checkMatchingBtn").addEventListener("click", checkMatchingAnswers);
document.querySelector("#checkClozeBtn").addEventListener("click", checkClozeAnswers);
document.querySelector("#checkDictationBtn").addEventListener("click", checkDictationAnswer);
document.querySelector("#checkPhraseRoundBtn").addEventListener("click", checkPhraseRound);
document.querySelector("#newPhraseRoundBtn").addEventListener("click", startPhraseRound);
document.querySelectorAll(".phrase-mode").forEach((button) => {
  button.addEventListener("click", () => {
    state.phraseMode = button.dataset.phraseMode;
    state.phraseRound = [];
    state.phraseAnswers = {};
    state.phraseFeedback = "已切换练习模式，系统会生成新的练习。";
    saveState();
    renderPhraseDrill();
  });
});
document.querySelector("#clozeInput").addEventListener("input", (event) => {
  state.clozeAnswer = event.target.value;
  saveState();
});
document.querySelector("#dictationInput").addEventListener("input", (event) => {
  state.dictationAnswer = event.target.value;
  saveState();
});
document.querySelector("#resetBtn").addEventListener("click", () => {
  const keepCourse = state.course;
  const keepTopic = state.topic;
  const keepActiveView = state.activeView;
  state = { ...defaultState, course: keepCourse, topic: keepTopic, activeView: keepActiveView };
  saveState();
  applyState();
});

const speakingPanel = document.querySelector("#vocabulary-topics");
const speakingBank = speakingPanel?.querySelector(".speaking-bank");
const speakingPartTabs = speakingPanel?.querySelector("#speakingPartTabs");
if (speakingPanel && speakingBank && speakingPartTabs) {
  speakingPanel.insertBefore(speakingBank, speakingPartTabs);
}

applyState();
