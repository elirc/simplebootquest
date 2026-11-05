// mutant: mutates the existing item when adding
function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const exists = state.items.some((i) => i.sku === action.sku);
      return {
        ...state,
        items: exists
          ? state.items.map((i) => (i.sku === action.sku ? ((i.qty += 1), i) : i))
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
