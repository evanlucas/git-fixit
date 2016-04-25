#!/usr/bin/env node

'use strict'

const exec = require('child_process').exec
const help = require('help')()
const args = process.argv.splice(2)
const path = require('path')
const n = args.shift()

if (n === '--help' || n === '-h') {
  return help()
}

if (n === '--version' || n === '-v') {
  console.log('git-fixup', `v${require('../package').version}`)
  return
}

if (!n) {
  return help(1)
}

const child = exec(`git rebase -i HEAD~${n}`, {
  env: Object.assign({}, process.env, {
    GIT_EDITOR: path.join(__dirname, 'perform-git-fixup.js')
  })
, cwd: process.cwd()
})
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
child.on('exit', (code) => {
  process.exitCode = code
})
