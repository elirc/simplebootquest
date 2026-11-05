---
slug: "deploy-q-ci-pipeline"
title: "Quiz: A CI/CD Pipeline"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "GitHub Actions: Building and testing Node.js", "url": "https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs"}]
questions: [{"prompt": "Why `npm ci` instead of `npm install` in CI?", "options": ["It is the same", "It installs exactly what package-lock.json says (and fails if it is out of sync), so builds are reproducible", "It skips devDependencies"], "answer": 1}, {"prompt": "Where should a production DATABASE_URL live?", "options": ["In .env committed to the repo", "In the CI or hosting platform's secret store, injected at runtime", "In the README"], "answer": 1}, {"prompt": "Why order the steps typecheck → test → build?", "options": ["Alphabetical order", "Cheap, fast checks first give quicker feedback when something is wrong", "Build must always be first"], "answer": 1}, {"prompt": "What does \"build once, deploy many\" mean?", "options": ["Rebuild for each environment", "The exact artefact tested in staging is promoted to production, so nothing changes between them", "Deploy multiple times a day"], "answer": 1}, {"prompt": "A PR from a fork wants to run CI with your secrets. What is the risk?", "options": ["None", "Untrusted code could exfiltrate the secrets. Forked PRs should not get them by default", "It will be slower"], "answer": 1}]
---
# Quiz: A CI/CD Pipeline

**Continuous Integration** runs the checks on every push and pull request. **Continuous Delivery** deploys automatically once they pass. A typical pipeline for this stack:

```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres: { image: postgres:16, env: { POSTGRES_PASSWORD: test }, ports: ['5432:5432'] }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci              # exact versions from package-lock.json
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
```

Principles: **fast feedback** (cheapest checks first), **reproducible** installs (`npm ci`), **the same build artefact** promoted from staging to production, and **secrets** only in the CI secret store, never in the repository.
