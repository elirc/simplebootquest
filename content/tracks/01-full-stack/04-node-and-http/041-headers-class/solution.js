class HttpHeaders {
  #map = new Map();

  constructor(init = {}) {
    for (const [name, value] of Object.entries(init)) this.append(name, value);
  }

  set(name, value) {
    this.#map.set(name.toLowerCase(), [String(value)]);
  }

  append(name, value) {
    const key = name.toLowerCase();
    this.#map.set(key, [...(this.#map.get(key) ?? []), String(value)]);
  }

  get(name) {
    const values = this.#map.get(name.toLowerCase());
    return values ? values.join(', ') : null;
  }

  has(name) {
    return this.#map.has(name.toLowerCase());
  }

  delete(name) {
    this.#map.delete(name.toLowerCase());
  }

  entries() {
    return [...this.#map.keys()].sort().map((k) => [k, this.get(k)]);
  }
}
