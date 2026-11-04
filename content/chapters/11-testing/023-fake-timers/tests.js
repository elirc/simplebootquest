test('timeouts run in order when time advances', () => {
  const clock = createFakeClock();
  const log = [];
  clock.setTimeout(() => log.push(`b@${clock.now()}`), 200);
  clock.setTimeout(() => log.push(`a@${clock.now()}`), 100);
  clock.setTimeout(() => log.push(`a2@${clock.now()}`), 100);
  clock.advance(150);
  expect(log).toEqual(['a@100', 'a2@100']);
  clock.advance(50);
  expect(log).toEqual(['a@100', 'a2@100', 'b@200']);
  expect(clock.now()).toBe(200);
  expect(clock.pending()).toBe(0);
});

test('clearTimeout', () => {
  const clock = createFakeClock();
  let ran = false;
  const id = clock.setTimeout(() => (ran = true), 10);
  clock.clearTimeout(id);
  clock.advance(100);
  expect(ran).toBe(false);
});

test('intervals repeat until cleared', () => {
  const clock = createFakeClock();
  const ticks = [];
  const id = clock.setInterval(() => ticks.push(clock.now()), 30);
  clock.advance(100);
  expect(ticks).toEqual([30, 60, 90]);
  clock.clearInterval(id);
  clock.advance(100);
  expect(ticks).toHaveLength(3);
});

test('timers scheduled by callbacks run within the window', () => {
  const clock = createFakeClock();
  const log = [];
  clock.setTimeout(() => {
    log.push('first');
    clock.setTimeout(() => log.push(`nested@${clock.now()}`), 10);
  }, 10);
  clock.advance(25);
  expect(log).toEqual(['first', 'nested@20']);
});
