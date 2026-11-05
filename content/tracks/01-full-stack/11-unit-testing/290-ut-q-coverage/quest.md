---
slug: "ut-q-coverage"
title: "Quiz: Coverage vs Confidence"
type: "quiz"
xp: 15
resources: [{"title": "Vitest: Coverage", "url": "https://vitest.dev/guide/coverage"}, {"title": "Stryker Mutator", "url": "https://stryker-mutator.io/"}]
questions: [{"prompt": "A suite has 100% line coverage. What does that guarantee?", "options": ["The code is bug-free", "Every line ran at least once, but not that results were checked", "Every branch was tested"], "answer": 1}, {"prompt": "What does a \"surviving mutant\" tell you?", "options": ["The code is correct", "No test noticed a deliberate bug, so a behaviour is untested", "The mutation tool is broken"], "answer": 1}, {"prompt": "Why can branch coverage find gaps that line coverage misses?", "options": ["It is faster", "`if (a || b)` on one line has several paths. Line coverage counts it once", "It counts comments"], "answer": 1}, {"prompt": "A team mandates 90% coverage. What is a common bad side effect?", "options": ["Tests get faster", "People write tests that execute code without meaningful assertions, just to hit the number", "Bugs disappear"], "answer": 1}, {"prompt": "Which tool runs mutation testing for JavaScript and TypeScript?", "options": ["ESLint", "Stryker", "Prettier"], "answer": 1}]
---
# Quiz: Coverage vs Confidence

**Code coverage** measures which lines (or branches) ran during your tests. It's useful for spotting **untested** code, but it can't tell you whether the tests **check** anything:

```js
test('formats a price', () => {
  formatPrice(1999);   // 100% coverage, zero assertions
});
```

That's why this chapter uses **mutation testing**: it changes the code on purpose and checks that some test fails. A test suite that kills its mutants really pins down the behaviour.

Practical guidance:
- Use coverage to find gaps, not as a target. "80% coverage" targets breed assertion-free tests.
- **Branch** coverage beats line coverage: `if (a && b)` is one line but four cases.
- Tools: `vitest --coverage` (v8 or istanbul), and Stryker for JS mutation testing.
