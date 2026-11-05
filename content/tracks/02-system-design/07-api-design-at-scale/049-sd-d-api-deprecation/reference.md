# Retiring /v1

## Who uses v1
- Query the access logs (we already log `api_key_id` and the path) for v1 calls over the last 30 days, grouped by key, endpoint and volume.
- Join with accounts to get owners' emails, plan tier and account manager.
- Result (example): 400 keys. 12 keys make 80% of v1 calls, and 250 keys made fewer than 10 calls (probably abandoned scripts).

## Timeline & communication
- **T+0**: announce deprecation on the changelog and the status page, and email every owner of an active v1 key, with the **sunset date at T+6 months**.
- Publish a **migration guide**: the field mapping (`name` → `title`, `completed: true` → `status: "done"`, the new `dueAt`), code samples, and the differences in errors and pagination.
- Account managers contact the 12 heavy users personally and offer help.
- Reminder emails at T+3 months, T+5 months and 2 weeks before, sent only to keys still calling v1.

## API signals
- Every v1 response includes `Deprecation: true`, `Sunset: <date>` and `Link: <https://docs.example.com/migrate-v2>; rel="deprecation"`.
- The developer dashboard shows a banner on keys that still call v1, with their call counts.

## Enforcement
- T+1 month: **new** API keys can't call v1.
- T+4 months: scheduled **brownouts** (v1 returns `410 Gone` with a migration link for 10 minutes, then an hour, announced in advance). This surfaces forgotten integrations while there's still time.
- T+6 months: v1 returns `410 Gone` permanently, with a JSON body pointing to the guide.
- The v1 code is removed one month later, after traffic has stayed at zero.

## Exceptions & rollback
- Big customers can request a time-limited extension (max 3 months) tied to a specific key, approved by the API owner.
- The shutdown is a feature flag, not a code deletion, so if something critical breaks we can re-enable v1 within minutes during the first month.
- Success is measured by v1 traffic per week, with a target of < 1% before the brownouts start.
