---
slug: "ae04-verify-1"
title: "Agent Drill: Which check catches it? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **`.only` was left on one test, so CI runs a single test**","options":["TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","Reading the diff, and checking the test count in CI"],"answer":3},{"prompt":"Which check is most likely to catch this? **the PR quietly adds 3 new dependencies**","options":["Reading the diff (package.json and the lockfile)","TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404"],"answer":0},{"prompt":"Which check is most likely to catch this? **the books page shows a blank screen on a phone**","options":["Running the app at phone width (or a Playwright check)","An integration test that requests another user's record and expects 404","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)"],"answer":0},{"prompt":"Which check is most likely to catch this? **`title` is sometimes undefined but the code calls `.toLowerCase()` on it**","options":["Running the app at phone width (or a Playwright check)","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404"],"answer":2},{"prompt":"Which check is most likely to catch this? **a rounding bug in the recipe total calculation**","options":["A unit test with boundary values","An integration test that requests another user's record and expects 404","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)"],"answer":0}]
---
# Agent Drill: Which check catches it? #1

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
