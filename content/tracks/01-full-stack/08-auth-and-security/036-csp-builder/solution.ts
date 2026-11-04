export function buildCsp(directives: Record<string, string[]>, options: { allowUnsafeInline?: boolean } = {}): string {
  const parts: string[] = [];
  for (const [name, sources] of Object.entries(directives)) {
    if (name === 'script-src' && sources.includes("'unsafe-inline'") && !options.allowUnsafeInline) {
      throw new Error("Unsafe source: 'unsafe-inline'");
    }
    if (sources.length) parts.push(`${name} ${sources.join(' ')}`);
  }
  return parts.join('; ');
}

export function parseCsp(header: string): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const part of header.split(';')) {
    const [name, ...sources] = part.trim().split(/\s+/);
    if (name) out[name] = sources;
  }
  return out;
}

export function allowsScript(csp: Record<string, string[]>, url: string, pageOrigin: string): boolean {
  const sources = csp['script-src'] ?? csp['default-src'];
  if (!sources) return true;
  const { origin, protocol } = new URL(url);
  return sources.some((src) => {
    if (src === "'none'") return false;
    if (src === "'self'") return origin === pageOrigin;
    if (src === 'https:') return protocol === 'https:';
    return url.startsWith(src);
  });
}
