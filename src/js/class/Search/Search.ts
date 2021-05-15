export default class Search {
    private _searchBox  = document.getElementById('searchBox') as HTMLInputElement;
    private _searchButton = document.getElementById('searchButton');
    private _URL = window.location.href;

    public constructor() {
        if (this._URL.includes('search=')) this._scrollToSearch();

        this._searchButton.addEventListener('click', () => this._search());
    };

    private _search() {
        const query = this._searchBox.value || '';

        if (query === '') return

        window.location.replace(`https://buzzmedia.target/?search=${query}`); // UPDATE WITH HOSTNAME
    };

    private async _scrollToSearch() {
        console.log('Scrolling');

        await new Promise((resolve, reject) => { setTimeout(resolve, 100) });
        document.getElementById('search').scrollIntoView();
    };
}

