import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions tests', () => {
  
  // 1. getCurrentYear testi
  test('getCurrentYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  // 2. getFooterCopy testi (true və false halları üçün)
  describe('getFooterCopy', () => {
    test('returns "Holberton School" when argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  // 3. getLatestNotification testi
  test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});