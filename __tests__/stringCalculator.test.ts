import add from '../src/stringCalculator';

describe('String Calculator - add()', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
});
