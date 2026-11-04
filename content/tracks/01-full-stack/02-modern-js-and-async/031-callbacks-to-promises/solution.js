function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, result) => (err ? reject(err) : resolve(result)));
    });
}

async function loadUserName(id, getUser) {
  const user = await promisify(getUser)(id);
  return user.name.toUpperCase();
}
