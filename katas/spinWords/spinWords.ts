function reverseWord(word: string): string {
  return word.split('').reverse().join('');
}

export function spinWords(words: string): string {
  return words
    .split(' ')
    .map((word) => (word.length >= 5 ? reverseWord(word) : word))
    .join(' ');
}
