<template>
    <div class="search-wrapper">
        <input id="search" class="search" type="text" placeholder="Search for items" @keyup="setFilter()"
            v-model="filter">
    </div>
</template>

<script>
// Stores
import { useItemListStore } from "../stores/itemList"

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

<style scoped lang="scss">
.search-wrapper {
    position: absolute;
    height: 50px;
    right: 20px;
    top: 20px;
    background: #33312c;
    border-radius: 4px;

    &::after {
        content: '';
        width: 50%;
        height: 1px;
        background: #e8ab43;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        transition: all .3s ease;
    }

    &:hover {
        cursor: pointer;

        &::after {
            width: 100%;
        }
    }

    .search {
        height: 50px;
        padding: 0 0 0 10px;
        border: none;
        width: 250px;
        background: transparent;
        color: white;

        &::placeholder {
            color: #fff;
        }

        &:focus {
            outline: none;
        }
    }
}
</style>
