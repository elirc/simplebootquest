---
slug: "deploy-semver-range-32"
title: "Deploy Drill: Which version does npm install? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^1.3.0\"`. The registry has: `1.2.9`, `1.3.0`, `1.3.1`, `1.4.0`, `1.5.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.1`","`1.3.0`","`1.2.9`","`1.5.0`"],"answer":3,"explanation":"`1.5.0` is the highest version matching `^1.3.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.0.0\"`. The registry has: `2.0.0`, `2.0.3`, `2.0.9`, `2.1.0`, `2.2.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.3`","`2.0.9`","`2.2.2`","`2.0.0`"],"answer":2,"explanation":"`2.2.2` is the highest version matching `^2.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.2.1\"`. The registry has: `2.1.9`, `2.2.1`, `2.2.2`, `2.3.0`, `2.5.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.9`","`2.2.1`","`2.2.2`","`2.3.0`"],"answer":1,"explanation":"`2.2.1` is the highest version matching `2.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"2.0.2\"`. The registry has: `2.0.2`, `2.0.5`, `2.0.9`, `2.1.0`, `2.3.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.0`","`2.0.9`","`2.0.2`","`2.0.5`"],"answer":2,"explanation":"`2.0.2` is the highest version matching `2.0.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.1.4\"`. The registry has: `2.0.9`, `2.1.4`, `2.1.5`, `2.2.0`, `2.4.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.1.4`","`2.1.5`","`2.2.0`"],"answer":2,"explanation":"`2.1.5` is the highest version matching `~2.1.4`."}]
---
# Deploy Drill: Which version does npm install? #32

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
