# Testing

```sh
npm run lint
npm test
npm pack --dry-run
```

Tests use Node's built-in test runner. They verify chart alignment, scaling,
sorting, ANSI symbols, empty summaries, and the built CLI against an isolated
fixture project. CI runs lint, build, and tests on Node.js 24.

Keep generated files, installed dependencies, and build output out of commits.
