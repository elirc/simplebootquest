---
slug: "ts-p-abstract-classes"
title: "Practice: Abstract Classes & the Template Method"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["Let `header()` return an array of lines, so Markdown can return two."]
---
# Practice: Abstract Classes & the Template Method

An **abstract class** can't be instantiated directly. It defines the shared algorithm and leaves some steps to subclasses. That's the *template method* pattern:

```ts
abstract class Exporter<T> {
  export(rows: T[]): string {           // the shared algorithm
    return [this.header(), ...rows.map((r) => this.row(r))].join('\n');
  }
  protected abstract header(): string;  // subclasses fill in the steps
  protected abstract row(r: T): string;
}
```

## Your task
Implement `abstract class Exporter<T>` as above, then `CsvExporter` (columns from a constructor `columns: (keyof T)[]`, comma-separated, quoting values that contain commas or quotes, with `"` doubled to `""`) and `MarkdownExporter` (a `| a | b |` header, a `| --- | --- |` separator, then the rows).
