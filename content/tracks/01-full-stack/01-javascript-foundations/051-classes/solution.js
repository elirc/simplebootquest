class ShoppingCart {
  #items = [];

  add(name, price, qty = 1) {
    const existing = this.#items.find((i) => i.name === name);
    if (existing) existing.qty += qty;
    else this.#items.push({ name, price, qty });
    return this;
  }

  remove(name) {
    this.#items = this.#items.filter((i) => i.name !== name);
    return this;
  }

  get count() {
    return this.#items.reduce((sum, i) => sum + i.qty, 0);
  }

  get total() {
    return this.#items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  items() {
    return this.#items.map((i) => ({ ...i }));
  }
}
