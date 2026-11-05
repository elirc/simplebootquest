---
slug: "deploy-semver-range-42"
title: "Deploy Drill: Which version does npm install? #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"1.1.3\"`. The registry has: `1.0.9`, `1.1.3`, `1.1.5`, `1.2.0`, `1.4.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.5`","`1.1.3`","`1.0.9`","`1.2.0`"],"answer":1,"explanation":"`1.1.3` is the highest version matching `1.1.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.5.4\"`. The registry has: `1.4.9`, `1.5.4`, `1.5.7`, `1.6.0`, `1.8.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.8.1`","`1.5.4`","`1.5.7`","`1.4.9`"],"answer":0,"explanation":"`1.8.1` is the highest version matching `^1.5.4`."},{"prompt":"`package.json` has `\"some-lib\": \"2.3.3\"`. The registry has: `2.2.9`, `2.3.3`, `2.3.6`, `2.4.0`, `2.6.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.3`","`2.4.0`","`2.2.9`","`2.3.6`"],"answer":0,"explanation":"`2.3.3` is the highest version matching `2.3.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.3`, `1.5.0`, `1.7.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.7.0`","`1.3.9`","`1.4.3`","`1.4.2`"],"answer":0,"explanation":"`1.7.0` is the highest version matching `^1.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"0.0.0\"`. The registry has: `0.0.0`, `0.0.3`, `0.0.9`, `0.1.0`, `0.3.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.0`","`0.1.0`","`0.0.9`","`0.0.3`"],"answer":0,"explanation":"`0.0.0` is the highest version matching `0.0.0`."}]
---
# Deploy Drill: Which version does npm install? #42

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
