function truncateWords(text, maxWords) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return words.join(' ');
  const kept = words.slice(0, maxWords);
  kept[kept.length - 1] = kept[kept.length - 1].replace(/[,.;:]+$/, '') + '…';
  return kept.join(' ');
}
