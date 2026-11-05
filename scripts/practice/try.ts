import { runnerQuizzes, validationQuests } from './families/extra.ts';
import { keepVerified } from './lib.ts';
const v = await keepVerified(validationQuests({ section: 'x', seed: 's' }), 'val');
const r = await runnerQuizzes({ section: 'x', seed: 's', count: 10 });
console.log(v.length, r.length);
console.log(r[0]!.questions[0]);
