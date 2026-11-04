export class Stack<T> {
  #items: T[] = [];
  push(item: T): void {
    this.#items.push(item);
  }
  pop(): T | undefined {
    return this.#items.pop();
  }
  peek(): T | undefined {
    return this.#items[this.#items.length - 1];
  }
  get size(): number {
    return this.#items.length;
  }
  get isEmpty(): boolean {
    return this.#items.length === 0;
  }
}

export class Queue<T> {
  #items: T[] = [];
  enqueue(item: T): void {
    this.#items.push(item);
  }
  dequeue(): T | undefined {
    return this.#items.shift();
  }
  peek(): T | undefined {
    return this.#items[0];
  }
  get size(): number {
    return this.#items.length;
  }
}

const PAIRS: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

export function isBalanced(text: string): boolean {
  const stack = new Stack<string>();
  for (const ch of text) {
    if ('([{'.includes(ch)) stack.push(ch);
    else if (ch in PAIRS && stack.pop() !== PAIRS[ch]) return false;
  }
  return stack.isEmpty;
}
