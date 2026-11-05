---
slug: "sd-multi-tenant-saas"
title: "Design Doc: Turning Your App into a Team SaaS"
type: "design"
xp: 40
hints: ["Assume someone will forget a tenant filter one day. What still protects you?"]
rubric: ["Chooses a tenancy model and justifies it against the alternatives", "Defines tables for organisations, memberships (with roles) and invitations", "Plans the migration of existing personal accounts (e.g. a personal org per user)", "Enforces tenant scoping in at least two layers (repository + RLS or tests)", "Specifies permissions per role", "Includes an audit log design and a path to data residency"]
minWords: 200
---
# Design Doc: Turning Your App into a Team SaaS

Your capstone is moving from "personal accounts" to **teams**: companies sign up as an organisation, invite members with roles (owner, admin, member, viewer), and all records belong to the organisation. Some enterprise prospects ask for EU data residency and audit logs.

Write the design:

- The tenancy model you choose, and why.
- Schema changes (organisations, memberships, invites) and how existing personal accounts migrate.
- How every query is guaranteed to be tenant-scoped (defence in depth).
- Roles and permissions.
- Audit logging for sensitive actions.
- How you'd support an EU-only enterprise customer later.
