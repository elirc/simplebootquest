// mutant: one retry too many
async function retry(fn, retries) {
  let lastError;
  for (let attempt = 0; attempt <= retries + 1; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}
