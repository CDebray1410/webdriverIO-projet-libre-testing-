import { Given, When, Then } from '@wdio/cucumber-framework';
import BasePage from '../../pageobjects/base/base.page';
import UserCreationPage from '../../pageobjects/admin/userCreation.page';

Given(/^I am on the student creation page$/, async () => {
    await BasePage.open()
});

When(/^I create a student as admin$/, async () => {
    await BasePage.login('admin');
    await browser.pause(100);
    await UserCreationPage.goToLink('userCreation');
    await browser.pause(100);
    await UserCreationPage.createStudent();
});

Then(/^I should see a success alert for student creation$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});