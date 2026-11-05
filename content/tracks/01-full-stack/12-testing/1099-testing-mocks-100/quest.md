---
slug: "testing-mocks-100"
title: "Testing Drill: Mock function calls #100"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadStudent = vi.fn((id) => id * 2);\nloadStudent.mockReturnValueOnce(57);\nconst results = [1, 2, 3].map((id) => loadStudent(id));\n```\n\nAfter this runs, does `expect(loadStudent).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it only checks the first call","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":0},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(38);\nconst results = [4, 2].map((id) => loadHotel(id));\n```\n\nAfter this runs, what is `loadHotel.mock.calls[1]`?","options":["`[4]`","`2`","`[4,2]`","`[2]`"],"answer":3},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(40);\nconst results = [3, 2, 1].map((id) => loadTicket(id));\n```\n\nAfter this runs, how many times was `loadTicket` called?","options":["4","3","5","2"],"answer":1},{"prompt":"```js\nconst loadWorkout = vi.fn((id) => id * 2);\nloadWorkout.mockReturnValueOnce(59);\nconst results = [1, 2].map((id) => loadWorkout(id));\n```\n\nAfter this runs, what is `loadWorkout.mock.calls[1]`?","options":["`2`","`[1,2]`","`[1]`","`[2]`"],"answer":3},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(18);\nconst results = [3, 2, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[18,2,1]`","`[3,2,1]`","`[6,4,2]`","`[18,4,2]`"],"answer":3}]
---
# Testing Drill: Mock function calls #100

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
