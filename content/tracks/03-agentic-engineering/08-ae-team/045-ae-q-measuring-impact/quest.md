---
slug: "ae-q-measuring-impact"
title: "Measuring Whether Agents Actually Help"
type: "quiz"
xp: 15
resources: [{"title": "DORA research", "url": "https://dora.dev/"}]
questions: [{"prompt": "Why is \"lines of code generated\" a poor metric?", "options": ["It is hard to count", "It rewards volume, not value, and more code means more to maintain", "Git hides it"], "answer": 1}, {"prompt": "Which set of metrics is widely used for delivery performance?", "options": ["Story points", "The DORA metrics (lead time, deploy frequency, change failure rate, time to restore)", "Hours at the desk"], "answer": 1}, {"prompt": "Developers report feeling faster with a tool. What should you do?", "options": ["Mandate it immediately", "Measure outcomes (delivery and quality) over time, along with the perceptions", "Ignore them"], "answer": 1}, {"prompt": "Should agent productivity metrics be used to rank individual engineers?", "options": ["Yes", "No: use them at team level to improve the process"], "answer": 1}, {"prompt": "What hidden cost might faster AI-assisted delivery create?", "options": ["None", "More defects or harder-to-maintain code that slows the team later", "Cheaper hosting"], "answer": 1}]
---
# Measuring Whether Agents Actually Help

"We feel 10× faster" is a feeling, not a measurement. Studies of AI coding tools have found both real speed-ups and cases where developers *felt* faster while actually being slower. Measure.

Useful signals (team-level, over weeks, never for ranking individuals):
- **Delivery**: lead time from first commit to production, deploy frequency (the DORA metrics).
- **Quality**: the change failure rate, bugs found after release, time to restore, and the rate of reverted PRs.
- **Review**: PR size, time to first review, review rounds.
- **Developer experience**: surveys on flow, frustration and confidence in the code.

Pitfalls:
- **Lines of code or the number of PRs** reward exactly the wrong things.
- **Short-term speed vs long-term cost**: faster today, but harder to maintain next quarter?
- **Selection effects**: early adopters may already be the fastest engineers.

Run small experiments: pick a type of task, try a workflow for two weeks, compare against a baseline, and keep what works.
