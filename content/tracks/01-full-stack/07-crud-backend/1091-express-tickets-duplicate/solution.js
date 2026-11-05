const app = express();
app.use(express.json());

const tickets = [
  {id: 1, subject: "Bug in export", ageHours: 186, replies: 11, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 43, replies: 4, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Password reset", ageHours: 91, replies: 3, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "App crash", ageHours: 31, replies: 9, priority: "urgent", channel: "email", resolved: true},
  {id: 5, subject: "Refund request", ageHours: 86, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 78, replies: 11, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "Dark mode", ageHours: 166, replies: 12, priority: "normal", channel: "chat", resolved: true},
  {id: 8, subject: "Billing error", ageHours: 171, replies: 1, priority: "low", channel: "chat", resolved: true}
];

app.post('/tickets', (req, res) => {
  const subject = String(req.body?.subject ?? '');
  if (tickets.some((x) => x.subject.toLowerCase() === subject.toLowerCase())) {
    return res.status(409).json({ error: 'Ticket already exists' });
  }
  const item = { id: tickets.length + 1, subject };
  tickets.push(item);
  res.status(201).json(item);
});
