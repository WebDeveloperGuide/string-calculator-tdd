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
  return parts.reduce((sum, part) => sum + parseInt(part, 10), 0);
}
export default add;
