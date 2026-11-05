type Role = 'admin' | 'member';
interface User { id: number; email: string; role: Role }

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

function toUser(item: unknown): User | null {
  if (!isObject(item)) return null;
  const { id, email, role = 'member' } = item;
  if (typeof id !== 'number' || typeof email !== 'string') return null;
  if (role !== 'admin' && role !== 'member') return null;
  return { id, email, role };
}

export function parseUsers(json: unknown): { users: User[]; skipped: number } {
  if (!isObject(json) || !Array.isArray(json.data)) throw new Error('Unexpected response shape');
  const users: User[] = [];
  let skipped = 0;
  for (const item of json.data) {
    const user = toUser(item);
    if (user) users.push(user);
    else skipped++;
  }
  return { users, skipped };
}
