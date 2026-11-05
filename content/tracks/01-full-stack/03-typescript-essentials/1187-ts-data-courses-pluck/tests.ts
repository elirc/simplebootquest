const COURSES = [
  {id: 1, title: "Intro to SQL", lessons: 17, enrolled: 4081, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 19, enrolled: 4332, level: "beginner"},
  {id: 3, title: "Accessibility", lessons: 37, enrolled: 1313, level: "beginner"},
  {id: 4, title: "Git Essentials", lessons: 46, enrolled: 430, level: "beginner"},
  {id: 5, title: "Web Security", lessons: 10, enrolled: 490, level: "intermediate"},
  {id: 6, title: "TypeScript 101", lessons: 28, enrolled: 3771, level: "intermediate"},
  {id: 7, title: "Node APIs", lessons: 30, enrolled: 3797, level: "intermediate"},
  {id: 8, title: "React Basics", lessons: 21, enrolled: 2539, level: "advanced"}
];

test("an empty list", () => {
  expect(summariseCourses([])).toEqual([]);
});

test("all courses", () => {
  expect(summariseCourses(COURSES)).toEqual([{"id":1,"title":"Intro to SQL","enrolled":4081},{"id":2,"title":"CSS Layouts","enrolled":4332},{"id":3,"title":"Accessibility","enrolled":1313},{"id":4,"title":"Git Essentials","enrolled":430},{"id":5,"title":"Web Security","enrolled":490},{"id":6,"title":"TypeScript 101","enrolled":3771},{"id":7,"title":"Node APIs","enrolled":3797},{"id":8,"title":"React Basics","enrolled":2539}]);
});
