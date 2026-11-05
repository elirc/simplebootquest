const app = express();
app.use(express.json());

const tasks = [
  {id: 1, title: "Refactor auth", estimate: 16, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 2, title: "Add search", estimate: 2, priority: 3, status: "doing", assignee: "ada", blocked: false},
  {id: 3, title: "Design schema", estimate: 3, priority: 2, status: "doing", assignee: "ada", blocked: true},
  {id: 4, title: "Fix CSS", estimate: 16, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Deploy API", estimate: 11, priority: 3, status: "doing", assignee: "linus", blocked: false},
  {id: 6, title: "Plan sprint", estimate: 13, priority: 3, status: "doing", assignee: "linus", blocked: true},
  {id: 7, title: "Write docs", estimate: 6, priority: 5, status: "doing", assignee: "linus", blocked: true},
  {id: 8, title: "Add caching", estimate: 7, priority: 4, status: "doing", assignee: "ada", blocked: false}
];

// TODO: search tasks
