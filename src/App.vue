<script>
import { RouterLink, RouterView } from 'vue-router'
import Search from "./components/Search.vue";

export default {
    components: {
      Search,
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
        <div class="overlay"></div>
        <header>
            <div class="tabs">
                <RouterLink to="/relics" class="tab-link">
                    <div class="tab">Relics</div>
                    <div class="line line-left"></div>
                    <div class="line line-right"></div>
                </RouterLink>
                <RouterLink to="/curses" class="tab-link">
                    <div class="tab">Curses</div>
                    <div class="line line-left"></div>
                    <div class="line line-right"></div>
                </RouterLink>
                <RouterLink to="/potions" class="tab-link">
                    <div class="tab">Potions</div>
                    <div class="line line-left"></div>
                    <div class="line line-right"></div>
                </RouterLink>
                <RouterLink to="/hexes" class="tab-link">
                    <div class="tab">Hexes</div>
                    <div class="line line-left"></div>
                    <div class="line line-right"></div>
                </RouterLink>
            </div>
          <Search></Search>
        </header>
        <RouterView />
        <footer>
            <div class="footer-left">
                <ul>
                    <li>Mail me; undermined@gmail.com</li>
                </ul>
            </div>
            <div class="footer-right">
                <img src="/src/assets/logo.svg" alt="">
            </div>
            <!-- <div class="footer-right">
                <img src="/src/assets/images/PeasantPilfer.png" alt="">
            </div> -->
        </footer>
    </div>
</template>

<style lang="scss">
.overlay {
    background: url(src/assets/images/checker.png) center center/cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

// .wrapper {
//     background: url(src/assets/images/checker.png) center center/cover;
// }

.tabs {
    display: flex;
    justify-content: space-between;
    max-width: 220px;
    margin: 0 auto;

    .tab-link {
        position: relative;

        .line {
            height: 2px;
            width: 30%;
            position: absolute;
            bottom: 0;
            transition: all 0.3s ease;
            background-color: #e8ab43;
            opacity: 0;

            &.line-left {
                right: -20px;

                &:hover {
                    right: 20px;
                    opacity: 1;
                }
            }

            &.line-right {
                left: -20px;

                &:hover {
                    left: 20px;
                    opacity: 1;
                }
            }
        }

        &.router-link-active {
            .line-left {
                right: 15px;
                opacity: 1;
            }

            .line-right {
                left: 15px;
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

footer {
    display: flex;
    background: #222;
    justify-content: space-between;
    padding: 20px;
    margin-left: 320px;
    z-index: 2;
    align-items: center;
    position: relative;

    .footer-left {
        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                color: white;
            }
        }
    }

    .footer-right {
        width: 50px;
    }
}
</style>
