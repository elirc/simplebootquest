export abstract class Exporter<T> {
  export(rows: T[]): string {
    return [...this.header(), ...rows.map((r) => this.row(r))].join('\n');
  }
  protected abstract header(): string[];
  protected abstract row(r: T): string;
}

export class CsvExporter<T> extends Exporter<T> {
  constructor(private readonly columns: (keyof T)[]) {
    super();
  }
  private cell(v: unknown): string {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }
  protected header() {
    return [this.columns.map((c) => this.cell(c)).join(',')];
  }
  protected row(r: T) {
    return this.columns.map((c) => this.cell(r[c])).join(',');
  }
}

export class MarkdownExporter<T> extends Exporter<T> {
  constructor(private readonly columns: (keyof T)[]) {
    super();
  }
  protected header() {
    return [`| ${this.columns.join(' | ')} |`, `| ${this.columns.map(() => '---').join(' | ')} |`];
  }
  protected row(r: T) {
    return `| ${this.columns.map((c) => String(r[c] ?? '')).join(' | ')} |`;
  }
}
