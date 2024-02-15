import { test as base, expect } from '@playwright/test';

export const test = base.extend<{}, { account: void }>({
  account: [async ({ }, use, workerInfo) => {
    console.log('hello')
    await use();
  }, { scope: 'worker' }],
});

test('has title', async ({ page, account }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, account }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
