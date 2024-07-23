// your JavaScript code here
const nav = document.querySelector('nav');
const check = document.querySelector('#check');
const navMobile = document.querySelector('.nav-mobile');

function storeData() {
    return {
        items: [],
        sortCol: 'name',
        sortAsc: true,

        async fetchItems() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            this.items = data;
        },

        sortItems(col) {
            this.sortCol = col;
            this.sortAsc =!this.sortAsc;
            this.items.sort((a, b) => {
                if (this.sortAsc) {
                    return a[col] > b[col]? 1 : -1;
                } else {
                    return a[col] < b[col]? 1 : -1;
                }
            });
        },

        init() {
            this.fetchItems();
        }
    }
}
