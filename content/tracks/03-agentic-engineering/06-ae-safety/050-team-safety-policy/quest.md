---
slug: "ae-team-safety-policy"
title: "Write-Up: An Agent Safety Policy"
type: "design"
xp: 40
hints: ["For each rule, ask: is this enforced by tooling, or just a request? Prefer enforcement."]
rubric: ["Specifies isolated environments and least-privilege access for interactive and background agents", "Defines secrets handling (no prod creds, .env access, rotation on leak)", "Gives an allow / ask / deny table of commands and actions", "Identifies untrusted inputs (issues, web, dependencies) and contains the blast radius", "Requires human review before merging or deploying agent work", "Includes incident-response steps for agent-caused problems"]
minWords: 200
---
# Write-Up: An Agent Safety Policy

Your team of five is adopting coding agents for daily work, plus a background agent that picks up small GitHub issues and opens PRs automatically. Write the **safety policy**: concrete, enforceable rules, not good intentions.

Cover:

- Environments: where agents may run, and with what access.
- Secrets and data handling.
- Permission rules: an allow / ask / deny table of commands and actions.
- Prompt injection: which untrusted inputs exist (especially for the issue bot), and how risk is contained.
- Destructive actions and production access.
- What happens when something goes wrong (incident response, key rotation).
