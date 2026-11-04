type Op = { op: string; id?: number; data?: unknown };

export async function runBulk(operations: Op[], repo: any) {
  if (operations.length > 100) throw new Error('Too many operations');
  const results: { index: number; status: number; id?: number; error?: string }[] = [];

  for (const [index, operation] of operations.entries()) {
    try {
      switch (operation.op) {
        case 'create': {
          const created = await repo.create(operation.data);
          results.push({ index, status: 201, id: created.id });
          break;
        }
        case 'update':
          await repo.update(operation.id, operation.data);
          results.push({ index, status: 200 });
          break;
        case 'delete':
          await repo.delete(operation.id);
          results.push({ index, status: 204 });
          break;
        default:
          results.push({ index, status: 400, error: 'Unknown operation' });
      }
    } catch (err) {
      const e = err as { status?: number; message?: string };
      results.push({ index, status: e.status ?? 500, error: e.message ?? 'Error' });
    }
  }

  const succeeded = results.filter((r) => r.status < 400).length;
  return { results, succeeded, failed: results.length - succeeded };
}
