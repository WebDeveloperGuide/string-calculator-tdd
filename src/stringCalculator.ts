export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  let delimiterPattern = /[\n,]/;
  let payload = numbers;

  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n');
    const header = numbers.slice(2, newlineIndex);
    const escaped = header.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiterPattern = new RegExp(`[\n]|${escaped}`);
    payload = numbers.slice(newlineIndex + 1);
  }

  const parts = payload.split(delimiterPattern);
  const numbersList = parts.map((p) => parseInt(p, 10));
  const negatives = numbersList.filter((n) => !Number.isNaN(n) && n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }
  return numbersList.reduce((sum, n) => sum + (Number.isNaN(n) ? 0 : n), 0);
}
export default add;
