---
slug: sql-relational-modeling
title: Thinking in Tables
type: quiz
xp: 15
questions:
  - prompt: "A blog has users and posts. Each post has exactly one author. Where does the relationship live?"
    options: ["A `post_ids` array column on users", "An `author_id` foreign key column on posts", "A separate database"]
    answer: 1
    explanation: "One-to-many relationships put the foreign key on the 'many' side."
  - prompt: "Posts can have many tags and tags can be on many posts. How do you model this?"
    options: ["A comma-separated `tags` text column", "A join table `post_tags (post_id, tag_id)`", "A `post_id` column on tags"]
    answer: 1
  - prompt: "What does a PRIMARY KEY guarantee?"
    options: ["The column is indexed for full-text search", "Each row has a unique, non-null identifier", "The value never changes"]
    answer: 1
  - prompt: "What does a FOREIGN KEY constraint prevent?"
    options: ["Duplicate rows", "Rows that point at records which don't exist", "Slow queries"]
    answer: 1
  - prompt: "Why store a user's email only in the `users` table instead of copying it onto every post?"
    options: ["SQL can't store emails twice", "To avoid inconsistent data when it changes (normalisation)", "To make the posts table bigger"]
    answer: 1
  - prompt: "Which column is the best candidate for an index?"
    options: ["A column you frequently filter or join on, like `posts.author_id`", "Every column", "A column you never query"]
    answer: 0
---
# Thinking in Tables

A **relational database** stores data in tables (rows and columns) and connects tables through **keys**.

```
users                       posts
┌────┬───────┐              ┌────┬───────────┬───────────┐
│ id │ name  │              │ id │ title     │ author_id │
├────┼───────┤              ├────┼───────────┼───────────┤
│ 1  │ Ada   │ ◄────────────│ 10 │ Hello SQL │ 1         │
│ 2  │ Grace │ ◄──┐         │ 11 │ Joins!    │ 1         │
└────┴───────┘    └─────────│ 12 │ Indexes   │ 2         │
                            └────┴───────────┴───────────┘
```

- **Primary key** (`id`): uniquely identifies a row.
- **Foreign key** (`author_id`): points at a primary key in another table.

### Relationship types

| Type | Example | How |
|------|---------|-----|
| One-to-many | user → posts | FK on the "many" side (`posts.author_id`) |
| Many-to-many | posts ↔ tags | A join table: `post_tags(post_id, tag_id)` |
| One-to-one | user → profile | FK with a `UNIQUE` constraint |

### Normalisation

Store each fact **once**. If a user's email lived on every post, changing it would mean updating hundreds of rows, and missing one leaves your data inconsistent. Store it once and join when you need it.

### Constraints are your friends

`NOT NULL`, `UNIQUE`, `FOREIGN KEY` and `CHECK` let the **database** enforce rules. Your application code has bugs. The database is the last line of defence.
