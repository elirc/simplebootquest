---
slug: "deploy-semver-range-22"
title: "Deploy Drill: Which version does npm install? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"1.4.0\"`. The registry has: `1.3.9`, `1.4.0`, `1.4.3`, `1.5.0`, `1.7.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.9`","`1.5.0`","`1.4.0`","`1.4.3`"],"answer":2,"explanation":"`1.4.0` is the highest version matching `1.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.5.2\"`. The registry has: `1.4.9`, `1.5.2`, `1.5.5`, `1.6.0`, `1.8.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.5.5`","`1.8.0`","`1.5.2`","`1.4.9`"],"answer":1,"explanation":"`1.8.0` is the highest version matching `^1.5.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.2.0\"`. The registry has: `2.1.9`, `2.2.0`, `2.2.1`, `2.3.0`, `2.5.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.9`","`2.2.0`","`2.5.2`","`2.2.1`"],"answer":2,"explanation":"`2.5.2` is the highest version matching `^2.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"3.4.1\"`. The registry has: `3.3.9`, `3.4.1`, `3.4.2`, `3.5.0`, `3.6.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.2`","`3.4.1`","`3.5.0`","`3.3.9`"],"answer":1,"explanation":"`3.4.1` is the highest version matching `3.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.0.0\"`. The registry has: `2.0.0`, `2.0.1`, `2.0.9`, `2.1.0`, `2.3.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.1`","`2.0.9`","`2.0.0`","`2.3.0`"],"answer":3,"explanation":"`2.3.0` is the highest version matching `^2.0.0`."}]
---
# Deploy Drill: Which version does npm install? #22

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
