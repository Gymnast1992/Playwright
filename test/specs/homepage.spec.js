// const { test, expect } = require("@playwright/test");


// test.describe("Homepage", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://www.redmine.org");
//   });

//   test("should navigate to the Email configuration", async({page}) => {

//     await page.locator(`li [href="/projects/redmine/wiki/Guide"]`).click();
//     await page.locator(`[href="/projects/redmine/wiki/EmailConfiguration"]`).click();
    
//     await expect(page.getByRole('heading', { name: 'Email Configuration' }))
//     .toHaveText('Email Configuration¶');

//   })
// });
