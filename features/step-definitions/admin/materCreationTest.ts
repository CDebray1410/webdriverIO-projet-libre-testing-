import { Given, When, Then } from '@wdio/cucumber-framework';

import BasePage from '../../pageobjects/base/base.page';
import MaterCreationPage from '../../pageobjects/admin/materCreation.page';

const pages = {
    base: BasePage,
    matterCreation: MaterCreationPage
}

const urlBase = "http://localhost:1373/";

Given(/^I am on the matterCreation page$/, async () => {
    await BasePage.open()
});

When(/^I create a matter as admin$/, async () => {
    await BasePage.login('admin');
    await browser.pause(100);
    await MaterCreationPage.goToLink('mater')
    await browser.pause(100);
    await MaterCreationPage.createMatter();
});

Then(/^I should see a success alert for mater$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});