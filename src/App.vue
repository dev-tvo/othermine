<script>
import Search from "./components/Search.vue";

export default {
    components: {
        Search,
    },
    data() {
        return {}
    },
    watch: {},
    methods: {},
    mounted() {
        if (this.$route.path === "/") {
            this.$router.push("/relics")
        }
    }
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
        <RouterView/>
        <footer>
            <div class="footer-left">
                <ul>
                    <li>Mail us; othermine@gmail.com</li>
                </ul>
            </div>
            <div class="footer-right">
                <img src="/src/assets/scale.png" alt="">
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.overlay {
    background: url('/src/assets/images/checker.png') center center/cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.tabs {
    display: flex;
    justify-content: space-between;
    max-width: 220px;
    margin: 0 auto;

    .tab-link {
        position: relative;

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

        &:hover {
            .line-left {
                right: 17px;
                opacity: 1;
            }

            .line-right {
                left: 17px;
                opacity: 1;
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
}

footer {
    display: flex;
    background: #222;
    justify-content: space-between;
    padding: 5px 20px;
    margin-left: 300px;
    z-index: 2;
    align-items: center;
    position: relative;
    margin-top: auto;

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
        img {
            height: 80px;
        }
    }
}
</style>
