// mutant: swallows every error
async function getDisplayName(api, id) {
  try {
    const user = await api.getUser(id);
    return user.nickname || user.name;
  } catch (err) {
    return 'Unknown user';
  }
}
