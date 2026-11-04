function ErrorBanner({ message, onRetry }) {
  return (
    <div className="error" role="alert">
      <p>{message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

function TodoScreen({ state, onRetry, onAdd }) {
  const data = state.status === 'success' ? state.data : state.previous;

  if (data === undefined) {
    if (state.status === 'error') return <ErrorBanner message={state.error} onRetry={onRetry} />;
    return (
      <p className="loading" aria-busy="true">
        Loading…
      </p>
    );
  }

  const content =
    data.length === 0 ? (
      <div className="empty">
        <p>No todos yet</p>
        <button onClick={onAdd}>Add your first todo</button>
      </div>
    ) : (
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );

  if (state.status === 'error') {
    return (
      <>
        <ErrorBanner message={state.error} onRetry={onRetry} />
        {content}
      </>
    );
  }
  return content;
}
