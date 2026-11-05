function compose(middlewares) {
  return async (ctx) => {
    for (const mw of middlewares) await mw(ctx, async () => {});
  };
}
