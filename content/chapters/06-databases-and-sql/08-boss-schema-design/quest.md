---
slug: sql-boss-schema-design
title: "Project: Design Your App's Database"
type: project
xp: 100
boss: true
requirements:
  - "Pick your capstone idea (task manager, recipe book, inventory tracker, reading log…) and write a one-paragraph description in your README"
  - "Draw an entity-relationship diagram (Mermaid in the README, or an image) with at least 3 models and at least one one-to-many relationship"
  - "PostgreSQL running locally via Docker Compose (`docker compose up -d`)"
  - "A `prisma/schema.prisma` with your models, sensible constraints (`@unique`, required fields, `onDelete` behaviour) and an index on each foreign key"
  - "At least one committed migration created with `prisma migrate dev`"
  - "A seed script (`prisma/seed.ts`) that creates realistic sample data, runnable with `npx prisma db seed`"
  - "A small script that runs 3 queries using `include`, `where` and `orderBy`, and prints the results"
---
# Project: Design Your App's Database

From here on, you're building **your own full-stack CRUD app**, and this chapter's project is its foundation. Spend real time on the design: schemas are much harder to change than code.

## Start Postgres with Docker

```yaml
# docker-compose.yml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
      POSTGRES_DB: app
    ports: ["5432:5432"]
    volumes: [pgdata:/var/lib/postgresql/data]
volumes:
  pgdata:
```

```bash
docker compose up -d
npm install -D prisma && npm install @prisma/client
npx prisma init   # creates prisma/schema.prisma and .env
```

Set `DATABASE_URL="postgresql://app:app@localhost:5432/app"` in `.env`, and add `.env` to `.gitignore`.

## Draw before you code

Mermaid diagrams render directly on GitHub:

````md
```mermaid
erDiagram
  USER ||--o{ RECIPE : writes
  RECIPE ||--o{ INGREDIENT : contains
  RECIPE }o--o{ TAG : "tagged with"
```
````

## Questions to ask yourself

- What happens to a user's records when the user is deleted? (`onDelete: Cascade`, or prevent the delete?)
- Which fields must be unique?
- Which queries will the main screen run? Do they need an index?
- Should anything be an `enum` instead of free text?

Submit your repository URL when you're done. The next chapter builds the API on top of this schema.
