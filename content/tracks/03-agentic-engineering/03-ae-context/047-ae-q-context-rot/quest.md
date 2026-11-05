---
slug: "ae-q-context-rot"
title: "Keeping Context Fresh"
type: "quiz"
xp: 15
questions: [{"prompt": "Why do very long sessions degrade?", "options": ["Models get tired", "Older content is summarised or crowded out, and dead ends keep influencing the work", "The internet slows down"], "answer": 1}, {"prompt": "What is a handoff note?", "options": ["A Slack message", "A file recording progress, decisions and next steps, so the next session can continue", "A git tag"], "answer": 1}, {"prompt": "When should docs be updated?", "options": ["Once a year", "In the same change that makes them outdated", "Never"], "answer": 1}, {"prompt": "A comment says \"this function is only called from the admin panel\", but it is now also public. What is the risk?", "options": ["None", "The agent (and humans) trust the stale comment and make unsafe changes", "The build fails"], "answer": 1}, {"prompt": "You continue yesterday's work in a new session. What should you do first?", "options": ["Assume it remembers", "Point it to the handoff notes and the current branch state", "Start over completely"], "answer": 1}]
---
# Keeping Context Fresh

Context goes stale in three ways:

1. **In the session**: early decisions get summarised away, and the agent loses track of something you said an hour ago. Long sessions also carry dead ends that still influence it.
2. **In the repo**: docs, comments and context files describe how things *used to* work. An agent believes them.
3. **In your head**: you assume the agent knows about yesterday's session. It doesn't.

Habits that help:
- **One task, one session.** Start fresh for unrelated work.
- **Write handoff notes** for multi-session work: a `PLAN.md` or a progress file with what's done, what's next, and the decisions made. The next session reads it first.
- **Update docs in the same PR** as the change they describe, and ask the agent to do it ("update the README and CLAUDE.md if commands changed").
- **Delete stale docs** rather than leaving them "for reference".
- After a long session, ask for a **summary of decisions and open questions** before you stop, and save it.
