async function getUserNames(ids, fetchUser) {
  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  return users.map((u) => u.name);
}

async function firstAvailable(ids, fetchUser) {
  for (const id of ids) {
    try {
      return await fetchUser(id);
    } catch {
      // try the next one
    }
  }
  throw new Error('No users available');
}
