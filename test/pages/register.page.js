// class RegisterAccount{
//     constructor(page) {
//       this.page = page;
//       this.loginInput = this.page.locator('[id="user_login"]');
//       this.passwordInput = this.page.locator('[id="user_password"]');
//       this.confirmPasswordInput = this.page.locator("#user_password_confirmation");
//       this.firstNameInput = this.page.locator("#user_firstname");
//       this.lastNameInput = this.page.locator("#user_lastname");
//       this.emailInput = this.page.locator("#user_mail");
//       this.btnSubmit = this.page.locator('[type="submit"]');
//     }
  
//     async registerNewAccount(login, password, firstName, lastName, email) {
//       await this.loginInput.fill(login);
//       await this.inputPassword.fill(password);
//       await this.confirmPasswordInput.fill(password);
//       await this.firstNameInput.fill(firstName);
//       await this.lastNameInput.fill(lastName);
//       await this.emailInput.fill(email);
//       await this.btnLogin.click();
//     }

//   }
  
//   module.exports = RegisterAccount;
  