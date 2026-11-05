---
slug: "deploy-p-semver"
title: "Practice: Semantic Versioning"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Compare major, then minor, then patch. Only if all three are equal does the pre-release matter."]
resources: [{"title": "Semantic Versioning 2.0.0", "url": "https://semver.org/"}, {"title": "npm: semver calculator", "url": "https://semver.npmjs.com/"}]
---
# Practice: Semantic Versioning

**SemVer**: `MAJOR.MINOR.PATCH`.
- PATCH: bug fixes (`1.4.2` → `1.4.3`)
- MINOR: new features, backwards compatible (`1.4.2` → `1.5.0`)
- MAJOR: breaking changes (`1.4.2` → `2.0.0`)

Pre-releases like `2.0.0-beta.1` sort **before** `2.0.0`. In `package.json`, `^1.4.2` accepts any `1.x.y` at or above `1.4.2`, and `~1.4.2` accepts `1.4.x` at or above `1.4.2`.

## Your task
1. `parse(v)` → `{ major, minor, patch, pre }`, where `pre` is the string after `-` or `null`. Invalid → throw `Error('Invalid version')`.
2. `compare(a, b)` → -1, 0 or 1. When the numbers are equal, a version **with** a pre-release is lower than one without. Compare two pre-releases as strings, but compare dot-separated numeric parts numerically (`beta.2` < `beta.10`).
3. `bump(v, type)` for `'major' | 'minor' | 'patch'`. It drops any pre-release, and bumping a pre-release of the same level just drops the pre-release (`2.0.0-beta.1` with `major` → `2.0.0`).
4. `satisfies(v, range)` for `^x.y.z`, `~x.y.z` and an exact `x.y.z`. Pre-releases never satisfy `^` or `~` ranges.
