import { defineStore } from "pinia/dist/pinia";
import Items from "../data/items";
import Curses from "../data/curses";
import Potions from "../data/potions";
// import Hexes from "../data/hexes";

export const useItemListStore = defineStore('itemListStore', {
  state: () => {
    return {
      items: [],
      filter: ''
    }
  },
  getters: {
    filteredItems(state) {
      const filter = item =>
        item.name.toLowerCase().includes(state.filter) ||
        item.description.toLowerCase().includes(state.filter) ||
        item.rarity.toLowerCase().includes(state.filter)
      return state.items.filter(filter)
    },
  },
  actions: {
    setItems(type) {
      if (type === 'items') this.items = Items
      if (type === 'curses') this.items = Curses
      if (type === 'potions') this.items = Potions
      // if (type === 'hexes') return Hexes
    },
  }
})
