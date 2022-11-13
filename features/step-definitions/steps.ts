import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login_project.page';
import BasePage from '../pageobjects/base/base.page';
import MaterCreationPage from '../pageobjects/admin/materCreation.page';

const pages = {
    login: LoginPage,
    base: BasePage,
    matterCreation: MaterCreationPage
}

const urlBase = "http://localhost:1373/";

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

/* LOGIN */

When(/^I login with (\w+\@\w+\.\w+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should be redirected to page (.*)$/, async (page) => {
    let url = await browser.getUrl();
    let urlPathname = url.replace(urlBase,'');
    //TODO change to toHaveUrl
    await browser.waitUntil(async () => (urlPathname=page), { timeout: 1000 })
    //await browser.pause(5000)

    expect(urlPathname).toEqual(page);
});

/* HOME PUBLICATION */

When(/^I send publication on homepage with role (\w+)$/, async (role) => {
    await BasePage.login(role);
    await BasePage.sendPublication();
});

Then(/^I should see a success alert for publication$/, async () => {
    await browser.pause(1000);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});

/* ADMIN CREATE MATER */

When(/^I create a matter as admin$/, async () => {
    await BasePage.login('admin');
    await browser.pause(500);
    await MaterCreationPage.createMatter();
});

Then(/^I should see a success alert for mater$/, async (status) => {
    await browser.pause(1000);
    const successAlertBox = await $('#success-alert-box')
    expect(successAlertBox).toHaveElementClassContaining('displayed')
});