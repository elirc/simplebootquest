---
slug: "deploy-semver-range-10"
title: "Deploy Drill: Which version does npm install? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^3.4.1\"`. The registry has: `3.3.9`, `3.4.1`, `3.4.3`, `3.5.0`, `3.6.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.1`","`3.6.0`","`3.4.3`","`3.3.9`"],"answer":1,"explanation":"`3.6.0` is the highest version matching `^3.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.0.3\"`. The registry has: `0.0.3`, `0.0.5`, `0.0.9`, `0.1.0`, `0.3.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.0`","`0.0.9`","`0.0.5`","`0.0.3`"],"answer":1,"explanation":"`0.0.9` is the highest version matching `~0.0.3`."},{"prompt":"`package.json` has `\"some-lib\": \"1.2.0\"`. The registry has: `1.1.9`, `1.2.0`, `1.2.2`, `1.3.0`, `1.5.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.0`","`1.2.0`","`1.2.2`","`1.1.9`"],"answer":1,"explanation":"`1.2.0` is the highest version matching `1.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.1.2\"`. The registry has: `2.0.9`, `2.1.2`, `2.1.4`, `2.2.0`, `2.4.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.4`","`2.0.9`","`2.4.2`","`2.1.2`"],"answer":2,"explanation":"`2.4.2` is the highest version matching `^2.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.0.1\"`. The registry has: `2.0.1`, `2.0.2`, `2.0.9`, `2.1.0`, `2.2.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.0.1`","`2.2.2`","`2.0.2`"],"answer":2,"explanation":"`2.2.2` is the highest version matching `^2.0.1`."}]
---
# Deploy Drill: Which version does npm install? #10

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
