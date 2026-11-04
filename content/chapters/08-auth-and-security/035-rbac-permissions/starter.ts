export function createRbac(roles: Record<string, { inherits?: string[]; permissions: string[] }>) {
  return {
    permissionsFor(role: string): string[] { return []; },
    can(user: { roles: string[] }, permission: string): boolean { return true; },
  };
}
