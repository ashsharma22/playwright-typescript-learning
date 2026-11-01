import {test, expect} from '@playwright/test';

test('locators on Playwright docs site',async({page}) => {
    console.log("Hello Ashwani");
    console.log("My first playwright test");
    await page.goto('https://playwright.dev/');
});