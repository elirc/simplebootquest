---
slug: "api-q-server-state"
title: "Quiz: Server State vs Client State"
type: "quiz"
xp: 15
resources: [{"title": "TanStack Query: Overview", "url": "https://tanstack.com/query/latest/docs/framework/react/overview"}]
questions: [{"prompt": "Which of these is server state?", "options": ["Whether a dropdown is open", "The list of todos fetched from /api/todos", "The text in a search box while typing"], "answer": 1}, {"prompt": "After creating a todo, the list does not show it. What is the usual TanStack Query fix?", "options": ["Reload the page", "Invalidate the [\"todos\"] query in onSuccess (or update the cache)", "Copy the list into useState"], "answer": 1}, {"prompt": "Why put list filters (?done=true&page=2) in the URL?", "options": ["It is required by React Router", "The view becomes shareable and bookmarkable, and survives refresh and the back button", "It is faster"], "answer": 1}, {"prompt": "Two components call useQuery with the same key at the same time. How many requests are made?", "options": ["Two", "One: requests are deduped by key", "Zero"], "answer": 1}, {"prompt": "What does \"stale\" mean in TanStack Query?", "options": ["The data is wrong", "The data may be out of date, so it will be refetched on the next trigger (mount, window focus, reconnect)", "The query failed"], "answer": 1}]
---
# Quiz: Server State vs Client State

**Client state** belongs to the browser: is the modal open, what's typed in the input, which tab is active. `useState` is perfect for it.

**Server state** is a *cached copy* of data that lives on the server. It can go stale, other users can change it, and it needs loading and error states, deduping, retries and invalidation after mutations. Libraries like **TanStack Query** or **SWR** handle all of that:

```js
const { data, isPending, error } = useQuery({ queryKey: ['todos', filter], queryFn: () => api.listTodos(filter) });
const mutation = useMutation({
  mutationFn: api.createTodo,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
});
```

Rules of thumb: don't copy server data into `useState` (it goes stale), put filter state in the **URL** so it's shareable, and invalidate by key prefix after writes.
