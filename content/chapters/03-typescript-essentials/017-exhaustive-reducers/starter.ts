interface Item { sku: string; qty: number; price: number }
interface CartState { items: Item[]; coupon: string | null }

export function cartReducer(state: CartState, action: any): CartState {
  return state;
}

export function cartTotal(state: CartState): number {
  return 0;
}
