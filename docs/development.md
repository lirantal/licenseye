# Development

## Prerequisites

Use Node.js 24+ and npm 11.17.0, pinned in `package.json#packageManager`.
Run `bash .github/scripts/setup-npm.sh` to install that exact npm version.

## Setup

```sh
npm ci
npm run build
```

The `.npmrc` disables dependency lifecycle scripts and Git sources and requires
releases to be at least 30 days old. Build explicitly after installation.

## Common commands

- `npm run lint` checks source and tests without changing files.
- `npm run lint:fix` fixes formatting.
- `npm run build` compiles the CLI to `dist.js`.
- `npm test` builds and runs the tests.
- `npm start` runs the source CLI against the current directory.

Use npm for dependency changes and commit `package-lock.json`. Upgrade the npm
pin in a maintenance PR, choose a release at least 30 days old, and rerun the
checks. Keep `.npmrc` security policies enabled.

See [RELEASE.md](../RELEASE.md) for Changesets and trusted publishing setup.
