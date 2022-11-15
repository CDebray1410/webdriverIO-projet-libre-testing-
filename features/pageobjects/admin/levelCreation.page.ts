import { ChainablePromiseElement } from 'webdriverio';

import PageProject from '../pageProject';

class LevelCreationPage extends PageProject {
    public get inputName () {
        return $('#name');
    }

    public get btnSubmit () {
        return $('input[type=submit]');
    }

    public async createLevel () {
        let currentDateTest = `levelTest ${this.getCurrentDateInFrench()}`;
        await this.inputName.setValue(currentDateTest);
        await this.btnSubmit.click();
    }
}

export default new LevelCreationPage();
