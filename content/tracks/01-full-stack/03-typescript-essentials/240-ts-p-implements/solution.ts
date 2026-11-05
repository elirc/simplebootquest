type ChargeResult = { ok: true; remaining: number } | { ok: false; reason: string };

interface PaymentMethod {
  readonly id: string;
  charge(cents: number): ChargeResult;
}

export class GiftCard implements PaymentMethod {
  constructor(public readonly id: string, private balance: number) {}

  charge(cents: number): ChargeResult {
    if (cents <= 0) return { ok: false, reason: 'invalid amount' };
    if (cents > this.balance) return { ok: false, reason: 'insufficient funds' };
    this.balance -= cents;
    return { ok: true, remaining: this.balance };
  }
}

export class CreditCard implements PaymentMethod {
  private spent = 0;
  constructor(public readonly id: string, private readonly limit: number) {}

  charge(cents: number): ChargeResult {
    if (cents <= 0) return { ok: false, reason: 'invalid amount' };
    if (this.spent + cents > this.limit) return { ok: false, reason: 'insufficient funds' };
    this.spent += cents;
    return { ok: true, remaining: this.limit - this.spent };
  }
}

export function payWith(methods: PaymentMethod[], cents: number): string | null {
  for (const m of methods) if (m.charge(cents).ok) return m.id;
  return null;
}
