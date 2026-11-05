'use strict'

// Format the license counts as a descending, fixed-width terminal chart.
module.exports = function histogram (counts, options = {}) {
  const width = options.width || 60
  const symbol = options.bar || '#'
  const entries = Object.entries(counts)
  if (options.sort) entries.sort((a, b) => b[1] - a[1])
  const labelWidth = Math.max(0, ...entries.map(([name]) => name.length))
  const maximum = Math.max(0, ...entries.map(([, count]) => count)) || width
  return entries.map(([name, count]) => {
    const filled = Math.round(width * count / maximum)
    const bar = symbol.repeat(filled) + ' '.repeat(width - filled)
    return `  ${name.padStart(labelWidth)} | ${bar} | ${count}\n`
  }).join('')
}
