---
slug: "deploy-semver-range-14"
title: "Deploy Drill: Which version does npm install? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~1.5.3\"`. The registry has: `1.4.9`, `1.5.3`, `1.5.6`, `1.6.0`, `1.7.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.9`","`1.6.0`","`1.5.6`","`1.5.3`"],"answer":2,"explanation":"`1.5.6` is the highest version matching `~1.5.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.2.3\"`. The registry has: `3.1.9`, `3.2.3`, `3.2.4`, `3.3.0`, `3.5.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.4`","`3.2.3`","`3.5.1`","`3.1.9`"],"answer":2,"explanation":"`3.5.1` is the highest version matching `^3.2.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.3.1\"`. The registry has: `0.2.9`, `0.3.1`, `0.3.4`, `0.4.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.2.9`","`0.4.0`","`0.3.4`","`0.3.1`"],"answer":2,"explanation":"`0.3.4` is the highest version matching `^0.3.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.2.4\"`. The registry has: `0.1.9`, `0.2.4`, `0.2.7`, `0.3.0`, `0.4.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.2.4`","`0.3.0`","`0.2.7`"],"answer":3,"explanation":"`0.2.7` is the highest version matching `~0.2.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.2.2\"`. The registry has: `2.1.9`, `2.2.2`, `2.2.4`, `2.3.0`, `2.5.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.2`","`2.1.9`","`2.3.0`","`2.2.4`"],"answer":3,"explanation":"`2.2.4` is the highest version matching `~2.2.2`."}]
---
# Deploy Drill: Which version does npm install? #14

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
