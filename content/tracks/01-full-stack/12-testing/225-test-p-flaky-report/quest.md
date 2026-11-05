---
slug: "test-p-flaky-report"
title: "Practice: Spotting Flaky Tests"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "Google Testing Blog: Flaky tests at Google", "url": "https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html"}]
---
# Practice: Spotting Flaky Tests

A **flaky** test sometimes passes and sometimes fails on the same code. Flaky tests are poison: people stop trusting red builds, and real failures get ignored. CI systems detect them by re-running tests and comparing the results.

Common causes are real time, randomness, test-order dependence, shared state, unawaited promises, and real network calls.

## Your task
Write `analyzeRuns(runs)`, where `runs` is an array of CI runs on the **same commit**, each `{ [testName]: 'pass' | 'fail' }`. Return `{ flaky, broken, healthy }`, each an alphabetically sorted list of test names:
- `broken`: failed in **every** run where it appeared.
- `flaky`: passed at least once **and** failed at least once.
- `healthy`: passed in every run where it appeared.
- A test may be missing from some runs (it was skipped). Only count the runs where it appeared.
