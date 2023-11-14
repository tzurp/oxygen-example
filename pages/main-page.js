import {TopMenuBar} from './top-menu-bar';
import {PopupNewsletter} from './popup-newsletter';
export class MainPage {
    
    get topMenuBar() {
        return new TopMenuBar();
    }

    get popup() {
        return new PopupNewsletter();
    }
}