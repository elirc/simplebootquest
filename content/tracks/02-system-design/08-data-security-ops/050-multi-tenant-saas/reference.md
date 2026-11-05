# Teams & multi-tenancy design

## Tenancy model
**Shared tables with `org_id`**: it fits our scale (hundreds of orgs, a small team) and keeps one migration path and one deploy. We rejected schema-per-tenant (migrations multiply, more connections) and database-per-tenant (cost and operational burden) for now, but keep the option open for large enterprise customers.

## Schema
- `organizations(id, name, slug UNIQUE, region DEFAULT 'us', created_at)`
- `memberships(org_id, user_id, role ENUM(owner, admin, member, viewer), PRIMARY KEY (org_id, user_id))`
- `invitations(id, org_id, email, role, token_hash, expires_at, accepted_at)`
- Every tenant-owned table gets `org_id NOT NULL REFERENCES organizations`, composite indexes beginning with `org_id`, and unique keys like `(org_id, slug)`.

## Migrating existing users
Each existing user gets a "Personal" organisation where they're the owner. A backfill (expand → migrate → contract) sets `org_id` on their records, then the column is made `NOT NULL`. URLs move to `/o/:orgSlug/...`, with redirects from the old paths.

## Enforcing isolation
1. **Request context:** middleware resolves the org from the URL, loads the membership, and returns 404 if there isn't one.
2. **Repository layer:** every data-access function takes `ctx.orgId`. A lint rule forbids importing Prisma outside repositories.
3. **Postgres RLS:** policies `USING (org_id = current_setting('app.org_id')::uuid)` are set per transaction, so a missed filter returns zero rows instead of leaking.
4. **Tests:** for every resource, a test that member A of org 1 gets 404 on org 2's records.

## Roles & permissions
viewer: read. member: create and edit own records. admin: edit any record, invite members. owner: billing, delete the org, transfer ownership. Checked through a single `can(membership, action, resource)` function.

## Audit log
`audit_log(id, org_id, actor_id, action, target_type, target_id, metadata JSONB, ip, created_at)`, append-only (the app role has INSERT and SELECT only). Logged actions: invites, role changes, member removal, exports, billing changes, and org deletion. Org admins can view their log.

## Future: EU data residency
`organizations.region` routes an org to a separate EU deployment (app + database) via a global directory service that maps `org_slug → region`. Shared tables make the "dedicated EU stack" a copy of the same architecture, not a redesign.
