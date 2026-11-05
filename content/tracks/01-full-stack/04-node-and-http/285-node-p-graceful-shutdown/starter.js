function createTracker() {
  return {
    track: (p) => p,
    active: () => 0,
    drain: async () => {},
  };
}
