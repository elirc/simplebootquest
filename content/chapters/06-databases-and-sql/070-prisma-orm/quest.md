---
slug: sql-prisma-orm
title: Prisma ORM
type: quiz
xp: 20
questions:
  - prompt: "In Prisma, where do you define your tables and relations?"
    options: ["In SQL files you write by hand", "In `schema.prisma` models", "In a JSON config"]
    answer: 1
  - prompt: "What does `npx prisma migrate dev --name add_tags` do?"
    options: ["Deletes the database", "Generates a SQL migration from your schema changes and applies it", "Only formats the schema file"]
    answer: 1
  - prompt: "Which Prisma call returns one todo by its primary key, or null?"
    options: ["prisma.todo.findMany({ id })", "prisma.todo.findUnique({ where: { id } })", "prisma.todo.get(id)"]
    answer: 1
  - prompt: "You list posts and, for each one, query its author separately. What's this problem called?"
    options: ["The N+1 query problem", "A deadlock", "SQL injection"]
    answer: 0
    explanation: "Use `include: { author: true }` so Prisma fetches the relation in one go."
  - prompt: "Should migration files be committed to git?"
    options: ["No, they're generated", "Yes — they're the history of your schema and are applied in production with `prisma migrate deploy`"]
    answer: 1
resources: [{"title": "Prisma docs: CRUD", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/crud"}, {"title": "Prisma docs: Relation queries", "url": "https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries"}]
---
# Prisma ORM

Writing raw SQL for every query gets repetitive, and the results aren't typed. An **ORM** (Object-Relational Mapper) lets you describe your schema once and query it with typed JavaScript.

### 1. Describe your models

```prisma
// prisma/schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  todos     Todo[]
  createdAt DateTime @default(now())
}

model Todo {
  id       Int     @id @default(autoincrement())
  title    String
  done     Boolean @default(false)
  author   User    @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId Int

  @@index([authorId])
}
```

### 2. Create a migration

```bash
npx prisma migrate dev --name init
```

Prisma compares your schema to the database, writes a SQL migration file in `prisma/migrations/`, and applies it. **Commit migrations.** Production runs `prisma migrate deploy` to apply them.

### 3. Query with full type safety

```ts
const todos = await prisma.todo.findMany({
  where: { authorId: user.id, done: false },
  orderBy: { createdAt: 'desc' },
  take: 20,
  skip: 20 * (page - 1),
  include: { author: { select: { name: true } } },
});

const todo = await prisma.todo.create({ data: { title, authorId: user.id } });
await prisma.todo.update({ where: { id }, data: { done: true } });
await prisma.todo.delete({ where: { id } });
```

Look familiar? The `where` / `orderBy` / `take` options are the same ones you built in the Chapter 3 boss.

### Avoid N+1 queries

```ts
// 🐢 1 query for posts + N queries for authors
for (const post of posts) post.author = await prisma.user.findUnique(...);
// 🚀 one round trip
await prisma.post.findMany({ include: { author: true } });
```
