import {SearchBarPanel} from './search-bar-panel';
export class TopMenuBar {
    get searchButton() {
        return web.findElement(".header__secondary-nav [href='/search']");
    }
    clickSearch(text) {
        this.searchButton.click();
        
        return new SearchBarPanel();
    }

}