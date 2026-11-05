---
slug: "ae04-verify-16"
title: "Agent Drill: Which check catches it? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **a route returns another user's ticket when you change the id in the URL**","options":["Running the app at phone width (or a Playwright check)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","TypeScript strict mode (and a unit test for the missing case)"],"answer":2},{"prompt":"Which check is most likely to catch this? **the tasks page shows a blank screen on a phone**","options":["TypeScript strict mode (and a unit test for the missing case)","Running the app at phone width (or a Playwright check)","An integration test that requests another user's record and expects 404","Reading the diff of the test files"],"answer":1},{"prompt":"Which check is most likely to catch this? **a rounding bug in the car total calculation**","options":["Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","A unit test with boundary values","An integration test that requests another user's record and expects 404"],"answer":2},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `event.test.ts` from 15 to 16 so it passes**","options":["Running the app at phone width (or a Playwright check)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","TypeScript strict mode (and a unit test for the missing case)"],"answer":1},{"prompt":"Which check is most likely to catch this? **the recipes page shows a blank screen on a phone**","options":["Running the app at phone width (or a Playwright check)","TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404","Reading the diff of the test files"],"answer":0}]
---
# Agent Drill: Which check catches it? #16

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
