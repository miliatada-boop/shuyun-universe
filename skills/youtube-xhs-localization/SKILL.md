---
name: youtube-xhs-localization
description: End-to-end workflow for turning a YouTube video into Chinese-localized assets: download or ingest the video, transcribe the audio, translate into natural Chinese, create timestamped bilingual Chinese+English subtitles, burn only subtitles into the video, summarize the content for Xiaohongshu, and design a Shuyun Universe VI-style vertical poster/cover. Use when the user provides a YouTube link or video file and asks for translation, bilingual subtitles, repost-ready 小红书 content, cover/poster design, or the established two-step workflow of first translating the video and then making the poster.
---

# YouTube XHS Localization

## Workflow

Use this skill as a two-part production pipeline.

1. Translate the video.
   - Download or ingest the source video.
   - Extract/transcribe the audio with timestamps.
   - Translate every segment into natural, viewer-friendly Chinese.
   - Create bilingual ASS subtitles: Chinese above English; Chinese in refined rose/lacquer tone or user-specified color with black outline; English white with black outline.
   - Burn subtitles into the video only. Do not add logos, title overlays, cropping, or other visual edits unless the user asks.
   - Export the transcript, bilingual subtitle file, and final subtitled video into the same project folder.

2. Make Xiaohongshu assets.
   - Extract one or more clear frames from the video for cover design.
   - Write a Xiaohongshu-friendly summary: strong title, plain-language key points, emotional hook, and tags.
   - Create a vertical 1080x1440 cover using the Shuyun Universe VI style unless the user specifies another style.
   - Keep cover copy simple: one or two dominant Chinese lines; source/person/video info should be small or omitted.
   - Save the cover and copy in the video folder.

## Output Folder

Create a tidy structure near the source video:

```text
media/       source video and final cover
work/        transcript JSON, extracted audio, scratch previews
subtitles/   .srt and .ass files
output/      final subtitled video
covers/      extracted frames
```

## Translation Standards

- Translate meaning, not word-for-word phrasing.
- Preserve speaker tone and conceptual precision.
- Prefer natural Simplified Chinese for Xiaohongshu readers.
- Keep sentence length subtitle-friendly; split long ideas across nearby segments when needed.
- If using machine translation, review and polish before producing final subtitles.

## Subtitle Standards

Use `scripts/make_bilingual_ass.py` when a timestamped transcript JSON and a Chinese translations JSON/TXT are available.

Recommended ASS style:

- Chinese line above English by using a larger bottom margin for Chinese.
- Chinese: elegant rose/lacquer tone with black outline; user may override color.
- English: white with black outline.
- Avoid covering important faces when possible.
- Verify a preview frame after burning subtitles.

## Poster Standards

Use `$shuyun-visual-system` for the visual direction. Read `/Users/shuyun/Desktop/Shuyun Universe/visual-system/SHUYUN_UNIVERSE_VI_SYSTEM.md` before designing Shuyun Universe covers. Use `scripts/make_shuyun_xhs_cover.py` as a starting template when a clear video frame is available.

Default cover direction:

- 1080x1440 vertical.
- Warm chalk/sand background with soft natural gradient.
- One clear subject frame near the upper half.
- Main title large and bold, one to two lines only.
- Small source text such as `ADYASHANTI`, `MIDDLE WAY`, or the video title only if useful.
- Keep left-top source text away from the image. Prevent all text/image overlap unless it is an intentional soft editorial overlay.
- Prefer clean, premium, gentle layouts over busy graphic decoration.

## Xiaohongshu Copy

Produce copy in this shape:

```text
标题：
...

正文：
一句情绪入口。

1. 关键点
2. 关键点
3. 关键点

适合收藏的一句话：
...

Tags：
#冥想 #内在平静 ...
```

Keep it understandable for non-specialist Xiaohongshu readers. Avoid academic language unless the video itself requires it.

## Permissions And Practical Notes

- Ask before using browser cookies, network access, or files outside the current workspace.
- YouTube downloading may require a proxy, cookies, or alternative yt-dlp client settings depending on the environment.
- Prefer local processing when possible: `yt-dlp`, `ffmpeg`, `faster-whisper`, and `Pillow`.
- If download is blocked, ask the user for a local video file or permission for another access route.
