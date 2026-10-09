#!/usr/bin/env python3
"""Descarga y optimiza imágenes autorizadas del catálogo turístico del GAD de Alangasí.

Se ejecuta al construir GitHub Pages. Las imágenes quedan dentro del sitio
publicado para no depender de enlaces externos en cada visita.
"""
from __future__ import annotations

import io
import json
import sys
import time
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "data" / "turismo-alangasi.json"
TARGET = ROOT / "assets"
MAX_BYTES = 20 * 1024 * 1024


def download(url: str) -> bytes:
    last_error = None
    for attempt in range(3):
        try:
            request = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (compatible; AlangasiWeb/1.0; educational-tourism)",
                    "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                    "Referer": "https://gadalangasi.gob.ec/atractivos/",
                },
            )
            with urllib.request.urlopen(request, timeout=40) as response:
                mime_type = response.headers.get("Content-Type", "").split(";")[0].lower()
                if not mime_type.startswith("image/"):
                    raise ValueError(f"Contenido inesperado: {mime_type}")
                payload = response.read(MAX_BYTES + 1)
                if len(payload) > MAX_BYTES:
                    raise ValueError("Imagen excede 20 MB")
                return payload
        except (OSError, ValueError) as exc:
            last_error = exc
            time.sleep(1 + attempt)
    raise RuntimeError(f"No se pudo descargar {url}: {last_error}")


def main() -> None:
    places = json.loads(CATALOG.read_text(encoding="utf-8"))["atractivos"]
    TARGET.mkdir(parents=True, exist_ok=True)
    for place in places:
        filename = place["image"]
        if not filename.startswith("turismo-") or not filename.endswith(".webp"):
            raise ValueError(f"Nombre de imagen incorrecto: {filename}")
        data = download(place["original"])
        try:
            with Image.open(io.BytesIO(data)) as original:
                picture = ImageOps.exif_transpose(original).convert("RGB")
                picture.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
                output = TARGET / filename
                picture.save(output, "WEBP", quality=85, method=5)
        except UnidentifiedImageError as exc:
            raise ValueError(f"Imagen ilegible: {place['original']}") from exc
        print(f"OK {filename}: {picture.width}x{picture.height} ({output.stat().st_size:,} bytes)")
    print(f"Imágenes locales listas: {len(places)}")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        sys.exit(str(exc))
