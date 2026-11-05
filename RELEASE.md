# Release

This project uses [Changesets](https://github.com/changesets/changesets) for
versioning and release notes. Use Node.js 24+ and the npm version pinned in
`package.json`.

## Release flow

1. Run `npm run release:create` to add a changeset for a user-facing change.
2. Commit the generated `.changeset/*.md` file with the change.
3. After merging to `master`, the release workflow opens or updates a release
   candidate PR using `npm run version`.
4. Review and merge that PR. The workflow builds the package and runs
   `npm run release` to publish it with provenance.

Documentation-only and tooling-only changes do not usually need a changeset.
For local verification, run `npm ci`, `npm run lint`, `npm test`, and
`npm run test:coverage` before requesting a release.

## Publishing setup

Configure an npm trusted publisher for `lirantal/licenseye`, workflow
`release.yml`, on GitHub Actions. The workflow uses OIDC (`id-token: write`)
instead of a long-lived npm token. Enable GitHub Actions to create pull requests
in the repository settings so Changesets can open release candidate PRs.

Installs disable lifecycle scripts through `.npmrc`. The workflow explicitly
builds before publishing; a manual release also requires `npm run build` before
`npm run release`.
