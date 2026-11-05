---
slug: "sd-d-csv-import"
title: "Design Doc: A Large CSV Import"
type: "design"
xp: 40
rubric: ["Uploads to object storage (e.g. a pre-signed URL) instead of through the API process", "Processes in a background job, streaming instead of loading the whole file into memory", "Splits work into chunks or batches with bulk inserts", "Makes processing resumable or idempotent after a crash", "Reports progress and per-row errors to the user", "Sets limits (file size, row count, concurrency per tenant)"]
minWords: 150
---
# Design Doc: A Large CSV Import

Customers want to **import up to 500,000 contacts** from a CSV file into your CRM-style app. Today the upload endpoint parses the file inside the request, which times out after 30 seconds and sometimes crashes the instance with out-of-memory errors.

Design an import feature that's reliable and gives users feedback.

### What to include
1. **Upload path**: how the file gets to storage.
2. **Processing**: jobs, chunking, streaming, and validation.
3. **Idempotency and failure**: what happens if a worker dies halfway.
4. **User feedback**: progress, errors per row, and a final report.
5. **Limits** and abuse protection.
