---
slug: "testing-mocks-85"
title: "Testing Drill: Mock function calls #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(50);\nconst results = [5, 5].map((id) => loadCity(id));\n```\n\nAfter this runs, how many times was `loadCity` called?","options":["2","1","3"],"answer":0},{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(97);\nconst results = [5, 4].map((id) => loadCourse(id));\n```\n\nAfter this runs, does `expect(loadCourse).toHaveBeenCalledWith(4)` pass?","options":["Yes","No: it only checks the first call","No: it needs toHaveBeenLastCalledWith","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(10);\nconst results = [2, 5, 4].map((id) => loadHotel(id));\n```\n\nAfter this runs, how many times was `loadHotel` called?","options":["3","4","5","2"],"answer":0},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(13);\nconst results = [4, 4, 2].map((id) => loadSong(id));\n```\n\nAfter this runs, does `expect(loadSong).toHaveBeenCalledWith(2)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(95);\nconst results = [2, 4, 2, 4].map((id) => loadTransaction(id));\n```\n\nAfter this runs, how many times was `loadTransaction` called?","options":["3","2","4","5"],"answer":2}]
---
# Testing Drill: Mock function calls #85

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
