import { ChainablePromiseElement } from 'webdriverio';

import PageProject from './pageProject';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends PageProject {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('#emailInput');
    }

    public get inputPassword () {
        return $('#passwordInput');
    }

    public get btnSubmit () {
        return $('#loginButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
