const ids = (records) => records.map((r) => r.id);

const toOptions = (users) => users.map((u) => ({ value: u.id, label: u.name }));

const withIndex = (items) => items.map((item, index) => ({ index, item }));

const normalizeEmails = (users) => users.map((u) => ({ ...u, email: u.email.trim().toLowerCase() }));
