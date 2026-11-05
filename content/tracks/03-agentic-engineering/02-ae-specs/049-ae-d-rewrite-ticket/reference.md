# TODO-231 rewritten

## Goal
Users with more than ~50 todos struggle to find what matters. Let them narrow the list (filter) and reorder it (sort), and make the list load quickly even for heavy users.

## Tasks
This should be **three** tickets:
1. **TODO-231a: Filter by status and tag** (UI + API).
2. **TODO-231b: Sort by due date, created date or title** (UI + API).
3. **TODO-231c: Investigate and fix list slowness** (measure first).

## Acceptance criteria
**231a: Filters**
- Filter buttons: All / Active / Done, plus a tag dropdown built from the user's existing tags.
- The filters are reflected in the URL (`?status=active&tag=work`), so a reload keeps them.
- `GET /api/todos?status=active&tag=work` returns only the matching todos **of the current user**. An unknown tag returns an empty list, not an error.
- An empty state shows "No todos match these filters" with a "Clear filters" button.
- Tests: the API filters (status, tag, combined, other users' todos never returned), and a component test for the URL sync.

**231b: Sorting**
- A sort dropdown: Due date (soonest first, with no-due-date last), Newest, Title A–Z.
- An allow-listed `sort` param on the API (unknown values → 400).
- A stable tie-breaker on `id`.

**231c: Performance**
- Measure first: p95 of `GET /api/todos` for the 10 heaviest users in production logs, and the time to interactive on the list page.
- Target: API p95 < 200 ms and the list rendered in < 1 s for a user with 2,000 todos.
- Likely fixes to evaluate: an index on `(user_id, created_at)`, pagination (50 per page with "load more"), and not fetching comment bodies in the list query.

## Constraints & non-goals
- Use the existing `FilterBar` and `Select` components, and add no new UI library.
- No new dependencies on the API. Use the existing Zod query validation pattern.
- Non-goals: drag-and-drop ordering, saved filter presets, and full-text search (separate tickets).

## Assumptions / questions
- Assumption: "sometimes slow" means heavy users. Question: do we have specific reports, with times or users?
- Question: should the filter and sort choices be remembered per user across devices, or just in the URL?
- Question: is sorting by priority wanted (we don't have a priority field yet)?
