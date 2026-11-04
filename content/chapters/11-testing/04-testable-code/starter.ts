interface User {
  email: string;
  streak: number;
  lastActiveDate: string | null;
  remindersEnabled: boolean;
}

export function shouldRemind(user: User, now: Date): boolean {
  // TODO
  return false;
}

export function createReminderJob(deps: {
  listUsers: () => Promise<User[]>;
  sendEmail: (to: string, subject: string) => Promise<unknown>;
  now: () => Date;
}) {
  return async () => {
    // TODO
    return { sent: 0, failed: [] as string[] };
  };
}
