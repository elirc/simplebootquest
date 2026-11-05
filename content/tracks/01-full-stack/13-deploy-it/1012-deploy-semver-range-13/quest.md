---
slug: "deploy-semver-range-13"
title: "Deploy Drill: Which version does npm install? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~1.1.2\"`. The registry has: `1.0.9`, `1.1.2`, `1.1.3`, `1.2.0`, `1.3.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.0`","`1.1.2`","`1.1.3`","`1.0.9`"],"answer":2,"explanation":"`1.1.3` is the highest version matching `~1.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"0.4.4\"`. The registry has: `0.3.9`, `0.4.4`, `0.4.6`, `0.5.0`, `0.6.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.4`","`0.3.9`","`0.5.0`","`0.4.6`"],"answer":0,"explanation":"`0.4.4` is the highest version matching `0.4.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.5.0\"`. The registry has: `2.4.9`, `2.5.0`, `2.5.2`, `2.6.0`, `2.8.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.5.2`","`2.4.9`","`2.5.0`","`2.8.0`"],"answer":3,"explanation":"`2.8.0` is the highest version matching `^2.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.0.0\"`. The registry has: `1.0.0`, `1.0.3`, `1.0.9`, `1.1.0`, `1.2.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.9`","`1.2.1`","`1.0.3`","`1.0.0`"],"answer":1,"explanation":"`1.2.1` is the highest version matching `^1.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.0.3\"`. The registry has: `2.0.3`, `2.0.4`, `2.0.9`, `2.1.0`, `2.2.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.3`","`2.0.4`","`2.2.2`","`2.0.9`"],"answer":2,"explanation":"`2.2.2` is the highest version matching `^2.0.3`."}]
---
# Deploy Drill: Which version does npm install? #13

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
