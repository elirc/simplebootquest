---
slug: "testing-mini-runner"
title: "Build a Test Runner"
type: "code"
language: "js"
xp: 30
hints: ["Represent suites as a tree, with each suite pointing to its parent.", "While `describe` runs its callback, set `current` to the new suite, then restore it.", "Collect the chain of suites from the root to run before-hooks outermost-first."]
resources: [{"title": "Vitest: API", "url": "https://vitest.dev/api/"}]
---
# Build a Test Runner

Vitest, Jest and Mocha share one core design: `describe` blocks collect tests and hooks, then a runner executes them. Building one demystifies the whole thing, including **hook ordering**, which trips people up.

```js
describe('todos', () => {
  beforeEach(() => db.reset());
  it('creates', async () => { ... });
  describe('when logged out', () => {
    beforeEach(() => logout());
    it('rejects', () => { ... });
  });
});
```

For `rejects`, the order is: the outer `beforeEach`, then the inner `beforeEach`, then the test, then the inner `afterEach`, then the outer `afterEach`.

## Your task

`createRunner()` returns `{ describe, it, beforeEach, afterEach, run }`:

- `describe(name, fn)` collects nested suites. `it(name, fn)` registers a test in the current suite.
- `run()` resolves to an array of `{ name, passed, error? }` in definition order. Names are the full path joined by `' > '` (`"todos > when logged out > rejects"`).
- Before each test, run all `beforeEach` hooks from the outermost suite inward. After it, run all `afterEach` hooks from the innermost outward, **even if the test failed**.
- Tests and hooks may be async. A failing `beforeEach` fails the test (and skips running its body).

(The runner's own `test`/`expect` exist here too, so your functions use different names.)
