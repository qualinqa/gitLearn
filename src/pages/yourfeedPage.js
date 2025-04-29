export class YourfeedPage {
    constructor(page) {
        this.page = page;
        this.newArticleButton = page.getByRole('button', {name: 'New Article'});
        this.profileNameField = page.getByRole('navigation');
    }

    async gotoArticle(){
        await this.newArticleButton.click();
    }

};