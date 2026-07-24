const fs = require("fs");
const path = require("path");

const root = __dirname;
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");
const speakingBank = fs.readFileSync(path.join(root, "speaking-bank-data.js"), "utf8");

const sectionIds = new Set([...html.matchAll(/<section\s+id="([^"]+)"/g)].map((match) => match[1]));
const navigationTargets = [...html.matchAll(/<a\s+href="#([^"]+)"/g)].map((match) => match[1]);
navigationTargets.forEach((target) => {
  if (!sectionIds.has(target)) {
    throw new Error(`navigation target missing: #${target}`);
  }
});

function assertIncludes(source, value, label) {
  if (!source.includes(value)) {
    throw new Error(`${label} missing: ${value}`);
  }
}

assertIncludes(html, 'id="interactive-drills"', "exercise section");
assertIncludes(html, 'id="course-system"', "task 2 course system");
assertIncludes(html, 'id="learning-home"', "all courses home");
assertIncludes(html, 'class="study-dashboard"', "daily study dashboard");
assertIncludes(html, 'id="homeVocabularyProgress"', "home vocabulary progress");
assertIncludes(html, 'class="learning-loop"', "practice feedback learning loop");
assertIncludes(html, "账户系统预留", "future account access design");
assertIncludes(html, "原有写作课程全部保留", "writing content visibility");
assertIncludes(html, 'id="academic-standard"', "academic standard section");
assertIncludes(html, 'id="academicSourceGrid"', "academic source grid");
assertIncludes(html, 'id="courseModuleDetail"', "course module detail");
assertIncludes(html, 'id="sidebarCourseTree"', "sidebar course tree");
assertIncludes(html, 'id="phrase-drills"', "native phrase drill section");
assertIncludes(html, 'id="phraseAccuracy"', "phrase accuracy");
assertIncludes(html, 'id="vocabulary-topics"', "life vocabulary topic section");
assertIncludes(html, 'id="vocabularyCategoryList"', "vocabulary category navigation");
assertIncludes(html, 'id="sidebarToggle"', "collapsible sidebar toggle");
assertIncludes(html, 'id="sidebarTopicList"', "sidebar topic selector");
assertIncludes(html, "学习基础", "foundation navigation group");
assertIncludes(html, "写作 Writing", "writing navigation group");
assertIncludes(html, "口语 Speaking", "speaking navigation group");
assertIncludes(html, "听力", "listening navigation category");
assertIncludes(html, "口语", "speaking navigation category");
assertIncludes(html, "阅读", "reading navigation category");
assertIncludes(html, 'data-module-shortcut="foundation-grammar"', "grammar shortcut");
assertIncludes(html, 'data-nav-domain="speaking"', "speaking navigation state");
assertIncludes(html, 'data-default-view="vocabulary-topics"', "speaking main navigation target");
assertIncludes(html, 'data-question-part="part1"', "Part 1 sidebar question-bank navigation");
assertIncludes(html, 'data-question-part="part2"', "Part 2 sidebar question-bank navigation");
assertIncludes(html, 'data-question-part="part3"', "Part 3 sidebar question-bank navigation");
assertIncludes(html, 'data-speaking-section="vocabulary"', "speaking vocabulary sidebar navigation");
assertIncludes(html, 'data-default-view="task2-topics"', "writing main navigation target");
assertIncludes(html, 'data-default-view="academic-standard"', "writing reference main navigation target");
assertIncludes(js, "const activeDomain", "single active navigation domain");
assertIncludes(js, 'state.module = "sentence-patterns"', "writing course navigation reset");
assertIncludes(html, 'id="book-method"', "book method section");
assertIncludes(html, 'id="matchingExercise"', "matching exercise");
assertIncludes(html, 'id="clozeExercise"', "cloze exercise");
assertIncludes(html, 'id="dictationExercise"', "dictation exercise");
assertIncludes(js, "checkMatchingAnswers", "matching checker");
assertIncludes(js, "checkClozeAnswers", "cloze checker");
assertIncludes(js, "checkDictationAnswer", "dictation checker");
assertIncludes(js, "renderBookMethod", "book method renderer");
assertIncludes(js, "academicSourceLessons", "academic source lesson data");
assertIncludes(js, "absorbedTrainingLoop", "absorbed training loop");
assertIncludes(js, "renderAcademicSources", "academic source renderer");
assertIncludes(js, "IELTS 官方 Academic Test Format", "official academic source");
assertIncludes(js, "TR / CC / LR / GRA", "academic scoring criteria");
assertIncludes(js, "写前 5 步", "question writing workflow");
assertIncludes(js, "评分自查", "question scoring self-check");
assertIncludes(js, "nativePhraseBank", "native phrase bank");
assertIncludes(js, "lifeVocabularyTopics", "life vocabulary topic data");
assertIncludes(js, "renderLifeVocabulary", "life vocabulary renderer");
assertIncludes(js, "stock up on", "shopping vocabulary content");
assertIncludes(js, "food-society", "food vocabulary content");
assertIncludes(js, "sustainable tourism", "travel vocabulary content");
assertIncludes(html, 'data-speaking-part="part1"', "speaking part one navigation");
assertIncludes(html, 'id="vocabularyTopicBar"', "dynamic speaking topic bar");
assertIncludes(html, 'id="foodIdeaMap"', "Food speaking idea map");
assertIncludes(html, 'id="focusWordText"', "large vocabulary focus card");
assertIncludes(html, "点击单词即可朗读", "tap word pronunciation hint");
assertIncludes(html, 'id="speakWordBtn"', "vocabulary pronunciation control");
assertIncludes(html, 'id="settings"', "learning settings section");
assertIncludes(html, 'data-setting-voice="en-GB"', "British pronunciation setting");
assertIncludes(html, 'id="naturalVoiceSelect"', "natural device voice selector");
assertIncludes(html, 'id="previewVoiceBtn"', "voice preview button");
assertIncludes(html, 'data-font-scale="125"', "large font setting");
assertIncludes(html, 'id="speakingQuestionBankList"', "speaking question bank");
assertIncludes(html, 'id="speaking-tips"', "speaking answer skills section");
assertIncludes(html, "三句话回答法", "Part 1 three-sentence framework");
assertIncludes(html, "四部分两分钟展开法", "Part 2 four-part framework");
assertIncludes(html, "观点段落回答法", "Part 3 paragraph framework");
assertIncludes(html, 'id="speakingMockStage"', "speaking mock test");
assertIncludes(html, 'id="questionLearningFilter"', "question learning filter");
assertIncludes(html, 'id="questionTopicFilter"', "question topic selector");
assertIncludes(html, "全部 Topic", "all topics selector option");
assertIncludes(html, 'src="speaking-bank-data.js?', "versioned speaking bank data script");
assertIncludes(js, "speakingVocabularyExpansion", "expanded speaking vocabulary topics");
assertIncludes(js, "generation gap", "family speaking vocabulary");
assertIncludes(js, "affordable housing", "home speaking vocabulary");
assertIncludes(js, "transferable skills", "study and work vocabulary");
assertIncludes(js, "digital divide", "technology speaking vocabulary");
assertIncludes(js, "speakVocabularyWord", "vocabulary speech synthesis");
assertIncludes(js, "scoreVoiceQuality", "natural voice quality ranking");
assertIncludes(js, "advanceVocabularyFocus", "vocabulary memory rating");
assertIncludes(js, "renderHomeProgress", "home learning progress renderer");
assertIncludes(js, "speakingQuestionAnswerBank", "question-specific speaking answers");
assertIncludes(js, "What is your favourite food?", "food question reference answer");
assertIncludes(js, "foodSpeakingIdeaMap", "Food answer choice branches");
assertIncludes(js, "Mango", "fruit answer example");
assertIncludes(js, "Colour", "Food description colour branch");
assertIncludes(js, "Texture", "Food description texture branch");
assertIncludes(js, "buildPart1Reference", "all Part 1 reference answer coverage");
assertIncludes(js, "part1TopicChoiceBank", "all Part 1 topic choice banks");
assertIncludes(js, "renderPart1TopicPlanner", "Part 1 topic expansion planner");
assertIncludes(js, "part1DetailedIdeaMaps", "detailed bilingual Part 1 mind maps");
assertIncludes(js, "plenty of sunlight", "Plants sunlight vocabulary");
assertIncludes(js, "well-drained soil", "Plants soil vocabulary");
assertIncludes(js, "中英双语思维导图", "bilingual topic mind map label");
assertIncludes(js, "每道题都用 3 句话", "Part 1 three-sentence topic guidance");
assertIncludes(js, "renderPart2Reference", "all Part 2 reference structure coverage");
assertIncludes(js, "renderPart3QuestionWithAnswer", "all Part 3 reference answer coverage");
assertIncludes(js, "speakReferenceAnswer", "reference answer pronunciation");
assertIncludes(js, "data-speak-reference", "reference answer speaker buttons");
assertIncludes(js, "停止朗读参考答案", "reference answer stop control");
assertIncludes(js, "getSeasonQuestionsForTopic", "topic-linked seasonal speaking questions");
assertIncludes(js, "statusPriority", "evergreen-first speaking question ordering");
assertIncludes(js, "question-status-group", "grouped Part 1 question statuses");
assertIncludes(js, "renderLearningSettings", "learning settings renderer");
assertIncludes(js, "renderSpeakingQuestionBank", "speaking question bank renderer");
assertIncludes(js, "availableTopics", "automatic speaking topic options");
assertIncludes(js, "renderSpeakingCoach", "speaking answer coaching");
assertIncludes(js, "seasonal fruit", "food answer variation");
assertIncludes(js, "举一反三结构", "transferable speaking answer structure");
assertIncludes(js, "buildSpeakingMockQueue", "speaking mock test generator");
assertIncludes(js, "toggleSpeakingMockRecording", "speaking recording control");
assertIncludes(js, "renderSpeakingDailyProgress", "speaking daily progress");
assertIncludes(speakingBank, '"part": "part1"', "Part 1 question data");
assertIncludes(speakingBank, '"topic": "Study"', "student identity question group");
assertIncludes(speakingBank, '"topic": "Work"', "working identity question group");
assertIncludes(speakingBank, '"part": "part2"', "Part 2 and Part 3 question data");
assertIncludes(js, "renderPhraseDrill", "native phrase renderer");
assertIncludes(js, "checkPhraseRound", "native phrase checker");
assertIncludes(js, "sidebarCollapsed", "sidebar collapse state");
assertIncludes(js, "data-sidebar-topic", "sidebar topic switching");
assertIncludes(js, "ABC审题法", "book method content");
assertIncludes(js, "coursePhases", "course phase data");
assertIncludes(js, "grammarWritingPoints", "grammar writing matrix");
assertIncludes(js, "renderGrammarLesson", "single grammar lesson renderer");
assertIncludes(js, "data-grammar-point", "grammar point selector");
assertIncludes(js, "grammarPracticeBank", "interactive grammar practice bank");
assertIncludes(js, "checkGrammarPractice", "grammar practice checker");
assertIncludes(js, "data-order-token", "grammar ordering tokens");
assertIncludes(js, "grammarAccuracy", "grammar accuracy display");
assertIncludes(js, "grammarPracticeVariants", "multiple grammar practice sentences");
assertIncludes(js, "getGrammarPracticeSets", "grammar sentence set getter");
assertIncludes(js, "nextGrammarSetBtn", "grammar sentence switcher");
assertIncludes(js, "识别练习", "grammar lesson exercise one");
assertIncludes(js, "点击排序题", "grammar lesson exercise two");
assertIncludes(js, "topicVocabularyLessons", "topic vocabulary lesson data");
assertIncludes(js, "topicVocabularyEnhancements", "expanded topic vocabulary data");
assertIncludes(js, "topicQuestionExamples", "topic question examples");
assertIncludes(js, "近年题型方向与题目例子", "topic question example section");
assertIncludes(js, "真题风格训练", "question source caution");
assertIncludes(js, "renderQuestionSupport", "question body paragraph support");
assertIncludes(js, "建议主体段", "body paragraph ideas for questions");
assertIncludes(js, "本题可用词伙", "linked vocabulary for questions");
assertIncludes(js, "主体段示范", "body paragraph model answers");
assertIncludes(js, "主体段 1 示范", "body paragraph one model");
assertIncludes(js, "主体段 2 示范", "body paragraph two model");
assertIncludes(js, "备选 / 让步段示范", "concession paragraph model");
assertIncludes(js, "mark-connective", "model answer connective highlights");
assertIncludes(js, "mark-phrase", "model answer topic phrase highlights");
assertIncludes(js, "mark-argument", "model answer argument highlights");
assertIncludes(js, "logicIdeas", "topic logic ideas");
assertIncludes(js, "topic-vocab-stats", "topic vocabulary counts");
assertIncludes(js, "中文逻辑思路", "Chinese logic ideas section");
assertIncludes(js, "renderTopicVocabularyModule", "topic vocabulary module renderer");
assertIncludes(js, "data-topic-vocab", "top topic vocabulary navigation");
assertIncludes(js, "data-reveal-card", "topic vocabulary reveal cards");
assertIncludes(js, "点击看英文", "hidden English vocabulary prompt");
assertIncludes(js, "点击查看英文参考句", "hidden English sentence prompt");
assertIncludes(js, "13 个 Task 2 高频主题", "thirteen topic vocabulary scope");
assertIncludes(js, "语言文化", "language and culture topic");
assertIncludes(js, "renderCourseSystem", "course renderer");
assertIncludes(js, "course-tree-stage", "nested course tree");
assertIncludes(js, "module-more", "collapsible module details");
assertIncludes(js, "activeView", "single active view state");
assertIncludes(js, "renderVisiblePanels", "single panel renderer");
assertIncludes(js, "utility-nav a", "utility navigation routing");
assertIncludes(js, "第一阶段：语言地基", "stage one content");
assertIncludes(js, "第二阶段：论证与段落", "stage two content");
assertIncludes(js, "第三阶段：成篇训练", "stage three content");

if (html.includes('id="teacher-library"')) {
  throw new Error("teacher library section should be removed");
}

if (html.includes('id="topicSelect"') || html.includes('id="phraseTopicSelect"')) {
  throw new Error("topic selectors should live in the sidebar, not inside exercises");
}

if (html.includes('id="stageOverview"') || html.includes('id="sidebarStageList"') || html.includes('id="sidebarModuleList"')) {
  throw new Error("course navigation should be a single nested tree");
}

if (js.includes("基础语法写作化清单")) {
  throw new Error("foundation grammar should render single lesson pages, not a large matrix");
}

if (html.includes("书信写作") || js.includes("书信写作")) {
  throw new Error("letter writing module should be excluded");
}

if (html.includes("General Training") || js.includes("General Training")) {
  throw new Error("site should stay focused on Academic writing only");
}

console.log("IELTS Writing Lab smoke test passed");
