interface User {
  email: string;
  streak: number;
  lastActiveDate: string | null;
  remindersEnabled: boolean;
}

function yesterday(now: Date): string {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1));
  return d.toISOString().slice(0, 10);
}

export function shouldRemind(user: User, now: Date): boolean {
  return user.remindersEnabled && user.streak >= 2 && user.lastActiveDate === yesterday(now);
}

export function createReminderJob(deps: {
  listUsers: () => Promise<User[]>;
  sendEmail: (to: string, subject: string) => Promise<unknown>;
  now: () => Date;
}) {
  return async () => {
    const users = await deps.listUsers();
    const now = deps.now();
    let sent = 0;
    const failed: string[] = [];
    for (const user of users) {
      if (!shouldRemind(user, now)) continue;
      try {
        await deps.sendEmail(user.email, `Keep your ${user.streak}-day streak alive!`);
        sent++;
      } catch {
        failed.push(user.email);
      }
    }
    return { sent, failed };
  };
}
