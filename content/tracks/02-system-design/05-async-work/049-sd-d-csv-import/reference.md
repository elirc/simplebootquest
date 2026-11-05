# Contact import

## Upload
- The client asks `POST /imports` for a **pre-signed upload URL** (max 50 MB, `text/csv`), then uploads straight to object storage. The API never holds the file in memory.
- After the upload, the client calls `POST /imports/:id/start`. The API creates an `imports` row (`status = queued`, user, tenant, storage key) and **enqueues a job in the same transaction**.

## Processing
- A worker **streams** the object from storage through a streaming CSV parser, so memory stays flat whatever the file size.
- It validates each row (email format, required fields, max lengths) and **normalises** it (trim, lowercase emails).
- Valid rows are buffered and written in batches of 1,000 with `INSERT ... ON CONFLICT (tenant_id, email) DO UPDATE` (an upsert), so re-importing the same file updates rather than duplicates.
- After each batch, the worker updates `imports.processed_rows` and stores a **checkpoint** (the byte offset or row number).
- Imports run with a concurrency of 1 per tenant, so one big customer can't starve others.

## Failures & idempotency
- If the worker dies, the job is retried and **resumes from the last checkpoint**. Because writes are upserts keyed on `(tenant_id, email)`, reprocessing a partly done batch is harmless.
- After 5 failed attempts the import becomes `failed`, with the error message, and the job goes to the dead-letter queue with an alert.

## User feedback
- The import page polls `GET /imports/:id` (or listens on SSE) for `status`, `processed_rows`, `total_rows` (estimated from the file size, then exact) and `error_count`.
- Invalid rows are collected (row number, column, message) into an **error CSV** in storage, with a download link when the import finishes.
- A completion email or notification is sent: "Imported 498,213 contacts, 1,787 rows had errors (download)."

## Limits
- 50 MB / 500k rows per file, one running import per tenant, and 10 imports per day per tenant.
- Formula-injection-safe exports of the error file (prefix `=`, `+`, `-` and `@` with `'`).
- Files are deleted from storage after 7 days.
