type OrderStatus = 'pending' | 'paid' | 'shipped';
const STATUSES: readonly OrderStatus[] = ['pending', 'paid', 'shipped'];

interface OrderDto {
  id: string;
  created_at: string;
  total_cents: number;
  status: string;
  line_items: { product_name: string; qty: number }[];
}

interface Order {
  id: string;
  createdAt: Date;
  total: number;
  status: OrderStatus;
  items: { name: string; quantity: number }[];
}

export function toOrder(dto: OrderDto): Order {
  return {
    id: dto.id,
    createdAt: new Date(dto.created_at),
    total: dto.total_cents / 100,
    status: (STATUSES as readonly string[]).includes(dto.status) ? (dto.status as OrderStatus) : 'pending',
    items: dto.line_items.map((li) => ({ name: li.product_name, quantity: li.qty })),
  };
}

export function toOrderDto(order: Order): OrderDto {
  return {
    id: order.id,
    created_at: order.createdAt.toISOString(),
    total_cents: Math.round(order.total * 100),
    status: order.status,
    line_items: order.items.map((i) => ({ product_name: i.name, qty: i.quantity })),
  };
}

export function camelize(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase()), v]));
}
