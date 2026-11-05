/**
 * Small, realistic datasets for data-wrangling, SQL and API practice.
 * Each entity has a name field, numeric fields and categorical fields, so
 * generic task templates ("filter by a number", "group by a category") make
 * sense for all of them. Rows are generated deterministically.
 */
import { Rng } from './lib.ts';

export interface NumField {
  name: string;
  label: string;
  min: number;
  max: number;
  decimals?: number;
}
export interface CatField {
  name: string;
  label: string;
  values: string[];
}
export interface Entity {
  /** Singular and plural nouns, e.g. product / products. */
  one: string;
  many: string;
  /** Table/variable-friendly plural in camelCase, e.g. products. */
  key: string;
  nameField: string;
  names: string[];
  nums: NumField[];
  cats: CatField[];
  bool?: { name: string; label: string };
}

export const ENTITIES: Entity[] = [
  { one: 'product', many: 'products', key: 'products', nameField: 'name', names: ['Desk Lamp', 'Notebook', 'Backpack', 'Water Bottle', 'Headphones', 'Mouse Pad', 'Pen Set', 'Monitor Arm', 'Webcam', 'Plant Pot', 'Coffee Mug', 'USB Hub'], nums: [{ name: 'price', label: 'price', min: 3, max: 120 }, { name: 'stock', label: 'stock', min: 0, max: 60 }], cats: [{ name: 'category', label: 'category', values: ['office', 'tech', 'home'] }], bool: { name: 'onSale', label: 'on sale' } },
  { one: 'movie', many: 'movies', key: 'movies', nameField: 'title', names: ['Night Train', 'Blue River', 'Paper Moon', 'Iron Garden', 'Last Light', 'Quiet Storm', 'Glass City', 'Red Harbor', 'Silver Fox', 'Open Road', 'Winter Kings', 'Cloud Atlas'], nums: [{ name: 'year', label: 'release year', min: 1980, max: 2024 }, { name: 'minutes', label: 'runtime', min: 82, max: 175 }, { name: 'rating', label: 'rating', min: 4, max: 9.5, decimals: 1 }], cats: [{ name: 'genre', label: 'genre', values: ['drama', 'comedy', 'sci-fi', 'thriller'] }] },
  { one: 'employee', many: 'employees', key: 'employees', nameField: 'name', names: ['Ada', 'Grace', 'Linus', 'Margaret', 'Alan', 'Katherine', 'Dennis', 'Barbara', 'Ken', 'Radia', 'Tim', 'Frances'], nums: [{ name: 'salary', label: 'salary', min: 42000, max: 160000 }, { name: 'yearsAtCompany', label: 'years at the company', min: 0, max: 15 }], cats: [{ name: 'team', label: 'team', values: ['platform', 'product', 'data'] }, { name: 'level', label: 'level', values: ['junior', 'mid', 'senior'] }], bool: { name: 'remote', label: 'remote' } },
  { one: 'book', many: 'books', key: 'books', nameField: 'title', names: ['Clean Code', 'Dune', 'Emma', 'Hamlet', 'Kindred', 'Matilda', 'Neuromancer', 'Persuasion', 'Rebecca', 'Siddhartha', 'Ulysses', 'Walden'], nums: [{ name: 'pages', label: 'page count', min: 120, max: 780 }, { name: 'year', label: 'publication year', min: 1813, max: 2015 }], cats: [{ name: 'genre', label: 'genre', values: ['fiction', 'classic', 'tech', 'sci-fi'] }], bool: { name: 'available', label: 'available' } },
  { one: 'order', many: 'orders', key: 'orders', nameField: 'code', names: ['A-100', 'A-101', 'A-102', 'B-200', 'B-201', 'C-300', 'C-301', 'C-302', 'D-400', 'D-401', 'E-500', 'E-501'], nums: [{ name: 'totalCents', label: 'total (in cents)', min: 500, max: 25000 }, { name: 'items', label: 'item count', min: 1, max: 9 }], cats: [{ name: 'status', label: 'status', values: ['pending', 'paid', 'shipped', 'cancelled'] }, { name: 'country', label: 'country', values: ['UK', 'US', 'DE'] }] },
  { one: 'city', many: 'cities', key: 'cities', nameField: 'name', names: ['Lisbon', 'Oslo', 'Lagos', 'Lima', 'Seoul', 'Austin', 'Cairo', 'Hanoi', 'Quito', 'Perth', 'Turin', 'Accra'], nums: [{ name: 'population', label: 'population (thousands)', min: 300, max: 9900 }, { name: 'avgTemp', label: 'average temperature', min: 2, max: 29 }], cats: [{ name: 'continent', label: 'continent', values: ['Europe', 'Africa', 'Americas', 'Asia', 'Oceania'] }] },
  { one: 'task', many: 'tasks', key: 'tasks', nameField: 'title', names: ['Write tests', 'Fix login', 'Update deps', 'Design schema', 'Review PR', 'Deploy API', 'Add search', 'Refactor auth', 'Write docs', 'Plan sprint', 'Fix CSS', 'Add caching'], nums: [{ name: 'estimate', label: 'estimate (hours)', min: 1, max: 16 }, { name: 'priority', label: 'priority', min: 1, max: 5 }], cats: [{ name: 'status', label: 'status', values: ['todo', 'doing', 'done'] }, { name: 'assignee', label: 'assignee', values: ['ada', 'grace', 'linus'] }], bool: { name: 'blocked', label: 'blocked' } },
  { one: 'song', many: 'songs', key: 'songs', nameField: 'title', names: ['Sunrise', 'Echoes', 'Gravity', 'Paper Planes', 'Neon', 'Riverside', 'Static', 'Halo', 'Drift', 'Lanterns', 'Velvet', 'Tides'], nums: [{ name: 'seconds', label: 'length in seconds', min: 120, max: 420 }, { name: 'plays', label: 'play count', min: 10, max: 9800 }], cats: [{ name: 'artist', label: 'artist', values: ['Nova', 'The Pines', 'Kairo'] }, { name: 'mood', label: 'mood', values: ['calm', 'happy', 'dark'] }] },
  { one: 'transaction', many: 'transactions', key: 'transactions', nameField: 'reference', names: ['TX-01', 'TX-02', 'TX-03', 'TX-04', 'TX-05', 'TX-06', 'TX-07', 'TX-08', 'TX-09', 'TX-10', 'TX-11', 'TX-12'], nums: [{ name: 'amount', label: 'amount', min: -400, max: 1200 }, { name: 'day', label: 'day of the month', min: 1, max: 28 }], cats: [{ name: 'category', label: 'category', values: ['food', 'rent', 'salary', 'travel', 'fun'] }] },
  { one: 'student', many: 'students', key: 'students', nameField: 'name', names: ['Amara', 'Bilal', 'Chen', 'Dara', 'Elif', 'Femi', 'Gita', 'Hugo', 'Ines', 'Jonah', 'Keiko', 'Luca'], nums: [{ name: 'score', label: 'score', min: 31, max: 100 }, { name: 'age', label: 'age', min: 17, max: 34 }], cats: [{ name: 'course', label: 'course', values: ['web', 'data', 'design'] }], bool: { name: 'graduated', label: 'graduated' } },
  { one: 'recipe', many: 'recipes', key: 'recipes', nameField: 'name', names: ['Pancakes', 'Ramen', 'Falafel', 'Risotto', 'Tacos', 'Curry', 'Paella', 'Shakshuka', 'Pho', 'Lasagne', 'Gyoza', 'Chili'], nums: [{ name: 'minutes', label: 'cooking time', min: 10, max: 120 }, { name: 'calories', label: 'calories', min: 180, max: 950 }], cats: [{ name: 'cuisine', label: 'cuisine', values: ['italian', 'asian', 'mexican', 'middle-eastern'] }, { name: 'difficulty', label: 'difficulty', values: ['easy', 'medium', 'hard'] }], bool: { name: 'vegetarian', label: 'vegetarian' } },
  { one: 'flight', many: 'flights', key: 'flights', nameField: 'number', names: ['BA117', 'LH400', 'AF22', 'KL641', 'UA90', 'DL15', 'EK3', 'QF1', 'SQ25', 'TK1', 'IB6251', 'AA100'], nums: [{ name: 'durationMin', label: 'duration (minutes)', min: 55, max: 840 }, { name: 'delayMin', label: 'delay (minutes)', min: 0, max: 180 }, { name: 'seats', label: 'free seats', min: 0, max: 48 }], cats: [{ name: 'airline', label: 'airline group', values: ['oneworld', 'skyteam', 'star'] }] },
  { one: 'repo', many: 'repos', key: 'repos', nameField: 'name', names: ['api-gateway', 'web-app', 'design-system', 'billing', 'auth-service', 'cli', 'docs', 'mobile', 'search', 'analytics', 'infra', 'notifier'], nums: [{ name: 'stars', label: 'star count', min: 0, max: 5400 }, { name: 'openIssues', label: 'open issues', min: 0, max: 140 }], cats: [{ name: 'language', label: 'language', values: ['TypeScript', 'Go', 'Python'] }], bool: { name: 'archived', label: 'archived' } },
  { one: 'hotel', many: 'hotels', key: 'hotels', nameField: 'name', names: ['Harbour View', 'Old Mill', 'Sky Garden', 'The Grand', 'Pine Lodge', 'Riverside Inn', 'Cityloft', 'Sea Breeze', 'Maple House', 'Northern Star', 'Olive Court', 'Station Hotel'], nums: [{ name: 'nightlyPrice', label: 'nightly price', min: 45, max: 420 }, { name: 'stars', label: 'star rating', min: 1, max: 5 }], cats: [{ name: 'city', label: 'city', values: ['Lisbon', 'Kyoto', 'Toronto'] }], bool: { name: 'breakfast', label: 'breakfast included' } },
  { one: 'workout', many: 'workouts', key: 'workouts', nameField: 'label', names: ['Mon run', 'Tue swim', 'Wed lift', 'Thu yoga', 'Fri run', 'Sat ride', 'Sun walk', 'Mon lift', 'Tue run', 'Wed swim', 'Thu ride', 'Fri yoga'], nums: [{ name: 'minutes', label: 'duration (minutes)', min: 15, max: 120 }, { name: 'calories', label: 'calories burned', min: 80, max: 900 }], cats: [{ name: 'kind', label: 'kind', values: ['cardio', 'strength', 'mobility'] }] },
  { one: 'ticket', many: 'tickets', key: 'tickets', nameField: 'subject', names: ['Login fails', 'Refund request', 'Slow page', 'Wrong invoice', 'App crash', 'Email change', 'Missing order', 'Bug in export', 'Password reset', 'Feature idea', 'Dark mode', 'Billing error'], nums: [{ name: 'ageHours', label: 'age (hours)', min: 1, max: 200 }, { name: 'replies', label: 'reply count', min: 0, max: 12 }], cats: [{ name: 'priority', label: 'priority', values: ['low', 'normal', 'urgent'] }, { name: 'channel', label: 'channel', values: ['email', 'chat', 'phone'] }], bool: { name: 'resolved', label: 'resolved' } },
  { one: 'course', many: 'courses', key: 'courses', nameField: 'title', names: ['Intro to SQL', 'React Basics', 'Node APIs', 'CSS Layouts', 'Git Essentials', 'TypeScript 101', 'Testing JS', 'Docker Intro', 'Web Security', 'Data Viz', 'Accessibility', 'GraphQL'], nums: [{ name: 'lessons', label: 'lesson count', min: 6, max: 48 }, { name: 'enrolled', label: 'enrolments', min: 12, max: 4800 }], cats: [{ name: 'level', label: 'level', values: ['beginner', 'intermediate', 'advanced'] }] },
  { one: 'car', many: 'cars', key: 'cars', nameField: 'model', names: ['Civic', 'Golf', 'Model 3', 'Corolla', 'Clio', 'Mustang', 'Leaf', 'Fiesta', 'Prius', 'Ioniq', 'Polo', 'Mazda3'], nums: [{ name: 'priceK', label: 'price (thousands)', min: 14, max: 58 }, { name: 'km', label: 'mileage (km)', min: 0, max: 180000 }, { name: 'year', label: 'year', min: 2008, max: 2024 }], cats: [{ name: 'fuel', label: 'fuel type', values: ['petrol', 'diesel', 'electric', 'hybrid'] }] },
  { one: 'event', many: 'events', key: 'events', nameField: 'name', names: ['JS Meetup', 'Hackathon', 'Design Jam', 'Book Club', 'Career Fair', 'Open Mic', 'Code Dojo', 'Startup Night', 'AI Panel', 'Game Night', 'Workshop', 'Demo Day'], nums: [{ name: 'capacity', label: 'capacity', min: 20, max: 400 }, { name: 'registered', label: 'registrations', min: 0, max: 380 }], cats: [{ name: 'format', label: 'format', values: ['in-person', 'online', 'hybrid'] }], bool: { name: 'free', label: 'free' } },
  { one: 'plant', many: 'plants', key: 'plants', nameField: 'name', names: ['Fern', 'Cactus', 'Basil', 'Orchid', 'Monstera', 'Aloe', 'Ivy', 'Lavender', 'Mint', 'Bonsai', 'Snake Plant', 'Peace Lily'], nums: [{ name: 'waterEveryDays', label: 'watering interval (days)', min: 1, max: 21 }, { name: 'heightCm', label: 'height (cm)', min: 5, max: 160 }], cats: [{ name: 'light', label: 'light needs', values: ['low', 'medium', 'bright'] }], bool: { name: 'petSafe', label: 'pet safe' } },
];

export type Row = Record<string, string | number | boolean>;

export function rows(entity: Entity, seed: string, count = 8): Row[] {
  const rng = new Rng(`${seed}:${entity.key}`);
  const names = rng.sample(entity.names, count);
  return names.map((name, i) => {
    const row: Row = { id: i + 1, [entity.nameField]: name };
    for (const f of entity.nums) {
      const v = f.min + rng.next() * (f.max - f.min);
      row[f.name] = f.decimals ? Math.round(v * 10 ** f.decimals) / 10 ** f.decimals : Math.round(v);
    }
    for (const c of entity.cats) row[c.name] = rng.pick(c.values);
    if (entity.bool) row[entity.bool.name] = rng.bool();
    return row;
  });
}

/** Pretty-print rows as a JS literal (one object per line). */
export function rowsLiteral(data: Row[], indent = '  '): string {
  return `[\n${data.map((r) => `${indent}${JSON.stringify(r).replace(/"(\w+)":/g, '$1: ').replace(/,(?=\w+: )/g, ', ')}`).join(',\n')}\n]`;
}

export const capitalize = (s: string) => s[0]!.toUpperCase() + s.slice(1);
export const camel = (...parts: string[]) => parts.map((p, i) => (i === 0 ? p : capitalize(p))).join('');
