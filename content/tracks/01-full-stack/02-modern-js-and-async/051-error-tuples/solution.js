async function to(promise) {
  try {
    return [null, await promise];
  } catch (err) {
    return [err, undefined];
  }
}

async function loadProfile(api, id) {
  const [[userErr, user], [settingsErr, settings]] = await Promise.all([to(api.getUser(id)), to(api.getSettings(id))]);
  if (userErr) return { error: 'User not found' };
  return { user, settings: settingsErr ? { theme: 'light' } : settings };
}
