import { createStore } from "vuex";
import { Product, Order, ProductSelection } from "../data/entities";

export interface StoreState {
  products: Product[],
  order: Order,
  selectedCategory: string,
  storedId: number
}

export default createStore<StoreState>({
  state: {
    products: [1, 2, 3, 4, 5].map(num => new Product(num, `Store Prod${num}`,
      `Product ${num}`, `Cat${num % 2}`, 450)),
    order: new Order(),
    selectedCategory: "All",
    storedId: -1
  },

  mutations: {
    selectCategory(currentState: StoreState, category: string) {
      currentState.selectedCategory = category;
    },
    addToOrder(currentState: StoreState, selection: ProductSelection) {
      currentState.order.addProduct(selection.product, selection.quantity);
    },
    addProducts(currentState: StoreState, products: Product[]) {
      currentState.products = products;
    },
    setOrderId(currentState: StoreState, id: number) {
      currentState.storedId = id;
    },
    resetOrder(currentState: StoreState) {
      currentState.order = new Order();
    }
  },

  getters: {
    categories(state): string[] {
      return ["All", ...new Set(state.products.map(p => p.category))];
    },
    filteredProducts(state): Product[] {
      return state.products.filter(p => state.selectedCategory === "All"
        || state.selectedCategory === p.category);
    }
  },

  actions: {
    async loadProducts(context, task: () => Promise<Product[]>) {
      const data = await task();
      context.commit("addProducts", data);
    },
    async storeOrder(context, task: (order: Order) => Promise<number>) {
      context.commit("setOrderId", await task(context.state.order));
      context.commit("resetOrder");
    }
  },

  modules: {
  }
})