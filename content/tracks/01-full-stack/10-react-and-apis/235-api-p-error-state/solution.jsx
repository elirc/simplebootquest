function describeError(error) {
  const s = error?.status;
  if (s === 0) return { title: 'You are offline', canRetry: true };
  if (s === 401) return { title: 'Please log in again', canRetry: false };
  if (s === 403) return { title: 'You do not have access to this', canRetry: false };
  if (s === 404) return { title: 'We could not find that', canRetry: false };
  if (s === 429) return { title: 'Too many requests, slow down a little', canRetry: true };
  if (typeof s === 'number' && s >= 500) return { title: 'Our server had a problem', canRetry: true };
  return { title: 'Something went wrong', canRetry: true };
}

function ErrorState({ error, onRetry }) {
  const { title, canRetry } = describeError(error);
  return (
    <div role="alert">
      <h2>{title}</h2>
      {error?.status === 401 ? <a href="/login">Log in</a> : canRetry && <button onClick={onRetry}>Try again</button>}
    </div>
  );
}
