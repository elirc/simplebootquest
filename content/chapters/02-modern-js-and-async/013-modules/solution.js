export const TAX_RATE = 0.2;

export function withTax(amount) {
  return Math.round(amount * (1 + TAX_RATE) * 100) / 100;
}

export default function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
