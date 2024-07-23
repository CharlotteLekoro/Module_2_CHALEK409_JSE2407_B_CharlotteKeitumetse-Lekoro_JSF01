const nav = document.querySelector("nav");
const check = document.querySelector("#check");
const navMobile = document.querySelector(".nav-mobile");

function storeData() {
  return {
    items: [],
    sortCol: "name",
    sortAsc: true,

    async fetchItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.items = data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },

    sortItems(col) {
      this.sortCol = col;
      this.sortAsc = !this.sortAsc;
      this.items.sort((a, b) => {
        if (a[col] === undefined || b[col] === undefined) {
          return 0;
        }
        if (this.sortAsc) {
          return a[col] > b[col] ? 1 : -1;
        } else {
          return a[col] < b[col] ? 1 : -1;
        }
      });
    },

    init() {
      this.fetchItems();
    },
  };
}

// Initialize the store data on page load
document.addEventListener("DOMContentLoaded", () => {
  const store = storeData();
  store.init();
});
