import { test, expect } from '@playwright/test';
import formatDate from './formatDate';

test.describe('formatDate', () => {
  test('should return string type.', () => {
    // Given
    const dateString = '2023-11-17';

    // When
    const out = formatDate(dateString);

    // Then
    expect(typeof out).toBe('string');
  });
});
