---
slug: "deploy-semver-range-12"
title: "Deploy Drill: Which version does npm install? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.2.2\"`. The registry has: `3.1.9`, `3.2.2`, `3.2.5`, `3.3.0`, `3.5.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.5`","`3.2.2`","`3.3.0`","`3.1.9`"],"answer":0,"explanation":"`3.2.5` is the highest version matching `~3.2.2`."},{"prompt":"`package.json` has `\"some-lib\": \"1.4.3\"`. The registry has: `1.3.9`, `1.4.3`, `1.4.5`, `1.5.0`, `1.7.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.9`","`1.5.0`","`1.4.5`","`1.4.3`"],"answer":3,"explanation":"`1.4.3` is the highest version matching `1.4.3`."},{"prompt":"`package.json` has `\"some-lib\": \"1.0.0\"`. The registry has: `1.0.0`, `1.0.3`, `1.0.9`, `1.1.0`, `1.3.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.9`","`1.1.0`","`1.0.3`","`1.0.0`"],"answer":3,"explanation":"`1.0.0` is the highest version matching `1.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.0.0\"`. The registry has: `1.0.0`, `1.0.1`, `1.0.9`, `1.1.0`, `1.2.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.1`","`1.1.0`","`1.0.0`","`1.0.9`"],"answer":3,"explanation":"`1.0.9` is the highest version matching `~1.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.5.3\"`. The registry has: `1.4.9`, `1.5.3`, `1.5.6`, `1.6.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.9`","`1.5.3`","`1.6.0`","`1.5.6`"],"answer":1,"explanation":"`1.5.3` is the highest version matching `1.5.3`."}]
---
# Deploy Drill: Which version does npm install? #12

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
