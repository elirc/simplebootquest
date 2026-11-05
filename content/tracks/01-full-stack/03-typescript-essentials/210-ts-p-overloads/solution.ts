export function formatValue(value: number): string;
export function formatValue(value: Date): string;
export function formatValue(value: (number | Date)[]): string;
export function formatValue(value: number | Date | (number | Date)[]): string {
  if (Array.isArray(value)) return value.map((v) => formatValue(v as number)).join(', ');
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
}
