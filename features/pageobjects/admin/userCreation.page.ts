import { ChainablePromiseElement } from 'webdriverio';

import PageProject from '../pageProject';

class ClassCreationPage extends PageProject {
    public get inputClassSelectedStudent () {
        return $('#classSelected');
    }

    public get inputStudentLastname () {
        return $('#lastnameStudent');
    }

    public get inputStudentFirstname () {
        return $('#firstnameStudent');
    }

    public get inputStudentEmail () {
        return $('#emailStudent');
    }

    public get inputTeacherLastname () {
        return $('#lastname');
    }

    public get inputTeacherFirstname () {
        return $('#firstname');
    }

    public get inputTeacherEmail () {
        return $('#email');
    }

    public get inputClassSelectedCsv () {
        return $('#classSelectedCsv');
    }

    public get btnSubmit () {
        return $$('input[type=submit]');
    }

    private getCurrentDateInFrenchForEmail () {
        let currentDateInFrench = this.getCurrentDateInFrench();
        const searchRegExpMinuteSeparator = /:/g;
        const replaceWith = '-';

        currentDateInFrench = currentDateInFrench.replace(' ', '_');
        currentDateInFrench = currentDateInFrench.replace(searchRegExpMinuteSeparator, replaceWith);
        return currentDateInFrench;
    }

    public async createStudent () {
        let currentDateTest = `STU_${this.getCurrentDateInFrenchForEmail()}`;
        console.log('MIAOUUU');
        console.log(await this.btnSubmit)
        await this.inputClassSelectedStudent.selectByVisibleText('PingouinClass');
        await this.inputStudentLastname.setValue(currentDateTest);
        await this.inputStudentFirstname.setValue(currentDateTest);
        await this.inputStudentEmail.setValue(currentDateTest + '@outlook.fr');
        await this.btnSubmit[1].click();
    }

    public async createTeacher () {
        let currentDateTest = `TEA_${this.getCurrentDateInFrenchForEmail()}`;
        await this.inputTeacherLastname.setValue(currentDateTest);
        await this.inputTeacherFirstname.setValue(currentDateTest);
        await this.inputTeacherEmail.setValue(currentDateTest + '@outlook.fr');
        await this.btnSubmit[0].click();
    }
}

export default new ClassCreationPage();
