import json
import re
from pathlib import Path

from pypdf import PdfReader


SOURCE = Path("/Users/yangyang/Desktop/5-8月雅思口语题库/2026年5-8月最新雅思口语题库先行版.pdf")
OUTPUT = Path(__file__).resolve().parents[1] / "speaking-bank-data.js"


def clean_lines(reader, page_indexes):
    lines = []
    for page_index in page_indexes:
        text = reader.pages[page_index].extract_text() or ""
        for raw in text.splitlines():
            line = re.sub(r"\s+", " ", raw).strip()
            if not line or line == str(page_index + 1):
                continue
            if line.startswith(("Part 1 ", "Part 2&3 ", "一、", "二、", "三、")):
                continue
            if line.startswith(("（小问待补充", "（待补充")):
                continue
            lines.append(line)
    return lines


def join_questions(lines):
    questions = []
    buffer = []
    for line in lines:
        if not buffer and not re.match(r"^(What|When|Where|Who|Why|How|Do|Does|Did|Is|Are|Have|Has|Can|Could|Would|Should|Which|What's|On what|At what|Compared|People)", line, re.I):
            continue
        buffer.append(line)
        if line.endswith(("?", "？")):
            questions.append(" ".join(buffer).replace("  ", " "))
            buffer = []
    return questions


def parse_part1(reader, page_indexes, status, region):
    lines = clean_lines(reader, page_indexes)
    entries = []
    current = None
    for line in lines:
        match = re.match(r"^\d+\s+P1\s+(.+)$", line)
        evergreen = re.match(r"^万年老题\s+(.+)$", line)
        if match or evergreen:
            if current:
                current["questions"] = join_questions(current.pop("_lines"))
                entries.append(current)
            current = {
                "part": "part1",
                "topic": (match or evergreen).group(1).strip(),
                "status": "evergreen" if evergreen else status,
                "region": region,
                "_lines": [],
            }
        elif current:
            current["_lines"].append(line)
    if current:
        current["questions"] = join_questions(current.pop("_lines"))
        entries.append(current)
    return entries


def parse_part23(reader, page_indexes, status, region):
    lines = clean_lines(reader, page_indexes)
    chunks = []
    current = None
    for line in lines:
        if re.match(r"^\d+\s+P1\s+", line) or line.startswith("万年老题 "):
            if current:
                chunks.append(current)
                current = None
            continue
        match = re.match(r"^\d+\s+P2\s+(.+)$", line)
        if match:
            if current:
                chunks.append(current)
            current = {"title": match.group(1).strip(), "lines": []}
        elif current:
            current["lines"].append(line)
    if current:
        chunks.append(current)

    entries = []
    for chunk in chunks:
        lines = chunk["lines"]
        try:
            describe_index = next(i for i, line in enumerate(lines) if line.startswith("Describe "))
        except StopIteration:
            continue
        if describe_index:
            chunk["title"] = f'{chunk["title"]} {" ".join(lines[:describe_index])}'.strip()
        try:
            cue_index = lines.index("You should say:")
        except ValueError:
            cue_index = describe_index + 1
        try:
            p3_index = lines.index("P3")
        except ValueError:
            p3_index = len(lines)
        prompt = " ".join(lines[describe_index:cue_index]).strip()
        cue_points = []
        for line in lines[cue_index + 1:p3_index]:
            if line.startswith(("What ", "When ", "Where ", "Who ", "Why ", "How ", "And ")):
                cue_points.append(line)
            elif cue_points:
                cue_points[-1] += f" {line}"
        entries.append({
            "part": "part2",
            "topic": chunk["title"],
            "status": status,
            "region": region,
            "prompt": prompt,
            "cuePoints": cue_points,
            "part3Questions": join_questions(lines[p3_index + 1:]),
        })
    return entries


reader = PdfReader(str(SOURCE))
bank = []
bank += parse_part1(reader, range(4, 7), "new", "mainland")
bank += parse_part1(reader, range(12, 18), "retained", "mainland")
bank += parse_part1(reader, [31], "new", "overseas")
bank += parse_part23(reader, range(6, 13), "new", "mainland")
bank += parse_part23(reader, range(18, 32), "retained", "mainland")
bank += parse_part23(reader, range(32, 34), "new", "overseas")

payload = {
    "season": "2026年5-8月",
    "source": SOURCE.name,
    "entries": bank,
}
OUTPUT.write_text(
    "const speakingQuestionBank2026MayAugust = "
    + json.dumps(payload, ensure_ascii=False, indent=2)
    + ";\n",
    encoding="utf-8",
)

part1 = [item for item in bank if item["part"] == "part1"]
part2 = [item for item in bank if item["part"] == "part2"]
print(f"Wrote {OUTPUT}")
print(f"Part 1 topics: {len(part1)}")
print(f"Part 1 questions: {sum(len(item['questions']) for item in part1)}")
print(f"Part 2 cards: {len(part2)}")
print(f"Part 3 questions: {sum(len(item['part3Questions']) for item in part2)}")
