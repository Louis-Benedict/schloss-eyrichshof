import { mkdir, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '../public')

const images = [
  // ── Ferienwohnungen / Dekanshaus ────────────────────────────────────────────
  ['https://static.wixstatic.com/media/690192_ac08757274874f70b7f1eba491a73deb~mv2.jpg', 'images/ferienwohnungen/dekanshaus/main.jpg'],
  ['https://static.wixstatic.com/media/690192_09370981bebb499281eaaefeba8c2c00~mv2.jpg', 'images/ferienwohnungen/dekanshaus/01.jpg'],
  ['https://static.wixstatic.com/media/690192_9a9165e7e0dc41d5b830e6abf9bb4605~mv2.jpg', 'images/ferienwohnungen/dekanshaus/02.jpg'],
  ['https://static.wixstatic.com/media/690192_b6ce7cd2c45942229d01288a759d4b40~mv2.jpg', 'images/ferienwohnungen/dekanshaus/03.jpg'],
  ['https://static.wixstatic.com/media/690192_cecb564e2ade4f34abaefa4385ba4ba9~mv2.jpg', 'images/ferienwohnungen/dekanshaus/04.jpg'],
  ['https://static.wixstatic.com/media/690192_dcfdb675047043a8b04b78f6b2bd3fa9~mv2.jpg', 'images/ferienwohnungen/dekanshaus/05.jpg'],
  ['https://static.wixstatic.com/media/690192_15a396a12cb4417c86c60a37a69be41f~mv2.jpg', 'images/ferienwohnungen/dekanshaus/06.jpg'],

  // ── Ferienwohnungen / Zum Brunnen ───────────────────────────────────────────
  ['https://static.wixstatic.com/media/690192_8a3e69e3180141cda2d9448756042948~mv2.jpg', 'images/ferienwohnungen/zum-brunnen/main.jpg'],
  ['https://static.wixstatic.com/media/690192_d767e0015e184229b8cabb952d062188~mv2.jpg', 'images/ferienwohnungen/zum-brunnen/01.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_ff96eed91567451e84c3f5c6a05a48d7~mv2.jpg', 'images/ferienwohnungen/zum-brunnen/02.jpg'],
  ['https://static.wixstatic.com/media/690192_17366d05b09540b08e4bf3ab28428429~mv2.jpg', 'images/ferienwohnungen/zum-brunnen/03.jpg'],

  // ── Ferienwohnungen / Turm ──────────────────────────────────────────────────
  ['https://static.wixstatic.com/media/690192_33c531f93e914ed0997f6a456c08cf48~mv2.jpg', 'images/ferienwohnungen/turm/main.jpg'],
  ['https://static.wixstatic.com/media/690192_de316774ed4d4512be6d874561593c28~mv2.jpg', 'images/ferienwohnungen/turm/01.jpg'],
  ['https://static.wixstatic.com/media/690192_0547e0fb9820463a9781e60f5edf5001~mv2.jpg', 'images/ferienwohnungen/turm/02.jpg'],
  ['https://static.wixstatic.com/media/690192_7cdd458f62db460c939f657ecf4e2e1e~mv2.jpg', 'images/ferienwohnungen/turm/03.jpg'],

  // ── Ferienwohnungen / Brennmeister ──────────────────────────────────────────
  ['https://static.wixstatic.com/media/690192_6db3f95368004003b5883485cd3cdf06~mv2.jpg', 'images/ferienwohnungen/brennmeister/main.jpg'],
  ['https://static.wixstatic.com/media/690192_877e07c54be8454cbc64e38326e15c6e~mv2.jpg', 'images/ferienwohnungen/brennmeister/01.jpg'],
  ['https://static.wixstatic.com/media/690192_8be6c5ac173448cb82ec7436c62b4c7a~mv2.jpg', 'images/ferienwohnungen/brennmeister/02.jpg'],
  ['https://static.wixstatic.com/media/690192_4d82e9b5cac8439687dc340abcfc91f1~mv2.jpg', 'images/ferienwohnungen/brennmeister/03.jpg'],
  ['https://static.wixstatic.com/media/690192_ee2aa537d8e34911a6b2faed0fc07670~mv2.jpg', 'images/ferienwohnungen/brennmeister/04.jpg'],
  ['https://static.wixstatic.com/media/690192_51b26e1c42524902a3386bbc551f1baa~mv2.jpg', 'images/ferienwohnungen/brennmeister/05.jpg'],
  ['https://static.wixstatic.com/media/690192_905738f24780492bbaab07dcd357c76f~mv2.jpg', 'images/ferienwohnungen/brennmeister/06.jpg'],

  // ── Kontakt / Team ──────────────────────────────────────────────────────────
  ['https://static.wixstatic.com/media/fa0fbb_f815b27dd05e4b099caa776767875346~mv2.jpg', 'images/kontakt/01.jpg'],
  ['https://static.wixstatic.com/media/690192_d5861569ada94c42bbba54db1833bdb8~mv2.jpg', 'images/kontakt/02.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_affbf58b5ab9441ba71b4a6ccacd1f31~mv2.jpg', 'images/kontakt/03.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_1f2ca07a50284ca0b43db19773a02f58~mv2.jpg', 'images/kontakt/04.jpg'],
  ['https://static.wixstatic.com/media/690192_886c855f093c45c28f99242f3861f06f~mv2.jpg', 'images/kontakt/05.jpg'],
  ['https://static.wixstatic.com/media/690192_5adf4810f5074fba9166f92627c2f2d7~mv2.jpg', 'images/kontakt/06.jpg'],

  // ── Rösler Open Air / Artists ───────────────────────────────────────────────
  ['https://static.wixstatic.com/media/fa0fbb_ea9244163cb442d8a5764074a2668cf9~mv2.webp', 'images/roesler-open-air/artists/nena.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_e4a6f052e46b4607aab086a609dd65fe~mv2.jpg', 'images/roesler-open-air/artists/in-extremo.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_5b8eef8f859d44fca47487c9210426a8~mv2.jpg', 'images/roesler-open-air/artists/schmidbauer-kaelberer-ringlstetter.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_d9de5486955745d795a7af8b099111fc~mv2.jpg', 'images/roesler-open-air/artists/nino-de-angelo.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_7f64c7f53961438db1e530e4b9973d29~mv2.jpg', 'images/roesler-open-air/artists/martin-frank.jpg'],
  ['https://static.wixstatic.com/media/fa0fbb_c9f534d5cbe54d198be500a35a8b876b~mv2.jpg', 'images/roesler-open-air/artists/gerhard-polt.jpg'],
]

for (const [url, localPath] of images) {
  const dest = join(PUBLIC, localPath)
  await mkdir(dirname(dest), { recursive: true })

  const res = await fetch(url)
  if (!res.ok) {
    console.error(`✗  ${localPath}  (HTTP ${res.status})`)
    continue
  }
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  const kb = Math.round((await import('fs')).statSync(dest).size / 1024)
  console.log(`✓  ${localPath.padEnd(62)} ${kb} KB`)
}
