function describeError(error) {
  const status = error?.status;
  if (status === 401) return { title: 'Session expired', message: 'Please log in again.', retryable: false };
  if (status === 403) return { title: 'Access denied', message: "You don't have permission to view this.", retryable: false };
  if (status === 404) return { title: 'Not found', message: 'This item may have been deleted.', retryable: false };
  if (status === 0 || status >= 500) return { title: 'Something went wrong', message: 'Please try again in a moment.', retryable: true };
  return { title: 'Unexpected error', message: error?.message || 'Unknown error', retryable: true };
}

function ErrorPanel({ error, onRetry, onLogin }) {
  const { title, message, retryable } = describeError(error);
  return (
    <div role="alert" className="error-panel">
      <h2>{title}</h2>
      <p>{message}</p>
      {retryable && <button onClick={onRetry}>Try again</button>}
      {error?.status === 401 && <button onClick={onLogin}>Log in</button>}
    </div>
  );
}
