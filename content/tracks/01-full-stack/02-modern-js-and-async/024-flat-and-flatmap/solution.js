const allItems = (orders) => orders.flatMap((o) => o.items);

const allTags = (posts) => [...new Set(posts.flatMap((p) => p.tags))].sort();

const validEmails = (users) => users.flatMap((u) => (u.email ? [u.email.toLowerCase()] : []));

const expand = (rows) => rows.flatMap(({ name, qty }) => Array(qty).fill(name));
