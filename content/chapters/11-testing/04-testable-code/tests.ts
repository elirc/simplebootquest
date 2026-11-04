const now = new Date('2026-03-01T18:30:00Z');
const base = { email: 'ada@example.com', streak: 5, lastActiveDate: '2026-02-28', remindersEnabled: true };

test('reminds users about to lose a streak', () => {
  expect(shouldRemind(base, now)).toBe(true);
});

test('respects the opt-out', () => {
  expect(shouldRemind({ ...base, remindersEnabled: false }, now)).toBe(false);
});

test('only reminds when last active yesterday', () => {
  expect(shouldRemind({ ...base, lastActiveDate: '2026-03-01' }, now)).toBe(false);
  expect(shouldRemind({ ...base, lastActiveDate: '2026-02-27' }, now)).toBe(false);
  expect(shouldRemind({ ...base, lastActiveDate: null }, now)).toBe(false);
});

test('ignores tiny streaks', () => {
  expect(shouldRemind({ ...base, streak: 1 }, now)).toBe(false);
});

test('the job sends emails with injected dependencies', async () => {
  const sent = [];
  const job = createReminderJob({
    listUsers: async () => [base, { ...base, email: 'off@example.com', remindersEnabled: false }],
    sendEmail: async (to, subject) => { sent.push([to, subject]); },
    now: () => now,
  });
  expect(await job()).toEqual({ sent: 1, failed: [] });
  expect(sent).toEqual([['ada@example.com', 'Keep your 5-day streak alive!']]);
});

test('one failure does not stop the job', async () => {
  const job = createReminderJob({
    listUsers: async () => [{ ...base, email: 'bad@example.com' }, base],
    sendEmail: async (to) => { if (to.startsWith('bad')) throw new Error('bounce'); },
    now: () => now,
  });
  expect(await job()).toEqual({ sent: 1, failed: ['bad@example.com'] });
});
