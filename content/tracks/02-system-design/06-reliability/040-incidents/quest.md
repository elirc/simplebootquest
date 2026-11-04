---
slug: "sd-incidents"
title: "Incidents & Postmortems"
type: "quiz"
xp: 15
resources: [{"title": "Google SRE book: Postmortem culture", "url": "https://sre.google/sre-book/postmortem-culture/"}]
questions: [{"prompt": "During an outage caused by a deploy, what should you do first?", "options": ["Debug the code in production", "Roll back (or disable the flag) to restore service, then investigate", "Write the postmortem"], "answer": 1}, {"prompt": "What does \"blameless\" mean in a postmortem?", "options": ["No one is responsible for anything", "Focusing on the system conditions that allowed the error, so people share information openly", "Skipping the root cause"], "answer": 1}, {"prompt": "Why keep a timeline during an incident?", "options": ["For legal reasons only", "It is hard to reconstruct accurately afterwards, and it reveals detection and mitigation delays", "It is not useful"], "answer": 1}, {"prompt": "Which action item is strongest?", "options": ["\"Be more careful\"", "\"Add a CI check and a canary deploy that would catch this class of bug\"", "\"Tell Bob to double-check\""], "answer": 1}, {"prompt": "Two key incident metrics are…", "options": ["Lines of code and test count", "Time to detect and time to mitigate", "Number of meetings"], "answer": 1}]
---
# Incidents & Postmortems

When something breaks in production:

1. **Mitigate first, diagnose later.** Roll back the deploy, turn off the feature flag, scale up, fail over. Restoring service matters more than understanding why, at first.
2. **Communicate.** Post a status update, and say who's leading the incident. One person coordinates, and others investigate.
3. **Keep a timeline** as you go (it's surprisingly hard to reconstruct later).

### Blameless postmortems

Afterwards, write up what happened, the impact, the timeline, the root cause(s) and the **action items**. "Blameless" means focusing on how the *system* allowed the mistake (no tests for this path, a deploy with no canary, an alert that didn't fire), not on who typed the command. If people fear blame, they hide information, and the same incident happens again.

### Useful questions

- How long until we **detected** it? Could an alert have caught it earlier?
- How long until we **mitigated** it? Was rollback easy?
- Why didn't tests or staging catch it?
- What would stop this **class** of problem, not just this instance?
