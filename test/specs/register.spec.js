// const { test, expect } = require("@playwright/test");
// const login = "qmaks19";
// const password = "TestID007";
// const firstName = "firstname";
// const lastName = "lastname";
// const email = "qmaks19@gmail.com";
// const successMessage = "Account was successfully created. An email containing the instructions to activate your account was sent to ${email}"


// test.describe("Register", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://www.redmine.org/");
//   });

//   test("Registration of a user on the website using valid data", async ({
//     page,
//   }) => {

//     await page.locator('[class="register"]').click();
//     await page.locator("#user_login").fill(login);
//     await page.locator("#user_password").fill(password);
//     await page.locator("#user_password_confirmation").fill(password);
//     await page.locator("#user_firstname").fill(firstName);
//     await page.locator("#user_lastname").fill(lastName);
//     await page.locator("#user_mail").fill(email);
//     await page.locator('[type="submit"]').click();
//     await page.locator('[id="flash_notice"]).should("have.text", successMessage)

//     //Email verification

//     // await page.goto('https://www.gmail.com/mail/help/intl/ru/about.html?de.');
//     // await page.getByLabel("Sign in").click();
//     // await page.locator('[class="AsY17b"]').first().click();
//     // await page.locator('[id="identifierId"]').fill();
//     // await page.locator('[jsname="Njthtb"]').click();
//     // await page.locator('[name="Passwd"]').fill();
//     // await page.locator('[jsname="Njthtb"]').click();
//     // await page.locator('[jsname="bySMBb"]').click();

//   });
// });
