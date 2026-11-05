---
slug: "ae-destructive-actions"
title: "Destructive Actions & Guardrails"
type: "quiz"
xp: 15
questions: [{"prompt": "Which action is hardest to reverse?", "options": ["Editing a file in a git repo", "Running a DELETE against the shared staging database", "Creating a branch"], "answer": 1}, {"prompt": "The agent proposes `git reset --hard` with uncommitted work in the tree. Safer alternative?", "options": ["None", "`git stash` (or commit to a branch first)", "`rm -rf .git`"], "answer": 1}, {"prompt": "How can you block `DROP TABLE` commands deterministically?", "options": ["Ask the model nicely", "A hook or deny rule that rejects matching commands", "You can't"], "answer": 1}, {"prompt": "Which GitHub setting protects main from force-pushes?", "options": ["Stars", "Branch protection rules", "Wiki"], "answer": 1}, {"prompt": "In a postmortem, \"the agent deleted the data\" points to which root cause?", "options": ["The model", "A missing guardrail (permissions, approval, backups) in the system", "Bad luck"], "answer": 1}]
---
# Destructive Actions & Guardrails

Real incidents involving coding agents tend to look alike: a cleanup command that deleted too much, a migration run against the wrong database, a force-push that rewrote shared history, a "fix" that dropped a table.

### Classify actions by reversibility

| Reversible (low risk) | Hard to reverse (high risk) |
|-----------------------|----------------------------|
| Editing files in git | `rm -rf`, `git clean -fdx`, `git reset --hard` on uncommitted work |
| Running tests locally | Database migrations or deletes on shared/prod data |
| Creating a branch | Force-pushing, deleting branches or tags |
| Opening a draft PR | Deploying, sending emails/messages, publishing packages |

### Guardrails

- Require approval for anything in the right-hand column, and **deny** the worst commands outright.
- **Hooks** can block patterns deterministically (e.g. refuse any command containing `--force` or `DROP TABLE`).
- Keep **backups** and point-in-time recovery for data, and branch protection on `main`.
- When an agent proposes something destructive, ask **why**. Often there's a safer alternative (`git stash` instead of `git reset --hard`, a migration on a copy first).

Remember: *you* approved it. "The agent did it" is never the root cause in a postmortem. The missing guardrail is.
