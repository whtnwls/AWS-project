"""
큰 PNG 트렌드 이미지(사진류)를 리사이즈 후 JPEG로 변환해 용량을 줄인다.
원본 PNG는 그대로 두고, 같은 이름의 .jpg 를 새로 만든다.
(데이터 파일의 import 경로를 .jpg 로 바꿔 사용)
"""

from PIL import Image
from pathlib import Path

TARGETS = [
    ("src/assets/trends/geoje-yaho.png", 1280),
    ("src/assets/trends/hanjungsun-menu.png", 1400),
    ("src/assets/trends/woni-channel.png", 1280),
]

for rel, max_w in TARGETS:
    p = Path(rel)
    img = Image.open(p).convert("RGB")
    w, h = img.size
    if w > max_w:
        nh = round(h * max_w / w)
        img = img.resize((max_w, nh), Image.LANCZOS)

    out = p.with_suffix(".jpg")
    img.save(out, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{rel}: {w}x{h} -> {img.size}, {out.name} {out.stat().st_size // 1024} KB")
