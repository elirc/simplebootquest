type AppEvent =
  | { type: 'user_signed_up'; email: string }
  | { type: 'order_placed'; orderId: number; total: number }
  | { type: 'order_cancelled'; orderId: number; reason?: string };

export function describeEvent(event: AppEvent): string {
  // TODO: switch on event.type
  return '';
}

export function totalRevenue(events: AppEvent[]): number {
  // TODO
  return 0;
}
