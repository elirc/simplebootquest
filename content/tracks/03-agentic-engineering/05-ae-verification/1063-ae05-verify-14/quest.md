---
slug: "ae05-verify-14"
title: "Agent Drill: Which check catches it? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **`reference` is sometimes undefined but the code calls `.toLowerCase()` on it**","options":["Running the app at phone width (or a Playwright check)","An integration test that requests another user's record and expects 404","TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files"],"answer":2},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `song.test.ts` from 15 to 16 so it passes**","options":["An integration test that requests another user's record and expects 404","Running the app at phone width (or a Playwright check)","TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files"],"answer":3},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `city.test.ts` from 15 to 16 so it passes**","options":["Running the app at phone width (or a Playwright check)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","TypeScript strict mode (and a unit test for the missing case)"],"answer":1},{"prompt":"Which check is most likely to catch this? **a rounding bug in the song total calculation**","options":["A unit test with boundary values","TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404","Reading the diff of the test files"],"answer":0},{"prompt":"Which check is most likely to catch this? **a rounding bug in the ticket total calculation**","options":["Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","A unit test with boundary values","An integration test that requests another user's record and expects 404"],"answer":2}]
---
# Agent Drill: Which check catches it? #14

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
