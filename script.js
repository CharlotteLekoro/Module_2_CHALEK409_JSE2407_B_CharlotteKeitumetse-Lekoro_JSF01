/**
 * Store data and methods for managing items and modal state.
 * @returns {Object} The store data and methods.
 */
function storeData() {
  return {
    /**
     * Array of items fetched from the API.
     * @type {Array}
     */
    items: [],

    /**
     * Currently selected item.
     * @type {Object|null}
     */
    selectedItem: null,

    /**
     * State of the modal, whether it's open or closed.
     * @type {boolean}
     */
    modalOpen: false,

    /**
     * Current category for filtering items.
     * @type {string}
     */
    category: "all",

    /**
     * Fetches items from the Fake Store API and updates the items array.
     */
    fetchItems() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
        });
    },

    /**
     * Opens the modal and sets the selected item.
     * @param {Object} item - The item to be displayed in the modal.
     */
    openModal(item) {
      this.selectedItem = item;
      this.modalOpen = true;
    },

    /**
     * Closes the modal and clears the selected item.
     */
    closeModal() {
      this.modalOpen = false;
      this.selectedItem = null;
    },

    /**
     * Sets the current category for filtering items.
     * @param {string} category - The category to filter items by.
     */
    setCategory(category) {
      this.category = category;
    },

    /**
     * Gets the items filtered by the current category.
     * @type {Array}
     */
    get filteredItems() {
      if (this.category === "all") {
        return this.items;
      }
      return this.items.filter(
        (item) => item.category.toLowerCase() === this.category.toLowerCase()
      );
    },
  };
}
