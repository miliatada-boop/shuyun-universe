#!/usr/bin/env python3
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont


PALETTE = {
    "chalk": (245, 242, 238, 255),
    "sand": (232, 226, 216, 255),
    "deep": (74, 92, 107, 255),
    "abyss": (28, 43, 53, 255),
    "lacquer": (107, 39, 55, 255),
    "gold": (184, 149, 90, 255),
}


FONTS = {
    "serif": ["/System/Library/Fonts/Supplemental/Didot.ttc", "/System/Library/Fonts/Supplemental/Baskerville.ttc"],
    "sans": ["/System/Library/Fonts/Avenir Next.ttc", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"],
    "cn": ["/System/Library/Fonts/STHeiti Medium.ttc", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"],
}


def font(size, kind="cn"):
    for path in FONTS[kind]:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def cover_crop(img, size, cx=0.5, cy=0.5):
    tw, th = size
    scale = max(tw / img.width, th / img.height)
    resized = img.resize((int(img.width * scale), int(img.height * scale)), Image.Resampling.LANCZOS)
    left = max(0, min(int((resized.width - tw) * cx), resized.width - tw))
    top = max(0, min(int((resized.height - th) * cy), resized.height - th))
    return resized.crop((left, top, left + tw, top + th))


def tracked(draw, xy, text, fnt, fill, tracking=7):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        box = draw.textbbox((x, y), ch, font=fnt)
        x += box[2] - box[0] + tracking


def add_vertical_gradient(img, top_rgba, bottom_rgba, start_y, end_y):
    w, _ = img.size
    grad = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(grad)
    span = max(1, end_y - start_y)
    for y in range(start_y, end_y):
        t = (y - start_y) / span
        color = tuple(int(top_rgba[i] * (1 - t) + bottom_rgba[i] * t) for i in range(4))
        draw.line((0, y, w, y), fill=color)
    img.alpha_composite(grad)


def make_cover(frame_path, output_path, title, subtitle, speaker, source):
    w, h = 1080, 1440
    src = Image.open(frame_path).convert("RGB")
    fg_crop = cover_crop(src, (850, 620), cx=0.48, cy=0.36)
    fg_crop = ImageEnhance.Color(fg_crop).enhance(0.62)
    fg_crop = ImageEnhance.Contrast(fg_crop).enhance(0.9)
    fg = ImageEnhance.Brightness(fg_crop).enhance(0.92).convert("RGBA")

    poster = Image.new("RGBA", (w, h), PALETTE["chalk"])
    d = ImageDraw.Draw(poster)
    d.rectangle((0, 0, w, 520), fill=PALETTE["sand"])
    add_vertical_gradient(poster, PALETTE["sand"], PALETTE["chalk"], 520, 850)
    d.rectangle((0, 850, w, h), fill=PALETTE["chalk"])
    poster.alpha_composite(fg, (115, 208))
    add_vertical_gradient(poster, (245, 242, 238, 0), (245, 242, 238, 235), 560, 860)

    d = ImageDraw.Draw(poster)
    d.rectangle((70, 64, 220, 70), fill=PALETTE["lacquer"])
    tracked(d, (70, 98), "SHUYUN UNIVERSE", font(17, "sans"), PALETTE["deep"])
    d.text((70, 132), speaker, font=font(26, "serif"), fill=PALETTE["abyss"])
    d.text((72, 884), title, font=font(116, "cn"), fill=PALETTE["abyss"])
    d.text((78, 1028), subtitle, font=font(58, "cn"), fill=PALETTE["lacquer"])
    d.rectangle((74, 1212, 830, 1214), fill=(184, 149, 90, 145))
    d.text((78, 1254), source, font=font(23, "sans"), fill=PALETTE["deep"])

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    poster.convert("RGB").save(output_path, quality=95)


def main():
    parser = argparse.ArgumentParser(description="Create a Shuyun Universe VI Xiaohongshu cover.")
    parser.add_argument("frame")
    parser.add_argument("output")
    parser.add_argument("--title", default="真正的平静")
    parser.add_argument("--subtitle", default="不推开，也不抓取")
    parser.add_argument("--speaker", default="ADYASHANTI")
    parser.add_argument("--source", default="MIDDLE WAY · THE STATE OF PERFECT STILLNESS")
    args = parser.parse_args()
    make_cover(args.frame, args.output, args.title, args.subtitle, args.speaker, args.source)


if __name__ == "__main__":
    main()
