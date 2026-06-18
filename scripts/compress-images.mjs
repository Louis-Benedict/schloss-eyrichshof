import sharp from 'sharp'
import { readdir, stat, rename, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname
const SKIP = new Set(['logo.png', 'wappen.png', 'burgenstrasse-logo.jpg'])
const MAX_PX = 2400
const QUALITY = 80

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else files.push(full)
  }
  return files
}

const files = (await walk(PUBLIC_DIR)).filter(f => /\.(jpe?g|png)$/i.test(f))
let saved = 0

for (const file of files) {
  if (SKIP.has(basename(file))) continue

  const before = (await stat(file)).size
  const ext = extname(file).toLowerCase()
  const tmp = file + '.tmp'

  const img = sharp(file)
  const meta = await img.metadata()
  const needsResize = (meta.width ?? 0) > MAX_PX || (meta.height ?? 0) > MAX_PX
  const pipeline = needsResize
    ? img.resize({ width: MAX_PX, height: MAX_PX, fit: 'inside', withoutEnlargement: true })
    : img

  if (ext === '.png') {
    await pipeline.png({ compressionLevel: 9 }).toFile(tmp)
  } else {
    await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmp)
  }

  const after = (await stat(tmp)).size
  if (after < before) {
    await rename(tmp, file)
    saved += before - after
    console.log(`✓  ${file.replace(PUBLIC_DIR, '').padEnd(60)} ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB`)
  } else {
    await unlink(tmp)
    console.log(`—  ${file.replace(PUBLIC_DIR, '').padEnd(60)} already optimal`)
  }
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(1)} MB`)
