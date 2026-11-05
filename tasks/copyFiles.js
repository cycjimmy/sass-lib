/* eslint no-console: 0 */
import path from 'node:path'
import fs from 'fs-extra'

const { copySync } = fs

const entries = [
  'index.scss',
  'functions',
  'mixins',
  'placeholders',
  'reset',
  'README.md',
  'LICENSE',
]

for (const entry of entries) {
  copySync(
    path.resolve(entry),
    path.resolve('.release', entry),
  )
}

console.log('copyFiles success!')
