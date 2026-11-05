---
slug: "deploy-semver-range-20"
title: "Deploy Drill: Which version does npm install? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^1.0.4\"`. The registry has: `1.0.4`, `1.0.7`, `1.0.9`, `1.1.0`, `1.2.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.9`","`1.0.7`","`1.2.1`","`1.0.4`"],"answer":2,"explanation":"`1.2.1` is the highest version matching `^1.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.1.4\"`. The registry has: `0.0.9`, `0.1.4`, `0.1.7`, `0.2.0`, `0.3.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.4`","`0.1.7`","`0.0.9`","`0.2.0`"],"answer":1,"explanation":"`0.1.7` is the highest version matching `~0.1.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.5.4\"`. The registry has: `2.4.9`, `2.5.4`, `2.5.6`, `2.6.0`, `2.8.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.5.4`","`2.4.9`","`2.8.0`","`2.5.6`"],"answer":2,"explanation":"`2.8.0` is the highest version matching `^2.5.4`."},{"prompt":"`package.json` has `\"some-lib\": \"2.4.2\"`. The registry has: `2.3.9`, `2.4.2`, `2.4.4`, `2.5.0`, `2.7.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.9`","`2.4.2`","`2.4.4`","`2.5.0`"],"answer":1,"explanation":"`2.4.2` is the highest version matching `2.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.5.1\"`. The registry has: `1.4.9`, `1.5.1`, `1.5.4`, `1.6.0`, `1.8.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.6.0`","`1.5.4`","`1.4.9`","`1.5.1`"],"answer":1,"explanation":"`1.5.4` is the highest version matching `~1.5.1`."}]
---
# Deploy Drill: Which version does npm install? #20

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
