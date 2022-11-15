import { Given, When, Then } from '@wdio/cucumber-framework';
import BasePage from '../../pageobjects/base/base.page';

Given(/^I am a group page$/, async () => {
    await BasePage.open()
});

When(/^I send publication on group page$/, async () => {
    await BasePage.login('student');
    await BasePage.goToLink('groupix');
    await browser.pause(100);
    await BasePage.sendPublication();
});

Then(/^I should see a success alert for group publication$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});