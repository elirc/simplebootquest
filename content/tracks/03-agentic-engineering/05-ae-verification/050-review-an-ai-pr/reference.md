# Review: PATCH /api/todos/:id

## Blocking
1. **No ownership check (broken access control).** `update({ where: { id } })` lets any logged-in user rename *anyone's* todo by guessing ids. Scope the update to the owner, e.g. `updateMany({ where: { id, ownerId: req.userId } })` and return 404 when `count === 0` (don't reveal that it exists).
2. **Mass assignment.** `data: { ...body }` writes whatever the client sends. A request with `{ "ownerId": 7 }` moves the todo to another user, and any other column is writable too. Only pass the validated `title`.
3. **No input validation.** `z` is imported but never used; the `as` cast is a lie to the compiler, not a check. Empty, non-string or 10 MB titles are accepted, and `Number('abc')` gives `NaN` for the id. Validate both the body and the id.
4. **Secrets in logs.** `console.log(req.body, req.headers)` writes cookies (session tokens) and user content to logs. Remove it. If logging is needed, use the structured logger with the request id only.
5. **Tests were weakened.** The existing `rejects empty titles` test was **skipped** (it presumably failed, which is the validation bug above), and the new test asserts `toBeDefined()`, which passes even for an error response. "All tests pass" is therefore not meaningful.

## Should fix
- Add tests: owner can rename (200, title changed in the DB); non-owner gets 404; empty title gets 400; unknown fields are ignored; invalid id gets 400.
- Return the todo through the same serializer as `GET` for a consistent shape.

## Nits
- `lodash` is imported but unused. Remove it, and don't add a dependency for this.

## Verdict
**Request changes.** Two security vulnerabilities (access control, mass assignment) plus disabled tests. The PR description's claims ("validated input", "all tests pass") are inaccurate, so please verify claims against the code and test output before opening PRs.

## Suggested implementation
```ts
const TodoTitle = z.object({ title: z.string().trim().min(1).max(200) });

router.patch('/todos/:id', requireAuth, async (req, res) => {
  const id = parseId(req.params.id); // throws HttpError(400) if invalid
  const { title } = parse(TodoTitle, req.body);
  const result = await prisma.todo.updateMany({ where: { id, ownerId: req.userId! }, data: { title } });
  if (result.count === 0) throw notFound('Todo');
  res.json(toTodoDto(await prisma.todo.findUniqueOrThrow({ where: { id } })));
});
```
