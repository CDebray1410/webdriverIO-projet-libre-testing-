import { ChainablePromiseElement } from 'webdriverio';

import Page from '../pageProject';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckPage extends Page {
    private usersEmail = {
        'student': 'christopherdebray@outlook.fr',
        'teacher': 'teacher@outlook.fr',
        'admin': 'admin@outlook.fr'
    }

    public get inputEmail () {
        return $('#emailInput');
    }

    public get inputPassword () {
        return $('#passwordInput');
    }

    public get btnSubmit () {
        return $('#loginButton');
    }

    public get publicationTextarea () {
        return $('#publication-text');
    }

    public get publicationSendBtn () {
        return $('#send-publi');
    }

    public async login (role: string) {
        let email = this.usersEmail[role];  
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue('yyyyyyyyy');
        await this.btnSubmit.click();
    }

    public async useLink (linkElement: string) {
        await $(linkElement).click();
    }

    public async sendPublication () {
        await this.publicationTextarea.setValue('This is a test publication');
        await this.publicationSendBtn.click();
    }

    public open () {
        return super.open('login');
    }
}

export default new CheckPage();
