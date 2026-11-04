function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

function makeCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}
