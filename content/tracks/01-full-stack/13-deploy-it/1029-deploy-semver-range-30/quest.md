---
slug: "deploy-semver-range-30"
title: "Deploy Drill: Which version does npm install? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.2.4\"`. The registry has: `3.1.9`, `3.2.4`, `3.2.5`, `3.3.0`, `3.5.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.9`","`3.3.0`","`3.2.5`","`3.2.4`"],"answer":2,"explanation":"`3.2.5` is the highest version matching `~3.2.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.5.0\"`. The registry has: `2.4.9`, `2.5.0`, `2.5.1`, `2.6.0`, `2.8.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.5.0`","`2.6.0`","`2.5.1`","`2.4.9`"],"answer":2,"explanation":"`2.5.1` is the highest version matching `~2.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.2.1\"`. The registry has: `3.1.9`, `3.2.1`, `3.2.2`, `3.3.0`, `3.4.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.0`","`3.2.1`","`3.2.2`","`3.1.9`"],"answer":2,"explanation":"`3.2.2` is the highest version matching `~3.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"0.1.0\"`. The registry has: `0.0.9`, `0.1.0`, `0.1.3`, `0.2.0`, `0.3.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.0`","`0.0.9`","`0.1.3`","`0.2.0`"],"answer":0,"explanation":"`0.1.0` is the highest version matching `0.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"3.5.2\"`. The registry has: `3.4.9`, `3.5.2`, `3.5.5`, `3.6.0`, `3.8.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.2`","`3.6.0`","`3.4.9`","`3.5.5`"],"answer":0,"explanation":"`3.5.2` is the highest version matching `3.5.2`."}]
---
# Deploy Drill: Which version does npm install? #30

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
