"""
한정선 포스터에서 'ONLY at GS25' 텍스트 띠를 가린다.

항상 원본 백업(hanjungsun-poster.orig.jpeg)에서 다시 시작한다.
텍스트 띠를 바로 위 크림 영역으로 덮되, 위/아래 경계를 알파 그라데이션으로
부드럽게 섞어 복사 자국(가로줄)을 줄인다. 로고는 건드리지 않는다.
"""

from PIL import Image, ImageFilter
from pathlib import Path

ORIG = Path("src/assets/trends/hanjungsun-poster.orig.jpeg")
OUT = Path("src/assets/trends/hanjungsun-poster.jpeg")

img = Image.open(ORIG).convert("RGB")
W, H = img.size

# 'ONLY at GS25' 텍스트가 들어있는 가로 띠
band_top = 250
band_bottom = 316
band_h = band_bottom - band_top

# feather(경계를 섞을 여유) 포함한 확장 영역
feather = 22
reg_top = band_top - feather
reg_bottom = band_bottom + feather
reg_h = reg_bottom - reg_top

# 덮개: 확장 영역 바로 위의 같은 높이 크림 영역
patch_bottom = reg_top - 4
patch_top = patch_bottom - reg_h
patch = img.crop((0, patch_top, W, patch_bottom)).filter(
    ImageFilter.GaussianBlur(0.8)
)

base = img.crop((0, reg_top, W, reg_bottom))

# 세로 알파 그라데이션 마스크: 가운데(텍스트)에서 1.0, 위/아래 feather에서 0.0
from PIL import Image as _I

mask = _I.new("L", (W, reg_h), 0)
px = mask.load()
for y in range(reg_h):
    if y < feather:
        a = int(255 * (y / feather))
    elif y > reg_h - feather:
        a = int(255 * ((reg_h - y) / feather))
    else:
        a = 255
    for x in range(W):
        px[x, y] = a

blended = _I.composite(patch, base, mask)
img.paste(blended, (0, reg_top))

# 전체 영역을 아주 약하게 한 번 더 섞어 경계 완화
soft = img.crop((0, reg_top - 6, W, reg_bottom + 6)).filter(
    ImageFilter.GaussianBlur(0.7)
)
img.paste(soft, (0, reg_top - 6))

img.save(OUT, quality=93)
print("saved:", OUT, img.size)
