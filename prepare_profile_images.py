from pathlib import Path
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

inputs = [
    Path('/home/ubuntu/upload/378AC498-52C4-4661-980B-1C914EDAFBF9.JPEG'),
    Path('/home/ubuntu/upload/IMG_4711.webp'),
    Path('/home/ubuntu/upload/IMG_2433.HEIC'),
    Path('/home/ubuntu/upload/IMG_4137.heic'),
]

out_dir = Path('/home/ubuntu/webdev-static-assets/beyond-japanese-profile')
out_dir.mkdir(parents=True, exist_ok=True)

for i, src in enumerate(inputs, 1):
    img = Image.open(src)
    img = ImageOps.exif_transpose(img).convert('RGB')
    img.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
    out = out_dir / f'profile_user_{i}.webp'
    img.save(out, 'WEBP', quality=84, method=6)
    print(f'{src.name}\t{out}\t{img.size}')
