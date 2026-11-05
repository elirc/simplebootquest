type Migration = { name: string; checksum: string };

export function planMigrations(local: Migration[], applied: Migration[]) {
  const localByName = new Map(local.map((m) => [m.name, m]));
  const appliedNames = new Set(applied.map((m) => m.name));
  const errors: string[] = [];

  const sortedApplied = [...applied].sort((a, b) => a.name.localeCompare(b.name));
  for (const m of sortedApplied) {
    const l = localByName.get(m.name);
    if (l && l.checksum !== m.checksum) errors.push(`Modified migration: ${m.name}`);
  }
  for (const m of sortedApplied) {
    if (!localByName.has(m.name)) errors.push(`Missing locally: ${m.name}`);
  }

  const latestApplied = sortedApplied[sortedApplied.length - 1]?.name;
  const pending = local
    .filter((m) => !appliedNames.has(m.name))
    .map((m) => m.name)
    .sort((a, b) => a.localeCompare(b));
  if (latestApplied) {
    for (const name of pending) if (name.localeCompare(latestApplied) < 0) errors.push(`Out of order: ${name}`);
  }

  return errors.length ? { ok: false as const, errors } : { ok: true as const, pending };
}
