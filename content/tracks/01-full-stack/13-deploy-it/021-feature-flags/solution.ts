export function bucket(flag: string, userId: string): number {
  const input = `${flag}:${userId}`;
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) % 100;
}

type Flag = { enabled: boolean; allow?: string[]; deny?: string[]; rollout?: number };

export function isEnabled(flags: Record<string, Flag>, flagName: string, user: { id: string }): boolean {
  const flag = flags[flagName];
  if (!flag || !flag.enabled) return false;
  if (flag.deny?.includes(user.id)) return false;
  if (flag.allow?.includes(user.id)) return true;
  if (flag.rollout !== undefined) return bucket(flagName, user.id) < flag.rollout;
  return true;
}
