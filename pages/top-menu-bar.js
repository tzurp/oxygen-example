import {SearchBarPanel} from './search-bar-panel';
export class TopMenuBar {
    get searchButton() {
        return web.findElement(".header__secondary-nav a:first-of-type");
    }
    clickSearch(text) {
        log.info(`env from TopMenuBar is: ${env.username}`);
        web.click(this.searchButton);
        //this.searchButton.click();
        
        return new SearchBarPanel();
    }

}