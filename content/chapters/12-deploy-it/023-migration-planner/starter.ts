export function planMigrations(local: { name: string; checksum: string }[], applied: { name: string; checksum: string }[]) {
  return { ok: true, pending: local.map((m) => m.name) };
}
