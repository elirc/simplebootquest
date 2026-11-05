type OrderStatus = 'pending' | 'paid' | 'shipped' | 'cancelled';

export function statusLabel(status: OrderStatus): string {
  return status;
}

export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  return true;
}
