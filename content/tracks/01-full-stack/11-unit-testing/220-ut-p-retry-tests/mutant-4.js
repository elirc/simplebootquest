// mutant: keeps going after success
async function retry(fn, retries) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      lastError = await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}
