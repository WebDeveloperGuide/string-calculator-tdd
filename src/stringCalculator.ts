export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  if (numbers.includes(',')) {
    const parts = numbers.split(',');
    return parts.reduce((sum, part) => sum + parseInt(part, 10), 0);
  }

  return parseInt(numbers, 10);
}
export default add;
