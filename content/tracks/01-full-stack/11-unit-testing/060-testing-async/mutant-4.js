// mutant: treats 404 as a crash
async function getDisplayName(api, id) {
  try {
    const user = await api.getUser(id);
    return user.nickname || user.name;
  } catch (err) {
    
    throw err;
  }
}
