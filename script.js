function storeData() {
    return {
        items: [],
        fetchItems() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                });
        },
        modalOpen: false,
        selectedItem: null
    };
}
function storeData() {
    return {
        items: [],
        selectedItem: null,
        modalOpen: false,
        category: 'all', // Added category state
        fetchItems() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                });
        },
        openModal(item) {
            this.selectedItem = item;
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
            this.selectedItem = null;
        },
        setCategory(category) {
            this.category = category;
        },
        get filteredItems() {
            if (this.category === 'all') {
                return this.items;
            }
            return this.items.filter(item => item.category.toLowerCase() === this.category.toLowerCase());
        }
    }
}
