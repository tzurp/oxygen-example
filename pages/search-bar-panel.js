import { ProductPage } from './product-page'

export class SearchBarPanel {
    get searchResults() {
        return '.predictive-search-result';
    }

    get searchinput() {
        return '.search-input';
    }

    getSearchResultList() {
        return "result"
    }

    selectResult(index) {
        web.click(web.findElements(this.searchResults)[index]);
        return new ProductPage();
    }

    searchText(text) {
        web.waitForExist(this.searchinput);

        web.click(this.searchinput);

        web.sendKeys(text);
    }
}