type Issue = { path: string; message: string };

export class SchemaError extends Error {
  constructor(public issues: Issue[]) {
    super('Validation failed');
    this.name = 'SchemaError';
  }
}

interface Schema<T> {
  parse(value: unknown): T;
}

const join = (prefix: string, path: string) => (path ? `${prefix}.${path}` : prefix);

function primitive<T>(check: (v: unknown) => boolean, message: string): Schema<T> {
  return {
    parse(value) {
      if (!check(value)) throw new SchemaError([{ path: '', message }]);
      return value as T;
    },
  };
}

export const string = () => primitive<string>((v) => typeof v === 'string', 'Expected string');
export const number = () => primitive<number>((v) => typeof v === 'number' && !Number.isNaN(v), 'Expected number');
export const boolean = () => primitive<boolean>((v) => typeof v === 'boolean', 'Expected boolean');

export function optional<T>(schema: Schema<T>): Schema<T | undefined> {
  return { parse: (value) => (value === undefined ? undefined : schema.parse(value)) };
}

export function array<T>(schema: Schema<T>): Schema<T[]> {
  return {
    parse(value) {
      if (!Array.isArray(value)) throw new SchemaError([{ path: '', message: 'Expected array' }]);
      const issues: Issue[] = [];
      const out: T[] = [];
      value.forEach((item, i) => {
        try {
          out.push(schema.parse(item));
        } catch (e) {
          if (!(e instanceof SchemaError)) throw e;
          issues.push(...e.issues.map((iss) => ({ ...iss, path: join(String(i), iss.path) })));
        }
      });
      if (issues.length) throw new SchemaError(issues);
      return out;
    },
  };
}

export function object<S extends Record<string, Schema<unknown>>>(shape: S): Schema<{ [K in keyof S]: ReturnType<S[K]['parse']> }> {
  return {
    parse(value) {
      if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new SchemaError([{ path: '', message: 'Expected object' }]);
      }
      const input = value as Record<string, unknown>;
      const issues: Issue[] = [];
      const out: Record<string, unknown> = {};
      for (const [key, schema] of Object.entries(shape)) {
        try {
          const parsed = schema.parse(input[key]);
          if (parsed !== undefined) out[key] = parsed;
        } catch (e) {
          if (!(e instanceof SchemaError)) throw e;
          issues.push(...e.issues.map((iss) => ({ ...iss, path: join(key, iss.path) })));
        }
      }
      if (issues.length) throw new SchemaError(issues);
      return out as { [K in keyof S]: ReturnType<S[K]['parse']> };
    },
  };
}
