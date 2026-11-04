class NotFoundError extends Error {}
class ValidationError extends Error {}

type Handler = (req: any, res: any) => Promise<unknown>;

function parseId(raw: unknown): number | null {
  if (typeof raw !== 'string' || !/^\d+$/.test(raw)) return null;
  const id = Number(raw);
  return id > 0 ? id : null;
}

function handleErrors(fn: Handler): Handler {
  return async (req, res) => {
    try {
      return await fn(req, res);
    } catch (err) {
      if (err instanceof NotFoundError) return res.status(404).json({ error: err.message });
      if (err instanceof ValidationError) return res.status(400).json({ error: err.message });
      throw err;
    }
  };
}

function withId(fn: (req: any, res: any, id: number) => Promise<unknown>): Handler {
  return handleErrors(async (req, res) => {
    const id = parseId(req.params?.id);
    if (id === null) return res.status(400).json({ error: 'Invalid id' });
    return fn(req, res, id);
  });
}

export function createTodoHandlers(service: any) {
  return {
    list: handleErrors(async (req, res) => {
      res.status(200).json({ data: await service.list(req.user.id) });
    }),
    get: withId(async (req, res, id) => {
      res.status(200).json(await service.get(req.user.id, id));
    }),
    create: handleErrors(async (req, res) => {
      res.status(201).json(await service.create(req.user.id, req.body));
    }),
    update: withId(async (req, res, id) => {
      res.status(200).json(await service.update(req.user.id, id, req.body));
    }),
    remove: withId(async (req, res, id) => {
      await service.remove(req.user.id, id);
      res.status(204).end();
    }),
  };
}
