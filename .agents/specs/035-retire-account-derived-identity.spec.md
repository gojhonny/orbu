# SPEC-035: Retire account-derived identity

- Status: Implemented for source; publication pending separate approval
- Created: 2026-09-28
- Mode: Prospective
- Owner: Jonatas Sales

## Problem

The former personal-account identity remains in package metadata, release guards,
copyright, historical paths, and a deprecated preset alias. The alias is a public
compatibility contract, so removing it changes the accepted API.

## Requirements

1. Current GitHub URLs, npm author metadata, and release guards identify
   `jonatassales/orbo`; the owned copyright notice identifies Neongate AI.
2. Only the six canonical preset names are accepted and exported. Unsupported
   preset input falls back to `neongate`; configuration source with an unknown
   preset key is rejected without mutating caller data.
3. Repository text and filenames contain no former account identifier. Historical
   decisions may describe the former account generically without claiming that
   current repository URLs or package names existed at the time.
4. Publishing is manual. This change does not tag, publish, or change the current
   package version. A later approved release must use a new major version because
   the preset compatibility alias is removed.

## Acceptance

- [x] Metadata, release workflow, documentation, and audit checks agree on ownership.
- [x] Browser and configuration tests cover canonical presets and unsupported input.
- [x] `./cli/orbo check` and package payload inspection pass.
- [x] Text and path scans find no former account identifier in the current tree.

## Evidence

- `./cli/orbo check` passed on 2026-09-28: lint, source and test typechecks,
  package tests, builds, and all repository audits.
- `npm pack --dry-run --ignore-scripts --json` reported `orbo-voice@1.1.1`, 41
  payload files, and the compiled `dist/orbo.js` bundle. No publication ran.
- Repository text and filename scans, plus `git diff --check`, passed.
