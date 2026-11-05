---
slug: "deploy-p-next-version"
title: "Practice: Versions from Conventional Commits"
type: "code"
language: "js"
xp: 15
resources: [{"title": "Conventional Commits", "url": "https://www.conventionalcommits.org/"}]
---
# Practice: Versions from Conventional Commits

With **Conventional Commits**, the commit messages decide the next version automatically (`semantic-release`, `changesets` and release-please all work this way):

```
feat(api): add pagination        → minor
fix: handle empty titles         → patch
feat!: drop the v1 endpoints     → major (the ! means breaking)
chore: bump deps                 → no release
```

A body line starting with `BREAKING CHANGE:` also means major.

## Your task
1. `parseCommit(message)` → `{ type, scope, breaking, subject }`, or `null` if the first line doesn't match `type(scope)!: subject` (the scope and `!` are optional, and the type is lowercase letters).
2. `releaseType(messages)`: `'major'`, `'minor'`, `'patch'` or `null`. The highest wins. `feat` → minor, `fix` and `perf` → patch, anything breaking → major, and other types (or unparseable messages) → nothing.
3. `nextVersion(current, messages)` returns the bumped `x.y.z`, or `current` when there's nothing to release. **While the major version is 0**, breaking changes bump the minor and features bump the patch (that's the SemVer convention for `0.x`).
