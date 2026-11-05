---
slug: "ae-q-scenario-review"
title: "Scenarios: Reviewing Agent Work"
type: "quiz"
xp: 15
questions: [{"prompt": "An agent's PR adds a feature and also upgrades three dependencies \"to fix warnings\". What do you do?", "options": ["Merge it all", "Ask for the upgrades in a separate PR, and review the feature on its own", "Close it without comment"], "answer": 1}, {"prompt": "The agent says \"all tests pass\", but CI shows two skipped test files that were added in this PR. What do you do?", "options": ["Approve it", "Investigate why they are skipped, and require them to run and pass", "Delete the files"], "answer": 1}, {"prompt": "A diff adds `prisma.post.update({ where: { id }, data: req.body })`. What is your review comment?", "options": ["Looks good", "Validate the input and allow-list the fields, and check that the user owns the post", "Use raw SQL instead"], "answer": 1}, {"prompt": "You do not understand a clever 40-line function the agent wrote. What is the best action?", "options": ["Merge it, since tests pass", "Ask for an explanation, and a simpler version if possible, before approving", "Rewrite the tests to be less strict"], "answer": 1}, {"prompt": "The agent changed an expected value in a test from 15 to 16 to make it pass. What do you check?", "options": ["Nothing", "Which value the spec actually requires: the code may be wrong, not the test", "The test name"], "answer": 1}]
---
# Scenarios: Reviewing Agent Work

This checkpoint is made of **scenarios**: short situations from real agent-assisted work. For each one, pick what an experienced engineer would do. Most draw on several earlier chapters at once: specs, context, verification and safety.

A reminder of the core loop you've practised:

1. **Specify**: goal, constraints, acceptance criteria.
2. **Give context**: the relevant files, patterns and commands.
3. **Plan**, and review the plan for anything non-trivial.
4. **Execute in small steps**, committing at each green state.
5. **Verify**: tests that could fail, running the app, reading the diff.
6. **Review and take responsibility** before merging.
