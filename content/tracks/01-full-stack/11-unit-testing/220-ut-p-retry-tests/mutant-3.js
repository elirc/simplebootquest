// mutant: throws the first error instead of the last
async function retry(fn, retries) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError ??= err;
    }
  }
  throw lastError;
}
