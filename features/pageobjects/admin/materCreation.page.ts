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
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds();

        let currentDateTest = `materTest ${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
        await this.inputName.setValue(currentDateTest);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        // TODO must go from login to selected page since need to be connected
        return super.open('login');
        return super.open('admin/matter_create');
    }
}

export default new MaterCreationPage();
