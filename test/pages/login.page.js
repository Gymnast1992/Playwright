const page = require('./Page')

class LoginPage {
    get inputUsername() {return page.locator('[id="username"]')}
    get inputPassword() {return page.locator('[id="password"]')}
    get btnSubmit() {return page.locator('[id="login-submit"]')}
    get btnSignOut() {return page.locator('a.logout')}
}

module.exports = new LoginPage()