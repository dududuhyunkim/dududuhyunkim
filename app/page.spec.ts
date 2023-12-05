import { test, expect } from '@playwright/test';
// TODO : add page spec test
test('should have title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/duhyunkim/);
});
