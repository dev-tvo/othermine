import {defineStore} from "pinia/dist/pinia";
import Relics from "../data/relics";
import Curses from "../data/curses";
import Potions from "../data/potions";
import Hexes from "../data/hexes";
import relics from "../data/relics";

export const useItemListStore = defineStore('itemListStore', {
  state: () => {
    return {
      relics: [],
      curses: [],
      potions: [],
      hexes: [],
      currentType: 'relics',
      filter: ''
    }
  },
  getters: {
    filteredItems(state) {
      const filter = item =>
        item.name.toLowerCase().includes(state.filter) ||
        item.description.toLowerCase().includes(state.filter) ||
        item.rarity.toLowerCase().includes(state.filter)

      switch (state.currentType) {
        case 'relics':
          return state.relics.filter(filter)
        case 'curses':
          return state.curses.filter(filter)
        case 'potions':
          return state.potions.filter(filter)
        case 'hexes':
          return state.hexes.filter(filter)
      }
    },
  },
  actions: {
    getItems(initialType) {
      switch (initialType) {
        case 'relics':
          this.relics = Relics
          break
        case 'curses':
          this.curses = Curses
          break
        case 'potions':
          this.potions = Potions
          break
        case 'hexes':
          this.hexes = Hexes
          break
      }
      if (this.relics.length < 1) this.relics = Relics
      if (this.curses.length < 1) this.curses = Curses
      if (this.potions.length < 1) this.potions = Potions
      if (this.hexes.length < 1) this.hexes = Hexes
    },
  }
})
