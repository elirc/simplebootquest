---
slug: "deploy-containers-quiz"
title: "Checkpoint: Containers & CI/CD"
type: "quiz"
xp: 15
questions: [{"prompt": "Why copy package.json and run npm ci before copying the rest of the source?", "options": ["It is required by Docker", "So the dependency layer is cached and only rebuilt when dependencies change", "It makes the image smaller"], "answer": 1}, {"prompt": "Why use a multi-stage build?", "options": ["To run tests in parallel", "So build tools and dev dependencies are left out of the final image", "Docker requires two stages"], "answer": 1}, {"prompt": "Where do production secrets belong?", "options": ["Baked into the image", "Injected at runtime as environment variables or from a secrets manager", "In the Dockerfile ENV"], "answer": 1}, {"prompt": "What should CI do before deploying?", "options": ["Nothing", "Install with a lockfile, typecheck, test, and build the exact artifact that gets deployed", "Only build"], "answer": 1}, {"prompt": "A deploy breaks production. What is usually the fastest fix?", "options": ["Debug live on the server", "Roll back to the previous version (or switch the feature flag off), then investigate", "Delete the database"], "answer": 1}]
---
# Checkpoint: Containers & CI/CD

A minimal production Dockerfile for a Node API:

```dockerfile
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
USER node
EXPOSE 3001
CMD ["node", "apps/api/dist/server.js"]
```

- **Multi-stage builds** keep compilers and dev dependencies out of the final image.
- Copying `package*.json` before the source lets Docker **cache** the `npm ci` layer.
- `USER node` means the app doesn't run as root.

Answer every question correctly to earn the XP.
