function findUsers(users, { minAge, maxAge, country, activeOnly = false } = {}) {
  return users
    .filter((u) => (minAge === undefined || u.age >= minAge) && (maxAge === undefined || u.age <= maxAge))
    .filter((u) => !country || u.country === country)
    .filter((u) => !activeOnly || u.active)
    .map((u) => u.name)
    .sort((a, b) => a.localeCompare(b));
}
