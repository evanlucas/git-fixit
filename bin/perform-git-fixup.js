#!/usr/bin/env node

'use strict'

const fs = require('fs')
const fp = process.argv[2]
let contents

try {
  contents = fs.readFileSync(fp, 'utf8').split('\n')
} catch (err) {
  console.error('Unable to perform rebase', err)
  process.exit(1)
}

const re = /^pick (.*)$/

for (let i = 1; i < contents.length; i++) {
  const line = contents[i].trim()
  if (!line) break
  if (re.test(line)) {
    contents[i] = line.replace(/^pick /, 'fixup ')
  }
}

fs.writeFileSync(fp, contents.join('\n'), 'utf8')
