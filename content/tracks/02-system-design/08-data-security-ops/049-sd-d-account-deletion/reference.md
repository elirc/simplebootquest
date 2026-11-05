# Account deletion

## User flow
- Settings → "Delete account". Re-enter the password (or re-authenticate), and see what will be deleted, plus a note that invoices are retained for legal reasons.
- The account is **deactivated immediately**: all sessions are revoked (Redis keys deleted) and logins are blocked. Then a **14-day grace period** starts, during which an email link can cancel the deletion.
- After 14 days, the deletion job runs and a confirmation email is sent (the last email we send).

## Data map
| System | Action | Why |
|--------|--------|-----|
| Postgres `users` | Delete | Personal data |
| `todos`, attachments metadata | Delete (cascade) | Owned by the user |
| `comments` on other users' items | Anonymise: author → "Deleted user", body kept | Others' threads stay readable. A user setting lets them delete the bodies too |
| `audit_log` | Replace the user id with a random tombstone id, and drop the IP and email | Security records stay without personal data |
| S3 avatars and attachments | Delete the objects under `users/{id}/` | Personal content |
| Redis | Delete the sessions and cache keys for the user | Immediate logout, no stale data |
| Algolia | Delete the records by user id | The search index is a copy |
| Email provider | Delete the contact via its API | Third-party copy |
| Stripe | Keep the invoices, and delete the payment methods and the customer's personal fields where possible | Tax law requires keeping invoices |
| Logs | Not rewritten. They expire within 30 days. Emails will no longer be logged (fix the logger) | Documented in the privacy policy |
| Backups | Expire within 30 days. A restore runs the pending-deletions replay | Documented |

## Orchestration
- `deletion_requests` table: `user_id`, `requested_at`, `execute_after`, `status`, and a per-system status JSON.
- A scheduled job picks due requests and runs **one step per system**, each idempotent ("delete if exists") and retried with backoff. Progress is recorded per step, so a crash resumes where it stopped.
- If a step fails 10 times → alert, and the request is flagged for manual handling. It isn't silently skipped.

## Edge cases
- **Team workspaces**: if the user is the only owner, ownership must be transferred before deletion (the UI blocks it).
- **Legal hold**: the request is paused if the account is under investigation or has an open dispute.
- **Re-signup** with the same email creates a brand-new account. There's no resurrection.

## Verification & audit
- After completion, a verification step queries each system for the user id and expects nothing back.
- We keep a minimal record (`tombstone_id`, completion timestamp, systems processed), with no personal data, to prove the deletion happened.
