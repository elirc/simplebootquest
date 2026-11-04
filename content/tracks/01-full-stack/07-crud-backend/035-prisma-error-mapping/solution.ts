type PrismaLike = { code: string; meta?: { target?: string[] | string } };

function isPrismaError(err: unknown): err is PrismaLike {
  return typeof err === 'object' && err !== null && typeof (err as PrismaLike).code === 'string' && /^P\d{4}$/.test((err as PrismaLike).code);
}

function isHttpError(err: unknown): err is { status: number; message: string } {
  return typeof err === 'object' && err !== null && typeof (err as { status?: unknown }).status === 'number' && typeof (err as { message?: unknown }).message === 'string';
}

export function toHttpError(err: unknown): { status: number; body: Record<string, unknown> } {
  if (isPrismaError(err)) {
    switch (err.code) {
      case 'P2002': {
        const target = err.meta?.target;
        return { status: 409, body: { error: 'Already exists', fields: Array.isArray(target) ? target : target ? [target] : [] } };
      }
      case 'P2025':
        return { status: 404, body: { error: 'Not found' } };
      case 'P2003':
        return { status: 400, body: { error: 'Related record does not exist' } };
    }
  }
  if (isHttpError(err)) return { status: err.status, body: { error: err.message } };
  return { status: 500, body: { error: 'Internal Server Error' } };
}
