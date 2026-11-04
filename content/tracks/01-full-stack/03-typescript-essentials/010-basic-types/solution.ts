export function formatPrice(cents: number, currency: string = '$'): string {
  const sign = cents < 0 ? '-' : '';
  return `${sign}${currency}${(Math.abs(cents) / 100).toFixed(2)}`;
}

export function parseQuantity(input: string): number | null {
  const trimmed = input.trim();
  if (!/^\d+$/.test(trimmed)) return null;
  const n = Number(trimmed);
  return n > 0 ? n : null;
}
