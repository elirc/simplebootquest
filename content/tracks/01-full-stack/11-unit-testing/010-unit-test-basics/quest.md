---
slug: "ut-basics"
title: "What Makes a Good Unit Test"
type: "quiz"
xp: 15
resources: [{"title": "Vitest: Getting started", "url": "https://vitest.dev/guide/"}, {"title": "Martin Fowler: Unit test", "url": "https://martinfowler.com/bliki/UnitTest.html"}]
questions: [{"prompt": "What are the three phases of a well-structured test?", "options": ["Setup, Teardown, Retry", "Arrange, Act, Assert", "Build, Test, Deploy"], "answer": 1}, {"prompt": "Which test name is best?", "options": ["'works'", "'test applyDiscount 2'", "'rounds the discounted price to whole cents'"], "answer": 2}, {"prompt": "A unit test that calls a real external API is…", "options": ["Ideal", "Not a unit test: slow, flaky and not isolated", "Required"], "answer": 1}, {"prompt": "A refactor that keeps behaviour identical breaks 20 tests. What does that suggest?", "options": ["The refactor is wrong", "The tests check implementation details instead of behaviour", "Tests should be deleted"], "answer": 1}, {"prompt": "What does \"Repeatable\" in FIRST require you to do with Date.now() and Math.random()?", "options": ["Use them freely", "Inject them, so tests control them", "Avoid functions entirely"], "answer": 1}]
---
# What Makes a Good Unit Test

A **unit test** checks one small piece of behaviour (usually one function) in isolation, quickly, with no network or database.

```js
import { describe, it, expect } from 'vitest';
import { applyDiscount } from './pricing';

describe('applyDiscount', () => {
  it('takes 10% off a $50 order', () => {
    // Arrange
    const price = 5000;
    // Act
    const result = applyDiscount(price, 10);
    // Assert
    expect(result).toBe(4500);
  });
});
```

### Arrange, Act, Assert

Set up the inputs, call the code once, then check the outcome. One behaviour per test makes failures easy to understand.

### Good tests are FIRST

- **Fast**: milliseconds, so you run them constantly.
- **Isolated**: there's no shared state, and the order doesn't matter.
- **Repeatable**: the same result every time. Inject time and randomness.
- **Self-validating**: they pass or fail on their own, with no reading logs by eye.
- **Timely**: written alongside the code (or before it).

### Name tests after behaviour

`'returns 0 for an empty cart'` tells you what broke. `'test 3'` doesn't. A failing test name should read like a bug report.

### What to test

The **contract**: inputs → outputs, the boundaries, and the error cases. Not private implementation details: if a refactor that doesn't change behaviour breaks your tests, they were testing the wrong thing.
