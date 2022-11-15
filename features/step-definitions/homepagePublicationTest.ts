import { Given, When, Then } from '@wdio/cucumber-framework';
import BasePage from '../pageobjects/base/base.page';

Given(/^I am on the base page$/, async () => {
    await BasePage.open()
});

When(/^I send publication on homepage with role (\w+)$/, async (role) => {
    await BasePage.login(role);
    await BasePage.sendPublication();
});

Then(/^I should see a success alert for publication$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});