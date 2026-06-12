# Shuyun Universe Skill Library

这个文件是 skill 库索引。每个 skill 单独放在本目录下的一个文件夹里，方便在 VS Code 中查看、修改，也方便不同 AI 读取同一套工作流。

## 使用方式

- 在 VS Code 中管理：打开 `Shuyun Universe/skills/`
- 在 Codex 中调用：直接说 `用 $skill-name ...`
- 新增工作流：为每个流程新建一个独立 skill 文件夹
- 稳定流程才封装成 skill；临时想法先放到 notes 或 drafts

## 当前 Skills

### shuyun-visual-system

用途：Shuyun Universe 的中心 VI 视觉体系。做海报、小红书封面、视频封面、字幕风格、网页、PPT、文档、活动物料、品牌视觉时，都先用它统一审美。

启动口令：

```text
用 $shuyun-visual-system 按我的 VI 设计这个
```

中心规范：

```text
visual-system/SHUYUN_UNIVERSE_VI_SYSTEM.md
```

网页展示参考：

```text
brand-identity.html
```

文件夹：

```text
skills/shuyun-visual-system/
```

### youtube-xhs-localization

用途：把 YouTube 视频做成本地化内容资产，包括视频下载/导入、转录、中文翻译、中英双语字幕压制、小红书重点提炼、图文文案和 Shuyun Universe VI 竖版封面。

启动口令：

```text
用 $youtube-xhs-localization 处理这个 YouTube 视频
```

文件夹：

```text
skills/youtube-xhs-localization/
```

核心文件：

```text
SKILL.md
references/shuyun-universe-vi.md
scripts/make_bilingual_ass.py
scripts/make_shuyun_xhs_cover.py
```

## 推荐结构

```text
skills/
  SKILL_INDEX.md
  shuyun-visual-system/
    SKILL.md
    references/
  youtube-xhs-localization/
    SKILL.md
    references/
    scripts/
    assets/
  another-skill/
    SKILL.md
    references/
    scripts/
    assets/
```

## 命名规则

- 文件夹名用英文小写和连字符，比如 `youtube-xhs-localization`
- 一个 skill 只做一类稳定工作流
- `SKILL.md` 写流程和判断标准
- `references/` 放品牌规范、写作风格、工作流细节
- `scripts/` 放可以复用的自动化脚本
- `assets/` 放模板、图片、字体、样式文件
