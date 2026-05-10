from pathlib import Path
import shutil
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()
project = Path('/home/ubuntu/beyond-japanese-landing')
images_dir = project / 'client/public/images'
backup_dir = Path('/home/ubuntu/webdev-static-assets/beyond-japanese-original-heic-images')
backup_dir.mkdir(parents=True, exist_ok=True)

for path in list(images_dir.iterdir()):
    if path.suffix.lower() not in {'.heic'}:
        continue
    backup = backup_dir / path.name
    if not backup.exists():
        shutil.copy2(path, backup)
    jpg_path = path.with_suffix('.jpg')
    with Image.open(path) as img:
        img = img.convert('RGB')
        max_side = 1800
        quality = 82
        while True:
            work = img.copy()
            work.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
            work.save(jpg_path, format='JPEG', quality=quality, optimize=True, progressive=True)
            if jpg_path.stat().st_size <= 980_000 or (quality <= 62 and max_side <= 1100):
                break
            if quality > 62:
                quality -= 6
            else:
                max_side -= 200
    path.unlink()
    print(f'converted and moved original: {path.name} -> {jpg_path.name} ({jpg_path.stat().st_size} bytes)')
