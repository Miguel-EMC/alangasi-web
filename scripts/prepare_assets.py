#!/usr/bin/env python3
"""Prepara fotografías con metadatos de Wikimedia Commons para GitHub Pages.

Se conservan atribuciones y los archivos fuente en creditos.html.
Las fotografías documentales no representan actividades políticas de la candidata.
"""
from io import BytesIO
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from PIL import Image, ImageEnhance
import time

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)

FILES = {
    "alangasi-panorama.webp": "Alangasi zona hipermarket.jpg",
    "vias-alangasi.webp": "Panamericana 02.jpg",
    "comunidad-el-tingo.webp": "P El Tingo 0706 001 (17358634136).jpg",
    "cultura-el-tingo.webp": "P El Tingo 0706 006 (17198354539).jpg",
    "fiesta-el-tingo.webp": "P El Tingo 0706 015 (17198350459).jpg",
    "tradicion-el-tingo.webp": "P El Tingo 0706 036 (17382595662).jpg",
}
def download(title):
    encoded = quote(title.replace(" ", "_"), safe="()_-")
    urls = [
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/" + encoded,
        "https://commons.wikimedia.org/wiki/Special:FilePath/" + encoded,
    ]
    error = None
    for url in urls:
        for attempt in range(3):
            try:
                request = Request(url, headers={"User-Agent": "AlangasiWeb/1.0 (source attribution: commons.wikimedia.org; Wikimedia licensed image downloader)", "Accept": "image/avif,image/webp,image/*,*/*"})
                with urlopen(request, timeout=40) as response:
                    raw = response.read()
                return Image.open(BytesIO(raw)).convert("RGB")
            except Exception as exc:
                error = exc
                time.sleep(1 + attempt)
    raise RuntimeError(f"No se pudo descargar {title}: {error}")

for filename, title in FILES.items():
    path = ASSETS / filename
    if path.exists():
        print(f"Ya existe: {filename}")
        continue
    image = download(title)
    image.thumbnail((1600, 1050), Image.Resampling.LANCZOS)
    image.save(path, "WEBP", quality=84, method=4)
    print(f"Generado: {filename} {image.size}")

# Fotografía real del sector de Alangasí, recortada para retirar las barandas
# del intercambiador; no se añaden elementos geográficos inventados.
path = ASSETS / "alangasi-horizonte.webp"
if not path.exists():
    original = Image.open(ASSETS / "alangasi-panorama.webp").convert("RGB")
    if original.width < 960:
        raise RuntimeError("La panorámica tiene resolución insuficiente.")
    # Un recorte horizontal que evita el primer plano de la carretera.
    top = int(original.height * 0.017)
    bottom = int(original.height * 0.525)
    image = original.crop((0, top, original.width, bottom))
    image = ImageEnhance.Color(image).enhance(1.22)
    image = ImageEnhance.Contrast(image).enhance(1.13)
    image = ImageEnhance.Sharpness(image).enhance(1.35)
    image.resize((1920, 584), Image.Resampling.LANCZOS).save(path, "WEBP", quality=86, method=4)
    print("Generado: alangasi-horizonte.webp")
if not (ASSETS / "fernanda-portrait.webp").exists():
    raise RuntimeError("Falta el retrato autorizado de Fernanda.")
