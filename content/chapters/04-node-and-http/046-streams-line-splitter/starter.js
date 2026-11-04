function createLineSplitter(onLine) {
  return {
    write(chunk) {
      chunk.split('\n').forEach(onLine);
    },
    end() {},
  };
}

async function countErrors(chunks) {}
