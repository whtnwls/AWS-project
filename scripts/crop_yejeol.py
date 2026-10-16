"""
예절샷 이미지의 위/아래 '내용 없는' 부분만 아주 조금 잘라 세로 길이를 줄인다.
원본은 .orig 로 백업한 뒤 결과를 덮어쓴다. 이미 백업이 있으면 백업본에서 처리.
"""

from PIL import Image
from pathlib import Path

P = Path("src/assets/trends/yejeol-shot.jpg")
BACKUP = P.with_suffix(".jpg.orig")

if not BACKUP.exists():
    Image.open(P).save(BACKUP, "JPEG", quality=95)

img = Image.open(BACKUP).convert("RGB")
w, h = img.size

# 위/아래를 각각 8%씩만 잘라낸다 (총 16% 감소)
top_cut = round(h * 0.08)
bottom_cut = round(h * 0.08)
cropped = img.crop((0, top_cut, w, h - bottom_cut))

cropped.save(P, "JPEG", quality=84, optimize=True, progressive=True)
print(f"{w}x{h} -> {cropped.size}, {P.stat().st_size // 1024} KB")
