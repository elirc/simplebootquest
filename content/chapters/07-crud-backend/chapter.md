---
title: CRUD Backend
description: Services, pagination, filtering and HTTP handlers — wire Create/Read/Update/Delete endpoints to a real database.
---
This is where it all comes together. A professional backend is organised in **layers**: routes parse HTTP, services enforce business rules, and repositories talk to the database. Each layer is simple on its own, and each one can be tested on its own.

```
HTTP request → route/handler → service → repository (Prisma) → PostgreSQL
```
