export class TypedEmitter<E extends Record<string, unknown>> {
  #listeners = new Map<keyof E, Set<(payload: never) => void>>();

  on<K extends keyof E>(event: K, listener: (payload: E[K]) => void): () => void {
    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());
    this.#listeners.get(event)!.add(listener as (payload: never) => void);
    return () => {
      this.#listeners.get(event)?.delete(listener as (payload: never) => void);
    };
  }

  once<K extends keyof E>(event: K, listener: (payload: E[K]) => void): () => void {
    const off = this.on(event, (payload) => {
      off();
      listener(payload);
    });
    return off;
  }

  emit<K extends keyof E>(event: K, payload: E[K]): number {
    const set = this.#listeners.get(event);
    if (!set) return 0;
    const listeners = [...set];
    for (const l of listeners) (l as (p: E[K]) => void)(payload);
    return listeners.length;
  }

  clear(event?: keyof E): void {
    if (event === undefined) this.#listeners.clear();
    else this.#listeners.delete(event);
  }
}
