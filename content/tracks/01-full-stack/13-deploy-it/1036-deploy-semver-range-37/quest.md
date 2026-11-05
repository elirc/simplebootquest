---
slug: "deploy-semver-range-37"
title: "Deploy Drill: Which version does npm install? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"1.3.4\"`. The registry has: `1.2.9`, `1.3.4`, `1.3.5`, `1.4.0`, `1.5.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.9`","`1.4.0`","`1.3.5`","`1.3.4`"],"answer":3,"explanation":"`1.3.4` is the highest version matching `1.3.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.5`, `1.5.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.5.0`","`1.3.9`","`1.4.2`","`1.4.5`"],"answer":3,"explanation":"`1.4.5` is the highest version matching `~1.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.0.1\"`. The registry has: `3.0.1`, `3.0.4`, `3.0.9`, `3.1.0`, `3.2.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.4`","`3.0.1`","`3.2.2`","`3.0.9`"],"answer":2,"explanation":"`3.2.2` is the highest version matching `^3.0.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.1.1\"`. The registry has: `0.0.9`, `0.1.1`, `0.1.2`, `0.2.0`, `0.4.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.2`","`0.2.0`","`0.0.9`","`0.1.1`"],"answer":0,"explanation":"`0.1.2` is the highest version matching `^0.1.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.1.0\"`. The registry has: `3.0.9`, `3.1.0`, `3.1.1`, `3.2.0`, `3.4.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.9`","`3.2.0`","`3.1.1`","`3.1.0`"],"answer":2,"explanation":"`3.1.1` is the highest version matching `~3.1.0`."}]
---
# Deploy Drill: Which version does npm install? #37

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
