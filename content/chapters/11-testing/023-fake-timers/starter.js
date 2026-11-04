function createFakeClock() {
  let time = 0;
  return {
    now: () => time,
    setTimeout(fn, ms) {},
    clearTimeout(id) {},
    setInterval(fn, ms) {},
    clearInterval(id) {},
    advance(ms) { time += ms; },
    pending: () => 0,
  };
}
