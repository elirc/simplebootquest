export function createRbac(roles: Record<string, { inherits?: string[]; permissions: string[] }>) {
  function collect(role: string, visiting: Set<string>): Set<string> {
    const def = roles[role];
    if (!def) throw new Error(`Unknown role: ${role}`);
    if (visiting.has(role)) throw new Error('Circular role inheritance');
    visiting.add(role);
    const out = new Set(def.permissions);
    for (const parent of def.inherits ?? []) for (const p of collect(parent, visiting)) out.add(p);
    visiting.delete(role);
    return out;
  }

  const grants = (granted: string, wanted: string) => {
    if (granted === '*' || granted === wanted) return true;
    if (granted.endsWith(':*')) return wanted.startsWith(granted.slice(0, -1));
    return false;
  };

  return {
    permissionsFor(role: string): string[] {
      return [...collect(role, new Set())].sort();
    },
    can(user: { roles: string[] }, permission: string): boolean {
      return user.roles.some((role) => [...collect(role, new Set())].some((g) => grants(g, permission)));
    },
  };
}
