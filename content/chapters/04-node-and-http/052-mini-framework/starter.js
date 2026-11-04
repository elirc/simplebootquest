function createApp() {
  return {
    use() {},
    get() {},
    post() {},
    async handle(req, res) {
      res.status(404).json({ error: 'Not found' });
    },
  };
}
