function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) return { items: state.items.map((i) => (i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i)) };
      return { items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case 'setQty':
      if (action.qty <= 0) return { items: state.items.filter((i) => i.id !== action.id) };
      return { items: state.items.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i)) };
    case 'remove':
      return { items: state.items.filter((i) => i.id !== action.id) };
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

function cartTotals(state) {
  return state.items.reduce((acc, i) => ({ count: acc.count + i.qty, totalCents: acc.totalCents + i.qty * i.priceCents }), { count: 0, totalCents: 0 });
}

function CartSummary({ state }) {
  const { count, totalCents } = cartTotals(state);
  if (count === 0) return <p>Your cart is empty</p>;
  return <p>{`${count} item(s): $${(totalCents / 100).toFixed(2)}`}</p>;
}
