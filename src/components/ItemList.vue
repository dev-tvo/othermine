<template>
    <div class="items">
        <Item v-for="item in items" :key="item.id" :id="item.id" :name="item.name" :itemType="item.itemType" :rarity="item.rarity" :craftingCost="item.craftingCost"
            :curseType="item.curseType" :shopCost="item.shopCost" :minorCurseCost="item.minorCurseCost" :majorCurseCost="item.majorCurseCost" :effect="item.effect"
            :description="item.description" :imageUrl="item.imageUrl" />
    </div>
</template>

<script>
// Stores
import { useItemListStore } from "@/stores/itemList"
// Components
import Item from "./Item.vue";

export default {
    setup() {
        const itemListStore = useItemListStore()

        return { itemListStore }
    },
    name: "ItemList",
    components: { Item },
    data() {
        return {}
    },
    watch: {
        $route(to, from) {
            this.updateItemList()
        }
    },
    computed: {
        items() {
            return this.itemListStore.filteredItems
        }
    },
    methods: {
        updateItemList() {

            if (this.$route.name === 'relics') {
                this.itemListStore.setItems('items')
            } else if (this.$route.name === 'curses') {
                this.itemListStore.setItems('curses')
            } else if (this.$route.name === 'potions') {
                this.itemListStore.setItems('potions')
            } else if (this.$route.name === 'hexes') {
                this.itemListStore.setItems('hexes')
            }
        }
    },
    mounted() {
        this.updateItemList()
    }
}
</script>

<style lang="scss" scoped>
.items {
    flex-wrap: wrap;
    // position: relative;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    .item {
        width: 70px;
        height: 70px;
        margin: 0 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        // position: relative;
        margin-bottom: 30px;

        img {
            transition: all 0.3s ease;
        }

        &:hover {
            cursor: pointer;

            img {
                transform: scale(1.2);
            }
        }
    }

    &:after {
        content: "";
        flex: auto;
    }
}
</style>
