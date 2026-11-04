---
slug: "sd-api-versioning"
title: "Versioning & Backwards Compatibility"
type: "quiz"
xp: 15
resources: [{"title": "Stripe: API versioning", "url": "https://stripe.com/blog/api-versioning"}]
questions: [{"prompt": "Which change is backwards compatible?", "options": ["Renaming `title` to `name`", "Adding a new optional `tags` field to the response", "Changing `id` from number to string"], "answer": 1}, {"prompt": "Why does API compatibility matter more with mobile apps?", "options": ["Mobile apps are faster", "Old app versions stay installed and keep calling your API for a long time", "Mobile apps can't parse JSON"], "answer": 1}, {"prompt": "What should clients do with unknown response fields?", "options": ["Throw an error", "Ignore them", "Log a warning on every request"], "answer": 1}, {"prompt": "Making an optional request field required is…", "options": ["Safe", "A breaking change", "A versioning strategy"], "answer": 1}, {"prompt": "Before removing a deprecated endpoint, you should…", "options": ["Remove it immediately", "Announce a sunset date, monitor usage, and remove it once traffic is gone", "Rename it"], "answer": 1}]
---
# Versioning & Backwards Compatibility

Web frontends update instantly. **Mobile apps and third-party integrations don't**: version 1.2 of your iOS app might still be calling your API in two years.

### Safe (additive) changes

- Adding a new endpoint.
- Adding an optional request field.
- Adding a response field (clients must ignore unknown fields!).

### Breaking changes

- Removing or renaming a field or endpoint.
- Changing a type (`id: number` → `id: string`).
- Making an optional field required.
- Changing the meaning of a value, or the error format.

### Strategies

- **URL versioning** (`/api/v1`, `/api/v2`): explicit and easy to route. The most common choice.
- **Header versioning** (`Accept: application/vnd.app.v2+json`, or Stripe's dated `API-Version` header).
- **Evolve without versions**: only make additive changes, and deprecate old fields slowly.

Deprecate with notice: add `Deprecation` and `Sunset` headers, document the timeline, watch the usage metrics, and only remove things once traffic is gone.
