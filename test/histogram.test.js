'use strict'

const { test } = require('node:test')
const assert = require('node:assert/strict')
const histogram = require('../histogram')

test('aligns labels, sorts counts, and scales bars', () => {
  assert.equal(histogram({ MIT: 2, 'Apache-2.0': 4, ISC: 0 }, {
    width: 4, bar: '=', sort: true
  }), '  Apache-2.0 | ==== | 4\n         MIT | ==   | 2\n         ISC |      | 0\n')
})

test('preserves ANSI-colored bar symbols', () => {
  const greenSquare = '\u001b[32m■\u001b[39m'
  assert.equal(histogram({ MIT: 1 }, { width: 2, bar: greenSquare }),
    `  MIT | ${greenSquare}${greenSquare} | 1\n`)
})

test('handles empty and all-zero license summaries', () => {
  assert.equal(histogram({}), '')
  assert.equal(histogram({ MIT: 0 }, { width: 2 }), '  MIT |    | 0\n')
})
