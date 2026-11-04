export function guard(route: any, auth: any) {
  return { type: 'render' };
}

export function safeNext(next: string | null): string {
  return next ?? '/learn';
}
