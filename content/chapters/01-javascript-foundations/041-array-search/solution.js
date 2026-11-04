function findUserByEmail(users, email) {
  const target = email.toLowerCase();
  return users.find((u) => u.email.toLowerCase() === target);
}

function allCompleted(todos) {
  return todos.every((t) => t.done);
}

function anyOverdue(todos, today) {
  return todos.some((t) => !t.done && t.due !== undefined && t.due < today);
}

function positionOf(todos, id) {
  const index = todos.findIndex((t) => t.id === id);
  return index === -1 ? null : index + 1;
}
