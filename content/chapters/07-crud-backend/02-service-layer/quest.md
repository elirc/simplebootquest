---
slug: crud-service-layer
title: The Service Layer
type: code
language: ts
xp: 30
---
# The Service Layer

A service holds your **business rules** and depends on a repository *interface*, not on Prisma directly. That's **dependency injection**: the caller decides which repository to pass in.

```ts
interface NoteRepository {
  findById(id: number): Promise<Note | null>;
  ...
}

export function createNoteService(repo: NoteRepository) {
  return {
    async get(userId: number, id: number) {
      const note = await repo.findById(id);
      if (!note || note.ownerId !== userId) throw new NotFoundError('Note');
      return note;
    },
  };
}
```

In production you pass a Prisma-backed repository. In tests, a plain in-memory object. The service can't tell the difference.

## Your task

Implement `createNoteService(repo)`. The repository (already written for you in the tests) has async methods `findById`, `findByOwner(ownerId)`, `create(data)`, `update(id, data)`, `delete(id)` and `countByOwner(ownerId)`.

Define two error classes: `NotFoundError` (message `"Note not found"`) and `ValidationError` (with a `message`).

| Method | Rules |
|--------|-------|
| `list(userId)` | Returns that user's notes. |
| `get(userId, id)` | Throws `NotFoundError` if the note doesn't exist **or belongs to someone else**. |
| `create(userId, input)` | `input.title` is trimmed and required (otherwise `ValidationError('Title is required')`). `input.body` defaults to `""`. A user may have **at most 3 notes** (otherwise `ValidationError('Note limit reached')`). Calls `repo.create({ ownerId, title, body })`. |
| `update(userId, id, input)` | Same ownership check as `get`. Only `title` and `body` can change. If `title` is given it must be non-empty after trimming. |
| `remove(userId, id)` | Same ownership check, then deletes. |
