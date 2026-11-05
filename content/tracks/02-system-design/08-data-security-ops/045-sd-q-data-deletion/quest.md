---
slug: "sd-q-data-deletion"
title: "Deleting User Data for Real"
type: "quiz"
xp: 15
questions: [{"prompt": "A user asks to be deleted. You set users.deleted = true. Is that erasure?", "options": ["Yes", "No: the data still exists, and also in caches, indexes, files, logs and third-party systems"], "answer": 1}, {"prompt": "Invoices must be kept for 7 years by law. How do you honour a deletion request?", "options": ["Delete the invoices", "Keep the financial records but anonymise the personal fields where the law allows", "Ignore the request"], "answer": 1}, {"prompt": "Why run deletion as a background job?", "options": ["It is faster to write", "It must fan out to many systems with retries and an audit trail", "Users prefer waiting"], "answer": 1}, {"prompt": "What is the best way to reduce deletion work?", "options": ["Collect everything just in case", "Data minimisation: do not collect or log personal data you do not need", "Encrypt the logs"], "answer": 1}, {"prompt": "How are backups usually handled for erasure?", "options": ["Rewritten daily", "They expire on a documented schedule, and deletions are re-applied if a backup is restored", "They are exempt from everything"], "answer": 1}]
---
# Deleting User Data for Real

Privacy laws (GDPR, CCPA) give users the right to have their data **erased**. "Set `deleted = true`" isn't erasure. Data hides in many places:

- The primary database: the user row and everything that references it.
- **Search indexes, caches and read replicas.**
- **Object storage**: avatars, uploads, exports.
- **Logs and analytics**: email addresses in logs, events in a warehouse.
- **Third parties**: the email provider, the payment processor, CRM and support tools.
- **Backups**: usually not rewritten. Document that they expire on schedule (for example after 30 days), and that restored backups re-apply deletions.

Design patterns:
- Keep a **data map** of where personal data lives.
- Run deletion as a **job** that fans out to every system, and is retried and audited.
- **Anonymise** what must be kept for legal or financial reasons (invoices): keep the amounts, and drop the name and email.
- **Minimise** collection, and keep personal data out of logs to begin with.
