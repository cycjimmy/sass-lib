# Contributing

The repository is released under the MIT license, and follows a standard Github development process, using Github tracker for issues and merging pull requests into main.

## Development

Node `^22.13.0 || >=24` is required (see `engines.node` in `package.json`).

```shell
$ npm install          # Node ^22.13.0 || >=24
$ npm run lint         # ESLint (flat config, @antfu/eslint-config)
$ npm run lint:fix     # the same, with --fix
$ npm run lint:style   # Stylelint for every SCSS file in the repository
$ npm run lint:style:fix
$ npm test             # compiles test/index.scss with Dart Sass
$ npm run build        # assembles .release/
$ npm run package      # alias of `npm run build`
```

`npm run build` copies the entry point and the published directories into `.release/` and rewrites
`.release/package.json` for publishing. It never lints or rewrites sources, so it is safe to run from
CI and from the release pipeline. `test/index.scss` is the compile target for `npm test`: extend it
when a new function, mixin or placeholder is added.

Stylelint runs on every `*.scss` file with `stylelint-config-standard-scss` plus
`stylelint-config-idiomatic-order`. Four rules are disabled or pinned in `stylelint.config.mjs` on
purpose: longhand properties are kept as-is (`inset` is not emitted) and colours keep the legacy
`rgba()`/numeric-alpha form, so the published CSS stays identical for older mobile webviews.

## Repository settings required by the bots

`.github/workflows/dependabotAutoMerge.yml` merges non-major Dependabot pull requests automatically.
Three settings cannot be expressed in code and must be enabled by a maintainer:

1. **Settings → Actions → General → Workflow permissions**: choose *Read and write permissions*. Dependabot opens its pull requests from branches inside this repository, which is why the `pull_request` event can hand `GITHUB_TOKEN` a write token there. Pull requests from forks stay read-only, and the workflow skips them through the `head.repo.full_name` guard. The issue bot and the stale workflow need the same permission to label and close issues.
2. **Settings → General**: enable *Allow auto-merge*.
3. **Branch protection on `main`**: block force pushes and deletions, but leave *Require a pull request before merging* and *Require status checks to pass before merging* **off**. `semantic-release` pushes `chore(release): … [skip ci]` straight to `main`, and GitHub rejects that push while either rule is configured. A repository owned by a personal account cannot add the GitHub Actions app to a ruleset bypass list either, so there is no way to have both.

The CI gate for Dependabot lives in `dependabotAutoMerge.yml` instead: it polls the aggregated `Test CI Summary` check before asking for a squash merge. `Test CI` reports one check per matrix cell (`test (22, ubuntu-latest)` and so on), so the `test-status` job aggregates them into a single, stable check name.

`Test CI` keeps the write token away from the steps that execute repository code: the `test` job is read-only, and the semantic-release dry-run lives in its own `release-dry-run` job gated to trusted refs (scheduled runs and pushes to the release branches).

If write permissions cannot be granted to `pull_request` runs at all, switch the trigger of `dependabotAutoMerge.yml` to `pull_request_target`. `dependabot/fetch-metadata` never checks out the pull request code, so the elevated token stays out of the fork's reach.

## Scheduled workflows

`Test CI` runs weekly and `Stale` runs daily. GitHub disables a `schedule` trigger automatically after the repository has been inactive for a long time; if the runs stop, re-enable the workflows from the Actions tab.

## Labels

The triage bot and the issue forms reference labels that have to exist in the repository. `issues.addLabels` fails with `422` for unknown labels, so keep this list in sync when a rule changes:

| Label | Used by |
| --- | --- |
| `bug` | `bug_report.yml` form |
| `enhancement` | `feature_request.yml` form |
| `needs-info` | triage rule 3, plus the 7-day lifecycle in `stale.yml` |
| `publish-auth` | triage rule 1 (npm / GPR publishing failures) |
| `usage` | triage rule 2 (questions about using the library) |
| `triaged` | manual exemption from the half-year staleness in `stale.yml` |
| `stale` | applied and removed by `actions/stale` |
| `ci` | `dependabot.yml` github-actions group |
| `dependencies` | `dependabot.yml` both ecosystems |

The field headings of the issue forms are parsed by `issueBot.yml` (`formHeading`); renaming a form
field means updating that regex as well.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/) are required: `semantic-release` derives the version and the changelog from them. A breaking change must be marked with `!` and a `BREAKING CHANGE:` footer. Commit subjects and bodies are written in English.
