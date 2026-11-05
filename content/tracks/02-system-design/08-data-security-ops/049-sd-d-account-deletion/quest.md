---
slug: "sd-d-account-deletion"
title: "Design Doc: Account Deletion Across Systems"
type: "design"
xp: 40
rubric: ["Includes confirmation and a grace or undo period", "Covers every listed system with an explicit action", "Distinguishes deletion from anonymisation, and explains retained data (invoices)", "Uses a reliable, retried background job (or saga) with tracking per system", "Handles content shared with other users", "Revokes sessions immediately", "Keeps a minimal audit record that the deletion happened"]
minWords: 150
---
# Design Doc: Account Deletion Across Systems

Your SaaS needs a **"Delete my account"** button that really works. User data lives in: Postgres (users, todos, comments, audit log), S3 (avatars, attachments), Redis (sessions, cache), Algolia (search index), the email provider (contact lists), Stripe (customer and invoices), and application logs (30-day retention, emails in some lines).

Design the deletion flow.

### What to include
1. **User flow**: confirmation, grace period, and what the user sees.
2. **Data map**: what happens in each system (delete, anonymise, or retain, and why).
3. **Orchestration**: how deletion runs reliably across systems.
4. **Edge cases**: shared data (comments on others' posts, team workspaces), and legal holds.
5. **Verification and audit.**
