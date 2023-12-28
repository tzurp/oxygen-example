import * as testBase from "./test-base";

var mainPage = testBase.webApp.getMainPage();
log.info(`env from test is: ${env.username}`);
web.transaction("*** closing popup");
mainPage.popup.close();

var searchBarPanelPage = mainPage.topMenuBar.clickSearch();
web.transaction("*** Searching text");
searchBarPanelPage.searchText ("Honzo");
web.transaction("***Select first result");
var productPage = searchBarPanelPage.selectResult('0');

var title = productPage.getTitle();
log.info(`Title = ${title}`);
assert.contain(title, "title");