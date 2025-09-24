export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  let delimiterPattern = /[\n,]/;
  let payload = numbers;

  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n');
    const header = numbers.slice(2, newlineIndex);
    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (header.startsWith('[')) {
      const matches = Array.from(header.matchAll(/\[([^\]]+)\]/g));
      const delimiters = matches.map((m) => escapeRegex(m[1]));
      const alternation = delimiters.join('|');
      delimiterPattern = new RegExp(`\\n|(?:${alternation})`);
    } else {
      const escaped = escapeRegex(header);
      delimiterPattern = new RegExp(`\\n|${escaped}`);
    }
    payload = numbers.slice(newlineIndex + 1);
  }

  const parts = payload.split(delimiterPattern);
  const numbersList = parts.map((p) => parseInt(p, 10));
  const negatives = numbersList.filter((n) => !Number.isNaN(n) && n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }
  return numbersList.filter((n) => !Number.isNaN(n) && n <= 1000).reduce((sum, n) => sum + n, 0);
}
export default add;
