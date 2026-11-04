---
slug: "js-batch-processing"
title: "Processing in Batches"
type: "code"
language: "js"
xp: 20
hints: ["A `for` loop stepping by `size`, with `await` inside, keeps batches sequential.", "Processed so far is `Math.min(i + size, items.length)`."]
---
# Processing in Batches

Many APIs accept bulk requests ("send up to 100 emails per call"), and databases are faster with batch inserts. A batch processor splits work into chunks and processes the chunks **sequentially**, reporting progress as it goes:

```js
await processInBatches(users, 100, (batch) => api.bulkEmail(batch), (done, total) => setProgress(done / total));
```

## Your task

Implement `processInBatches(items, size, handler, onProgress = () => {})`:

- Splits `items` into chunks of `size`.
- Awaits `handler(batch, batchIndex)` for each chunk, **one at a time**.
- After each chunk, calls `onProgress(processedCount, items.length)`.
- Resolves to an array of the handler results, in order.
