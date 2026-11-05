function textStats(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim() !== '').length;
  const letters = words.reduce((sum, w) => sum + (w.match(/[a-z]/gi) ?? []).length, 0);
  return {
    words: words.length,
    sentences,
    avgWordLength: words.length ? Math.round((letters / words.length) * 10) / 10 : 0,
    readingMinutes: words.length ? Math.ceil(words.length / 200) : 0,
  };
}
