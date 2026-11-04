---
slug: node-semver
title: Semantic Versioning
type: code
language: js
xp: 20
hints: ["Use a regex with three capture groups to parse versions.", "For ranges, first check the version is >= the base, then check the upper bound."]
resources: [{"title": "semver.org", "url": "https://semver.org/"}, {"title": "npm semver calculator", "url": "https://semver.npmjs.com/"}]
---
# Semantic Versioning

Every npm package uses **semver**: `MAJOR.MINOR.PATCH`.

| Bump | Meaning | Example |
|------|---------|---------|
| MAJOR | Breaking change | `1.4.2 → 2.0.0` |
| MINOR | New feature, backwards compatible | `1.4.2 → 1.5.0` |
| PATCH | Bug fix | `1.4.2 → 1.4.3` |

In `package.json`, version **ranges** say what updates you'll accept:

- `"express": "5.1.0"`: exactly this version.
- `"express": "~5.1.0"`: patch updates only (`>=5.1.0 <5.2.0`).
- `"express": "^5.1.0"`: minor and patch updates (`>=5.1.0 <6.0.0`). **This is npm's default.**

Caret has a special case: for `0.x` versions, *minor* bumps are considered breaking, so `^0.3.1` means `>=0.3.1 <0.4.0`.

Comparing versions is a good exercise in parsing strings into structured data.

## Your task

1. `parseVersion("1.4.2")` returns `{ major: 1, minor: 4, patch: 2 }`. Throw an `Error` for anything that isn't three dot-separated non-negative integers.
2. `compareVersions(a, b)` returns `-1`, `0` or `1`, like a sort comparator.
3. `satisfies(version, range)` supports exact versions, `~x.y.z` and `^x.y.z` (including the `0.x` caret rule).
