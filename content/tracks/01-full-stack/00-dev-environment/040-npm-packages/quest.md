---
slug: "dev-npm-packages"
title: "npm and package.json"
type: "quiz"
xp: 15
resources: [{"title": "npm docs: package.json", "url": "https://docs.npmjs.com/cli/configuring-npm/package-json"}]
questions: [{"prompt": "Where do test tools like vitest belong?", "options": ["dependencies", "devDependencies", "peerDependencies"], "answer": 1}, {"prompt": "Should you commit package-lock.json?", "options": ["No, it is generated", "Yes: it pins exact versions so every machine and CI installs the same thing"], "answer": 1}, {"prompt": "Which command should CI use to install packages?", "options": ["npm install", "npm ci", "npm update"], "answer": 1}, {"prompt": "How do you run the \"dev\" script?", "options": ["npm dev", "npm run dev", "node dev"], "answer": 1}, {"prompt": "Which versions does \"^5.1.0\" allow?", "options": ["Exactly 5.1.0", "5.1.0 up to (but not including) 6.0.0", "Any version"], "answer": 1}]
---
# npm and package.json

Every JavaScript project has a `package.json`: its name, its **scripts**, and its **dependencies**.

```json
{
  "scripts": { "dev": "tsx watch src/server.ts", "test": "vitest run" },
  "dependencies": { "express": "^5.1.0" },
  "devDependencies": { "vitest": "^3.2.0" }
}
```

- `npm install` installs everything and updates `package-lock.json` (commit it!).
- `npm ci` installs **exactly** what the lockfile says. Use it in CI.
- `npm run dev` runs a script, and `npm test` is shorthand for `npm run test`.
- `dependencies` are needed at runtime. `devDependencies` are only needed to build and test.
- `npx tool` runs a package's command without a global install.
- `^5.1.0` means "5.x, at least 5.1.0". `~5.1.0` means "5.1.x".
