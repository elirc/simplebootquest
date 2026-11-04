function addItem(cart, item) {
  cart.items.push(item);
  return cart;
}

function removeItem(cart, id) {
  const index = cart.items.findIndex((i) => i.id === id);
  cart.items.splice(index, 1);
  return cart;
}

function applyDiscount(cart, percent) {
  for (const item of cart.items) {
    item.price = Math.round(item.price * (1 - percent / 100) * 100) / 100;
  }
  return cart;
}
