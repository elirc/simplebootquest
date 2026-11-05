type Admin = { email: string; permissions: string[] };
type User = { email: string };
type Guest = { sessionId: string };

export function describeActor(actor: Admin | User | Guest): string {
  if ('sessionId' in actor) return `guest:${actor.sessionId}`;
  if ('permissions' in actor) return `admin:${actor.email}:${actor.permissions.length}`;
  return `user:${actor.email}`;
}

export function toUserMessage(err: unknown): string {
  if (err instanceof TypeError) return 'Something was the wrong type';
  if (err instanceof RangeError) return 'A value was out of range';
  if (err instanceof Error) return err.message;
  return 'Unknown error';
}
