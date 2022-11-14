import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/base/login_project.page';

const pages = {
    login: LoginPage
}

const urlBase = "http://localhost:1373/";

Given(/^I am on the login page$/, async () => {
    await pages['login'].open()
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
