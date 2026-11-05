---
slug: "sd-q-encryption"
title: "Encryption: In Transit, at Rest, and Beyond"
type: "quiz"
xp: 15
questions: [{"prompt": "Disk encryption at rest protects against…", "options": ["A SQL injection attack", "Someone obtaining the physical disks or raw backups", "A malicious admin with database credentials"], "answer": 1}, {"prompt": "You store users' GitHub tokens to call GitHub on their behalf. How should they be stored?", "options": ["Hashed with bcrypt", "Encrypted with a KMS-managed key (you need the original value back)", "In plain text"], "answer": 1}, {"prompt": "What does the HSTS header do?", "options": ["Compresses responses", "Tells browsers to always use HTTPS for the site", "Sets cookies"], "answer": 1}, {"prompt": "What is envelope encryption?", "options": ["Encrypting emails", "Data is encrypted with a data key, and that key is encrypted with a master key held in a KMS", "Double hashing"], "answer": 1}, {"prompt": "Should the connection from your API to Postgres use TLS?", "options": ["No, it is internal", "Yes (e.g. sslmode=require), especially across networks you do not fully control"], "answer": 1}]
---
# Encryption: In Transit, at Rest, and Beyond

- **In transit**: TLS (HTTPS) everywhere: browser to CDN, CDN to API, and API to database (`sslmode=require`). Add the HSTS header so browsers never downgrade to HTTP.
- **At rest**: managed databases and object storage encrypt disks by default. That protects you against stolen disks and backups, **not** against someone with database access.
- **Application-level (field) encryption**: encrypt especially sensitive fields (national ids, API tokens of third-party integrations) before storing them, using keys from a **KMS** (AWS KMS, GCP KMS, Vault). Database access alone then doesn't reveal them.
- **Hashing is not encryption**: passwords are **hashed** with bcrypt or argon2 (one-way). Third-party tokens that you need to use later must be **encrypted** (two-way).
- **Key management** is the hard part: rotate keys, never hardcode them, and use **envelope encryption** (a data key encrypts the data, and the KMS master key encrypts the data key).
