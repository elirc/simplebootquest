function parseLog(output) {
  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const space = line.indexOf(' ');
      return { hash: line.slice(0, space), message: line.slice(space + 1) };
    });
}

function countByType(commits) {
  const counts = {};
  for (const { message } of commits) {
    const m = /^([a-z]+)(\([^)]*\))?!?:/.exec(message);
    const type = m ? m[1] : 'other';
    counts[type] = (counts[type] ?? 0) + 1;
  }
  return counts;
}
