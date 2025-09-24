import add from '../src/stringCalculator';

describe('String Calculator - add()', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for a single numeric string', () => {
    expect(add('1')).toBe(1);
  });
});
