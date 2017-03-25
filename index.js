#! /usr/bin/env node
'use strict'

const LicenseWatch = require('licensewatch')
const bars = require('bars')
const figures = require('figures')
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora('Crunching licenses').start()

const licenses = new LicenseWatch(process.cwd() + '/node_modules/**/package.json')
licenses.fetch()

licenses.on('licensesSummary', (data) => {
  if (data === undefined || (data && data.maxLicense && data.maxLicense.count === 0)) {
    return spinner.warn(`Unable to crunch licenses from rainbow: possibly no node_modules/ directory found`)
  }

  // use 1s setTimeout to simulate animation effect
  setTimeout(() => {
    spinner.stop()
    console.log(bars(data.licenses, { bar: chalk.green(figures.square), width: 30, sort: true }))
    spinner.succeed(`Found ${chalk.green(data.maxLicense.name)} with highest count of ${chalk.green(data.maxLicense.count)}`)
  }, 1000)
})

licenses.on('error', (error) => {
  spinner.fail(`Unable to crunch licenses from rainbow: ${error}`)
})
