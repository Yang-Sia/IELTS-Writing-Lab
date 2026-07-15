const fs = require("fs");
const path = require("path");

const root = __dirname;
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "app.js"), "utf8");

function assertIncludes(source, value, label) {
  if (!source.includes(value)) {
    throw new Error(`${label} missing: ${value}`);
  }
}

assertIncludes(html, 'id="interactive-drills"', "exercise section");
assertIncludes(html, 'id="course-system"', "task 2 course system");
assertIncludes(html, 'id="academic-standard"', "academic standard section");
assertIncludes(html, 'id="academicSourceGrid"', "academic source grid");
assertIncludes(html, 'id="courseModuleDetail"', "course module detail");
assertIncludes(html, 'id="sidebarCourseTree"', "sidebar course tree");
assertIncludes(html, 'id="phrase-drills"', "native phrase drill section");
assertIncludes(html, 'id="phraseAccuracy"', "phrase accuracy");
assertIncludes(html, 'id="sidebarToggle"', "collapsible sidebar toggle");
assertIncludes(html, 'id="sidebarTopicList"', "sidebar topic selector");
assertIncludes(html, 'id="book-method"', "book method section");
assertIncludes(html, 'id="matchingExercise"', "matching exercise");
assertIncludes(html, 'id="clozeExercise"', "cloze exercise");
assertIncludes(html, 'id="dictationExercise"', "dictation exercise");
assertIncludes(js, "checkMatchingAnswers", "matching checker");
assertIncludes(js, "checkClozeAnswers", "cloze checker");
assertIncludes(js, "checkDictationAnswer", "dictation checker");
assertIncludes(js, "renderBookMethod", "book method renderer");
assertIncludes(js, "academicSourceLessons", "academic source lesson data");
assertIncludes(js, "renderAcademicSources", "academic source renderer");
assertIncludes(js, "IELTS 官方 Academic Test Format", "official academic source");
assertIncludes(js, "TR / CC / LR / GRA", "academic scoring criteria");
assertIncludes(js, "nativePhraseBank", "native phrase bank");
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
assertIncludes(js, "参考范文", "model answer for question cards");
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
