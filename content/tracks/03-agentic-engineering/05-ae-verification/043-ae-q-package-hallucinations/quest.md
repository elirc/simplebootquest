---
slug: "ae-q-package-hallucinations"
title: "Hallucinated and Risky Dependencies"
type: "quiz"
xp: 15
questions: [{"prompt": "What is \"slopsquatting\"?", "options": ["A CSS bug", "Publishing malicious packages under names that AI tools tend to hallucinate", "Slow npm installs"], "answer": 1}, {"prompt": "The agent imports `express-validator-plus`. What should you do first?", "options": ["Install it", "Verify the package exists, is legitimate and maintained, and is actually needed", "Rename it"], "answer": 1}, {"prompt": "Why prefer crypto.randomUUID() over a uuid package in modern Node?", "options": ["It is built in: no extra dependency or supply-chain risk", "It is random-er", "The package is illegal"], "answer": 0}, {"prompt": "Which package.json feature runs code automatically at install time?", "options": ["\"main\"", "\"scripts.postinstall\"", "\"license\""], "answer": 1}, {"prompt": "What rule belongs in your context file to prevent surprise dependencies?", "options": ["\"Use many packages\"", "\"Ask before adding any new dependency\"", "\"Never use npm\""], "answer": 1}]
---
# Hallucinated and Risky Dependencies

Agents sometimes suggest packages that **don't exist**, or that exist under a slightly different name. Attackers know this, and publish malicious packages under commonly hallucinated names. This is called **slopsquatting**, a cousin of typosquatting.

Before accepting any new dependency:
- **Check it exists** and is the package you think it is: the npm page, the repository link, the maintainers, and the weekly downloads.
- **Check its health**: recent releases, open issues, whether it's maintained, and the licence.
- **Check the size and what it pulls in.** Do you really need a 400 KB library for one helper?
- **Prefer the platform**: `fetch`, `crypto.randomUUID()`, `structuredClone`, `Intl`, `node:test`… Modern JavaScript replaces many small packages.
- **Look at install scripts** (`postinstall`), which run code on your machine at install time.
- **Pin and lock**: commit `package-lock.json`, and use `npm ci` in CI.

Make it a rule in your context file: "**Ask before adding any dependency.**"
