---
slug: "js-predict-switch-1"
title: "Predict the Output: switch and fall-through #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet out = \"\";\nswitch (1) {\n  case 1:\n    out += \"a\";\n  case 2:\n    out += \"b\";\n  case 3:\n    out += \"c\";\n    break;\n  default:\n    out += \"d\";\n}\nconsole.log(out);\n```","options":["`abc`","`abcd`","`bc`","`a`"],"answer":0,"explanation":"It logs `abc`."},{"prompt":"What does this log?\n\n```js\nlet out = \"\";\nswitch (2) {\n  case 1:\n    out += \"a\";\n  case 2:\n    out += \"b\";\n    break;\n  case 3:\n    out += \"c\";\n    break;\n  default:\n    out += \"d\";\n}\nconsole.log(out);\n```","options":["`b`","`c`","`TypeError`","`bcd`"],"answer":0,"explanation":"It logs `b`."},{"prompt":"What does this log?\n\n```js\nlet out = \"\";\nswitch (2) {\n  case 1:\n    out += \"a\";\n    break;\n  case 2:\n    out += \"b\";\n  case 3:\n    out += \"c\";\n    break;\n  default:\n    out += \"d\";\n}\nconsole.log(out);\n```","options":["`bc`","`c`","`bcd`","`b`"],"answer":0,"explanation":"It logs `bc`."},{"prompt":"What does this log?\n\n```js\nlet out = \"\";\nswitch (2) {\n  case 1:\n    out += \"a\";\n  case 2:\n    out += \"b\";\n  case 3:\n    out += \"c\";\n    break;\n  default:\n    out += \"d\";\n}\nconsole.log(out);\n```","options":["`bc`","`b`","`bcd`","`c`"],"answer":0,"explanation":"It logs `bc`."},{"prompt":"What does this log?\n\n```js\nlet out = \"\";\nswitch (3) {\n  case 1:\n    out += \"a\";\n  case 2:\n    out += \"b\";\n  case 3:\n    out += \"c\";\n    break;\n  default:\n    out += \"d\";\n}\nconsole.log(out);\n```","options":["`TypeError`","`c`","`abc`","`cd`"],"answer":1,"explanation":"It logs `c`."}]
---
# Predict the Output: switch and fall-through #1

Without `break`, a `switch` keeps running the next cases ("fall-through") until it hits a `break` or the end.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
