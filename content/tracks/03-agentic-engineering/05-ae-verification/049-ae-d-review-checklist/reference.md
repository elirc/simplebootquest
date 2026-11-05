# AI change review checklist

## Scope
- [ ] The diff matches the task: no unrelated refactors, reformatting or "improvements".
- [ ] It touches only the files I expected. Anything surprising has a reason I understand.
- [ ] No generated files, lockfile churn or config changes unless they're intended.

## Correctness
- [ ] I can explain every changed line in my own words.
- [ ] Edge cases: empty input, null or undefined, zero, very long strings, duplicates, concurrent requests.
- [ ] Error paths return the right status codes (400/401/403/404/409) through `HttpError`, and nothing is swallowed by a bare `catch {}`.
- [ ] Async: every promise is awaited, and there's no forEach with async callbacks.

## Security
- [ ] Every query on user data is scoped by `req.user.id` (no IDOR).
- [ ] Input is validated with Zod, and there's no `data: req.body` into Prisma.
- [ ] No raw SQL built from strings, and no `dangerouslySetInnerHTML` with user content.
- [ ] No secrets or personal data in code, logs or error messages.
- [ ] No disabled checks (`@ts-ignore`, `eslint-disable`, `rejectUnauthorized: false`, CORS `*`).

## Tests
- [ ] New behaviour has tests, including at least one unhappy path.
- [ ] No `.only` or `.skip`, and no assertions loosened or changed to fit the code.
- [ ] I broke the code on purpose once, and a test failed.

## Maintainability
- [ ] It follows the existing patterns (service layer, error helpers, components) and doesn't invent new ones.
- [ ] No new dependency, or I checked that it exists, is maintained, is needed and has a sensible size.
- [ ] Names are clear, and comments explain *why*, not *what*.

## Hands-on verification
- [ ] `npm run typecheck && npm test` pass locally (I ran them myself).
- [ ] I used the feature in the browser: the happy path, an error, an empty state, and phone width.
- [ ] The docs and CLAUDE.md are updated if commands or conventions changed.

## Reject / restart when
- The approach is wrong (not just details). Reset and re-prompt with a better spec rather than patching it.
- The diff is too big to review carefully. Split it.
- I can't explain how it works after a careful read.
