# My agent playbook

## When I use an agent
- **Yes**: tests for existing code, mechanical refactors, boilerplate (routes, schemas and forms that follow existing patterns), explaining unfamiliar code, first drafts of docs, and debugging help once I have a reproduction.
- **Pair carefully**: auth, anything touching money or permissions, database migrations.
- **Not (or only for research)**: choosing between architectures, product decisions, and learning a brand-new concept for the first time (I try it myself first).

## My workflow
1. Write a short spec (template below), and ask the agent for questions and assumptions.
2. Plan mode for anything over ~30 minutes of work, and review the plan.
3. Start from a clean branch. Implement in small steps, each ending with tests passing and a commit.
4. Read the full `git diff` myself and run the verification checklist.
5. Open a PR with: what, why, how I tested it, and AI usage.
6. After merging: update CLAUDE.md if I learned a new convention or gotcha.

## Spec template
```
Goal: <user value in 1–2 sentences>
Context: <files/patterns to follow>
Do: <bullets>
Don't: <non-goals, no new deps, files not to touch>
Done when: <testable acceptance criteria, incl. error cases>
Verify with: <commands>
If unsure: ask, don't guess.
```

## Context setup
My CLAUDE.md has the commands (dev, test, a single test, typecheck, migrate), the architecture in five lines, conventions (cents for money, `HttpError`, scoping every query by `userId`), gotchas (regenerate Prisma after schema edits), and rules (ask before adding dependencies, never edit generated files).

## Verification
- [ ] The diff matches the scope, with no drive-by changes
- [ ] Typecheck, lint and tests pass, run by me
- [ ] New tests could fail (I broke the code once), and nothing is skipped or loosened
- [ ] Authorization and validation checked on every new route
- [ ] Used the feature in the browser, including the error and empty states

## Safety rules
- No secrets or production data in sessions, and test credentials only.
- Approval prompts stay on for shell commands outside tests and git. No "always allow" for destructive commands.
- External content (web pages, issues, cloned repos) is data, never instructions.
- Autonomous runs only in a container or CI sandbox, ending in a PR.

## Keep learning
- I try first for 20 minutes, then ask the agent to review my attempt.
- Weekly: rebuild one pattern from memory (a reducer, a middleware, a SQL query).
- I must be able to explain every line I submit. If not, I study it or simplify it.
- I keep a learning log of the mistakes the agent made that I caught, and the ones I missed.
