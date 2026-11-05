// mutant: accepts fractional quantities
class Inventory {
  #stock = new Map();

  receive(sku, qty) {
    if (qty <= 0) throw new RangeError('Quantity must be a positive integer');
    this.#stock.set(sku, this.available(sku) + qty);
  }

  reserve(sku, qty) {
    if (this.available(sku) < qty) return false;
    this.#stock.set(sku, this.available(sku) - qty);
    return true;
  }

  available(sku) {
    return this.#stock.get(sku) ?? 0;
  }

  lowStock(threshold) {
    return [...this.#stock].filter(([, qty]) => qty <= threshold).map(([sku]) => sku).sort();
  }
}
