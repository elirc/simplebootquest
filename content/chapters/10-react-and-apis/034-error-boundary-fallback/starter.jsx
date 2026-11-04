function describeError(error) {
  return { title: 'Error', message: String(error), retryable: true };
}

function ErrorPanel({ error, onRetry, onLogin }) {
  return null;
}
