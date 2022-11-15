import { Given, When, Then } from '@wdio/cucumber-framework';
import BasePage from '../../pageobjects/base/base.page';
import LevelCreationPage from '../../pageobjects/admin/levelCreation.page';

Given(/^I am on the levelCreation page$/, async () => {
    await BasePage.open()
});

When(/^I create a level as admin$/, async () => {
    await BasePage.login('admin');
    await browser.pause(100);
    await LevelCreationPage.goToLink('level')
    await browser.pause(100);
    await LevelCreationPage.createLevel();
});

Then(/^I should see a success alert for level$/, async () => {
    await browser.pause(100);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});