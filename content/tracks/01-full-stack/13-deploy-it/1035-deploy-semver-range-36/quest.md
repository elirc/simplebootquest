---
slug: "deploy-semver-range-36"
title: "Deploy Drill: Which version does npm install? #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"2.3.2\"`. The registry has: `2.2.9`, `2.3.2`, `2.3.3`, `2.4.0`, `2.6.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.2`","`2.2.9`","`2.3.3`","`2.4.0`"],"answer":0,"explanation":"`2.3.2` is the highest version matching `2.3.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.5.2\"`. The registry has: `3.4.9`, `3.5.2`, `3.5.5`, `3.6.0`, `3.8.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.8.1`","`3.5.5`","`3.5.2`","`3.4.9`"],"answer":0,"explanation":"`3.8.1` is the highest version matching `^3.5.2`."},{"prompt":"`package.json` has `\"some-lib\": \"3.5.1\"`. The registry has: `3.4.9`, `3.5.1`, `3.5.4`, `3.6.0`, `3.7.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.9`","`3.5.1`","`3.6.0`","`3.5.4`"],"answer":1,"explanation":"`3.5.1` is the highest version matching `3.5.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.2.0\"`. The registry has: `3.1.9`, `3.2.0`, `3.2.1`, `3.3.0`, `3.4.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.0`","`3.1.9`","`3.2.1`","`3.2.0`"],"answer":2,"explanation":"`3.2.1` is the highest version matching `~3.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.3.3\"`. The registry has: `3.2.9`, `3.3.3`, `3.3.5`, `3.4.0`, `3.6.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.9`","`3.3.5`","`3.3.3`","`3.6.0`"],"answer":3,"explanation":"`3.6.0` is the highest version matching `^3.3.3`."}]
---
# Deploy Drill: Which version does npm install? #36

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
