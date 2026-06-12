#!/usr/bin/env python3
import argparse
import json
from pathlib import Path


def ass_time(seconds):
    cs = int(round(float(seconds) * 100))
    hours, rem = divmod(cs, 360000)
    minutes, rem = divmod(rem, 6000)
    secs, centis = divmod(rem, 100)
    return f"{hours}:{minutes:02}:{secs:02}.{centis:02}"


def ass_color(rgb_hex):
    value = rgb_hex.strip().lstrip("#")
    if len(value) != 6:
        raise ValueError(f"Expected #RRGGBB color, got {rgb_hex}")
    rr, gg, bb = value[0:2], value[2:4], value[4:6]
    return f"&H00{bb}{gg}{rr}"


def escape_ass(text):
    return str(text).replace("\\", "\\\\").replace("{", "\\{").replace("}", "\\}")


def load_translations(path):
    raw = Path(path).read_text(encoding="utf-8")
    if path.endswith(".json"):
        data = json.loads(raw)
        if isinstance(data, dict):
            data = data.get("translations", data.get("segments", []))
        return [item.get("zh", item.get("text", item)) if isinstance(item, dict) else item for item in data]
    return [line.strip() for line in raw.splitlines() if line.strip()]


def segment_english(segment):
    return segment.get("en") or segment.get("text") or segment.get("transcript") or ""


def main():
    parser = argparse.ArgumentParser(description="Create bilingual Chinese+English ASS subtitles.")
    parser.add_argument("transcript_json", help="JSON with segments containing start/end and English text.")
    parser.add_argument("translations", help="Chinese translations as JSON list or non-empty TXT lines.")
    parser.add_argument("output_ass")
    parser.add_argument("--playres-x", type=int, default=1280)
    parser.add_argument("--playres-y", type=int, default=720)
    parser.add_argument("--cn-color", default="#6B2737")
    parser.add_argument("--cn-font", default="Arial Unicode MS")
    parser.add_argument("--en-font", default="Arial")
    args = parser.parse_args()

    data = json.loads(Path(args.transcript_json).read_text(encoding="utf-8"))
    segments = data["segments"] if isinstance(data, dict) else data
    translations = load_translations(args.translations)
    if len(segments) != len(translations):
        raise SystemExit(f"translation count {len(translations)} != segment count {len(segments)}")

    cn_color = ass_color(args.cn_color)
    header = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {args.playres_x}
PlayResY: {args.playres_y}
ScaledBorderAndShadow: yes
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: CN,{args.cn_font},43,{cn_color},&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,3.2,0,2,70,70,76,1
Style: EN,{args.en_font},31,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,2.8,0,2,80,80,34,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = [header]
    for segment, zh in zip(segments, translations):
        start = ass_time(segment["start"])
        end = ass_time(segment["end"])
        lines.append(f"Dialogue: 1,{start},{end},CN,,0,0,0,,{escape_ass(zh)}\n")
        lines.append(f"Dialogue: 0,{start},{end},EN,,0,0,0,,{escape_ass(segment_english(segment))}\n")

    Path(args.output_ass).write_text("".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
