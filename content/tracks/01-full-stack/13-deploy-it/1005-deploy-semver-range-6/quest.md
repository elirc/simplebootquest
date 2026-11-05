---
slug: "deploy-semver-range-6"
title: "Deploy Drill: Which version does npm install? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"0.2.1\"`. The registry has: `0.1.9`, `0.2.1`, `0.2.4`, `0.3.0`, `0.5.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.3.0`","`0.2.4`","`0.2.1`"],"answer":3,"explanation":"`0.2.1` is the highest version matching `0.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.4.1\"`. The registry has: `2.3.9`, `2.4.1`, `2.4.4`, `2.5.0`, `2.6.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.9`","`2.6.0`","`2.4.4`","`2.4.1`"],"answer":1,"explanation":"`2.6.0` is the highest version matching `^2.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.5.1\"`. The registry has: `0.4.9`, `0.5.1`, `0.5.2`, `0.6.0`, `0.7.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.9`","`0.5.1`","`0.5.2`","`0.6.0`"],"answer":2,"explanation":"`0.5.2` is the highest version matching `~0.5.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.4.2\"`. The registry has: `3.3.9`, `3.4.2`, `3.4.4`, `3.5.0`, `3.6.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.4`","`3.5.0`","`3.4.2`","`3.3.9`"],"answer":0,"explanation":"`3.4.4` is the highest version matching `~3.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.1.1\"`. The registry has: `1.0.9`, `1.1.1`, `1.1.4`, `1.2.0`, `1.4.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.0`","`1.1.1`","`1.0.9`","`1.1.4`"],"answer":3,"explanation":"`1.1.4` is the highest version matching `~1.1.1`."}]
---
# Deploy Drill: Which version does npm install? #6

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
