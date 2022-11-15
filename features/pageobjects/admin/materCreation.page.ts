import { ChainablePromiseElement } from 'webdriverio';

import PageProject from '../pageProject';

class MaterCreationPage extends PageProject {
    public get inputName () {
        return $('#name');
    }

    public get btnSubmit () {
        return $('input[type=submit]');
    }

    public async createMatter () {
        let currentDateTest = `materTest ${this.getCurrentDateInFrench()}`;
        await this.inputName.setValue(currentDateTest);
        await this.btnSubmit.click();
    }
}

export default new MaterCreationPage();
