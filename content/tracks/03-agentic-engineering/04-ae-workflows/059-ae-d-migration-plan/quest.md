---
slug: "ae-d-migration-plan"
title: "Write-Up: Plan an Agent-Assisted Migration"
type: "design"
xp: 40
rubric: ["Starts with a small pilot of representative components, reviewed by a human", "Writes down a reusable recipe (rules and edge cases) for the agent", "Uses deterministic tooling where it helps and the agent for judgment-heavy cases", "Works in small verified batches (type-check, tests, smoke checks) with commits", "Gives extra attention to untested components (adding tests first, or manual checks)", "Defines done criteria (no remaining useFetch usages) and how to roll back"]
minWords: 150
---
# Write-Up: Plan an Agent-Assisted Migration

Your team's React app has **180 components** that fetch data with a hand-written `useFetch` hook (with `useEffect` and `useState`, no caching). You want to move them to **TanStack Query**. Tests exist for about half of the components.

Write the plan you'd follow with a coding agent.

### Include
1. **The pilot**: which files first, and why.
2. **The recipe**: transformation rules and known edge cases.
3. **Tooling**: what's done by a codemod vs the agent vs by hand.
4. **Batching and verification**: the order, the batch size, and the checks per batch.
5. **Risk areas**: components without tests, mutations, and pagination.
6. **Done criteria and rollback.**
