function reverseWord(word: string): string {
  return word.split('').reverse().join('');
}

export function spinWords(words: string): string {
  const arr = words.split(' ');
  const spinnedWords = arr.map((word) => (word.length >= 5 ? reverseWord(word) : word));
  return spinnedWords.join(' ');
}
