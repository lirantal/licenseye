'use strict'

const { test } = require('node:test')
const assert = require('node:assert/strict')
const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { square } = require('figures')

test('built CLI reports license counts from a fixture project', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'licenseye-'))
  try {
    for (const [name, license] of [['one', 'MIT'], ['two', 'MIT'], ['three', 'ISC']]) {
      const modulePath = path.join(directory, 'node_modules', name)
      fs.mkdirSync(modulePath, { recursive: true })
      fs.writeFileSync(path.join(modulePath, 'package.json'), JSON.stringify({ name, license }))
    }
    const output = execFileSync(process.execPath, [path.resolve(__dirname, '../dist.js')], {
      cwd: directory,
      encoding: 'utf8',
      timeout: 10000,
      env: { ...process.env, FORCE_COLOR: '0' }
    })
    assert.equal(output, `  MIT | ${square.repeat(30)} | 2\n  ISC | ${square.repeat(15)}${' '.repeat(15)} | 1\n\n`)
  } finally {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})
