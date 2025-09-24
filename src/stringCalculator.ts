export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  if (numbers.includes(',')) {
    const parts = numbers.split(',');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) + parseInt(parts[1], 10);
    }
  }
  return parseInt(numbers, 10);
}
export default add;
