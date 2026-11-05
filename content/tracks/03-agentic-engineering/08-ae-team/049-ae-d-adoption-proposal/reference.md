# Proposal: 6-week coding agent pilot

## Why
- Our backlog has many **well-defined, low-risk tasks** that take a long time: test coverage gaps in the API (currently 48%), dependency upgrades, and small UI fixes. They wait weeks.
- Review times are already long (a median of 26 hours to first review), so we need to improve throughput **without** overloading reviewers.
- People are already using agents informally. A pilot sets shared rules instead of having none.

## Scope
- **Duration**: 6 weeks. **Participants**: all 6, with the lead as reviewer of the process.
- **Task types** (in scope): writing tests for existing code, refactors with strong test coverage, dependency upgrades, bug fixes that come with a reproduction, and documentation.
- **Out of scope**: auth, payments, data migrations on production, and architecture decisions. A human does those (the agent may help research).
- **Tool**: one agreed tool, configured for the team, with a shared `CLAUDE.md` in the repo.

## Guard rails
- No secrets, production credentials or customer data in agent sessions. Use the dev database with seed data.
- Agents run with approval prompts locally. Autonomous runs only in the CI sandbox, opening PRs.
- Every PR is **reviewed first by its author**, then by a teammate, as usual. Agent-assisted PRs are labelled `ai-assisted`, with a note on what was verified by hand.
- "Ask before adding dependencies" is enforced in CLAUDE.md and the PR template.

## Juniors
- Juniors use the agent in **explain and review mode** for new topics. They write the first attempt themselves and ask the agent for review and edge cases.
- A weekly 30-minute pairing session: a junior and a senior go through one agent-assisted PR together. What did it get wrong, and how would we catch it?
- Juniors must be able to explain every line they submit (checked in review).

## Measuring success
- Baseline: the last 6 weeks of data for lead time, PR size, time to first review, change failure rate (reverts and hotfixes), and API test coverage.
- During the pilot: the same metrics, plus a short weekly survey (perceived speed, confidence, frustration).
- **Go** if lead time for in-scope tasks improves by at least 20% **and** the change failure rate doesn't increase **and** review time doesn't grow. **No-go or adjust** otherwise.

## Risks & costs
- Licence costs (~$X per seat per month). It's a small fraction of salary, but we'll track usage.
- Review overload from more PRs: we'll limit work in progress (max 2 open PRs per person).
- Subtle bugs in plausible-looking code: mitigated by the scope limits, tests and review.
- Skill atrophy for juniors: mitigated by the learning practices above. We'll revisit it at the retro.
