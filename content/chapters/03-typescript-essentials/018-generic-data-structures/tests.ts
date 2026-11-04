test('stack is LIFO', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.peek()).toBe(2);
  expect(s.pop()).toBe(2);
  expect(s.size).toBe(1);
  expect(s.isEmpty).toBe(false);
  s.pop();
  expect(s.pop()).toBeUndefined();
  expect(s.isEmpty).toBe(true);
});

test('queue is FIFO', () => {
  const q = new Queue();
  q.enqueue('a');
  q.enqueue('b');
  expect(q.peek()).toBe('a');
  expect(q.dequeue()).toBe('a');
  expect(q.size).toBe(1);
});

test('isBalanced', () => {
  expect(isBalanced('function f() { return [1, (2)]; }')).toBe(true);
  expect(isBalanced('([)]')).toBe(false);
  expect(isBalanced('((')).toBe(false);
  expect(isBalanced(')(')).toBe(false);
  expect(isBalanced('')).toBe(true);
});
