# Recipe Box: Requirements

## Overview
Recipe Box lets home cooks save their own recipes, organise them with tags, and share individual recipes with friends via a public link. The first version targets individual users; there are no teams or paid tiers.

## Functional requirements
- Sign up, log in and log out with email and password.
- Create, edit and delete recipes (title, ingredients, steps, tags, optional photo).
- List my recipes with search by title and filter by tag, paginated.
- Share a recipe via an unguessable public link; viewers don't need an account.
- Mark recipes as favourites.

## Non-functional requirements
- **Latency:** list and detail pages respond in < 200 ms at p95 (API), < 1 s first contentful paint on 4G.
- **Availability:** 99.5% monthly (≈ 3.6 h downtime). It's a hobby-scale product; we accept short maintenance windows.
- **Durability:** saved recipes must never be lost: daily backups with 7-day retention, point-in-time recovery if the host supports it.
- **Security:** passwords hashed with bcrypt, httpOnly cookies, users can only access their own private recipes.

## Scale estimates
- Year one: 20k registered users, 2k daily active.
- Each active user views ~30 pages/day → 60k reads/day ≈ **< 1 read/s average**, maybe 10/s at peak.
- 5% of DAU add a recipe daily → 100 writes/day.
- Recipe text ≈ 4 KB → 100 × 4 KB = 400 KB/day ≈ **150 MB/year** in Postgres. Trivial.
- Photos ≈ 300 KB after resizing → 30 MB/day ≈ **11 GB/year** in object storage, served via a CDN.

**Conclusion:** one small API instance plus a managed Postgres is plenty. The only component that needs special handling is photo storage.

## Out of scope
- Teams and shared cookbooks, comments, ratings.
- Mobile apps (the web app is responsive instead).
- Nutrition calculation.

## Open questions
- Should shared links expire, or be revocable only?
- Do we need to import recipes from other sites (scraping has legal and quality issues)?
- Is email verification required at launch?
