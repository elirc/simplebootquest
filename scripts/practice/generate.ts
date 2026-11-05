/**
 * Generates every chapter's optional practice block (and a few promoted core
 * quests), deterministically. Run with:
 *
 *   npm run content:practice            # all chapters
 *   npm run content:practice -- sql     # only chapters whose folder contains "sql"
 *
 * Each code quest is verified with the real runner before it is written
 * (solution passes, starter fails); anything that fails is reported and
 * skipped. Then `npm run validate:content` checks everything again.
 */
import { existsSync } from 'node:fs';
import path from 'node:path';
import { ADVANCED, BASIC, dataQuest, dataQuests } from './families/data.ts';
import { FOUNDATIONS, MODERN, predictQuizzes } from './families/predict.ts';
import { typeQuizzes } from './families/types.ts';
import { sqlQuests } from './families/sql.ts';
import { expressPredictQuizzes, expressQuests } from './families/express.ts';
import { reactQuests } from './families/react.ts';
import { mutantQuests } from './families/mutants.ts';
import { NODE_GENS } from './families/node.ts';
import { AUTH_GENS, passwordQuests } from './families/auth.ts';
import { DEPLOY_GENS, DEVENV_GENS, TESTING_GENS } from './families/tooling.ts';
import { SD_GENS } from './families/sd.ts';
import { AE_GENS } from './families/ae.ts';
import { runnerQuizzes, validationQuests } from './families/extra.ts';
import { ENTITIES } from './entities.ts';
import { computedQuizzes } from './quizgen.ts';
import { clearGenerated, CONTENT, keepVerified, Rng, writeSpecs, type CodeSpec, type Spec } from './lib.ts';

const FS = '01-full-stack';
const SD = '02-system-design';
const AE = '03-agentic-engineering';
const P = (name: string) => `Practice: ${name}`;

/** Debug quests: the starter is a buggy (mutated) copy of a correct solution. */
function debugQuests(templates: typeof BASIC, seed: string, count: number, section: string): CodeSpec[] {
  const out: CodeSpec[] = [];
  const rng = new Rng(`${seed}:debug`);
  const combos = rng.shuffle(templates.flatMap((t) => ENTITIES.map((e) => ({ t, e }))));
  const bugs: [RegExp, string, string][] = [
    [/ > /, ' >= ', 'an off-by-one at a boundary'],
    [/ >= /, ' > ', 'an off-by-one at a boundary'],
    [/ < /, ' <= ', 'an off-by-one at a boundary'],
    [/b\.(\w+) - a\.\1/, 'a.$1 - b.$1', 'results in the wrong order'],
    [/a\.(\w+) - b\.\1/, 'b.$1 - a.$1', 'results in the wrong order'],
    [/\?\? 0\)/, '?? 1)', 'counts that are off by one'],
    [/, 0\);/, ', 1);', 'a total that is off by one'],
    [/ === /, ' !== ', 'an inverted condition'],
    [/\.toLowerCase\(\)/, '', 'case-sensitivity'],
    [/Math\.round/, 'Math.floor', 'wrong rounding'],
  ];
  for (const { t, e } of combos) {
    if (out.length >= count) break;
    const spec = dataQuest(e, t, section, 'js', `${seed}:dbg`);
    if (!spec) continue;
    const bug = bugs.find(([re]) => re.test(spec.solution));
    if (!bug) continue;
    out.push({
      ...spec,
      slug: spec.slug.replace('js-data-', 'debug-'),
      title: spec.title.replace(/^Data: /, 'Debug: '),
      starter: spec.solution.replace(bug[0], bug[1]),
      lesson: `# ${spec.title.replace(/^Data: /, 'Debug: ')}\n\nThis function was written by a teammate (or an AI agent) and **one test fails**. The bug causes ${bug[2]}. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.\n\n${spec.lesson.split('\n').slice(2).join('\n')}`,
      hints: ['Run the tests first and read the failing test\'s expected vs. received values carefully.', 'The bug is a single small change: look at comparisons, sort directions, starting values and rounding.'],
    });
  }
  return out;
}

const promote = <T extends Spec>(specs: T[], slugs: string[]) =>
  specs.map((s) => (slugs.includes(s.slug) ? { ...s, core: true, section: 'Core' } : s)).sort((a, b) => Number(!!b.core) - Number(!!a.core) || slugs.indexOf(a.slug) - slugs.indexOf(b.slug));

type Plan = Record<string, () => Promise<Spec[]>>;

const plan: Plan = {
  [`${FS}/00-dev-environment`]: async () => computedQuizzes(DEVENV_GENS, { section: P('Git, Terminal & Debugging'), prefix: 'dev', perGenerator: 12, seed: 'fs0', titlePrefix: 'Dev Drill' }),
  [`${FS}/01-javascript-foundations`]: async () => [
    ...(await keepVerified(dataQuests(BASIC, P('Data Wrangling'), 'js', 'fs1'), 'ch1 data')),
    ...(await keepVerified(debugQuests(BASIC, 'fs1', 120, P('Debugging')), 'ch1 debug')),
    ...(await predictQuizzes(FOUNDATIONS, { section: P('Predict the Output'), prefix: 'js', perGenerator: 25, seed: 'fs1' })),
  ],
  [`${FS}/02-modern-js-and-async`]: async () => [
    ...(await keepVerified(dataQuests(ADVANCED, P('Data Wrangling'), 'js', 'fs2'), 'ch2 data')),
    ...(await keepVerified(debugQuests(ADVANCED, 'fs2', 80, P('Debugging')), 'ch2 debug')),
    ...(await predictQuizzes(MODERN, { section: P('Predict the Output'), prefix: 'async', perGenerator: 22, seed: 'fs2' })),
  ],
  [`${FS}/03-typescript-essentials`]: async () => [
    ...(await keepVerified(dataQuests([...BASIC.slice(0, 6), ...ADVANCED.slice(0, 4)], P('Typed Data'), 'ts', 'fs3'), 'ch3 ts')),
    ...(await typeQuizzes({ section: P('Type Inference & Errors'), inferQuizzes: 70, errorQuizzes: 70, seed: 'fs3' })),
  ],
  [`${FS}/04-node-and-http`]: async () => computedQuizzes(NODE_GENS, { section: P('Node & HTTP Drills'), prefix: 'node', perGenerator: 90, seed: 'fs4', titlePrefix: 'Node Drill' }),
  [`${FS}/05-rest-apis-with-express`]: async () => [
    ...promote(await keepVerified(await expressQuests({ section: P('Express Routes'), seed: 'fs5', ids: ['list', 'get-one', 'filter', 'create', 'sort', 'paginate', 'errors', 'search', 'api-key'] }), 'ch5 express'), ['express-tasks-list', 'express-tasks-get-one', 'express-tasks-create', 'express-tasks-errors']),
    ...(await expressPredictQuizzes({ section: P('What Does the Server Respond?'), count: 130, seed: 'fs5' })),
  ],
  [`${FS}/06-databases-and-sql`]: async () => keepVerified(await sqlQuests({ section: P('SQL Queries'), seed: 'fs6' }), 'ch6 sql'),
  [`${FS}/07-crud-backend`]: async () => [
    ...promote(await keepVerified(await expressQuests({ section: P('CRUD Endpoints'), seed: 'fs7', ids: ['patch', 'delete', 'stats', 'duplicate', 'soft-delete', 'group'] }), 'ch7 express'), ['express-tasks-patch', 'express-tasks-delete']),
    ...(await keepVerified(validationQuests({ section: P('Input Validation'), seed: 'fs7' }), 'ch7 validation')),
  ],
  [`${FS}/08-auth-and-security`]: async () => [
    ...(await keepVerified(passwordQuests({ section: P('Password Policies'), seed: 'fs8', count: 80 }), 'ch8 passwords')),
    ...computedQuizzes(AUTH_GENS, { section: P('Auth & Security Drills'), prefix: 'auth', perGenerator: 90, seed: 'fs8', titlePrefix: 'Security Drill' }),
  ],
  [`${FS}/09-react-fundamentals`]: async () => promote(await keepVerified(reactQuests({ section: P('React Components'), kind: 'ui', seed: 'fs9' }), 'ch9 react'), ['react-ui-tasks-toggle', 'react-ui-tasks-filter', 'react-ui-tasks-todo', 'react-ui-tasks-reducer']),
  [`${FS}/10-react-and-apis`]: async () => promote(await keepVerified(reactQuests({ section: P('Data Fetching'), kind: 'data', seed: 'fs10' }), 'ch10 react'), ['react-data-tasks-load-list', 'react-data-tasks-create', 'react-data-tasks-optimistic-delete']),
  [`${FS}/11-unit-testing`]: async () => keepVerified(mutantQuests({ section: P('Test It (Mutation Graded)'), seed: 'fs11', count: 240 }), 'ch11 write-tests'),
  [`${FS}/12-testing`]: async () => [
    ...computedQuizzes(TESTING_GENS, { section: P('Assertions, Mocks & Strategy'), prefix: 'testing', perGenerator: 100, seed: 'fs12', titlePrefix: 'Testing Drill' }),
    ...(await runnerQuizzes({ section: P('How Test Runners Work'), seed: 'fs12', count: 80 })),
  ],
  [`${FS}/13-deploy-it`]: async () => computedQuizzes(DEPLOY_GENS, { section: P('Deploy & Operate Drills'), prefix: 'deploy', perGenerator: 70, seed: 'fs13', titlePrefix: 'Deploy Drill' }),
};

for (const [chapter, gens] of Object.entries(SD_GENS)) {
  plan[`${SD}/${chapter}`] = async () => computedQuizzes(gens, { section: P('Estimation & Design Drills'), prefix: `sd${chapter.slice(0, 2)}`, perGenerator: 60, seed: `sd:${chapter}`, titlePrefix: 'Design Drill' });
}

const AE_PLAN: Record<string, (keyof typeof AE_GENS)[]> = {
  '01-ae-mental-model': ['context', 'delegation', 'injection'],
  '02-ae-specs': ['delegation', 'verification', 'review'],
  '03-ae-context': ['context', 'injection', 'review'],
  '04-ae-workflows': ['delegation', 'debugging', 'verification'],
  '05-ae-verification': ['review', 'verification'],
  '06-ae-safety': ['injection', 'review'],
  '07-ae-debugging': ['debugging', 'review'],
  '08-ae-team': ['team', 'review', 'delegation'],
  '09-ae-capstone': ['review', 'injection', 'debugging', 'team'],
};
for (const [chapter, groups] of Object.entries(AE_PLAN)) {
  const gens = groups.flatMap((g) => AE_GENS[g]!);
  plan[`${AE}/${chapter}`] = async () => computedQuizzes(gens, { section: P('Agentic Engineering Drills'), prefix: `ae${chapter.slice(0, 2)}`, perGenerator: Math.ceil(100 / gens.length), seed: `ae:${chapter}`, titlePrefix: 'Agent Drill' });
}

const filter = process.argv[2];
let total = 0;
for (const [chapter, build] of Object.entries(plan)) {
  if (filter && !chapter.includes(filter)) continue;
  const dir = path.join(CONTENT, chapter);
  if (!existsSync(dir)) throw new Error(`Missing chapter folder ${dir}`);
  const started = Date.now();
  const specs = await build();
  clearGenerated(dir);
  writeSpecs(dir, specs);
  total += specs.length;
  console.log(`${chapter}: ${specs.length} quests (${specs.filter((s) => s.core).length} core) in ${((Date.now() - started) / 1000).toFixed(1)}s`);
}
console.log(`Generated ${total} quests.`);
