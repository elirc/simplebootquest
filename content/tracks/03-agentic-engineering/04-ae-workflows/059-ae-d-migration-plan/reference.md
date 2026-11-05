# useFetch → TanStack Query migration

## Pilot
- Pick 4 components with different shapes: a simple GET list (`TodoList`), a detail page with a route param (`TodoDetail`), a dependent query (`ProjectMembers`, which needs the project first), and one with a mutation that refetches (`TodoForm`).
- Migrate them **together with the agent**, step by step, and review each line. This is where we discover the edge cases.

## Recipe
- `useFetch(url)` → `useQuery({ queryKey: [...], queryFn: () => api.get(url) })`.
- Query key convention: `[resource, params]`, e.g. `['todos', { projectId, status }]`. It's documented in `docs/query-keys.md`.
- `loading`/`error`/`data` → `isPending`/`error`/`data`. Keep the existing `<Spinner>` and `<ErrorState>`.
- Mutations: `useMutation` + `invalidateQueries({ queryKey: ['todos'] })` in `onSuccess`, replacing the manual `refetch()` calls.
- Dependent queries use `enabled: !!projectId`.
- Edge cases from the pilot: components that poll (→ `refetchInterval`), and ones that set local state from the fetched data (→ derive it instead, or `useEffect` only for form initialisation).

## Tooling
- A small **codemod** (ts-morph) handles the mechanical part: imports and `useFetch(url)` calls with a literal URL. The agent writes the codemod, I review it, and we run it on one directory first.
- The **agent** handles the rest (dynamic URLs, mutations, polling) using the recipe, with the recipe and query-key doc in context.
- **By hand**: the 5 most business-critical screens (checkout, billing), reviewed in pairs.

## Batches & verification
- Batches of ~15 components per directory, each on the branch with a commit per batch.
- Each batch: `tsc`, lint, the unit tests, and the Playwright smoke suite for the affected routes.
- **Untested components**: before migrating, the agent writes a minimal Testing Library test of the current behaviour (renders data, shows an error), which I review. Then migrate. That adds a safety net *and* coverage.

## Risks
- Behaviour changes from caching (stale data shown instantly, refetch on window focus). Set the defaults deliberately (`staleTime: 30s`) and communicate them to QA.
- Pagination components: migrate them last, using `placeholderData: keepPreviousData`.

## Done & rollback
- Done: `grep -r "useFetch" src` returns only the hook's own file, which is then deleted. All checks are green, and there's been a week in production without new errors in Sentry.
- Rollback: each batch is its own revertible commit or PR. The old hook stays until the end, so a batch can be reverted independently.
