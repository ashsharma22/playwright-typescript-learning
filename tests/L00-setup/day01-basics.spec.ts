import { test, expect } from '@playwright/test';

test.describe('L00 - Sauce Demo login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('valid user can log in', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('locked user sees an error', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });

  test('add item to cart', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});

test('API - get a post', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
});