async function getDisplayName(api, id) {
  try {
    const user = await api.getUser(id);
    return user.nickname || user.name;
  } catch (err) {
    if (err.status === 404) return 'Unknown user';
    throw err;
  }
}
