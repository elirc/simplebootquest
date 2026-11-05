---
slug: "ae-accountability"
title: "Ownership & Accountability"
type: "quiz"
xp: 15
questions: [{"prompt": "Agent-written code you merged causes a data leak. Who is accountable?", "options": ["The model provider", "The team and the engineer who merged it, as with any code", "Nobody"], "answer": 1}, {"prompt": "Should you merge code you cannot explain?", "options": ["Yes, if tests pass", "No: you need to understand it to maintain and debug it", "Only small changes"], "answer": 1}, {"prompt": "Can you paste proprietary company code into any AI tool you like?", "options": ["Yes", "Only into tools approved by your organisation's policy", "Only on weekends"], "answer": 1}, {"prompt": "The agent said \"tested on mobile\"; you didn't check, and you write the same in the PR. This is…", "options": ["Fine", "Passing on an unverified claim: only state what you verified", "Efficient"], "answer": 1}, {"prompt": "Who gets the most value from coding agents?", "options": ["People who know the least", "Engineers with strong fundamentals, who can specify, review and verify well", "Nobody"], "answer": 1}]
---
# Ownership & Accountability

**You own what you merge.** That principle resolves most questions about AI-assisted work:

- If agent-written code has a security hole, the engineer who merged it (and the review process) are accountable, just as with any other code. "The AI wrote it" isn't an excuse.
- You must be able to **explain and maintain** everything you ship. If you can't explain why it works, you can't debug it at 3am.
- **Licensing and provenance**: be aware of your organisation's policy on AI tools, on what code and data may be sent to which providers, and on attribution.
- **Confidentiality**: only use approved tools with company code, and follow data-handling rules (no customer data in prompts unless it's approved).
- **Honesty**: if you claim something is tested, it must be tested. Don't pass along an agent's unverified claims as your own.

### A healthy team culture

Share effective prompts and context files, review failures blamelessly ("which guardrail was missing?"), keep humans responsible for decisions, and keep investing in **fundamentals**. Engineers who understand systems deeply get far more out of agents than those who don't.
