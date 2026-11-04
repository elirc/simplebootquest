---
slug: react-api-data-fetching
title: Fetching Data in React
type: quiz
xp: 15
questions:
  - prompt: "Which hook do you use to start a fetch when a component mounts?"
    options: ["useState", "useEffect", "useMemo"]
    answer: 1
  - prompt: "The user types quickly in a search box and each keystroke fires a request. Responses arrive out of order. What's the fix?"
    options: ["Ignore it", "Ignore stale responses with an `ignore` flag or AbortController in the effect cleanup", "Use setTimeout"]
    answer: 1
  - prompt: "What should the UI show while a request is in flight?"
    options: ["Nothing", "A loading state", "The previous page's error"]
    answer: 1
  - prompt: "Why do libraries like TanStack Query exist?"
    options: ["To replace React", "They handle caching, deduplication, retries, refetching and stale data for you", "To write SQL in React"]
    answer: 1
  - prompt: "In dev, your frontend runs on :5173 and your API on :3001. What's the simplest way to avoid CORS issues?"
    options: ["Disable CORS in the browser", "Configure Vite's dev-server proxy so /api is forwarded to :3001", "Serve both from different domains"]
    answer: 1
---
# Fetching Data in React

The classic pattern:

```tsx
function TodoPage() {
  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    let ignore = false;                       // guards against race conditions
    fetch('/api/todos')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => { if (!ignore) setState({ status: 'success', data }); })
      .catch((error) => { if (!ignore) setState({ status: 'error', error }); });
    return () => { ignore = true; };          // cleanup runs on unmount / re-run
  }, []);

  if (state.status === 'loading') return <Spinner />;
  if (state.status === 'error') return <ErrorMessage error={state.error} />;
  return <TodoList todos={state.data} />;
}
```

**Model fetch state as a discriminated union** (`loading | success | error`) instead of three separate booleans. With `isLoading`, `isError` and `data` as independent flags, impossible combinations like "loading *and* error" become possible.

In production apps, use a library such as **TanStack Query**. It handles caching, background refetching, retries and deduplication, which are hard to get right by hand. It's still worth writing the manual version once so you know what the library does.

### Dev proxy

```ts
// vite.config.ts
server: { proxy: { '/api': 'http://localhost:3001' } }
```

The browser thinks everything comes from one origin, so there's no CORS setup in development.
