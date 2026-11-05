---
slug: "ae-test-first"
title: "Test-First with Agents"
type: "quiz"
xp: 15
questions: [{"prompt": "Why commit the tests before asking the agent to implement?", "options": ["Tradition", "Any later modification of the tests becomes clearly visible in the diff", "To make CI slower"], "answer": 1}, {"prompt": "Before implementing, the new tests should…", "options": ["Pass", "Fail, for the right reason", "Be deleted"], "answer": 1}, {"prompt": "In test-first with an agent, where does most of YOUR review effort go?", "options": ["Formatting", "The tests: do they capture the real requirements and edge cases?", "Variable names"], "answer": 1}, {"prompt": "What is the first step for fixing a reported bug?", "options": ["Rewrite the module", "Write a test that reproduces the bug", "Ask the user to clear their cache"], "answer": 1}, {"prompt": "What is the key instruction during implementation?", "options": ["\"Make it work somehow\"", "\"Make the tests pass without modifying the tests\"", "\"Delete failing tests\""], "answer": 1}]
---
# Test-First with Agents

Test-driven development pairs especially well with agents, because tests turn a fuzzy goal into an **objective, automatic referee**:

1. "Write tests for the behaviour described below. **Don't implement anything yet.**"
2. Review the tests. Do they capture what you actually want, including edge cases and permissions?
3. Run them and confirm they **fail** (for the right reason, not with a typo).
4. "Make these tests pass **without modifying the tests**." Optionally commit the tests first, so any change to them shows up in the diff.
5. The agent iterates: run, read failures, fix, until it's green.
6. Review the implementation, and refactor with the tests as a safety net.

### Why it works

- The agent can check itself, so there are fewer false "done!" claims.
- Your review effort moves to the **tests**, which are shorter and express intent.
- Committing the tests first makes "weaken the test" changes obvious in the diff.

It also works for bugs: **first write a test that reproduces the bug**, then fix it. That proves the fix, and prevents regressions.
