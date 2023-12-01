export class PopupNewsletter {
    get closeButton() {
        return '#newsletter-drawer [aria-label="Close"]';
    }
    
    close() {
        web.waitForVisible(this.closeButton);
        web.click(this.closeButton);
    }
}