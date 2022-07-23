<template>
  <div class="search-wrapper">
    <input id="search" class="search" type="text" placeholder="Search2 by title, id, effect & description" @keyup="setFilter()" v-model="filter">
  </div>
</template>

<script>
// Stores
import {useItemListStore} from "../stores/itemList"

export default {
  setup() {
    const itemListStore = useItemListStore()

    return { itemListStore }
  },
  name: "Search",
  data() {
    return {
      filter: '',
    }
  },
  methods: {
    setFilter() {
      this.itemListStore.filter = this.filter
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
