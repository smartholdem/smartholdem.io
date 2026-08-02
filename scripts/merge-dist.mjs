#!/usr/bin/env node
/**
 * Merge VitePress DevHub build (`docs-dist/`) into the Nuxt SSG build
 * (`.output/public/devhub/`) so a single static folder can be deployed
 * to any CDN / bucket / IPFS / Netfory seeder.
 *
 * After this script, `.output/public/` looks like:
 *   ├── index.html          ← Nuxt homepage
 *   ├── blockchain/         ← Nuxt page
 *   ├── news/…              ← Nuxt page
 *   ├── white-paper/…       ← Nuxt page
 *   └── devhub/             ← VitePress documentation
 *       ├── index.html
 *       ├── api/…
 *       ├── sdk/…
 *       ├── core/…
 *       └── assets/…
 */
import { cp, rm, stat, lstat, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const NUXT_OUT = resolve(ROOT, '.output/public')
const DOCS_OUT = resolve(ROOT, 'docs-dist')
const TARGET = resolve(NUXT_OUT, 'devhub')
const LEGACY_SYMLINK = resolve(ROOT, 'dist')

async function main() {
  if (!existsSync(NUXT_OUT)) {
    console.error(`✗ Nuxt output not found at ${NUXT_OUT}. Run "yarn generate" first.`)
    process.exit(1)
  }
  if (!existsSync(DOCS_OUT)) {
    console.error(`✗ VitePress output not found at ${DOCS_OUT}. Run "yarn docs:build" first.`)
    process.exit(1)
  }

  // Kill the Nitro-auto-created `dist -> .output/public` symlink. It confuses
  // git-based deploy flows that use `:(exclude)dist/*` pathspecs (git refuses
  // to descend into symlinks in pathspecs).
  try {
    const st = await lstat(LEGACY_SYMLINK).catch(() => null)
    if (st?.isSymbolicLink()) {
      await unlink(LEGACY_SYMLINK)
      console.log(`✓ Removed legacy \`dist\` symlink at ${LEGACY_SYMLINK}`)
    }
  } catch { /* noop */ }

  // Remove any stale /devhub from previous merges
  if (existsSync(TARGET)) {
    await rm(TARGET, { recursive: true, force: true })
    console.log(`✓ Cleared stale ${TARGET}`)
  }

  // Copy VitePress output into Nuxt public/devhub
  await cp(DOCS_OUT, TARGET, { recursive: true })

  const { size } = await stat(resolve(TARGET, 'index.html'))
  console.log(`✓ Merged docs-dist → .output/public/devhub`)
  console.log(`✓ devhub/index.html ${size} bytes`)
  console.log(``)
  console.log(`Deploy the single folder:  .output/public/`)
  console.log(`  • Main site  →  /`)
  console.log(`  • DevHub     →  /devhub/`)
}

main().catch(err => { console.error(err); process.exit(1) })
