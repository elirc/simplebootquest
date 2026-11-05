type Op = '=' | '!=' | '>' | '<' | '>=' | '<=' | 'like';

export class QueryBuilder {
  private wheres: { column: string; op: Op; value: unknown }[] = [];
  private order: { column: string; dir: 'asc' | 'desc' } | null = null;
  private max: number | null = null;

  constructor(private readonly table: string) {
    QueryBuilder.check(table);
  }

  private static check(name: string) {
    if (!/^[a-z_][a-z0-9_]*$/.test(name)) throw new Error(`Invalid column: ${name}`);
  }

  where(column: string, op: Op, value: unknown): this {
    QueryBuilder.check(column);
    this.wheres.push({ column, op, value });
    return this;
  }

  orderBy(column: string, dir: 'asc' | 'desc' = 'asc'): this {
    QueryBuilder.check(column);
    this.order = { column, dir };
    return this;
  }

  limit(n: number): this {
    this.max = n;
    return this;
  }

  toSQL(): { text: string; values: unknown[] } {
    const values: unknown[] = [];
    let text = `SELECT * FROM ${this.table}`;
    if (this.wheres.length) {
      const parts = this.wheres.map((w) => {
        values.push(w.value);
        return `${w.column} ${w.op === 'like' ? 'LIKE' : w.op} $${values.length}`;
      });
      text += ` WHERE ${parts.join(' AND ')}`;
    }
    if (this.order) text += ` ORDER BY ${this.order.column} ${this.order.dir.toUpperCase()}`;
    if (this.max !== null) {
      values.push(this.max);
      text += ` LIMIT $${values.length}`;
    }
    return { text, values };
  }
}
