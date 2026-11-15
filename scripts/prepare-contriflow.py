"""Create portfolio assets from supplied captures; source PNGs stay untouched."""

from pathlib import Path
import argparse
from PIL import Image, ImageDraw, ImageFont

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path, help="Directory containing the supplied PNGs")
args = parser.parse_args()
destination = Path(__file__).resolve().parents[1] / "public/images/contriflow"
destination.mkdir(parents=True, exist_ok=True)
captures = [
    ("020250", "landing", None),
    ("020315", "workflow", None),
    ("020717", "projects", None),
    ("020810", "empty-workspace", (1276, 238, 1368, 259)),
    ("020945", "ai-generator", None),
    ("021040", "workspace", (1286, 238, 1378, 259)),
    ("021100", "task-details", None),
    ("021233", "contribution", None),
]
for stamp, name, mask in captures:
    with Image.open(args.source / f"Screenshot 2026-10-29 {stamp}.png") as source:
        capture = source.convert("RGB")
    if mask:
        draw = ImageDraw.Draw(capture)
        draw.rectangle(mask, fill="#101619")
        font = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 12)
        draw.text((mask[0] + 4, mask[1] + 3), "HIDDEN", font=font, fill="#94a6b8")
    # Full-resolution lossless files preserve small UI text and opaque masking.
    capture.save(destination / f"{name}.webp", lossless=True, method=6)
    for suffix, width in [("preview", 800), ("thumb", 240)]:
        resized = capture.copy()
        resized.thumbnail((width, width), Image.Resampling.LANCZOS)
        resized.save(destination / f"{name}-{suffix}.webp", quality=86, method=6)
    print(f"{name}: {capture.width} x {capture.height}")
