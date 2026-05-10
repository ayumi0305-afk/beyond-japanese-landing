from pathlib import Path
from PIL import Image
import shutil

project = Path('/home/ubuntu/beyond-japanese-landing')
backup_dir = Path('/home/ubuntu/webdev-static-assets/beyond-japanese-original-large-images')
backup_dir.mkdir(parents=True, exist_ok=True)

targets = [
    project / 'client/public/images/ayumi-flower.JPG',
    project / 'client/public/images/footer.JPG',
    project / 'client/public/images/cafe.png',
    project / 'client/public/images/konbini.jpeg',
    project / 'footer.JPG',
]

MAX_BYTES = 980_000

def save_jpeg_under_limit(img: Image.Image, path: Path):
    img = img.convert('RGB')
    max_side = 1800
    quality = 82
    while True:
        work = img.copy()
        work.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
        work.save(path, format='JPEG', quality=quality, optimize=True, progressive=True)
        if path.stat().st_size <= MAX_BYTES or (quality <= 62 and max_side <= 1100):
            break
        if quality > 62:
            quality -= 6
        else:
            max_side -= 200


def save_png_under_limit(img: Image.Image, path: Path):
    max_side = 1500
    colors = 256
    while True:
        work = img.convert('RGB')
        work.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
        pal = work.quantize(colors=colors, method=Image.Quantize.MEDIANCUT)
        pal.save(path, format='PNG', optimize=True)
        if path.stat().st_size <= MAX_BYTES or (colors <= 128 and max_side <= 1000):
            break
        if colors > 128:
            colors = 128
        else:
            max_side -= 200

for path in targets:
    if not path.exists():
        print(f'missing: {path}')
        continue
    rel_backup = backup_dir / path.name
    if not rel_backup.exists():
        shutil.copy2(path, rel_backup)
    before = path.stat().st_size
    with Image.open(path) as img:
        if path.suffix.lower() == '.png':
            save_png_under_limit(img, path)
        else:
            save_jpeg_under_limit(img, path)
    after = path.stat().st_size
    print(f'{path}: {before} -> {after}')
