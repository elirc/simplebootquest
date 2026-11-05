function createDeferred() {
  let settled = false;
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = (v) => { settled = true; res(v); };
    reject = (e) => { settled = true; rej(e); };
  });
  return { promise, resolve, reject, settled: () => settled };
}

function waitForEvent(emitter, event, timeoutMs) {
  const d = createDeferred();
  const off = emitter.on(event, (payload) => d.resolve(payload));
  const timer = setTimeout(() => d.reject(new Error(`Timed out waiting for ${event}`)), timeoutMs);
  return d.promise.finally(() => {
    clearTimeout(timer);
    off();
  });
}
