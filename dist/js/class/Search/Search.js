export default class Search {
    constructor() {
        this._searchBox = document.getElementById('searchBox');
        this._searchButton = document.getElementById('searchButton');
        this._URL = window.location.href;
        if (this._URL.includes('search='))
            this._scrollToSearch();
        this._searchButton.addEventListener('click', () => this._search());
    }
    ;
    _search() {
        const query = this._searchBox.value || '';
        if (query === '')
            return;
        window.location.replace(`https://buzzmedia.target/?search=${query}`); // UPDATE WITH HOSTNAME
    }
    ;
    async _scrollToSearch() {
        console.log('Scrolling');
        await new Promise((resolve, reject) => { setTimeout(resolve, 100); });
        document.getElementById('search').scrollIntoView();
    }
    ;
}
