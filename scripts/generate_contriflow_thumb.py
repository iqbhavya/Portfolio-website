import os
import math
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps
import numpy as np

W, H = 1600, 960

def get_font(size, bold=False, mono=False):
    try:
        if mono:
            font_path = "C:\\Windows\\Fonts\\consola.ttf"
            if bold:
                font_path = "C:\\Windows\\Fonts\\consolab.ttf"
        elif bold:
            font_path = "C:\\Windows\\Fonts\\segoeuib.ttf"
        else:
            font_path = "C:\\Windows\\Fonts\\segoeui.ttf"
        
        if os.path.exists(font_path):
            return ImageFont.truetype(font_path, size)
    except Exception:
        pass
    return ImageFont.load_default()

def create_window(img_path, target_w, target_h, title, active=False, badge=None, badge_color=(255, 74, 34)):
    tb_h = 36
    content_h = target_h - tb_h
    
    # Load and scale content image
    src = Image.open(img_path).convert('RGB')
    src_w, src_h = src.size
    
    # Crop to maintain aspect ratio without stretching
    target_aspect = target_w / content_h
    src_aspect = src_w / src_h
    
    if src_aspect > target_aspect:
        # Source is wider, crop width
        new_w = int(src_h * target_aspect)
        offset_x = (src_w - new_w) // 2
        src_cropped = src.crop((offset_x, 0, offset_x + new_w, src_h))
    else:
        # Source is taller, crop from top/middle
        new_h = int(src_w / target_aspect)
        src_cropped = src.crop((0, 0, src_w, new_h))
        
    content_img = src_cropped.resize((target_w, content_h), Image.Resampling.LANCZOS)
    
    # Create window container RGBA
    win = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(win)
    
    radius = 12
    tb_bg = (24, 30, 42, 255) if active else (18, 22, 32, 255)
    border_col = (255, 255, 255, 45) if active else (255, 255, 255, 22)
    
    # Draw titlebar
    draw.rounded_rectangle(
        [(0, 0), (target_w - 1, target_h - 1)],
        radius=radius,
        fill=tb_bg,
        outline=border_col,
        width=1
    )
    
    # Window traffic light buttons
    dots = [(14, (255, 95, 86)), (26, (255, 189, 46)), (38, (39, 201, 63))]
    dot_y = tb_h // 2
    for dx, col in dots:
        draw.ellipse([(dx - 4, dot_y - 4), (dx + 4, dot_y + 4)], fill=col)
        
    # Title / URL
    font_mono = get_font(12, mono=True)
    title_text = title
    text_bbox = draw.textbbox((0, 0), title_text, font=font_mono)
    text_w = text_bbox[2] - text_bbox[0]
    text_x = (target_w - text_w) // 2
    draw.text((text_x, (tb_h - (text_bbox[3] - text_bbox[1])) // 2 - 1), title_text, fill=(160, 175, 200, 240), font=font_mono)
    
    # Badge if requested
    if badge:
        font_badge = get_font(11, bold=True)
        b_bbox = draw.textbbox((0, 0), badge, font=font_badge)
        b_w = b_bbox[2] - b_bbox[0]
        badge_x = target_w - b_w - 24
        draw.rounded_rectangle(
            [(badge_x - 8, 8), (badge_x + b_w + 8, tb_h - 8)],
            radius=10,
            fill=(*badge_color, 40),
            outline=(*badge_color, 180),
            width=1
        )
        draw.text((badge_x, 10), badge, fill=(*badge_color, 255), font=font_badge)

    # Paste content image into lower part with bottom rounded corners
    # Mask content with bottom rounded corners
    content_mask = Image.new('L', (target_w, content_h), 255)
    mask_draw = ImageDraw.Draw(content_mask)
    # round bottom corners
    mask_draw.rounded_rectangle(
        [(0, -radius), (target_w - 1, content_h - 1)],
        radius=radius,
        fill=255
    )
    
    win.paste(content_img, (0, tb_h), content_mask)
    
    # Redraw outer border to ensure crisp anti-aliased edge
    draw.rounded_rectangle(
        [(0, 0), (target_w - 1, target_h - 1)],
        radius=radius,
        outline=border_col,
        width=1
    )
    
    return win

def create_shadow(image_rgba, blur=24, offset=(0, 16), opacity=0.6):
    w, h = image_rgba.size
    pad = blur * 3
    
    # Create oversized alpha canvas
    shadow_canvas = Image.new('RGBA', (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    alpha = image_rgba.split()[3]
    
    # Adjust opacity
    alpha_adjusted = alpha.point(lambda p: int(p * opacity))
    black_shape = Image.new('RGBA', (w, h), (0, 0, 0, 255))
    black_shape.putalpha(alpha_adjusted)
    
    shadow_canvas.paste(black_shape, (pad, pad))
    blurred = shadow_canvas.filter(ImageFilter.GaussianBlur(blur))
    
    return blurred, pad

def make_showcase():
    print("Generating ContriFlow creative composite...")
    
    # 1. Base canvas
    base = Image.new('RGBA', (W, H), (12, 16, 26, 255))
    
    # Subtle gradient across background
    arr = np.zeros((H, W, 4), dtype=np.uint8)
    for y in range(H):
        ratio_y = y / H
        r = int(10 + ratio_y * 8)
        g = int(14 + ratio_y * 10)
        b = int(22 + ratio_y * 14)
        arr[y, :, 0] = r
        arr[y, :, 1] = g
        arr[y, :, 2] = b
        arr[y, :, 3] = 255
    base = Image.fromarray(arr, 'RGBA')
    
    # Add ambient glow layers
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Top-right electric sapphire glow
    glow_draw.ellipse([(W - 550, -150), (W + 200, 500)], fill=(37, 99, 235, 65))
    # Bottom-left vermilion glow
    glow_draw.ellipse([(-150, H - 450), (450, H + 150)], fill=(255, 74, 34, 55))
    # Center-right emerald glow
    glow_draw.ellipse([(W - 750, H - 350), (W - 100, H + 200)], fill=(16, 185, 129, 45))
    
    glow_blurred = glow.filter(ImageFilter.GaussianBlur(110))
    base = Image.alpha_composite(base, glow_blurred)
    
    # Add subtle grid dots
    grid_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_layer)
    for x in range(30, W, 40):
        for y in range(30, H, 40):
            grid_draw.ellipse([(x - 1, y - 1), (x + 1, y + 1)], fill=(255, 255, 255, 12))
    base = Image.alpha_composite(base, grid_layer)
    
    # 2. Window 1: Back window (Workflow / Board)
    # Position: Left & Behind
    win1_w, win1_h = 920, 560
    win1 = create_window(
        'public/images/contriflow/workflow.webp',
        win1_w, win1_h,
        "contriflow.app / pipeline / sprint-board",
        active=False,
        badge="KANBAN PIPELINE",
        badge_color=(100, 140, 220)
    )
    sh1, pad1 = create_shadow(win1, blur=28, offset=(0, 20), opacity=0.55)
    win1_pos = (60, 60)
    base.paste(sh1, (win1_pos[0] - pad1, win1_pos[1] - pad1 + 18), sh1)
    base.paste(win1, win1_pos, win1)
    
    # 3. Window 2: Main Hero Window (Workspace Dashboard)
    # Position: Center-Right, crisp & prominent
    win2_w, win2_h = 1040, 640
    win2 = create_window(
        'public/images/contriflow/workspace.webp',
        win2_w, win2_h,
        "contriflow.app / workspace / cultural-club",
        active=True,
        badge="CLUB LEAD WORKSPACE",
        badge_color=(16, 185, 129)
    )
    sh2, pad2 = create_shadow(win2, blur=36, offset=(0, 26), opacity=0.7)
    win2_pos = (480, 130)
    base.paste(sh2, (win2_pos[0] - pad2, win2_pos[1] - pad2 + 24), sh2)
    base.paste(win2, win2_pos, win2)
    
    # 4. Window 3: Foreground Floating Modal (AI Task Generator)
    # Position: Bottom-Left, overlapping both windows
    win3_w, win3_h = 760, 470
    win3 = create_window(
        'public/images/contriflow/ai-generator.webp',
        win3_w, win3_h,
        "contriflow.app / modal / ai-task-generator",
        active=True,
        badge="✨ GEMINI AI ENGINE",
        badge_color=(255, 74, 34)
    )
    sh3, pad3 = create_shadow(win3, blur=44, offset=(0, 32), opacity=0.85)
    win3_pos = (80, 420)
    base.paste(sh3, (win3_pos[0] - pad3, win3_pos[1] - pad3 + 30), sh3)
    base.paste(win3, win3_pos, win3)
    
    # 5. Floating Metadata Badges & Pill Overlays
    badge_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(badge_layer)
    
    # Top-right header pill
    pill_text = "PRODUCTION DEPLOYMENT · VERIFIED FULL-STACK WORKSPACE"
    f_pill = get_font(12, bold=True, mono=True)
    pb = b_draw.textbbox((0, 0), pill_text, font=f_pill)
    pw = pb[2] - pb[0]
    px = W - pw - 60
    py = 35
    b_draw.rounded_rectangle(
        [(px - 16, py - 8), (px + pw + 16, py + 24)],
        radius=16,
        fill=(14, 18, 28, 230),
        outline=(255, 255, 255, 40),
        width=1
    )
    # Active green indicator
    b_draw.ellipse([(px - 6, py + 5), (px, py + 11)], fill=(16, 185, 129, 255))
    b_draw.text((px + 6, py), pill_text, fill=(240, 244, 250, 255), font=f_pill)
    
    # Bottom-right feature chips
    chips = [
        ("React + TypeScript", (100, 160, 240)),
        ("PostgreSQL + Prisma", (60, 180, 180)),
        ("Gemini 1.5 Task AI", (255, 90, 54)),
        ("Role Hierarchy", (16, 185, 129)),
    ]
    cx = W - 50
    cy = H - 45
    f_chip = get_font(11, bold=True)
    
    for label, col in reversed(chips):
        cb = b_draw.textbbox((0, 0), label, font=f_chip)
        cw = cb[2] - cb[0]
        c_left = cx - cw - 20
        b_draw.rounded_rectangle(
            [(c_left, cy - 8), (cx, cy + 20)],
            radius=8,
            fill=(18, 24, 36, 230),
            outline=(*col, 160),
            width=1
        )
        b_draw.text((c_left + 10, cy), label, fill=(*col, 255), font=f_chip)
        cx = c_left - 12
        
    base = Image.alpha_composite(base, badge_layer)
    
    # Save webp and png
    out_webp = 'public/images/contriflow/contriflow-showcase.webp'
    out_png = 'public/images/contriflow/contriflow-showcase.png'
    
    final_rgb = base.convert('RGB')
    final_rgb.save(out_webp, 'WEBP', quality=95)
    final_rgb.save(out_png, 'PNG', optimize=True)
    print(f"Saved: {out_webp} ({os.path.getsize(out_webp)} bytes)")
    print(f"Saved: {out_png} ({os.path.getsize(out_png)} bytes)")

if __name__ == '__main__':
    make_showcase()
