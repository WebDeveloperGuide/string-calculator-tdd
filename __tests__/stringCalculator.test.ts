import add from '../src/stringCalculator';

describe('String Calculator - add()', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for a single numeric string', () => {
    expect(add('1')).toBe(1);
  });

  it('returns the sum for two comma-separated numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('returns the sum for any amount of comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('supports new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });
});
