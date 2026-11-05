---
slug: "deploy-semver-range-3"
title: "Deploy Drill: Which version does npm install? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^2.1.2\"`. The registry has: `2.0.9`, `2.1.2`, `2.1.4`, `2.2.0`, `2.4.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.1.2`","`2.1.4`","`2.4.0`"],"answer":3,"explanation":"`2.4.0` is the highest version matching `^2.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"1.4.0\"`. The registry has: `1.3.9`, `1.4.0`, `1.4.2`, `1.5.0`, `1.7.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.9`","`1.5.0`","`1.4.0`","`1.4.2`"],"answer":2,"explanation":"`1.4.0` is the highest version matching `1.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.2.2\"`. The registry has: `3.1.9`, `3.2.2`, `3.2.3`, `3.3.0`, `3.4.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.9`","`3.2.3`","`3.2.2`","`3.4.0`"],"answer":3,"explanation":"`3.4.0` is the highest version matching `^3.2.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.2.0\"`. The registry has: `3.1.9`, `3.2.0`, `3.2.3`, `3.3.0`, `3.5.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.0`","`3.1.9`","`3.2.3`","`3.2.0`"],"answer":2,"explanation":"`3.2.3` is the highest version matching `~3.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.0.4\"`. The registry has: `3.0.4`, `3.0.6`, `3.0.9`, `3.1.0`, `3.3.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.0`","`3.0.9`","`3.0.4`","`3.0.6`"],"answer":1,"explanation":"`3.0.9` is the highest version matching `~3.0.4`."}]
---
# Deploy Drill: Which version does npm install? #3

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
