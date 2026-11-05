---
slug: "deploy-semver-range-11"
title: "Deploy Drill: Which version does npm install? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.0.3\"`. The registry has: `3.0.3`, `3.0.6`, `3.0.9`, `3.1.0`, `3.3.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.0`","`3.0.9`","`3.0.3`","`3.0.6`"],"answer":1,"explanation":"`3.0.9` is the highest version matching `~3.0.3`."},{"prompt":"`package.json` has `\"some-lib\": \"3.3.4\"`. The registry has: `3.2.9`, `3.3.4`, `3.3.6`, `3.4.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.9`","`3.3.4`","`3.3.6`","`3.4.0`"],"answer":1,"explanation":"`3.3.4` is the highest version matching `3.3.4`."},{"prompt":"`package.json` has `\"some-lib\": \"1.1.2\"`. The registry has: `1.0.9`, `1.1.2`, `1.1.5`, `1.2.0`, `1.4.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.5`","`1.1.2`","`1.2.0`","`1.0.9`"],"answer":1,"explanation":"`1.1.2` is the highest version matching `1.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.1.3\"`. The registry has: `3.0.9`, `3.1.3`, `3.1.5`, `3.2.0`, `3.3.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.5`","`3.1.3`","`3.3.0`","`3.0.9`"],"answer":2,"explanation":"`3.3.0` is the highest version matching `^3.1.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.4.1\"`. The registry has: `0.3.9`, `0.4.1`, `0.4.4`, `0.5.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.1`","`0.3.9`","`0.5.0`","`0.4.4`"],"answer":3,"explanation":"`0.4.4` is the highest version matching `~0.4.1`."}]
---
# Deploy Drill: Which version does npm install? #11

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
