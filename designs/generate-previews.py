#!/usr/bin/env python3
"""Generate simple homepage direction previews for erxes-20x-web."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = "output/erxes-20x-web/designs"
os.makedirs(OUT_DIR, exist_ok=True)

# Colors
BG = "#0a0a0a"
PANEL = "#161616"
PANEL_RAISED = "#1d1d1d"
LINE = "#323232"
INK = "#f5f5f5"
MUTED = "#adadad"
DIM = "#777777"
LIME = "#d8ff00"
CYAN = "#a5f3fc"
DARK_LIME = "#202020"

# Try to load fonts, fallback to default
font_large = ImageFont.load_default()
font_regular = ImageFont.load_default()
font_small = ImageFont.load_default()
font_mono = ImageFont.load_default()

# On macOS, common fonts
def load_font(name, size):
    for path in [
        f"/System/Library/Fonts/{name}.ttc",
        f"/System/Library/Fonts/{name}.ttf",
        f"/Library/Fonts/{name}.ttf",
        f"/System/Library/Fonts/Supplemental/{name}.ttf",
    ]:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

font_large = load_font("HelveticaNeue", 48) or load_font("SF-Pro-Display-Bold", 48)
font_regular = load_font("HelveticaNeue", 18) or load_font("SF-Pro-Text-Regular", 18)
font_small = load_font("HelveticaNeue", 12) or load_font("SF-Pro-Text-Regular", 12)
font_mono = load_font("Menlo", 14) or load_font("Courier", 14)


def rounded_rect(draw, xy, fill, radius=16, outline=None, width=1):
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle((x1, y1, x2, y2), radius=radius, fill=fill, outline=outline, width=width)


def draw_header(draw):
    # Logo
    draw.rectangle((48, 24, 69, 54), fill=LIME)
    draw.text((80, 28), "erxes 20x", font=font_small, fill=INK)
    # Day nav
    x = 460
    for i in range(1, 6):
        draw.text((x, 20), "DAY", font=ImageFont.load_default(), fill=DIM)
        draw.text((x + 8, 32), str(i), font=font_small, fill=MUTED)
        x += 60
    # Language switch
    rounded_rect(draw, (1130, 24, 1210, 54), fill=PANEL, radius=8)
    rounded_rect(draw, (1132, 26, 1172, 52), fill=INK, radius=6)
    draw.text((1140, 31), "MN", font=ImageFont.load_default(), fill=BG)
    draw.text((1180, 31), "EN", font=ImageFont.load_default(), fill=DIM)


def draw_hero(img, draw, accent):
    # Eyebrow
    draw.text((48, 110), "ERXES 20X MARKETER", font=ImageFont.load_default(), fill=accent)
    # Title
    draw.text((48, 140), "Build marketing skills", font=font_large, fill=INK)
    draw.text((48, 200), "with erxes.", font=font_large, fill=INK)
    # Lead
    draw.text((48, 290), "A five-day practical course for marketers: learn the platform,", font=font_regular, fill=MUTED)
    draw.text((48, 320), "run campaigns, and measure results with confidence.", font=font_regular, fill=MUTED)
    # Buttons
    rounded_rect(draw, (48, 380, 220, 420), fill=accent, radius=8)
    draw.text((68, 392), "Start Day 1 →", font=font_small, fill=BG)
    rounded_rect(draw, (235, 380, 400, 420), fill=PANEL, outline=LINE, radius=8)
    draw.text((260, 392), "View curriculum", font=font_small, fill=INK)
    # Tags
    draw.text((48, 460), "• 5 DAYS     • HANDS-ON     • BILINGUAL", font=ImageFont.load_default(), fill=DIM)
    # Console
    rounded_rect(draw, (680, 110, 1230, 480), fill="#080808", outline="#383838", radius=24)
    # Console bar dots
    for i, c in enumerate(["#ff5f57", "#febc2e", "#28c840"]):
        draw.ellipse((710 + i*18, 130, 724 + i*18, 144), fill=c)
    draw.text((770, 130), "erxes-20x --learn", font=ImageFont.load_default(), fill=DIM)
    # Console body
    lines = [
        ("$ ready to learn", INK),
        ("$ module: day-1", INK),
        ("$ topic: platform overview", INK),
        ("$ output: confident marketer", CYAN),
    ]
    y = 180
    for line, color in lines:
        draw.text((720, y), line, font=font_mono, fill=color)
        y += 30


def draw_stats(draw):
    rounded_rect(draw, (48, 530, 1230, 670), fill=PANEL, outline=LINE, radius=16)
    stats = [("5", "DAY MODULES"), ("20+", "GUIDED LESSONS"), ("0", "ASSUMED SKILLS")]
    x = 90
    for num, label in stats:
        draw.text((x, 570), num, font=font_large, fill=LIME)
        draw.text((x, 630), label, font=font_small, fill=MUTED)
        x += 300
    # Progress ring placeholder
    draw.ellipse((1080, 560, 1160, 640), outline="#303030", width=2)
    draw.text((1105, 595), "0%", font=font_small, fill=INK)


def draw_curriculum(draw, accent):
    draw.text((48, 720), "THE CURRICULUM", font=ImageFont.load_default(), fill=accent)
    draw.text((48, 750), "One outcome every day.", font=font_large, fill=INK)
    draw.text((680, 780), "Start with the basics, finish with a confident campaign workflow.", font=font_small, fill=MUTED)

    days = [
        ("01", "FOUNDATIONS", "Prepare your workspace", "Set up the team, install the tools, and open the erxes dashboard."),
        ("02", "AUDIENCE", "Know your customer", "Build segments, import contacts, and map the customer journey in erxes."),
        ("03", "CAMPAIGNS", "Launch a campaign", "Create email, SMS, and messenger campaigns using real templates."),
        ("04", "AUTOMATION", "Build a workflow", "Connect triggers, actions, and branches to automate follow-ups."),
        ("05", "REPORTING", "Measure and improve", "Read reports, set KPIs, and present results to stakeholders."),
    ]
    positions = [
        (48, 840, 600, 340), (640, 840, 640, 340),
        (48, 1200, 600, 340), (640, 1200, 640, 340),
        (345, 1560, 600, 340),
    ]
    for i, (num, eyebrow, title, desc) in enumerate(days):
        x, y, w, h = positions[i]
        rounded_rect(draw, (x, y, x + w, y + h), fill=PANEL, outline=LINE, radius=16)
        draw.text((x + 28, y + 28), num, font=font_large, fill=accent)
        draw.text((x + w - 120, y + 32), "2.5 HOURS", font=ImageFont.load_default(), fill=DIM)
        draw.text((x + 28, y + 100), eyebrow, font=ImageFont.load_default(), fill=accent)
        draw.text((x + 28, y + 130), title, font=font_regular, fill=INK)
        draw.text((x + 28, y + 180), desc, font=font_small, fill=MUTED)
        # Progress bar
        rounded_rect(draw, (x + 28, y + h - 60, x + w - 120, y + h - 50), fill="#2b2b2b", radius=10)
        draw.rectangle((x + 28, y + h - 60, x + 88, y + h - 50), fill=accent)
        draw.text((x + w - 100, y + h - 60), "4 lessons", font=ImageFont.load_default(), fill=DIM)
        draw.text((x + 28, y + h - 30), "Open module", font=font_small, fill=INK)
        draw.text((x + w - 40, y + h - 30), "→", font=font_small, fill=accent)


def draw_method(draw, accent):
    y = 1960
    draw.text((48, y), "THE METHOD", font=ImageFont.load_default(), fill=accent)
    draw.text((48, y + 30), "Show. Copy. Run. Read. Check.", font=font_large, fill=INK)
    draw.text((680, y + 70), "Every lesson follows the same calm, repeatable learning loop.", font=font_small, fill=MUTED)
    methods = [
        ("01", "Show", "The instructor explains the concept and command."),
        ("02", "Copy", "Learners copy one complete example into erxes."),
        ("03", "Run", "Press send and wait for the result."),
        ("04", "Read", "Compare the response with the expected result."),
        ("05", "Check", "Move on only when the checkpoint is true."),
    ]
    x = 48
    w = 220
    for num, title, desc in methods:
        rounded_rect(draw, (x, y + 110, x + w, y + 280), fill=BG, outline=LINE, radius=0)
        draw.text((x + 20, y + 130), num, font=ImageFont.load_default(), fill=accent)
        draw.text((x + 20, y + 170), title, font=font_small, fill=INK)
        draw.text((x + 20, y + 200), desc, font=ImageFont.load_default(), fill=MUTED)
        x += w + 10


def draw_cta(draw, accent):
    y = 2340
    rounded_rect(draw, (48, y, 1230, y + 180), fill=accent, radius=24)
    draw.text((80, y + 30), "READY WHEN YOU ARE", font=ImageFont.load_default(), fill=DARK_LIME)
    draw.text((80, y + 60), "Your first campaign is only one lesson away.", font=font_large, fill=BG)
    draw.text((80, y + 120), "Open Day 1, run your first command, and begin with a checkpoint.", font=font_small, fill=DARK_LIME)
    rounded_rect(draw, (1000, y + 60, 1180, y + 110), fill=BG, radius=10)
    draw.text((1020, y + 78), "Begin Day 1 →", font=font_small, fill=INK)


def draw_footer(draw):
    y = 2560
    draw.rectangle((48, y, 1230, y + 1), fill=LINE)
    draw.rectangle((48, y + 30, 65, y + 55), fill=LIME)
    draw.text((80, y + 35), "© 2026 erxes 20x. Built for marketers.", font=font_small, fill=DIM)
    draw.text((1160, y + 35), "Contact", font=font_small, fill=DIM)


def make_preview(option_name, accent, cta_accent=None):
    cta_accent = cta_accent or accent
    img = Image.new("RGB", (1280, 2700), BG)
    draw = ImageDraw.Draw(img)
    draw_header(draw)
    draw_hero(img, draw, accent)
    draw_stats(draw)
    draw_curriculum(draw, accent)
    draw_method(draw, accent)
    draw_cta(draw, cta_accent)
    draw_footer(draw)
    return img


if __name__ == "__main__":
    img_a = make_preview("A", LIME)
    img_a.save(os.path.join(OUT_DIR, "homepage-option-a.png"))
    img_b = make_preview("B", LIME, CYAN)
    img_b.save(os.path.join(OUT_DIR, "homepage-option-b.png"))
    print("Previews saved.")
