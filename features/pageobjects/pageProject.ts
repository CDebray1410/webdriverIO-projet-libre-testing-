/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class PageProject {
    linkList = {
        // ADMIN links
        'mater': 'Matières',
        'level': 'Niveaux',
        'classes': 'Classes',
        'users': 'Utilisateurs',
        'cafeteria': 'Cafetaria'
        // TEACHER links
    }
    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`http://localhost:1373/${path}`)
    }

    public getCurrentDateInFrench () {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds();

        return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
    }

    public async goToLink (link) {
        let linkButton = $(`#${this.linkList[link]}`)
        await linkButton.click();
    }
}
