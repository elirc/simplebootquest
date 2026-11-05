---
slug: "ae-explore-plan-code-verify"
title: "Explore → Plan → Implement → Verify"
type: "quiz"
xp: 15
resources: [{"title": "Anthropic: Claude Code best practices", "url": "https://www.anthropic.com/engineering/claude-code-best-practices"}]
questions: [{"prompt": "Why explore before planning?", "options": ["To use more tokens", "To confirm the agent (and you) understand the current code before changing it", "It is required"], "answer": 1}, {"prompt": "Where is a wrong approach cheapest to correct?", "options": ["In the final diff", "In the plan, before any code is written", "After deployment"], "answer": 1}, {"prompt": "What does \"verify\" include beyond running tests?", "options": ["Nothing", "Typecheck, lint, actually exercising the feature, and reviewing the diff", "Asking the agent if it worked"], "answer": 1}, {"prompt": "When is it fine to skip straight to implementation?", "options": ["Always", "For tiny, obvious changes like fixing a typo", "Never"], "answer": 1}, {"prompt": "What does a plan mode typically do?", "options": ["Executes the plan automatically", "Lets the agent read and research, but not edit, until you approve a plan", "Writes documentation"], "answer": 1}]
---
# Explore → Plan → Implement → Verify

The most reliable general workflow:

1. **Explore**: "Read the files related to X and explain how it works today. Don't change anything." You learn whether the agent actually understands the code, and you often learn something yourself.
2. **Plan**: "Propose a plan: which files change, in what order, and how we'll test it." **Review the plan.** It's far cheaper to fix a wrong approach here than in a 600-line diff.
3. **Implement**: in small steps, ideally one plan item at a time, running checks as it goes.
4. **Verify**: tests, typecheck, lint, *and* actually running the feature. Then you review the final diff.

Skipping straight to "implement" works for tiny, obvious changes. For anything non-trivial, the explore and plan steps catch misunderstandings early, when they cost seconds instead of hours.

Many tools have a dedicated **plan mode**, where the agent can read and research but not edit until you approve.
