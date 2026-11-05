---
slug: "deploy-semver-range-27"
title: "Deploy Drill: Which version does npm install? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~2.5.3\"`. The registry has: `2.4.9`, `2.5.3`, `2.5.5`, `2.6.0`, `2.8.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.5.3`","`2.5.5`","`2.4.9`","`2.6.0`"],"answer":1,"explanation":"`2.5.5` is the highest version matching `~2.5.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.4.4\"`. The registry has: `0.3.9`, `0.4.4`, `0.4.6`, `0.5.0`, `0.7.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.5.0`","`0.4.6`","`0.3.9`","`0.4.4`"],"answer":1,"explanation":"`0.4.6` is the highest version matching `^0.4.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.4.2\"`. The registry has: `3.3.9`, `3.4.2`, `3.4.4`, `3.5.0`, `3.6.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.4`","`3.4.2`","`3.6.0`","`3.3.9`"],"answer":2,"explanation":"`3.6.0` is the highest version matching `^3.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.5.0\"`. The registry has: `1.4.9`, `1.5.0`, `1.5.3`, `1.6.0`, `1.7.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.7.1`","`1.5.3`","`1.4.9`","`1.5.0`"],"answer":0,"explanation":"`1.7.1` is the highest version matching `^1.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.1.3\"`. The registry has: `0.0.9`, `0.1.3`, `0.1.4`, `0.2.0`, `0.4.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.9`","`0.1.4`","`0.1.3`","`0.2.0`"],"answer":1,"explanation":"`0.1.4` is the highest version matching `~0.1.3`."}]
---
# Deploy Drill: Which version does npm install? #27

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
