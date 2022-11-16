export function solution(str: string, ending: string): boolean {
  const stringEnding = str.substr(str.length - ending.length);
  return stringEnding === ending;
}
