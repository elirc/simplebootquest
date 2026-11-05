---
slug: "crud-q-api-evolution"
title: "Quiz: Evolving an API Without Breaking Clients"
type: "quiz"
xp: 15
questions: [{"prompt": "You want to rename `name` to `fullName` in a response. What is the safest approach?", "options": ["Rename it in one release", "Return both fields, migrate clients to fullName, then remove name later", "Return only fullName on Mondays"], "answer": 1}, {"prompt": "Which change is safe for existing clients?", "options": ["Removing a field nobody \"should\" use", "Adding a new optional field to a response", "Changing id from number to string"], "answer": 1}, {"prompt": "You add a NOT NULL column to a busy table. What is the safe migration order?", "options": ["Add it as NOT NULL with no default immediately", "Add it as nullable (or with a default), backfill, deploy code that writes it, then add the NOT NULL constraint", "Drop and recreate the table"], "answer": 1}, {"prompt": "Why might adding a new enum value (status: \"archived\") break clients?", "options": ["It cannot break anything", "Clients with an exhaustive switch or strict validation may crash on a value they do not recognise"], "answer": 1}, {"prompt": "What is the purpose of a Sunset header?", "options": ["It sets a cookie expiry", "It tells clients when a deprecated endpoint will stop working", "It disables caching"], "answer": 1}]
---
# Quiz: Evolving an API Without Breaking Clients

Once clients exist, every change is either **additive** (safe) or **breaking**:

| Safe ✅ | Breaking ❌ |
|---------|-------------|
| Adding a new optional field to a response | Removing or renaming a field |
| Adding a new endpoint | Changing a field's type (`id: 5` → `id: "5"`) |
| Adding an optional request parameter | Making an optional parameter required |
| Adding a new enum value (*if* clients handle unknown values) | Changing what a status code means |

To change something incompatible: add the new field alongside the old one, migrate clients, mark the old one **deprecated** (with a `Deprecation` or `Sunset` header), and remove it only once nothing uses it. This is the **expand → migrate → contract** pattern, and it applies to database migrations too.
