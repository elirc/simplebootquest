---
slug: "deploy-semver-range-8"
title: "Deploy Drill: Which version does npm install? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^3.2.3\"`. The registry has: `3.1.9`, `3.2.3`, `3.2.6`, `3.3.0`, `3.4.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.3`","`3.4.0`","`3.1.9`","`3.2.6`"],"answer":1,"explanation":"`3.4.0` is the highest version matching `^3.2.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.2.0\"`. The registry has: `2.1.9`, `2.2.0`, `2.2.1`, `2.3.0`, `2.5.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.0`","`2.2.1`","`2.2.0`","`2.1.9`"],"answer":1,"explanation":"`2.2.1` is the highest version matching `~2.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.4.0\"`. The registry has: `1.3.9`, `1.4.0`, `1.4.2`, `1.5.0`, `1.6.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.9`","`1.4.0`","`1.5.0`","`1.4.2`"],"answer":1,"explanation":"`1.4.0` is the highest version matching `1.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"0.5.3\"`. The registry has: `0.4.9`, `0.5.3`, `0.5.6`, `0.6.0`, `0.7.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.5.3`","`0.5.6`","`0.6.0`","`0.4.9`"],"answer":0,"explanation":"`0.5.3` is the highest version matching `0.5.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.2.2\"`. The registry has: `2.1.9`, `2.2.2`, `2.2.3`, `2.3.0`, `2.5.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.3`","`2.1.9`","`2.2.2`","`2.3.0`"],"answer":0,"explanation":"`2.2.3` is the highest version matching `~2.2.2`."}]
---
# Deploy Drill: Which version does npm install? #8

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
