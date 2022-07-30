<template>
    <main class="main">
        <ItemList></ItemList>
        <div class="no-info">
            test
        </div>
    </main>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import Item from "@/components/Item.vue"

export default {
    name: "Home",
    components: { ItemList }
}
console.log(Item)
</script>

<style scoped>
.no-info {
    position: fixed;
    left: 0;
    top: 0;
}
</style>
