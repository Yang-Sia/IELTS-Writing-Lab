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

const defaultState = {
  course: "task2",
  activeView: "course-system",
  topic: "education",
  stage: "stage1",
  module: "foundation-grammar",
  grammarPoint: "svo",
  topicVocab: "government",
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

const fields = ["branchNote", "vocabulary", "angles", "argumentChain", "reflection"];

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey)) };
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
    link.classList.toggle("active", link.getAttribute("href") === `#${state.activeView}`);
  });
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

function renderTopicVocabularyMatrix() {
  const lesson = getCurrentTopicVocabularyLesson();
  const selectedKey = Object.entries(topicVocabularyLessons).find(([, item]) => item === lesson)?.[0] || "government";
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
        <div class="topic-vocab-section">
          <strong>核心词伙</strong>
          <div class="phrase-chip-grid">
            ${lesson.chunks.map(([zh, en]) => `
              <span class="phrase-chip"><b>${zh}</b><em>${en}</em></span>
            `).join("")}
          </div>
        </div>
        <div class="topic-vocab-section">
          <strong>输入句型</strong>
          <div class="sentence-pattern-list">
            ${lesson.sentences.map(([zh, en, note]) => `
              <article>
                <span>${note}</span>
                <p>${zh}</p>
                <strong>${en}</strong>
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
  renderBookMethod();
  renderTopicGrid();
  renderTopicSelect();
  renderPractice();
  renderInteractiveDrills();
  renderPhraseDrill();
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

document.querySelectorAll(".utility-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const viewId = link.getAttribute("href").replace("#", "");
    setActiveView(viewId);
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

applyState();
