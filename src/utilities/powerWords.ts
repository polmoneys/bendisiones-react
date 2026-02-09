export function extractPowerWords(
  query: string,
  powerWords: string[],
  bannedWords: string[],
): [string[], string[]] {
  const processedQuery = query
    .toLowerCase()
    .replace(/[^\w\s'’-]/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (processedQuery === "") return [[], []];

  const words = [...new Set(processedQuery.split(" "))];
  const powerWordsSet = new Set(powerWords.map((word) => word.toLowerCase()));
  const bannedWordsSet = new Set(bannedWords.map((word) => word.toLowerCase()));

  const matches: string[] = [];
  const processedWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    // remove punctuation marks
    const word = words[i].replace(/[,]/gi, "");

    const processedWord = word.toLowerCase();

    if (
      powerWordsSet.has(processedWord) &&
      !bannedWordsSet.has(processedWord)
    ) {
      matches.push(word);
    }
    if (
      !powerWordsSet.has(processedWord) &&
      !bannedWordsSet.has(processedWord)
    ) {
      processedWords.push(word);
    }
  }

  return [matches, processedWords];
}
