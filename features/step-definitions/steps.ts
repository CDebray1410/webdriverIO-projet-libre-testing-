import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login_project.page';
import BasePage from '../pageobjects/base/base.page';

const pages = {
    login: LoginPage,
    base: BasePage
}

const urlBase = "http://localhost:1373/";

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

/* LOGIN test */

When(/^I login with (\w+\@\w+\.\w+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should be redirected to page (.*)$/, async (page) => {
    let url = await browser.getUrl();
    let urlPathname = url.replace(urlBase,'');
    await browser.waitUntil(async () => (urlPathname=page), { timeout: 5000 })
    //await browser.pause(5000)

    expect(urlPathname).toEqual(page);
});

/* HOME PUBLICATION test */

When(/^I send publication on homepage with role (\w+)$/, async (role) => {
    await BasePage.login(role)
});

Then(/^I should see new publication on homepage$/, async () => {
    //let url = await browser.getUrl();
    //let urlPathname = url.replace(urlBase,'');
    //await browser.waitUntil(async () => (urlPathname=page), { timeout: 5000 })
    //await browser.pause(5000)

    //expect(urlPathname).toEqual(page);
    console.log("DONE")
});