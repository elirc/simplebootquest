---
slug: "deploy-semver-range-63"
title: "Deploy Drill: Which version does npm install? #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.3.0\"`. The registry has: `3.2.9`, `3.3.0`, `3.3.2`, `3.4.0`, `3.5.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.9`","`3.3.0`","`3.4.0`","`3.3.2`"],"answer":3,"explanation":"`3.3.2` is the highest version matching `~3.3.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.1.2\"`. The registry has: `3.0.9`, `3.1.2`, `3.1.5`, `3.2.0`, `3.3.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.5`","`3.0.9`","`3.1.2`","`3.3.2`"],"answer":3,"explanation":"`3.3.2` is the highest version matching `^3.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.4.0\"`. The registry has: `3.3.9`, `3.4.0`, `3.4.3`, `3.5.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.0`","`3.3.9`","`3.4.3`","`3.6.2`"],"answer":3,"explanation":"`3.6.2` is the highest version matching `^3.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.2.3\"`. The registry has: `1.1.9`, `1.2.3`, `1.2.6`, `1.3.0`, `1.4.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.3`","`1.1.9`","`1.3.0`","`1.2.6`"],"answer":0,"explanation":"`1.2.3` is the highest version matching `1.2.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.3.4\"`. The registry has: `2.2.9`, `2.3.4`, `2.3.7`, `2.4.0`, `2.5.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.5.0`","`2.3.7`","`2.2.9`","`2.3.4`"],"answer":0,"explanation":"`2.5.0` is the highest version matching `^2.3.4`."}]
---
# Deploy Drill: Which version does npm install? #63

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
