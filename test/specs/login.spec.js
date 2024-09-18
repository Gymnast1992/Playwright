const { test, expect } = require("@playwright/test");
import LoginPage from "../../test/pages/login.page"
const username = "qmaks19";
const password = "TestID007";
const successDelete = "Your account has been permanently deleted.";
const errorMessage = "Invalid user or password"


test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.redmine.org/login");
  });


  test("should be able to login with existing account", async ({
    page,
  }) => {
    await LoginPage.inputUsername.fill(username);
    await LoginPage.inputPassword.fill(password);
    await LoginPage.btnSubmit.click();
    await expect(page.locator('a.logout')).toHaveText('Sign out');

  });

//   test("should not be able to login without password", async ({
//     page,
//   }) => {
//     await page.locator('[id="username"]').fill(username);
//     await page.locator('[id="login-submit"]').click();
//     await expect(page.locator('[id="flash_error"]')).toHaveText('Sign out');

//   });

//   test("should be able to delete existing account", async ({
//     page,
//   }) => {
//     await page.locator('[id="username"]').fill(username);
//     await page.locator('[id="password"]').fill(password);
//     await page.locator('[id="login-submit"]').click();
//     await page.locator('a.my-account').click();
//     await page.locator('[class="icon icon-del"]').click();
//     await page.locator('[id="confirm"]').check();
//     await page.locator('[name="commit"]').click();
//     await expect(page.locator('[id="flash_notice"]')).toHaveText(successDelete);

//   });
});
