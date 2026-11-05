// mutant: changes stock even when the reservation fails
class Inventory {
  #stock = new Map();

  receive(sku, qty) {
    if (!Number.isInteger(qty) || qty <= 0) throw new RangeError('Quantity must be a positive integer');
    this.#stock.set(sku, this.available(sku) + qty);
  }

  reserve(sku, qty) {
    this.#stock.set(sku, this.available(sku) - qty);
    if (this.available(sku) < 0) return false;
    return true;
  }

  available(sku) {
    return this.#stock.get(sku) ?? 0;
  }

  lowStock(threshold) {
    return [...this.#stock].filter(([, qty]) => qty <= threshold).map(([sku]) => sku).sort();
  }
}
