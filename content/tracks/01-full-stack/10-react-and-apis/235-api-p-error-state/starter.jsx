function describeError(error) {
  return { title: 'Something went wrong', canRetry: true };
}

function ErrorState({ error, onRetry }) {
  return <div>Error</div>;
}
