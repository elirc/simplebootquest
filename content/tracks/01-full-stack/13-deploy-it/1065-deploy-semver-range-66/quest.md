---
slug: "deploy-semver-range-66"
title: "Deploy Drill: Which version does npm install? #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.2.4\"`. The registry has: `0.1.9`, `0.2.4`, `0.2.5`, `0.3.0`, `0.5.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.3.0`","`0.2.4`","`0.2.5`"],"answer":3,"explanation":"`0.2.5` is the highest version matching `~0.2.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.3.2\"`. The registry has: `1.2.9`, `1.3.2`, `1.3.5`, `1.4.0`, `1.5.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.9`","`1.5.0`","`1.3.5`","`1.3.2`"],"answer":1,"explanation":"`1.5.0` is the highest version matching `^1.3.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.5.2\"`. The registry has: `0.4.9`, `0.5.2`, `0.5.4`, `0.6.0`, `0.7.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.9`","`0.5.2`","`0.5.4`","`0.6.0`"],"answer":2,"explanation":"`0.5.4` is the highest version matching `^0.5.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.1.2\"`. The registry has: `3.0.9`, `3.1.2`, `3.1.4`, `3.2.0`, `3.4.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.0`","`3.0.9`","`3.1.4`","`3.1.2`"],"answer":2,"explanation":"`3.1.4` is the highest version matching `~3.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.4.1\"`. The registry has: `3.3.9`, `3.4.1`, `3.4.4`, `3.5.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.6.2`","`3.3.9`","`3.4.1`","`3.4.4`"],"answer":0,"explanation":"`3.6.2` is the highest version matching `^3.4.1`."}]
---
# Deploy Drill: Which version does npm install? #66

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
