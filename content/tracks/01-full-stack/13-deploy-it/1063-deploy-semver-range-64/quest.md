---
slug: "deploy-semver-range-64"
title: "Deploy Drill: Which version does npm install? #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.4.3\"`. The registry has: `3.3.9`, `3.4.3`, `3.4.5`, `3.5.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.0`","`3.4.3`","`3.3.9`","`3.4.5`"],"answer":3,"explanation":"`3.4.5` is the highest version matching `~3.4.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.3.2\"`. The registry has: `3.2.9`, `3.3.2`, `3.3.3`, `3.4.0`, `3.6.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.6.0`","`3.3.2`","`3.2.9`","`3.3.3`"],"answer":0,"explanation":"`3.6.0` is the highest version matching `^3.3.2`."},{"prompt":"`package.json` has `\"some-lib\": \"1.3.3\"`. The registry has: `1.2.9`, `1.3.3`, `1.3.5`, `1.4.0`, `1.5.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.9`","`1.4.0`","`1.3.3`","`1.3.5`"],"answer":2,"explanation":"`1.3.3` is the highest version matching `1.3.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.2.1\"`. The registry has: `1.1.9`, `1.2.1`, `1.2.3`, `1.3.0`, `1.4.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.9`","`1.2.1`","`1.4.1`","`1.2.3`"],"answer":2,"explanation":"`1.4.1` is the highest version matching `^1.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"0.0.2\"`. The registry has: `0.0.2`, `0.0.4`, `0.0.9`, `0.1.0`, `0.3.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.2`","`0.0.4`","`0.1.0`","`0.0.9`"],"answer":0,"explanation":"`0.0.2` is the highest version matching `0.0.2`."}]
---
# Deploy Drill: Which version does npm install? #64

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
