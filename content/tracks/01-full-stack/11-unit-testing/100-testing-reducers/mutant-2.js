// mutant: adds a duplicate line instead of incrementing
function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const exists = false;
      return {
        ...state,
        items: exists
          ? state.items.map((i) => (i.sku === action.sku ? { ...i, qty: i.qty + 1 } : i))
          : [...state.items, { sku: action.sku, qty: 1 }],
      };
    }
    case 'remove':
      return { ...state, items: state.items.filter((i) => i.sku !== action.sku) };
    case 'setQty':
      return {
        ...state,
        items: action.qty <= 0
          ? state.items.filter((i) => i.sku !== action.sku)
          : state.items.map((i) => (i.sku === action.sku ? { ...i, qty: action.qty } : i)),
      };
    case 'applyCoupon':
      return { ...state, coupon: action.code.toUpperCase() };
    default:
      return state;
  }
}
