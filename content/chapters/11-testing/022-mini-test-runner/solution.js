function createRunner() {
  const root = { name: null, parent: null, children: [], before: [], after: [] };
  let current = root;

  function chain(suite) {
    const out = [];
    for (let s = suite; s; s = s.parent) out.unshift(s);
    return out;
  }

  async function runSuite(suite, results) {
    for (const child of suite.children) {
      if (child.kind === 'suite') {
        await runSuite(child.suite, results);
        continue;
      }
      const suites = chain(suite);
      const name = [...suites.map((s) => s.name).filter(Boolean), child.name].join(' > ');
      let error = null;
      try {
        for (const s of suites) for (const hook of s.before) await hook();
        await child.fn();
      } catch (err) {
        error = err;
      }
      for (const s of [...suites].reverse()) {
        for (const hook of s.after) {
          try {
            await hook();
          } catch (err) {
            error ??= err;
          }
        }
      }
      results.push(error ? { name, passed: false, error: error.message } : { name, passed: true });
    }
  }

  return {
    describe(name, fn) {
      const suite = { name, parent: current, children: [], before: [], after: [] };
      current.children.push({ kind: 'suite', suite });
      const previous = current;
      current = suite;
      try {
        fn();
      } finally {
        current = previous;
      }
    },
    it(name, fn) {
      current.children.push({ kind: 'test', name, fn });
    },
    beforeEach(fn) {
      current.before.push(fn);
    },
    afterEach(fn) {
      current.after.push(fn);
    },
    async run() {
      const results = [];
      await runSuite(root, results);
      return results;
    },
  };
}
