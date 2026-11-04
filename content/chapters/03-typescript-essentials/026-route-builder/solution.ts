export function buildPath(pattern: string, params: Record<string, string | number>): string {
  return pattern.replace(/:([A-Za-z_]\w*)/g, (_, name: string) => {
    const value = params[name];
    if (value === undefined) throw new Error(`Missing param: ${name}`);
    return encodeURIComponent(String(value));
  });
}

export function paramNames(pattern: string): string[] {
  return [...pattern.matchAll(/:([A-Za-z_]\w*)/g)].map((m) => m[1]!);
}

export function withQuery(path: string, query: Record<string, string | number | undefined>): string {
  const entries = Object.entries(query)
    .filter((entry): entry is [string, string | number] => entry[1] !== undefined)
    .sort(([a], [b]) => a.localeCompare(b));
  if (entries.length === 0) return path;
  return `${path}?${new URLSearchParams(entries.map(([k, v]) => [k, String(v)])).toString()}`;
}
