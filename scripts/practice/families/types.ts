/**
 * TypeScript practice graded by the real TypeScript compiler. The in-browser
 * runner strips types, so these quizzes are where type-level reasoning gets
 * checked: "what type is inferred?" and "which line fails to compile?".
 * Answers come from the TypeScript checker itself (strict mode).
 */
import ts from 'typescript';
import { ENTITIES, capitalize, type Entity } from '../entities.ts';
import { chunk, question, Rng, type QuizQuestion, type QuizSpec } from '../lib.ts';

const OPTIONS: ts.CompilerOptions = { strict: true, target: ts.ScriptTarget.ES2022, lib: ['lib.es2023.d.ts'], noEmit: true, exactOptionalPropertyTypes: false };
const host = ts.createCompilerHost(OPTIONS);
const baseGetSourceFile = host.getSourceFile.bind(host);
// Lib files are parsed once and reused, and each program reuses the previous
// one, so checking a snippet costs milliseconds instead of re-reading lib.d.ts.
const libCache = new Map<string, ts.SourceFile | undefined>();
let previous: ts.Program | undefined;

function program(code: string) {
  const fileName = 'snippet.ts';
  const h: ts.CompilerHost = {
    ...host,
    getSourceFile: (name, lang) => {
      if (name === fileName) return ts.createSourceFile(fileName, code, ts.ScriptTarget.ES2022, true);
      if (!libCache.has(name)) libCache.set(name, baseGetSourceFile(name, lang));
      return libCache.get(name);
    },
    fileExists: (name) => name === fileName || host.fileExists(name),
    readFile: (name) => (name === fileName ? code : host.readFile(name)),
  };
  const p = ts.createProgram([fileName], OPTIONS, h, previous);
  previous = p;
  return { p, sf: p.getSourceFile(fileName)!, checker: p.getTypeChecker() };
}

/** The type TypeScript infers for `const x = …` (the last `x` declared in the snippet). */
export function inferredType(code: string): string {
  const { sf, checker } = program(code);
  let found: ts.Node | undefined;
  const visit = (n: ts.Node) => {
    if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.name.text === 'x') found = n.name;
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!found) throw new Error('no x');
  return checker.typeToString(checker.getTypeAtLocation(found), undefined, ts.TypeFormatFlags.NoTruncation);
}

/** 1-based line numbers that have type errors, plus the first message. */
export function typeErrors(code: string): { lines: number[]; message: string | null } {
  const { p, sf } = program(code);
  const diags = [...p.getSemanticDiagnostics(sf), ...p.getSyntacticDiagnostics(sf)];
  const lines = [...new Set(diags.map((d) => sf.getLineAndCharacterOfPosition(d.start ?? 0).line + 1))].sort((a, b) => a - b);
  return { lines, message: diags[0] ? ts.flattenDiagnosticMessageText(diags[0].messageText, ' ') : null };
}

interface InferCase {
  code: string;
  distractors: string[];
}

const LIT_WORDS = ['draft', 'paid', 'open', 'admin', 'guest', 'error', 'ok', 'todo'];

function inferCases(r: Rng): InferCase {
  const n = r.int(1, 99);
  const w = r.pick(LIT_WORDS);
  const w2 = r.pick(LIT_WORDS.filter((x) => x !== w));
  const forms: (() => InferCase)[] = [
    () => ({ code: `const x = ${n};`, distractors: ['number', 'any', `${n} | number`] }),
    () => ({ code: `let x = ${n};`, distractors: [`${n}`, 'any', 'unknown'] }),
    () => ({ code: `let x = "${w}";`, distractors: [`"${w}"`, 'any', 'String'] }),
    () => ({ code: `const x = "${w}";`, distractors: ['string', 'String', `"${w}" | string`] }),
    () => ({ code: `const x = [${n}, "${w}"];`, distractors: [`[number, string]`, `(${n} | "${w}")[]`, 'any[]'] }),
    () => ({ code: `const x = [${n}, "${w}"] as const;`, distractors: [`(string | number)[]`, `[number, string]`, `readonly (string | number)[]`] }),
    () => ({ code: `const x = { id: ${n}, status: "${w}" };`, distractors: [`{ id: ${n}; status: "${w}"; }`, `{ readonly id: number; readonly status: string; }`, 'object'] }),
    () => ({ code: `const x = { id: ${n}, status: "${w}" } as const;`, distractors: [`{ id: number; status: string; }`, `{ id: ${n}; status: "${w}"; }`, `Readonly<object>`] }),
    () => ({ code: `const x = Math.random() > 0.5 ? "${w}" : ${n};`, distractors: ['string | number', `"${w}"`, 'any'] }),
    () => ({ code: `const x = [${n}, ${n + 1}].map(String);`, distractors: ['number[]', 'String[]', 'any[]'] }),
    () => ({ code: `const x = [${n}, ${n + 1}].find((v) => v > ${n});`, distractors: ['number', 'number[]', 'boolean'] }),
    () => ({ code: `const x = Object.keys({ ${w}: ${n} });`, distractors: [`"${w}"[]`, `(keyof { ${w}: number })[]`, 'string'] }),
    () => ({ code: `const x = JSON.parse("${n}");`, distractors: ['unknown', 'number', 'string'] }),
    () => ({ code: `const x = new Map([["${w}", ${n}]]);`, distractors: [`Map<"${w}", ${n}>`, 'Map<any, any>', `Record<string, number>`] }),
    () => ({ code: `const x = Promise.resolve(${n});`, distractors: ['number', `Promise<${n}>`, 'Promise<any>'] }),
    () => ({ code: `const x = async () => ${n};`, distractors: ['() => number', `() => Promise<${n}>`, 'Promise<number>'] }),
    () => ({ code: `const x = new Set(["${w}", "${w2}"]);`, distractors: [`Set<"${w}" | "${w2}">`, 'string[]', 'Set<any>'] }),
    () => ({ code: `const x = "${w}".split("");`, distractors: ['string', 'char[]', `"${w}"[]`] }),
    () => ({ code: `declare const n: number;\nconst x = n > ${n} && "${w}";`, distractors: [`"${w}"`, 'boolean', `string | boolean`] }),
    () => ({ code: `const x = (["${w}", "${w2}"] as const)[0];`, distractors: ['string', `"${w}" | "${w2}"`, `readonly ["${w}", "${w2}"]`] }),
    () => ({ code: `declare const id: string | null;\nconst x = id ?? ${n};`, distractors: ['string | null', `string | null | ${n}`, 'string'] }),
    () => ({ code: `declare const v: string | number;\nconst x = typeof v === "string" ? v.length : v;`, distractors: ['string | number', 'string', 'any'] }),
    () => ({ code: `function pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([${n}, ${n + 1}]);`, distractors: ['number', 'unknown', `${n} | undefined`] }),
    () => ({ code: `const x = [{ id: ${n} }, { id: ${n + 1}, label: "${w}" }];`, distractors: [`{ id: number; label: string; }[]`, `({ id: number; } & { label: string; })[]`, `object[]`] }),
    () => ({ code: `const statuses = ["${w}", "${w2}"] as const;\nconst x: (typeof statuses)[number] = "${w}";`, distractors: ['string', `"${w}" | "${w2}"`, `readonly ["${w}", "${w2}"]`] }),
    () => ({ code: `declare const s: "${w}" | "${w2}";\nlet x = s;`, distractors: ['string', `"${w}"`, 'any'] }),
    () => ({ code: `const x = [${n}, null, ${n + 2}].filter((v) => v !== null);`, distractors: ['(number | null)[]', 'number', 'null[]'] }),
    () => ({ code: `const x = Array.from({ length: ${n % 5 + 1} }, (_, i) => i * 2);`, distractors: ['unknown[]', 'any[]', `${n % 5 + 1}[]`] }),
  ];
  return r.pick(forms)();
}

function errorCase(e: Entity, r: Rng): { code: string; wrongLine: number } {
  const I = capitalize(e.one);
  const nf = r.pick(e.nums);
  const cf = r.pick(e.cats);
  const iface = `interface ${I} {\n  id: number;\n  ${e.nameField}: string;\n  ${nf.name}: number;\n  ${cf.name}: ${cf.values.map((v) => JSON.stringify(v)).join(' | ')};\n  note?: string;\n}`;
  const valid = [
    `const a: ${I} = { id: 1, ${e.nameField}: "x", ${nf.name}: 2, ${cf.name}: ${JSON.stringify(cf.values[0])} };`,
    `const total = items.reduce((sum, it) => sum + it.${nf.name}, 0);`,
    `const names: string[] = items.map((it) => it.${e.nameField});`,
    `const first = items[0]?.${e.nameField} ?? "none";`,
    `const noteLength = items[0]?.note?.length;`,
    `items.sort((a, b) => a.${nf.name} - b.${nf.name});`,
    `const ok = items.some((it) => it.${cf.name} === ${JSON.stringify(cf.values[1] ?? cf.values[0])});`,
    `const copy: ${I}[] = items.map((it) => ({ ...it, ${nf.name}: it.${nf.name} + 1 }));`,
  ];
  const invalid = [
    `const b: ${I} = { id: 2, ${e.nameField}: "y", ${cf.name}: ${JSON.stringify(cf.values[0])} };`,
    `items[0].${nf.name} = "${r.int(1, 9)}";`,
    `const bad = items.map((it) => it.${nf.name}s);`,
    `const s: ${I}["${cf.name}"] = "unknown-value";`,
    `const len = items.find((it) => it.id === 1).${e.nameField}.length;`,
    `const upper = items[0]?.note.toUpperCase();`,
    `const n: number = items[0]?.${e.nameField} ?? 0;`,
    `items.push({ id: 3, ${e.nameField}: "z", ${nf.name}: 1 });`,
  ];
  const lines = r.sample(valid, 3);
  const bad = r.pick(invalid);
  const pos = r.int(0, 3);
  lines.splice(pos, 0, bad);
  const code = `${iface}\ndeclare const items: ${I}[];\n${lines.join('\n')}`;
  const offset = iface.split('\n').length + 1;
  return { code, wrongLine: offset + pos + 1 };
}

export async function typeQuizzes(opts: { section: string; inferQuizzes: number; errorQuizzes: number; seed: string }): Promise<QuizSpec[]> {
  const rng = new Rng(`${opts.seed}:types`);
  const out: QuizSpec[] = [];
  const seen = new Set<string>();

  const infer: QuizQuestion[] = [];
  let guard = 0;
  while (infer.length < opts.inferQuizzes * 5 && guard++ < opts.inferQuizzes * 100) {
    const c = inferCases(rng);
    if (seen.has(c.code)) continue;
    seen.add(c.code);
    const answer = inferredType(c.code);
    const distractors = c.distractors.filter((d) => d !== answer);
    if (distractors.length < 3) distractors.push('never', 'unknown', 'any');
    infer.push(question(rng, `What type does TypeScript infer for \`x\`?\n\n\`\`\`ts\n${c.code}\n\`\`\``, `\`${answer}\``, distractors.map((d) => `\`${d}\``), `TypeScript infers \`${answer}\`.`));
  }
  chunk(infer, 5).forEach((qs, i) =>
    out.push({
      kind: 'quiz',
      slug: `ts-infer-${i + 1}`,
      title: `Type Inference Drill #${i + 1}`,
      section: opts.section,
      lesson: `# Type Inference Drill #${i + 1}\n\nTypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:\n\n- \`const\` keeps **literal** types (\`"draft"\`), \`let\` **widens** them (\`string\`).\n- \`as const\` makes everything \`readonly\` and literal.\n- Array methods like \`find\` can return \`undefined\`.\n- Narrowing (\`typeof\`, \`??\`, \`!== null\`) changes the type.\n\nThese answers come from the real TypeScript compiler in strict mode.`,
      questions: qs,
      xp: 10,
    }),
  );

  const errs: QuizQuestion[] = [];
  guard = 0;
  while (errs.length < opts.errorQuizzes * 5 && guard++ < opts.errorQuizzes * 100) {
    const e = rng.pick(ENTITIES);
    const c = errorCase(e, rng);
    if (seen.has(c.code)) continue;
    seen.add(c.code);
    const result = typeErrors(c.code);
    // Keep only snippets where the compiler agrees: exactly the planted line fails.
    if (result.lines.length !== 1 || result.lines[0] !== c.wrongLine) continue;
    const numbered = c.code.split('\n').map((l, i) => `${String(i + 1).padStart(2)} ${l}`).join('\n');
    const options = Array.from({ length: 4 }, (_, k) => `Line ${c.wrongLine - 3 + k <= c.wrongLine ? c.wrongLine : c.wrongLine}`);
    void options;
    const total = c.code.split('\n').length;
    const candidates = [c.wrongLine, ...rng.sample(Array.from({ length: 4 }, (_, k) => total - 3 + k).filter((l) => l !== c.wrongLine), 3)];
    errs.push(question(rng, `Which line fails to type-check (strict mode)?\n\n\`\`\`ts\n${numbered}\n\`\`\``, `Line ${c.wrongLine}`, candidates.slice(1).map((l) => `Line ${l}`), `Line ${c.wrongLine}: ${result.message}`));
  }
  chunk(errs, 5).forEach((qs, i) =>
    out.push({
      kind: 'quiz',
      slug: `ts-errors-${i + 1}`,
      title: `Spot the Type Error #${i + 1}`,
      section: opts.section,
      lesson: `# Spot the Type Error #${i + 1}\n\nEach snippet has exactly **one** line that the TypeScript compiler rejects in strict mode. Find it before you run anything. That's exactly what your editor's red squiggles do for you.\n\nCommon causes: a missing required property, assigning the wrong type, a typo in a property name, a value outside a union of literals, or using a value that might be \`undefined\`.\n\nThe answers are checked by the real TypeScript compiler, and the explanation shows its error message.`,
      questions: qs,
      xp: 10,
    }),
  );
  return out;
}
