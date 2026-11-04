class NotFoundError extends Error {}
class ValidationError extends Error {}

export function createTodoHandlers(service: any) {
  return {
    async list(req: any, res: any) {},
    async get(req: any, res: any) {},
    async create(req: any, res: any) {},
    async update(req: any, res: any) {},
    async remove(req: any, res: any) {},
  };
}
