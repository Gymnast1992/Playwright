// const { test, expect } = require("@playwright/test");
// const axios = require("axios");
// const login = "qaTest19";
// const password = "TestID007";
// const firstName = "firstname";
// const lastName = "lastname";
// const email = "qmaks19@mailsac.com";
// // const successMessage = `Account was successfully created. An email containing the instructions to activate your account was sent to ${email}.`;

// test.describe("Register", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://www.redmine.org/account/register");
//   });

//   test("TC01, Registration of a user on the website using valid data", async ({
//     page,
//   }) => {

//     const registerPage = new RegisterAccount(page);
//       await registerPage.registerNewAccount(login, password, firstName, lastName, email)
//       await expect(page.locator('[class="flash notice"]')).toHaveText(successMessage);
//     //Email verification

    

      

//       // Step 4: Check Mailsac inbox via API for the email
//       const email = await checkEmail(MAILSAC_EMAIL);
//       expect(email).toBeTruthy(); // Ensure an email was received

//       // Step 5: Parse the email body to extract the verification link
//       const verificationLink = extractVerificationLink(email);
//       expect(verificationLink).toBeTruthy();

//       // Step 6: Visit the verification link to complete the process
//       await page.goto(verificationLink);

//       // Step 7: Verify that the user is now verified
//       await expect(page).toHaveURL("https://www.redmine.org/login");
//       await expect(page.locator('[id="flash_notice"]')).toHaveText(
//         "Your account has been activated. You can now log in."
//       );

//     });

//     // Function to check the Mailsac inbox
//     async function checkEmail(email) {
//       const response = await axios.get(
//         `https://mailsac.com/api/addresses/${email}/messages`,
//       );
//       console.log(response)
//     //   const messages = response.data;

//       // Ensure that there is at least one message in the inbox
//       if (messages.length > 0) {
//         const messageId = messages[0]._id; // Get the latest message's ID
//         const messageResponse = await axios.get(
//           `https://mailsac.com/api/text/${messageId}`,
//           {
//             headers: { "Mailsac-Key": MAILSAC_API_KEY },
//           }
//         );
//         return messageResponse.data;
//       }
//       return null;
//     }

//     // Function to extract the verification link from the email body
//     // function extractVerificationLink(email) {
//     //   const regex = /https?:\/\/[^\s]+/g;
//     //   const matches = email.match(regex);
//     //   return matches ? matches[0] : null;
//     // }

//     // await page.goto('https://www.google.com/intl/en-US/gmail/about/');
//     // await page.locator('[data-action="sign in"]').click();
//     // await page.locator('[id="identifierId"]').fill(email);
//     // await page.locator('[jsname="Njthtb"]').click();
//     // await page.locator('[id="password"]').fill(password);
//     // await page.locator('[id="passwordNext"]').click();
//     // await page.locator('[email="noreply@redmine.org"]').click();
//     // await page.getByText("account/activate?token=").click();
//   });
