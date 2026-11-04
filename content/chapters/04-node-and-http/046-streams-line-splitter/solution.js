function createLineSplitter(onLine) {
  let buffer = '';
  const emit = (line) => onLine(line.endsWith('\r') ? line.slice(0, -1) : line);
  return {
    write(chunk) {
      buffer += chunk;
      const lines = buffer.split('\n');
      buffer = lines.pop();
      lines.forEach(emit);
    },
    end() {
      if (buffer !== '') emit(buffer);
      buffer = '';
    },
  };
}

async function countErrors(chunks) {
  let count = 0;
  const splitter = createLineSplitter((line) => {
    if (line.includes('ERROR')) count++;
  });
  for await (const chunk of chunks) splitter.write(chunk);
  splitter.end();
  return count;
}
