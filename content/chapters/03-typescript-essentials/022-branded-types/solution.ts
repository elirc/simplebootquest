export type Email = string & { readonly __brand: 'Email' };
export type PositiveInt = number & { readonly __brand: 'PositiveInt' };
export type Slug = string & { readonly __brand: 'Slug' };

export function toEmail(s: string): Email | null {
  const email = s.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (email as Email) : null;
}

export function toPositiveInt(n: number): PositiveInt {
  if (!Number.isInteger(n) || n <= 0) throw new RangeError(`${n} is not a positive integer`);
  return n as PositiveInt;
}

export function toSlug(s: string): Slug | null {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s) ? (s as Slug) : null;
}

export function sendWelcome(to: Email): string {
  return `Welcome email sent to ${to}`;
}
