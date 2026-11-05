function compose(middlewares) {
  return (ctx) => {
    let lastIndex = -1;
    const dispatch = async (i) => {
      if (i <= lastIndex) throw new Error('next() called multiple times');
      lastIndex = i;
      const mw = middlewares[i];
      if (!mw) return;
      await mw(ctx, () => dispatch(i + 1));
    };
    return dispatch(0);
  };
}
