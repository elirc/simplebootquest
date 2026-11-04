function checkoutError(user, cart) {
  if (user) {
    if (user.verified) {
      // TODO: the rest
      return null;
    } else {
      return 'Please verify your email';
    }
  } else {
    return 'Please log in';
  }
}
