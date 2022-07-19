<script>
import { RouterLink, RouterView } from 'vue-router'
import Items from './components/Items.vue'

export default {
    components: {
        Items,
    },
    data() {
        return {
        }
    },
    watch: {},
    methods: {
    },
    mounted() {}
}

</script>

<template>
    <div class="container">
        <div class="wrapper">
            <header>
                <div class="header">
                    <div class="tabs">
                        <RouterLink to="/relics" class="tab-link">
                            <div class="tab tab-relics active" data-tab="items">
                                Relics
                            </div>
                            <div class="line line-left"></div>
                            <div class="line line-right"></div>
                        </RouterLink>
                        <RouterLink to="/curses" class="tab-link">
                            <div class="tab tab-curses" data-tab="curses">
                                Curses
                            </div>
                            <div class="line line-left"></div>
                            <div class="line line-right"></div>
                        </RouterLink>
                        <RouterLink to="/potions" class="tab-link">
                            <div class="tab tab-potions" data-tab="potions">
                                Potions
                            </div>
                            <div class="line line-left"></div>
                            <div class="line line-right"></div>
                        </RouterLink>
                    </div>
                </div>
            </header>
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    background: url(src/assets/images/checker.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.hide {
    display: none;
}

.header {
    position: relative;

    .tabs {
        display: flex;
        justify-content: space-between;
        max-width: 170px;
        margin: 0 auto;

        .tab-link {
            .line {
                height: 2px;
                width: 30%;
                position: absolute;
                bottom: 0;
                transition: all 0.3s ease;
                background-color: #e8ab43;
                opacity: 0;
            }

            .line-left {
                right: -20px;
            }

            .line-right {
                left: -20px;
            }

            &.router-link-active {
                .line-left {
                    right: 20px;
                    opacity: 1;
                }

                .line-right {
                    left: 20px;
                    opacity: 1;
                }
            }
        }

        .tab {
            color: white;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            padding: 10px 0px;
            position: relative;

            &:hover {
                cursor: pointer;
            }
        }
    }
}

.items,
.curses,
.potions {
    flex-wrap: wrap;
    position: relative;
    transition: all 0.3s ease;
    display: none;
    justify-content: space-between;
    margin-bottom: 150px;
    padding: 20px 0;

    &.active {
        display: flex;
    }

    .item {
        width: 70px;
        height: 70px;
        margin: 0 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
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