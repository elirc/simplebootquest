export function buildCsp(directives: Record<string, string[]>, options: { allowUnsafeInline?: boolean } = {}): string { return ''; }
export function parseCsp(header: string): Record<string, string[]> { return {}; }
export function allowsScript(csp: Record<string, string[]>, url: string, pageOrigin: string): boolean { return true; }
