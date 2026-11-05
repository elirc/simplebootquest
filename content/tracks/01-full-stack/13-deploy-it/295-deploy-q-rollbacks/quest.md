---
slug: "deploy-q-rollbacks"
title: "Quiz: Rollbacks and Safe Releases"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "Martin Fowler: Feature Toggles", "url": "https://martinfowler.com/articles/feature-toggles.html"}, {"title": "Prisma: Expand and contract pattern", "url": "https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern"}]
questions: [{"prompt": "A deploy dropped a column the previous version reads. Why is rollback now painful?", "options": ["It is not painful", "The old code expects a column that no longer exists, so rolling back the code breaks too", "Rollbacks are not possible on Node"], "answer": 1}, {"prompt": "What is the safe way to rename a database column?", "options": ["ALTER ... RENAME in one deploy", "Add the new column, write to both, backfill, switch reads, then drop the old column in a later deploy", "Delete the table and recreate it"], "answer": 1}, {"prompt": "How do feature flags help releases?", "options": ["They make code faster", "Code can be deployed turned off, then enabled gradually and disabled instantly without redeploying", "They replace tests"], "answer": 1}, {"prompt": "Error rates spike right after a deploy. What should happen first?", "options": ["Start debugging in production", "Roll back (or turn the flag off) to restore service, then investigate", "Wait to see if it fixes itself"], "answer": 1}, {"prompt": "What is a canary release?", "options": ["Testing on birds", "Sending a small percentage of traffic to the new version and watching metrics before rolling out further", "Releasing on Fridays"], "answer": 1}]
---
# Quiz: Rollbacks and Safe Releases

Every deploy can go wrong. Being able to **undo quickly** matters more than never failing.

- **Rollback**: redeploy the previous artefact. That's quick when builds are immutable and versioned.
- **Database migrations make rollback hard**: the old code may not work with the new schema. Use **expand → migrate → contract**: add new columns or tables first (old code ignores them), deploy code that uses them, and only later remove the old ones.
- **Feature flags** separate *deploy* from *release*: ship the code dark, turn it on gradually, and turn it off instantly without a deploy.
- **Canary / blue-green**: send a small slice of traffic to the new version, or switch all traffic between two environments, and watch error rates before going further.
- **Watch after deploying**: error rates, latency, logs. A deploy isn't done when CI is green.
