function cartReducer(state, action) {
  if (action.type === 'add') state.items.push({ ...action.product, qty: 1 });
  return state;
}

function cartTotals(state) {
  return { count: state.items.length, totalCents: 0 };
}

function CartSummary({ state }) {
  return <p>Cart</p>;
}
