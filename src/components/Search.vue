<template>
  <h1>WTF</h1>
  <div class="search-wrapper">
    <input id="search2" class="search" type="text" placeholder="Search2 by title, id, effect & description" @keyup="itemSearch()" v-model="input">
  </div>
</template>

<script>
import itemList from "../data/items";

export default {
  name: "Search",
  data() {
    return {
      data: [],
      input: '',
    }
  },
  methods: {
    itemSearch() {
      let result = itemList
      if (!this.input) {
        this.calculateHeight()
        return result
      }

      const filter = event =>
          event.name.toLowerCase().includes(this.input) ||
          event.description.toLowerCase().includes(this.input) ||
          event.rarity.toLowerCase().includes(this.input)

      this.data = result.filter(filter)
      console.log(this.data)
      this.calculateHeight()
    }
  },
}
</script>

<style scoped>

</style>
