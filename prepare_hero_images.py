from pathlib import Path
from PIL import Image, ImageOps, ImageStat
import pillow_heif

pillow_heif.register_heif_opener()

inputs = [
    Path('/home/ubuntu/upload/IMG_2194.HEIC'),
    Path('/home/ubuntu/upload/IMG_2196.HEIC'),
    Path('/home/ubuntu/upload/IMG_4178.HEIC'),
    Path('/home/ubuntu/upload/IMG_4524.HEIC'),
    Path('/home/ubuntu/upload/IMG_4669.JPG'),
]

out_dir = Path('/home/ubuntu/webdev-static-assets/beyond-japanese-hero')
out_dir.mkdir(parents=True, exist_ok=True)

records = []
for i, src in enumerate(inputs, 1):
    img = Image.open(src)
    img = ImageOps.exif_transpose(img).convert('RGB')
    # Resize to a practical hero size while preserving aspect ratio. No creative generation or semantic editing.
    img.thumbnail((1800, 1400), Image.Resampling.LANCZOS)
    # Calculate brightness for day/night ordering.
    gray = img.convert('L').resize((64, 64))
    brightness = ImageStat.Stat(gray).mean[0]
    out = out_dir / f'hero_user_{i}.webp'
    img.save(out, 'WEBP', quality=84, method=6)
    records.append((src.name, out, brightness, img.size))

# Classify by brightness only; higher is daytime-like, lower is night-like.
records_sorted = sorted(records, key=lambda r: r[2])
night = records_sorted[:2]
day = records_sorted[2:]

# Interleave night and day as much as possible, starting with day for a welcoming first frame.
ordered = []
while day or night:
    if day:
        ordered.append(day.pop())
    if night:
        ordered.append(night.pop(0))

manifest = out_dir / 'manifest.txt'
with manifest.open('w', encoding='utf-8') as f:
    f.write('source\toutput\tbrightness\tsize\n')
    for r in records:
        f.write(f'{r[0]}\t{r[1]}\t{r[2]:.2f}\t{r[3]}\n')
    f.write('\nordered\n')
    for r in ordered:
        f.write(f'{r[1]}\n')

print(manifest)
for r in ordered:
    print(f'{r[1]} brightness={r[2]:.2f} source={r[0]} size={r[3]}')
