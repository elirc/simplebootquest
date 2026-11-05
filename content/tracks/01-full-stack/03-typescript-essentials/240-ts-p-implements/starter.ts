interface PaymentMethod {
  readonly id: string;
  charge(cents: number): { ok: true; remaining: number } | { ok: false; reason: string };
}

export class GiftCard {}
export class CreditCard {}
export function payWith(methods: PaymentMethod[], cents: number): string | null {
  return null;
}
