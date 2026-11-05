# Delegation triage

| # | Task | Decision | Mode | Verification | Why |
|---|------|----------|------|--------------|-----|
| 1 | Rename | Delegate | Autonomous in a branch | `tsc` passes, tests pass, grep finds no old name | Mechanical, and the type checker catches every miss |
| 2 | Rate limiting | Pair | Plan, then act with approvals | Tests for 429 after N attempts, per IP and per account, plus a manual curl loop | Security-sensitive. I want to choose the limits and key strategy myself |
| 3 | REST → tRPC | Do it myself (the agent researches) | Ask | A written ADR reviewed by the team | It's a judgment call about team skills, clients and migration cost. The agent can summarise the trade-offs and sketch a spike |
| 4 | Flaky test | Pair | Ask, then act | Run the test 50× in a loop before and after the fix | The agent is good at spotting timing and shared-state causes, but the fix must be proven by repetition, not by one green run |
| 5 | Onboarding copy | Delegate a draft, I edit | Act | Read it aloud, and a check by the product owner | Fast first draft, but voice and accuracy need a human |
| 6 | Express 5 | Delegate in steps | Plan first, then act per step | The full test suite, plus a staging smoke test of the main flows | It's a known migration guide, so it's well suited to an agent, but there are subtle behaviour changes (path syntax, async errors) that need plan review |
| 7 | Bill doubled | Do it myself, with the agent analysing the exports | Ask | Numbers checked against the billing console | It needs access to billing data I don't want to hand over broadly, and the conclusions drive spending decisions |

**Overall**: delegate where the checks are automatic and strong, pair where security or subtle behaviour is involved, and keep the decisions (architecture, money, product voice) with people.
