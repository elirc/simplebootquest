class Counter {
  #value;
  #start;
  #min;
  #max;
  #step;
  #history;

  constructor({ start = 0, min = -Infinity, max = Infinity, step = 1 } = {}) {
    if (start < min || start > max) throw new RangeError('start is out of bounds');
    this.#value = this.#start = start;
    this.#min = min;
    this.#max = max;
    this.#step = step;
    this.#history = [start];
  }

  #set(v) {
    this.#value = Math.min(this.#max, Math.max(this.#min, v));
    this.#history.push(this.#value);
    return this;
  }

  increment() {
    return this.#set(this.#value + this.#step);
  }

  decrement() {
    return this.#set(this.#value - this.#step);
  }

  reset() {
    return this.#set(this.#start);
  }

  get value() {
    return this.#value;
  }

  get history() {
    return [...this.#history];
  }
}
