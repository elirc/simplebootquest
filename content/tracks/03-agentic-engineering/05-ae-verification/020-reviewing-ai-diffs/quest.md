---
slug: "ae-reviewing-ai-diffs"
title: "Reviewing AI-Generated Diffs"
type: "quiz"
xp: 15
resources: [{"title": "Google: Code review developer guide", "url": "https://google.github.io/eng-practices/review/"}]
questions: [{"prompt": "Why can AI-generated code be easy to under-review?", "options": ["It is always short", "It looks polished and confident, which encourages skimming", "It has no bugs"], "answer": 1}, {"prompt": "The diff adds a dependency called `expresss-validator`. What should you check?", "options": ["Nothing", "Whether it's a real, reputable package or a typo-squat; and whether it's needed at all", "Its logo"], "answer": 1}, {"prompt": "Which finding should block a merge?", "options": ["A slightly long variable name", "A route that loads a record by id without checking ownership", "A missing emoji"], "answer": 1}, {"prompt": "What should you check about tests in an AI diff?", "options": ["Only that they pass", "Whether any were modified, skipped or deleted, and whether they would fail if the logic were wrong", "Their font"], "answer": 1}, {"prompt": "A good final check before merging:", "options": ["The agent is confident", "You can explain the change and why it's correct to a teammate", "The diff is green"], "answer": 1}]
---
# Reviewing AI-Generated Diffs

AI-written code tends to *look* clean and confident, which makes it easy to skim. Read it like code from a talented but unfamiliar contributor. A review checklist:

1. **Does it do what was asked**, and only that? (Scope creep, unrelated reformatting.)
2. **Do the APIs exist?** Library functions, options and versions: check anything unfamiliar.
3. **Unhappy paths**: errors, empty states, `null`, concurrency, timeouts.
4. **Security**: input validation, authorisation on *every* query, injection, secrets, logging of sensitive data.
5. **Tests**: are new behaviours tested? Were any tests modified, skipped or deleted? Would the tests fail if the logic were wrong?
6. **Duplication**: did it re-implement a helper that already exists?
7. **Dependencies**: any new packages? Are they needed, maintained and reputable (not typo-squatted)?
8. **Leftovers**: debug logs, commented-out code, TODOs, temporary files.

Ask the agent to explain any part you don't understand. If you can't explain the change to a teammate, don't merge it.
