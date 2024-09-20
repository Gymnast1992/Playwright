class LoginPage {
  constructor(page) {
    this.page = page;
    this.inputUsername = this.page.locator('[id="username"]');
    this.inputPassword = this.page.locator('[id="password"]');
    this.btnLogin = this.page.locator('[id="login-submit"]');
    this.btnSignOut = this.page.locator("a.logout");
    this.btnSignIn = this.page.locator("a.login");
    this.btnMyAccount = this.page.locator("a.my-account");
    this.btnDeleteMyAccount = this.page.locator('[class="icon icon-del"]');
    this.checkMark = this.page.locator('[id="confirm"]');
    this.btnConfirmDeleteMyAccount = this.page.locator('[name="commit"]');
  }

  async login(username, password) {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.btnLogin.click();
  }

  async loginWithNoPassword(username) {
    await this.inputUsername.fill(username);
    await this.btnLogin.click();
  }

  async signOut() {
    await this.btnSignOut.click();
  }

  async goToMyAccount() {
    await this.btnMyAccount.click();
  }

  async deleteAccount() {
    await this.btnDeleteMyAccount.click();
    await this.checkMark.check();
    await this.btnConfirmDeleteMyAccount.click();
  }
}

module.exports = LoginPage;
