---
title: "Unit Testing"
description: "Write your own tests: assertions, boundaries, errors, async code, test doubles and injected time, graded by mutation testing."
---
So far, tests were written *for* you. In this chapter, you write them.

Each "write the tests" quest gives you a correct implementation. Your tests must **pass** against it, and must **fail** against several hidden buggy versions (*mutants*): an off-by-one here, a missing check there. If one of your tests can't tell the buggy version from the correct one, it isn't really testing anything. This technique is called **mutation testing**, and it's the most honest measure of test quality there is.

Everything here uses the same API as **Vitest**: `test`/`it`, `describe`, `beforeEach`, `expect` and `vi.fn()`. So what you write here works in your real projects.
