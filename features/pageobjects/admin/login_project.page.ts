import { ChainablePromiseElement } from 'webdriverio';

import PageProject from '../pageProject';

class AdminHomepage extends PageProject {
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
    public async checkLink (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('homepageAdmin');
    }
}

export default new AdminHomepage();
