# licenseye

[![Greenkeeper badge](https://badges.greenkeeper.io/lirantal/licenseye.svg)](https://greenkeeper.io/)

[![view on npm](http://img.shields.io/npm/v/licenseye.svg)](https://www.npmjs.org/package/licenseye)
[![view on npm](http://img.shields.io/npm/l/licenseye.svg)](https://www.npmjs.org/package/licenseye)
[![npm module downloads](http://img.shields.io/npm/dt/licenseye.svg)](https://www.npmjs.org/package/licenseye)
[![Build Status](https://travis-ci.org/lirantal/licenseye.svg?branch=master)](https://travis-ci.org/lirantal/licenseye)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md)

Node.js CLI tool to visualize an aggregate list of your project's dependencies' licenses.

![licenseye-screencast](https://media.giphy.com/media/y1D0SLr9kQ9l6/giphy.gif)

# Install

#### Yarn
```bash
yarn global add licenseye
```

#### NPM
```bash
npm install -g licenseye
```

# Usage

In any valid Node.js project that contains a *node_modules/* directory you can run licenseye:

```bash
$ licenseye
```

# Related

* [licensewatch](https://github.com/lirantal/licensewatch) - event-emitter Node.js library that recurses a *node_modules/* directory to fetch license information.

# License

MIT @ [Liran Tal](https://github.com/lirantal)
