"""
새로 추가된 트렌드 이미지들을 ASCII 파일명 + 웹 최적화(JPEG)로 변환한다.
한글/공백 파일명과 webp는 번들/배포에서 문제가 될 수 있어 영문 .jpg 로 통일한다.
원본(한글 파일명)은 변환 후 삭제한다.
"""

from PIL import Image
from pathlib import Path

BASE = Path("src/assets/trends")

# (원본 파일명, 출력 파일명, 최대 가로폭)
JOBS = [
    ("예절샷.jpg", "yejeol-shot.jpg", 1200),
    ("하이디라오 음식.jpg", "haidilao.jpg", 1400),       # 대표: 실제 훠궈 냄비
    ("하이디라오.jpg", "haidilao-logo.jpg", 800),         # 갤러리: 로고
    ("하이디라오 소스.webp", "haidilao-sauce.jpg", 1200), # 갤러리: 소스바
    ("건희소스.jpeg", "gunhee-sauce.jpg", 1200),          # 대표: 레시피 메시지
    ("건희소스 이미지.jpeg", "gunhee-sauce-2.jpg", 1200), # 갤러리
    ("영지소스.jpeg", "yeongji-sauce.jpg", 1200),
    ("L을 가져가.png", "take-the-l.jpg", 1000),
    ("피자설기.png", "pizza-seolgi.jpg", 1200),
]

for src_name, out_name, max_w in JOBS:
    src = BASE / src_name
    if not src.exists():
        print(f"SKIP (없음): {src_name}")
        continue
    img = Image.open(src).convert("RGB")
    w, h = img.size
    if w > max_w:
        nh = round(h * max_w / w)
        img = img.resize((max_w, nh), Image.LANCZOS)
    out = BASE / out_name
    img.save(out, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{src_name} -> {out_name}: {w}x{h} -> {img.size}, {out.stat().st_size // 1024} KB")
