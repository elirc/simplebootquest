---
slug: "ae-narrowing-down"
title: "Narrowing Down Systematically"
type: "quiz"
xp: 15
questions: [{"prompt": "How many steps does git bisect need for 1,000 commits, roughly?", "options": ["1,000", "~10", "~100"], "answer": 1}, {"prompt": "\"It only fails for users created before March\" is an example of…", "options": ["Bisecting in data", "Flailing", "Scope creep"], "answer": 0}, {"prompt": "What is a minimal reproduction?", "options": ["The full production app", "The smallest setup that still shows the bug", "A screenshot"], "answer": 1}, {"prompt": "In agent-assisted debugging, what is the human best positioned to own?", "options": ["Typing commands", "The strategy: which hypothesis to test next", "Nothing"], "answer": 1}, {"prompt": "What should happen to temporary debug logging?", "options": ["Ship it", "Remove it before committing, and check the diff", "Turn it into tests automatically"], "answer": 1}]
---
# Narrowing Down Systematically

Debugging is a **search problem**. Halve the search space at every step:

- **Bisect in time**: `git bisect` finds the commit that introduced a bug in log₂(n) steps, and an agent can run the test at each step for you.
- **Bisect in code**: comment out half the middleware, or check the data at the midpoint of the pipeline. Which half is the problem in?
- **Bisect in data**: does it fail for all users or some? Old records or new ones? One browser or all?
- **Compare working vs broken**: diff the configs, versions, environment variables and inputs.
- **Minimal reproduction**: strip the problem down until removing anything else makes the bug disappear.

Agents are great at the *legwork*: running bisect steps, writing reproduction scripts, adding temporary logging, reading long stack traces and library source. You stay in charge of the **strategy**: which hypothesis to test next.

Remove temporary debugging code before committing (or ask the agent to, and check the diff).
