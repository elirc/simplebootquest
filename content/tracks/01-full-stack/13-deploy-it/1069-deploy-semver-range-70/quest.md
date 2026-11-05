---
slug: "deploy-semver-range-70"
title: "Deploy Drill: Which version does npm install? #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~2.4.4\"`. The registry has: `2.3.9`, `2.4.4`, `2.4.6`, `2.5.0`, `2.7.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.4.6`","`2.4.4`","`2.5.0`","`2.3.9`"],"answer":0,"explanation":"`2.4.6` is the highest version matching `~2.4.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.5.2\"`. The registry has: `1.4.9`, `1.5.2`, `1.5.5`, `1.6.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.9`","`1.5.2`","`1.5.5`","`1.6.0`"],"answer":2,"explanation":"`1.5.5` is the highest version matching `~1.5.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.2.2\"`. The registry has: `2.1.9`, `2.2.2`, `2.2.4`, `2.3.0`, `2.4.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.4`","`2.4.1`","`2.2.2`","`2.1.9`"],"answer":1,"explanation":"`2.4.1` is the highest version matching `^2.2.2`."},{"prompt":"`package.json` has `\"some-lib\": \"3.1.0\"`. The registry has: `3.0.9`, `3.1.0`, `3.1.1`, `3.2.0`, `3.4.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.0`","`3.0.9`","`3.1.1`","`3.1.0`"],"answer":3,"explanation":"`3.1.0` is the highest version matching `3.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.3.1\"`. The registry has: `2.2.9`, `2.3.1`, `2.3.2`, `2.4.0`, `2.5.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.9`","`2.3.1`","`2.3.2`","`2.4.0`"],"answer":1,"explanation":"`2.3.1` is the highest version matching `2.3.1`."}]
---
# Deploy Drill: Which version does npm install? #70

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
