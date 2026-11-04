interface Item { sku: string; qty: number; price: number }
interface CartState { items: Item[]; coupon: string | null }

type CartAction =
  | { type: 'added'; sku: string; price: number }
  | { type: 'qtyChanged'; sku: string; qty: number }
  | { type: 'removed'; sku: string }
  | { type: 'couponApplied'; code: string }
  | { type: 'cleared' };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'added': {
      const exists = state.items.some((i) => i.sku === action.sku);
      return {
        ...state,
        items: exists
          ? state.items.map((i) => (i.sku === action.sku ? { ...i, qty: i.qty + 1 } : i))
          : [...state.items, { sku: action.sku, price: action.price, qty: 1 }],
      };
    }
    case 'qtyChanged':
      return {
        ...state,
        items: action.qty <= 0
          ? state.items.filter((i) => i.sku !== action.sku)
          : state.items.map((i) => (i.sku === action.sku ? { ...i, qty: action.qty } : i)),
      };
    case 'removed':
      return { ...state, items: state.items.filter((i) => i.sku !== action.sku) };
    case 'couponApplied':
      return { ...state, coupon: action.code };
    case 'cleared':
      return { items: [], coupon: null };
    default: {
      const unreachable: never = action;
      return unreachable;
    }
  }
}

export function cartTotal(state: CartState): number {
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = state.coupon === 'SAVE10' ? subtotal * 0.9 : subtotal;
  return Math.round(total * 100) / 100;
}
