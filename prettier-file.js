function topThreeWords(text) {
  const words = text.toLowerCase().match(/\b[a-z']+\b/gi);
  const wordCount = {};

  if (words) {
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  }

  const sortedWords = Object.keys(wordCount).sort((a, b) => {
    const frequencyComparison = wordCount[b] - wordCount[a];

    if (frequencyComparison === 0) {
      return a.localeCompare(b);
    }

    return frequencyComparison;
  });

  return sortedWords.slice(0, 3);
}
