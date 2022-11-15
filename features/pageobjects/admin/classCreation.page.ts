import { ChainablePromiseElement } from 'webdriverio';

import PageProject from '../pageProject';

class ClassCreationPage extends PageProject {
    public get inputName () {
        return $('#name');
    }

    public get inputClassLevel () {
        return $('#classLevel');
    }

    public get btnSubmit () {
        return $('input[type=submit]');
    }

    public async createClass () {
        let currentDateTest = `classTest ${this.getCurrentDateInFrench()}`;
        await this.inputName.setValue(currentDateTest);
        await this.inputClassLevel.selectByVisibleText('Pingouin');
        await this.btnSubmit.click();
    }
}

export default new ClassCreationPage();
