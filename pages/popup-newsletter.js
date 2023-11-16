export class PopupNewsletter {
    get closeButton() {
        return "#newsletter-drawer button[is='close-button']"
    }
    
    close() {
        web.waitForVisible(this.closeButton);
        web.click(this.closeButton);
    }
}