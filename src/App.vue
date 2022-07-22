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
    mounted() { }
}

</script>

<template>
    <div class="wrapper">
        <div class="container">
            <header>
                <div class="tabs">
                    <RouterLink to="/relics" class="tab-link">
                        <div class="tab tab-relics active">
                            Relics
                        </div>
                        <div class="line line-left"></div>
                        <div class="line line-right"></div>
                    </RouterLink>
                    <RouterLink to="/curses" class="tab-link">
                        <div class="tab tab-curses">
                            Curses
                        </div>
                        <div class="line line-left"></div>
                        <div class="line line-right"></div>
                    </RouterLink>
                    <RouterLink to="/potions" class="tab-link">
                        <div class="tab tab-potions">
                            Potions
                        </div>
                        <div class="line line-left"></div>
                        <div class="line line-right"></div>
                    </RouterLink>
                </div>
            </header>
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    background: url(src/assets/images/checker.png) center center/cover;
}

header {

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

            &:hover {
                .line-left {
                    right: 20px;
                    opacity: 1;
                }

                .line-right {
                    left: 20px;
                    opacity: 1;
                }
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
</style>