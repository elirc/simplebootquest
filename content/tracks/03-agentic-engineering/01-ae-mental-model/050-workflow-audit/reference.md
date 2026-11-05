# Agent workflow audit: Recipe Box

| Task | Agent suitability | Risk | Autonomy level | How I'd verify |
|------|-------------------|------|----------------|----------------|
| Add a CRUD endpoint following existing patterns | High: lots of existing examples to copy | Low (new code on a branch) | Auto-edit | Read the diff, run the API tests, try it with curl |
| Write tests for an existing service | High | Low, but tests may assert current bugs | Auto-edit | Check each test would fail if the logic broke (mutate the code) |
| Fix a failing CI run | Medium: needs the logs | Medium (may "fix" by weakening tests) | Ask per command | Reproduce the failure locally first; diff review |
| Upgrade a major dependency (Prisma 6→7) | Medium: needs current docs | High: breaking changes | Ask per action | Read the changelog myself; full test suite; manual smoke test |
| Write a DB migration | Medium | High (production data) | Suggest only | I run it on a copy of production data; review the SQL line by line |
| Draft README / docs | High | Low | Auto-edit | Read it; check every command actually works |
| Refactor a component | Medium | Medium | Auto-edit, small steps | Tests + visual check in the browser |
| Investigate a performance issue | Medium: good at reading query plans | Low (read-only) | Autonomous in a read-only sandbox | Re-measure before and after |

## Tasks I won't delegate (yet)
- **Auth and permission logic**: subtle security bugs are easy to miss in review. I'll write it, and use the agent as a reviewer.
- **Things I'm still learning** (SQL joins, React state): if the agent writes them, I don't build the skill. I'll write them myself first and ask the agent to critique.
- **Anything touching production directly**: deploys and data fixes go through CI and a human.

## What my repo needs to make agents more effective
- A `CLAUDE.md` with the dev/test/lint commands and our conventions (layering, error handling, naming).
- Faster, more focused tests: `npm test -w @sbq/api -- quests` to run one file.
- A seed script so the agent can run the app with realistic data.
- Clear error messages from the content validator (already good).
