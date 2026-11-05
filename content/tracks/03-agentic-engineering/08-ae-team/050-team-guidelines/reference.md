# AI-assisted development guidelines

## Where we use agents
- **Encouraged:** tests for existing code, scaffolding that follows existing patterns, docs, dependency bumps with good test coverage, exploring an unfamiliar part of the codebase, first drafts of migrations (for human review), debugging legwork (bisecting, reproduction scripts).
- **With care** (plan review first, small steps, a second reviewer): auth and permissions, payments, data migrations, performance-critical code, anything touching CI config or infrastructure.
- **Avoid:** direct production access of any kind, and handling customer data in prompts.

## Pull requests
1. You read every line before opening the PR. Reviewers must never be the first human to read the code.
2. Keep PRs small (< 400 lines of behavioural change). Split mechanical changes out.
3. The description covers what, why, how it was tested, and the risks. Only claim what you verified.
4. Add the `ai-assisted` label (and keep `Co-Authored-By` trailers) so reviewers can calibrate.
5. Never weaken, skip or delete tests to get CI green. Explain any test change in the description.

## Growing as an engineer (especially juniors)
- For your first 3 months on a topic, write the core logic yourself, then ask an agent to review it or suggest alternatives.
- Use agents to *explain* errors and concepts. Keep notes of what you learned.
- A weekly "explain your PR" session: walk through one change and why it works, with no agent allowed.
- Seniors pair with juniors on spec-writing and reviewing AI diffs, which are the most valuable skills.

## Shared assets
`CLAUDE.md` / `AGENTS.md` (owner: the tech lead; changes via PR), a `/commands` folder with reviewed prompts (`/review`, `/new-endpoint`, `/write-tests`), and the permission settings in the repo. Anyone can propose changes. Two approvals are needed for permission changes.

## How we measure success
Change failure rate and escaped bugs (should not rise), PR cycle time, review turnaround, incidents linked to agent-written code (via the label), and a quarterly developer survey on confidence and learning. We explicitly **don't** track lines of code or the number of AI PRs.

## Keeping these guidelines current
A monthly 30-minute retro: what worked, what went wrong, which guardrail was missing. These guidelines and the context files are updated afterwards. Every incident involving agent-written code gets a blameless review that ends in a concrete guideline or tooling change.
