import { Given, When, Then } from '@wdio/cucumber-framework';
import BasePage from '../../pageobjects/base/base.page';
import ClassCreationPage from '../../pageobjects/admin/classCreation.page';

Given(/^I am on the classCreation page$/, async () => {
    await BasePage.open()
});

When(/^I create a class as admin$/, async () => {
    await BasePage.login('admin');
    await browser.pause(1000);
    await ClassCreationPage.goToLink('classCreation');
    await browser.pause(100);
    await ClassCreationPage.createClass();
});

Then(/^I should see a success alert for class$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});