# Design Council Review: Decision Record

Five independent reviewers each attacked the project's high-level design from one angle:

1. **Security & integrity**: the runner, the honor system, auth, abuse.
2. **Pedagogy**: does the path actually reach the end goal?
3. **Architecture**: scalability, data integrity, maintainability.
4. **Product & learner UX**: why would a beginner churn in week 1?
5. **Devil's advocate**: steelman the case *against* every core bet.

This document records what they found, what we decided, and **why**. Juniors: this is what a design review looks like in practice. Not every recommendation is accepted. Each decision weighs impact against cost and risk, and the rejected ones are written down too, so nobody re-litigates them without new information.

## Where the reviewers agreed

The strongest signal is the place where independent reviewers converged:

> **The browser runner only lets learners practise pure functions.** Express, Prisma, React hooks and Supertest never actually run before the boss projects, and those projects are honor-system.

Pedagogy, the devil's advocate and UX all found this independently. The devil's advocate put it bluntly: *"The team is fooling itself that quest count and validator-green mean learning outcomes."*

The second convergence was **trust**. A public all-time leaderboard on top of self-reported progress turns "cheating only cheats yourself" into "cheating is a public billboard" (security, devil's advocate, UX).

## Decisions

### Accepted, and done in this iteration

| # | Decision | From | Why |
|---|----------|------|-----|
| 1 | **Real React hooks in the runner.** `useState`, `useReducer`, `useEffect`, `useRef`, `useMemo` and `useCallback`, plus a `mount()` test harness with `act()` | Pedagogy, devil's advocate | Chapters 9–10 can now teach real React instead of "reducers in JSX clothing". The cost is about 200 lines of runner code. |
| 2 | **An Express-compatible `express()` and a Supertest-style `request(app)` in the runner** | Pedagogy, devil's advocate | Learners write real `app.get(...)` routes and real Supertest tests before the CRUD boss, which closes the inverted-prerequisite gap (the ch7 boss demanded Supertest tests that nothing taught). |
| 3 | **Harden the runner.** Test helpers learner code can't shadow, results over a private `MessageChannel`, and `fetch`/`XMLHttpRequest`/`WebSocket`/`importScripts` disabled while learner code runs | Security | Closes a verified copy-pasteable exploit (`const expect = …` made any quest pass) and stops shared snippets from calling the API with the learner's cookie. |
| 4 | **Quizzes return a score only until passed.** Explanations for every question are shown once it's passed | Security, UX (partly) | Per-question correctness made the answer key enumerable in k tries. UX asked for rationale on wrong answers, but that has the same leak; full explanations after passing teach without leaking. |
| 5 | **A per-user rate limit on all writes**, and `TRUST_PROXY` from config | Security | Cheap protection against storage abuse and IP spoofing of the login limiter. |
| 6 | **A weekly leaderboard, an opt-out, name validation, and "self-reported" labelling** | Security, UX, devil's advocate | A weekly board resets, so a faker's lead decays. The opt-out fixes the privacy default, name validation stops slurs and URLs, and the honest labelling is free. |
| 7 | **The streak is computed when it's read** | UX | A user who missed five days still saw 🔥 12. A visible correctness bug in the main daily habit mechanic. |
| 8 | **Practice quests are optional**, and chapters show "Core" and "Practice" sections | Devil's advocate, pedagogy, UX | Fixes chapter bloat (ch1 had 95 required quests) **without deleting anything**, so nobody's progress is lost. Chapter completion and "Continue" use core quests only. |
| 9 | **Resume where you left off** (most recent activity) on Home and Learn | UX | The cheapest fix for "I came back and got lost". |
| 10 | **Quest search** across all tracks | UX | 675 quests in flat lists can't be navigated. |
| 11 | **A review queue.** Interleaved re-practice of quests you finished 3 or more days ago, across chapters | Pedagogy | There was no retrieval practice at all. This version reuses existing completion timestamps and needs no schema change. |
| 12 | **A beginner-friendly error explainer** for common errors in test output | UX | The hardest moment for a week-1 learner is the first red test. |
| 13 | **Chapter 0: Your Dev Environment** (terminal, git, npm, debugging, reading stack traces) | Pedagogy | Every boss assumed git and a terminal. Nothing taught them. |
| 14 | **Debug quests** ("this code is broken, here's the failing test") in several chapters | Pedagogy | Debugging is the day-to-day job skill, and it was absent. |
| 15 | **Serialize completions per user** (`SELECT … FOR UPDATE`) | Architecture | Concurrent completions could lose a "chapter complete" achievement forever. |
| 16 | **A slug lockfile.** The validator fails if a published slug disappears | Architecture | The biggest long-term data-integrity risk in content-as-code: a renamed slug orphans progress and double-awards XP. |
| 17 | **Response compression**, and a parallel content validator | Architecture | The curriculum JSON is 140 KB raw and 18 KB gzipped. The validator gets faster as content grows. |

### Accepted, deferred to the next iteration

| Decision | Why deferred |
|----------|--------------|
| **A local verifier CLI** (`npx sbq check`) that runs hidden tests against the learner's real project, so bosses become verified | The single highest-leverage idea (devil's advocate, pedagogy). It's also L-sized and needs a signing design that can't be spoofed from the client, so it deserves its own design doc. Decisions 1–2 capture part of the value now. |
| **Real `tsc` type-checking in the worker** | The TypeScript compiler adds about 3 MB to the worker. It's worth it eventually, but it needs a lazy-loading plan first. |
| **Guest progress in localStorage, merged on signup** | Valuable for the funnel, but it touches auth flows. Guests can already run code. |
| **`tokenVersion` session revocation** | Low severity at this stage. It's needed once we add password change. |
| **Each mutant in its own worker with its own deadline** | Rare in practice. Revisit if hangs show up in write-tests quests. |
| **Splitting the curriculum API into a static part (with ETag) and per-user status** | Compression captures most of the win. Express already sends ETags for JSON. |

### Rejected, or reduced in scope

| Recommendation | Decision | Reasoning |
|----------------|----------|-----------|
| Delete ~45 chapter 1 drills, merge chapters 11 and 12 | **Rejected in favour of decision 8** | Deleting quests destroys learners' earned progress and history. Marking them optional gets the same "simpler path" benefit with zero data loss. |
| Freeze or drop the System Design track | **Partly accepted** | No new System Design content this iteration. The track stays, because it's clearly labelled as an optional extra and costs nothing at runtime. |
| Drop the leaderboard entirely | **Rejected** | A weekly, opt-out, labelled board keeps the motivation and removes most of the harm. |
| A server-side sandbox for verified runs | **Rejected for now** | It contradicts the zero-infrastructure decision (BUILDING Step 3). The local verifier CLI is a better fit. |
| Placement / test-out quizzes per chapter | **Deferred** | Optional practice blocks already shorten the path a lot. Revisit after measuring where people drop off. |

## Outcome metric

The devil's advocate's sharpest point: *quest count is the cheapest number to move.* From now on, progress reports should lead with **outcomes**: how many learners submit a working live URL for the CRUD boss, the review-queue completion rate, and the week-1 retention. Not "N quests added".
