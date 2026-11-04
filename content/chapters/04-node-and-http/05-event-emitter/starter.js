class Emitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {}

  off(event, listener) {}

  once(event, listener) {}

  emit(event, ...args) {}

  listenerCount(event) {}
}
