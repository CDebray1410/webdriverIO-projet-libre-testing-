import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login_project.page';

const pages = {
    login: LoginPage
}

const urlBase = "http://localhost:1373/";

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+\@\w+\.\w+) and (.+)$/, async (email, password) => {
    console.dir("PASSWORD")
    console.dir(password)
    await LoginPage.login(email, password)
});

Then(/^I should be redirected to page (.*)$/, async (page) => {
    let url = await browser.getUrl();
    let urlPathname = url.replace(urlBase,'');
    expect(urlPathname).toEqual(page);
});

