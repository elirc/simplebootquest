---
slug: "ae-q-small-diffs"
title: "Small Diffs, Fast Reviews"
type: "quiz"
xp: 15
questions: [{"prompt": "Why are huge diffs risky?", "options": ["Git cannot store them", "Reviewers skim them, and real problems slip through", "They do not compile"], "answer": 1}, {"prompt": "A PR renames a module AND changes its logic. What is better?", "options": ["Keep it as one", "Split it: a pure rename first, then the behaviour change", "Remove the tests"], "answer": 1}, {"prompt": "The agent \"tidied\" 15 unrelated files while adding a feature. What should you do?", "options": ["Merge as is", "Revert the unrelated changes (or move them to a separate PR)", "Ask for more tidying"], "answer": 1}, {"prompt": "What is \"stacking\" changes?", "options": ["Merging all at once", "A sequence of small dependent PRs, each reviewable and revertible on its own", "Using a stack data structure"], "answer": 1}, {"prompt": "Roughly how long should a careful review of one PR take?", "options": ["A full day", "15–30 minutes", "10 seconds"], "answer": 1}]
---
# Small Diffs, Fast Reviews

A 2,000-line agent diff gets **skimmed**, and skimmed code is where bugs hide. Small diffs get **reviewed**.

Keep diffs small:
- **One concern per change**: a feature, a refactor, or a dependency bump. Not all three.
- **Separate mechanical changes** (renames, formatting, moving files) from **behaviour** changes, so reviewers can trust the first kind at a glance and focus on the second.
- **Tell the agent the boundaries**: "only modify files under `src/todos/`", "don't reformat existing code".
- **Stack changes**: PR 1 adds the helper, PR 2 uses it. Each one is easy to review and revert.
- **Watch for drive-by edits**: agents like to "improve" nearby code. Ask it to revert unrelated changes, or do them in a separate PR.

A useful target: something a teammate can review **carefully** in 15–30 minutes. If the diff is bigger, split it before asking for review.
