---
slug: "ae-d-threat-model"
title: "Write-Up: Threat-Model an Agent Setup"
type: "design"
xp: 40
rubric: ["Identifies the assets (customer data, credentials, repo integrity, reputation)", "Identifies the customer email content as the main untrusted entry point", "Describes concrete prompt-injection and exfiltration scenarios", "Applies least privilege to every credential (read-only, scoped tokens, limited queries)", "Puts a human approval step on outbound actions (sending replies, possibly issues)", "Includes monitoring, rate limits or budgets, and a kill switch", "States the residual risks honestly"]
minWords: 150
---
# Write-Up: Threat-Model an Agent Setup

Your team wants a **"support bot" agent**. It reads incoming customer emails, looks up the customer in the production database (read-only), searches the internal docs, drafts replies, and can **open GitHub issues** for bugs. It runs on a server with an API key for the email provider, a database connection string, and a GitHub token.

Write a threat model and the mitigations.

### Include
1. **Assets**: what's valuable or sensitive.
2. **Entry points for untrusted input.**
3. **Threats**: at least four concrete abuse scenarios (think prompt injection, exfiltration, privilege misuse, and cost abuse).
4. **Mitigations** for each threat, layered.
5. **Monitoring and response**: how you'd notice and stop misuse.
6. **Residual risk** you accept.
