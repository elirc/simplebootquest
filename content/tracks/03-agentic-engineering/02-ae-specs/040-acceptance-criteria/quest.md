---
slug: "ae-acceptance-criteria"
title: "Acceptance Criteria as Tests"
type: "quiz"
xp: 15
questions: [{"prompt": "Why are executable acceptance criteria so useful with agents?", "options": ["They are shorter", "The agent (and you) can check the work objectively by running them", "They replace code review entirely"], "answer": 1}, {"prompt": "In test-first work with an agent, what should it NOT do?", "options": ["Run the tests", "Modify the tests to make them pass", "Read the code"], "answer": 1}, {"prompt": "Why confirm new tests fail before implementing?", "options": ["Tradition", "A test that passes before the feature exists is not testing the feature", "Speed"], "answer": 1}, {"prompt": "Which criterion is missing from \"users can search their recipes\"?", "options": ["The colour", "Security: other users' recipes must never appear", "The font"], "answer": 1}, {"prompt": "Agents tend to optimise for…", "options": ["Unstated preferences", "What you explicitly state, so include non-functional and unhappy-path requirements", "The shortest code"], "answer": 1}]
---
# Acceptance Criteria as Tests

The best acceptance criteria are **executable**. Instead of "search should work well", write:

```
- GET /api/recipes?q=CHICKEN returns recipes whose title contains "chicken" (case-insensitive)
- GET /api/recipes?q= returns all of the user's recipes
- Another user's matching recipes are never returned
- Response time stays under 100 ms with 10k recipes (index on (owner_id, title))
```

Each line can become a test, and that changes the workflow:

1. Write (or have the agent write) the tests **first**, and confirm they fail for the right reason.
2. Ask the agent to make them pass **without modifying the tests**.
3. The tests are now an objective, automatic referee: the agent can check its own work, and you can too.

### Include non-functional criteria

Agents optimise for what you state. If you don't mention security ("users can't see other users' data"), performance or error handling, don't assume they'll be prioritised. Mention the unhappy paths explicitly: invalid input, missing records, unauthorised users.
