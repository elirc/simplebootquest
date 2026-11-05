---
slug: "ae-q-bisect"
title: "Bisecting Regressions"
type: "quiz"
xp: 15
resources: [{"title": "Git documentation: git bisect", "url": "https://git-scm.com/docs/git-bisect"}]
questions: [{"prompt": "Roughly how many steps does bisect need for 1,000 commits?", "options": ["1,000", "About 10", "500"], "answer": 1}, {"prompt": "What does `git bisect run <cmd>` need from the command?", "options": ["Pretty output", "Exit code 0 for good and non-zero for bad", "A JSON report"], "answer": 1}, {"prompt": "What must you know to start bisecting?", "options": ["Nothing", "A good commit (or tag) and a bad one", "The author of the bug"], "answer": 1}, {"prompt": "After bisect finds the culprit, should you always just revert it?", "options": ["Yes", "Not necessarily: it may also contain needed changes, so understand the diff first"], "answer": 1}, {"prompt": "What is a useful job for an agent in bisecting?", "options": ["Guessing the commit", "Writing a reliable reproduction script and running git bisect run", "Deleting history"], "answer": 1}]
---
# Bisecting Regressions

"It worked last week." When you have a known good version and a known bad one, **`git bisect`** finds the commit that broke it by binary search. Even 1,000 commits take only about 10 steps.

```bash
git bisect start
git bisect bad                 # the current commit is broken
git bisect good v1.4.0         # this release worked
# git checks out a commit in the middle: test it, then
git bisect good   # or: git bisect bad
# ... repeat until git names the first bad commit
git bisect reset
```

It works even better **automated**: `git bisect run npm test -- cart.test.ts` runs the command at each step. A non-zero exit means bad.

Agents are good at driving this: writing a small reproduction script that exits 0 or 1, running `git bisect run`, and then **explaining the culprit commit's diff**. You still need to decide the right fix: reverting the commit isn't always correct if it also fixed something else.
