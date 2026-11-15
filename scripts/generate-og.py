"""Generate the local social preview image with Pillow (development only)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
image = Image.new('RGB', (1200, 630), '#09090b')
draw = ImageDraw.Draw(image)
font_dir = Path('C:/Windows/Fonts')

def font(size, bold=False):
    return ImageFont.truetype(str(font_dir / ('segoeuib.ttf' if bold else 'segoeui.ttf')), size)

draw.rectangle((55, 48, 1145, 582), outline='#38323f', width=2)
draw.text((86, 74), 'BHAVYA.', font=font(25, True), fill='#f4f4f5')
draw.text((86, 171), 'Building things', font=font(70, True), fill='#f4f4f5')
draw.text((86, 251), 'for the web,', font=font(70, True), fill='#b2a0ff')
draw.text((86, 342), 'one idea at a time.', font=font(47), fill='#b8b2c2')
draw.line((86, 451, 1114, 451), fill='#38323f', width=2)
draw.text((86, 483), 'Bhavya Yadav', font=font(26, True), fill='#f4f4f5')
draw.text((86, 529), 'Software developer / ECE student / IIITDM Jabalpur', font=font(20), fill='#aaa0b7')
for y, color in [(302, '#302737'), (248, '#483754'), (194, '#80709d')]:
    draw.polygon([(900, y), (1079, y + 57), (978, y + 120), (801, y + 61)], fill=color, outline='#c2a9dd', width=2)
draw.text((912, 236), '</>', font=font(29, True), fill='#f4e8ff')
image.save(root / 'public/images/og-image.png', optimize=True)
print('Created public/images/og-image.png')
