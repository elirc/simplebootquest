---
slug: "deploy-semver-range-21"
title: "Deploy Drill: Which version does npm install? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"3.0.4\"`. The registry has: `3.0.4`, `3.0.5`, `3.0.9`, `3.1.0`, `3.2.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.5`","`3.0.9`","`3.0.4`","`3.1.0`"],"answer":2,"explanation":"`3.0.4` is the highest version matching `3.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.2.0\"`. The registry has: `0.1.9`, `0.2.0`, `0.2.3`, `0.3.0`, `0.5.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.2.0`","`0.1.9`","`0.3.0`","`0.2.3`"],"answer":3,"explanation":"`0.2.3` is the highest version matching `~0.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.1.2\"`. The registry has: `2.0.9`, `2.1.2`, `2.1.5`, `2.2.0`, `2.4.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.1.5`","`2.1.2`","`2.2.0`"],"answer":2,"explanation":"`2.1.2` is the highest version matching `2.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"3.1.0\"`. The registry has: `3.0.9`, `3.1.0`, `3.1.3`, `3.2.0`, `3.4.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.3`","`3.0.9`","`3.1.0`","`3.2.0`"],"answer":2,"explanation":"`3.1.0` is the highest version matching `3.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.5.1\"`. The registry has: `0.4.9`, `0.5.1`, `0.5.3`, `0.6.0`, `0.8.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.6.0`","`0.5.3`","`0.4.9`","`0.5.1`"],"answer":1,"explanation":"`0.5.3` is the highest version matching `^0.5.1`."}]
---
# Deploy Drill: Which version does npm install? #21

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
