import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const ARTWORK_DIR = new URL("../src/content/artwork", import.meta.url).pathname;
const MAX_WIDTH = 1600;
const QUALITY = 85;

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...(await findImages(fullPath)));
    } else if ([".jpg", ".jpeg", ".png"].includes(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }
  return images;
}

const images = await findImages(ARTWORK_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const imgPath of images) {
  const { size: before } = await stat(imgPath);
  const meta = await sharp(imgPath).metadata();

  if (meta.width <= MAX_WIDTH && before < 500_000) {
    // Already small enough, skip
    continue;
  }

  const ext = extname(imgPath).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";

  const pipeline = sharp(imgPath).rotate(); // auto-rotate from EXIF

  if (meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (isJpeg) {
    pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  } else {
    pipeline.png({ quality: QUALITY, compressionLevel: 9 });
  }

  const output = await pipeline.toBuffer();
  const { size: after } = { size: output.byteLength };

  if (after < before) {
    await import("fs/promises").then((fs) => fs.writeFile(imgPath, output));
    totalBefore += before;
    totalAfter += after;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`${imgPath.split("/src/content/artwork/")[1].padEnd(70)} ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (-${saved}%)`);
  }
}

const totalSavedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
console.log(`\nTotal saved: ${totalSavedMB}MB`);
