function addItem(cart, item) {
  return { ...cart, items: [...cart.items, item] };
}

function removeItem(cart, id) {
  return { ...cart, items: cart.items.filter((i) => i.id !== id) };
}

function applyDiscount(cart, percent) {
  return {
    ...cart,
    items: cart.items.map((item) => ({
      ...item,
      price: Math.round(item.price * (1 - percent / 100) * 100) / 100,
    })),
  };
}
