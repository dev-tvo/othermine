<script>
import Item from './Item.vue'
import itemList from '../data/items.js'
import curseList from '../data/curses.js'
import potionList from '../data/potions.js'

export default {
    components: {
        Item,
    },
    data() {
        return {
            items: [],
            curses: [],
            data: [],
            input: '',
            noData: false
        }
    },
    computed: {

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
            this.calculateHeight()
        },
        returnCorrectData() {
            if (this.$route.name == 'relics') {
                this.data = itemList
            } else if (this.$route.name == 'curses') {
                this.data = curseList
            } else {
                this.data = potionList
            }
        },
        calculateHeight() {
            setTimeout(() => {
                var height = document.querySelector('.container').clientHeight
                if (height < 800) {
                    document.querySelector('.wrapper').style.height = '100vh'
                } else {
                    document.querySelector('.wrapper').style.height = height + 70 + 'px'
                }
            }, 50);
        }
    },
    watch: {
        $route(to, from) {
            this.returnCorrectData()
        },
        input: function () {
            if (this.input === '') {
                this.returnCorrectData()
            }
        }
    },
    mounted: function () {
        this.returnCorrectData()
        // this.calculateHeight()
    }
}
</script>

<template>
    <div class="search-wrapper">
        <input id="search" class="search" type="text" placeholder="Search by title, id, effect & description" @keyup="itemSearch()" v-model="input">
    </div>
    <div class="items">
        <Item v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :itemType="item.itemType" :rarity="item.rarity" :craftingCost="item.craftingCost"
            :curseType="item.curseType" :shopCost="item.shopCost" :minorCurseCost="item.minorCurseCost" :majorCurseCost="item.majorCurseCost" :effect="item.effect"
            :description="item.description" :imageUrl="item.imageUrl" />
    </div>
</template>

<style lang="scss">
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
