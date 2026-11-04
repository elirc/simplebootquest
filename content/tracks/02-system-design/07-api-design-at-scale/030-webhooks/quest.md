---
slug: "sd-webhooks"
title: "Webhooks"
type: "quiz"
xp: 15
resources: [{"title": "Standard Webhooks spec", "url": "https://www.standardwebhooks.com/"}, {"title": "OWASP: SSRF", "url": "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery"}]
questions: [{"prompt": "Why sign webhook payloads?", "options": ["To compress them", "So receivers can verify the payload came from you and was not tampered with", "It is required by HTTP"], "answer": 1}, {"prompt": "Webhook delivery is usually at-least-once. What must receivers do?", "options": ["Respond slowly", "Deduplicate by event id", "Nothing"], "answer": 1}, {"prompt": "Where should webhook sending happen?", "options": ["Inside the API request", "In a background job with retries", "In the browser"], "answer": 1}, {"prompt": "What is SSRF risk when sending webhooks?", "options": ["Slow responses", "A user registers an internal URL (like a cloud metadata endpoint), making your server attack your own network", "Spam"], "answer": 1}, {"prompt": "When receiving a webhook, you should…", "options": ["Do all processing before responding", "Verify the signature, respond 200 quickly, and process asynchronously", "Skip verification for speed"], "answer": 1}]
---
# Webhooks

Instead of making clients poll ("anything new? anything new?"), a **webhook** has your server POST an event to a URL the client registered:

```http
POST https://customer.example.com/hooks
X-Signature: t=1709..., v1=5257a869...
{ "id": "evt_123", "type": "order.paid", "data": { ... } }
```

### Sending webhooks reliably

- Send from a **background job**, never inside the user's request.
- **Sign** payloads with HMAC (a per-endpoint secret) plus a timestamp, so receivers can verify authenticity and reject replays.
- **Retry** with exponential backoff for hours or days, then disable the endpoint and notify its owner.
- Include an event **id** (receivers deduplicate, because delivery is at-least-once) and don't rely on ordering.
- Keep payloads small, or send a "thin" event that tells the receiver to fetch the latest state.

### Receiving webhooks (e.g. from Stripe)

Verify the signature using the **raw** body, respond `200` quickly, and process asynchronously. Deduplicate by event id, and never trust the payload without verifying it.

⚠️ Sending to user-supplied URLs risks **SSRF** (server-side request forgery): block private IP ranges and cloud metadata addresses.
