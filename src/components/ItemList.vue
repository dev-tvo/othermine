<template>
    <div class="items">
        <Item v-for="item in items" :key="item.id" :id="item.id" :name="item.name" :itemType="item.itemType"
            :rarity="item.rarity" :craftingCost="item.craftingCost" :curseType="item.curseType"
            :shopCost="item.shopCost" :minorCurseCost="item.minorCurseCost" :majorCurseCost="item.majorCurseCost"
            :effect="item.effect" :description="item.description" :imageUrl="item.imageUrl" />
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
        return {
        }
    },
    watch: {
        $route(to, from) {
            this.itemListStore.currentType = to.name
        }
    },
    computed: {
        items() {
            return this.itemListStore.filteredItems
        }
    },
    methods: {
        updateItemList() {
            this.itemListStore.getItems(this.$route.name)
        }
    },
    mounted() {
        this.itemListStore.currentType = this.$route.name
        this.updateItemList()
    }
}
</script>

<style lang="scss">
.items {
    flex-wrap: wrap;
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
        margin-bottom: 30px;

        &.Hex {
            img {
                width: 90px;
            }
        }

        img {
            transition: all 0.3s ease;
        }

        &:hover {
            cursor: pointer;

            img {
                transform: scale(1.1);
            }
        }
    }

    &:after {
        content: "";
        flex: auto;
    }
}
</style>
