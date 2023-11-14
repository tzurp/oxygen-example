import * as testBase from "./test-base";

var mainPage = testBase.webApp.getMainPage();

mainPage.popup.close();

var searchBarPanelPage = mainPage.topMenuBar.clickSearch();

searchBarPanelPage.searchText ("Honzo");

var productPage = searchBarPanelPage.selectResult('0');

var title = productPage.getTitle();
log.info(`Title = ${title}`);
assert.contain(title, "title");
web.pause(10000);