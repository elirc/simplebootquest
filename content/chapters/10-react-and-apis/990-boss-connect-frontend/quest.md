---
slug: react-api-boss-frontend
title: "Project: Your App's Frontend"
type: project
xp: 150
boss: true
requirements:
  - "A Vite + React + TypeScript frontend for your capstone API, in the same repo (e.g. `apps/web` and `apps/api`)"
  - "A typed API client module — components never call `fetch` directly"
  - "React Router with at least: list page, detail page, create/edit form, login, register and a 404 page"
  - "Protected routes that redirect to /login when signed out, and an auth context exposing the current user"
  - "Every data screen handles loading, error (with retry), empty and success states"
  - "Forms show server-side validation errors next to the right fields"
  - "At least one optimistic update (e.g. toggling a favourite or completing a task)"
  - "List filters and pagination stored in the URL search params"
  - "Vite dev proxy for /api so cookies just work in development"
---
# Project: Your App's Frontend

Connect a real UI to the API you built in Chapters 7 and 8.

## Suggested structure

```
apps/web/src/
├── api/              # client.ts (fetch wrapper) + one file per resource
├── auth/             # AuthContext, ProtectedRoute
├── components/       # shared UI: Button, Spinner, ErrorBox, Pagination
├── pages/            # one component per route
└── main.tsx
```

## Cookies + fetch

Same-origin requests (thanks to the Vite proxy) send cookies automatically. If you ever call a different origin, you'll need `credentials: 'include'` on the client, and CORS with `credentials: true` plus an explicit origin on the server.

## Consider TanStack Query

Once your manual version works, try replacing it with [TanStack Query](https://tanstack.com/query):

```tsx
const { data, isPending, error, refetch } = useQuery({ queryKey: ['recipes', page], queryFn: () => api.recipes.list({ page }) });
const mutation = useMutation({ mutationFn: api.recipes.create, onSuccess: () => queryClient.invalidateQueries({ queryKey: ['recipes'] }) });
```

Notice how much code disappears, and that you now understand what it's doing for you.

Submit your repository URL when you're done.
