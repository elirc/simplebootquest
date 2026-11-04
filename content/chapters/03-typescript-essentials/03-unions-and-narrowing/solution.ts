type AppEvent =
  | { type: 'user_signed_up'; email: string }
  | { type: 'order_placed'; orderId: number; total: number }
  | { type: 'order_cancelled'; orderId: number; reason?: string };

export function describeEvent(event: AppEvent): string {
  switch (event.type) {
    case 'user_signed_up':
      return `${event.email} signed up`;
    case 'order_placed':
      return `Order #${event.orderId} placed for $${(event.total / 100).toFixed(2)}`;
    case 'order_cancelled':
      return event.reason ? `Order #${event.orderId} cancelled: ${event.reason}` : `Order #${event.orderId} cancelled`;
  }
}

export function totalRevenue(events: AppEvent[]): number {
  const totals = new Map<number, number>();
  for (const event of events) {
    if (event.type === 'order_placed') totals.set(event.orderId, event.total);
    else if (event.type === 'order_cancelled') totals.delete(event.orderId);
  }
  let sum = 0;
  for (const total of totals.values()) sum += total;
  return sum;
}
