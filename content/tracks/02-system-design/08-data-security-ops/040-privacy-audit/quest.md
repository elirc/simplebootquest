---
slug: "sd-privacy-audit"
title: "Privacy, PII & Audit Logs"
type: "quiz"
xp: 15
resources: [{"title": "ICO: Guide to the UK GDPR", "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"}]
questions: [{"prompt": "What does data minimisation mean?", "options": ["Compressing data", "Only collecting and keeping personal data you actually need", "Using smaller columns"], "answer": 1}, {"prompt": "Deleting a user under GDPR erasure means removing their data from…", "options": ["The users table only", "Every place it lives: DB, search, caches, analytics, file storage (and eventually backups)", "Nowhere: you can keep it"], "answer": 1}, {"prompt": "Which event most needs an audit log entry?", "options": ["A user viewing the homepage", "An admin changing another user's role", "A CSS file request"], "answer": 1}, {"prompt": "Why make the audit log append-only?", "options": ["Performance", "So entries cannot be quietly altered or deleted to hide actions", "It is required by Postgres"], "answer": 1}, {"prompt": "Is an IP address considered personal data under GDPR?", "options": ["Never", "Generally yes", "Only for admins"], "answer": 1}]
---
# Privacy, PII & Audit Logs

**PII** (personally identifiable information) includes names, emails, addresses, IPs and photos. Laws like the **GDPR** (EU) and **CCPA** (California) give users rights over it.

### Design implications

- **Data minimisation**: don't collect what you don't need. Data you never stored can't leak.
- **Right to access / export**: you need to find all of a user's data. A clear data model helps.
- **Right to erasure**: deleting a user must remove or anonymise their data everywhere: the database, search indexes, caches, analytics, object storage, and (eventually) backups.
- **Retention policies**: delete logs and inactive data after a set period.
- **Encryption** in transit (TLS) and at rest. Consider field-level encryption for very sensitive data.

### Audit logs

For sensitive actions (role changes, data exports, admin access to user accounts, billing changes), record **who did what, to what, when, and from where**, in an append-only table:

```
audit_log(id, actor_id, action, target_type, target_id, metadata, ip, created_at)
```

Audit logs answer "who changed this?" during incidents and compliance reviews. Make them hard to tamper with (no UPDATE or DELETE permissions for the app role).
