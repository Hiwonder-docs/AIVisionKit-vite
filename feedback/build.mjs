import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// An optional toolchain directory can reuse an existing installation locally.
const toolchainRoot = process.argv[2] ? resolve(process.argv[2]) : repoRoot
const require = createRequire(join(toolchainRoot, 'package.json'))
const viteRoot = dirname(require.resolve('vite/package.json'))
const { build } = await import(pathToFileURL(join(viteRoot, 'dist/node/index.js')).href)
const { default: vue } = await import(pathToFileURL(require.resolve('@vitejs/plugin-vue')).href)
const vuePath = require.resolve('vue/dist/vue.runtime.esm-bundler.js')
const siteRoot = join(repoRoot, 'projects/AIVisionKit/en/latest')
const base = '/projects/AIVisionKit/en/latest/'
await build({
  configFile: false,
  root: repoRoot,
  plugins: [vue()],
  resolve: { alias: { vue: vuePath } },
  define: { 'process.env.NODE_ENV': JSON.stringify('production'), __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: false, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false },
  build: {
    outDir: join(siteRoot, 'assets/feedback'),
    emptyOutDir: true,
    lib: { entry: join(repoRoot, 'feedback/main.js'), formats: ['es'], fileName: 'widget' },
    rollupOptions: { output: { entryFileNames: 'widget.js', assetFileNames: 'widget.[ext]' } }
  }
})
const js = await readFile(join(siteRoot, 'assets/feedback/widget.js'))
const css = await readFile(join(siteRoot, 'assets/feedback/widget.css'))
const version = createHash('sha256').update(js).update(css).digest('hex').slice(0, 12)
const tags = `<!-- course-feedback:start -->\n<link rel="stylesheet" href="${base}assets/feedback/widget.css?v=${version}">\n<script type="module" src="${base}assets/feedback/widget.js?v=${version}"></script>\n<!-- course-feedback:end -->`
let updated = 0
async function patchPages(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) await patchPages(path)
    else if (entry.isFile() && entry.name.endsWith('.html')) {
      const original = await readFile(path, 'utf8')
      const stripped = original.replace(/<!-- course-feedback:start -->[\s\S]*?<!-- course-feedback:end -->\s*/g, '')
      if (!stripped.includes('</head>')) throw new Error(`Missing head element: ${path}`)
      const next = stripped.replace('</head>', `${tags}\n</head>`)
      if (next !== original) { await writeFile(path, next); updated++ }
    }
  }
}
await patchPages(siteRoot)
console.log(`Feedback enabled on ${updated} HTML pages.`)
