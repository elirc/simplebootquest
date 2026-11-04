function checkoutError(user, cart) {
  if (!user) return 'Please log in';
  if (!user.verified) return 'Please verify your email';
  if (cart.items.length === 0) return 'Your cart is empty';

  const unavailable = cart.items.find((item) => item.quantity > item.stock);
  if (unavailable) return `${unavailable.name} is out of stock`;

  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (total > user.creditLimit) return 'Over your credit limit';

  return null;
}
