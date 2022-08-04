<script>
import Popper from "vue3-popper";

export default {
    components: {
        Popper
    },
    data() {
        return {
            showInfo: false,
        }
    },
    props: ['id', 'itemType', 'imageUrl', 'name', 'subName', 'rarity', 'craftingCost', 'shopCost', 'minorCurseCost', 'majorCurseCost', 'curseType', 'effect', 'description']
}
</script>

<template>
    <div :class="'item ' + itemType">
        <img :src="imageUrl" @mouseover="showInfo = true" @mouseleave="showInfo = false" />
        <div class="item-info" v-if="showInfo">
            <div class="item-header">
                <div class="item-id">Index no. {{ id }}</div>
                <div class="item-name">{{ name }}</div>
                <div class="item-description"><span>{{ description }}</span></div>
            </div>
            <div class="item-subname">{{ subName }}</div>
            <div class="divider"></div>
            <div :class="'curse-type ' + curseType" v-if="curseType">Type: <span>{{ curseType }} curse</span></div>
            <div :class="'item-type ' + itemType" v-else>Type: <span>{{ itemType }}</span></div>
            <div :class="'item-rarity ' + rarity">Rarity: <span>{{ rarity }}</span></div>
            <div class="item-effect">Effect: <span>{{ effect }}</span></div>
            <div class="item-shopcost">Shop cost: <span>{{ shopCost }}</span></div>
            <div class="item-craftingcost">Crafting cost: <span>{{ craftingCost }}</span></div>
            <div class="item-minor-curse-cost item-curse-cost">Minor curse cost: <span>{{ minorCurseCost }}</span></div>
            <div class="item-major-curse-cost item-curse-cost">Major curse cost: <span>{{ majorCurseCost }}</span></div>

        </div>
    </div>
</template>

<style lang="scss">
.popover-body,
.item-info {
    width: 300px;
    left: 0;
    position: fixed;
    top: 0px;
    padding: 30px 20px 0 20px;
    height: 100%;

    .divider {
        background: white;
        height: 2px;
        width: 100%;
        margin: 20px 0;
    }

    div {
        margin-bottom: 5px;
        color: white;
    }

    .item-curse-cost {
        span {
            color: #C785E6;
            margin-left: 20px;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                top: -1px;
            }
        }
    }

    .item-minor-curse-cost span::before {
        background-image: url("/src/assets/images/gems/MinorCurse.png");
        left: -20px;

    }

    .item-major-curse-cost span::before {
        background-image: url("/src/assets/images/gems/MajorCurse.png");
        width: 15px;
        left: -17px;
    }

    .item-description span {
        color: #fff;
        font-weight: 300;
        font-style: italic;
    }

    .curse-type {

        &.Major span,
        &.Minor span {
            color: #e087b9
        }
    }

    .item-header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        margin-bottom: 0;
    }

    .item-id {
        color: #a38662;
        font-weight: 600;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 12px;
    }

    .item-name {
        color: white;
        text-decoration: underline;
        font-size: 20px;
        text-align: center;
    }

    .item-subname {
        color: green;
        text-align: center;
    }

    .item-type {
        color: white;

        .curse {
            color: #A38662;
        }

        span {
            color: #a38662;
            font-weight: 600;
        }

        &.Hex span {
            color: #b495f3;
        }
    }

    .item-rarity {
        &.Common span {
            color: #ffffff;
            font-weight: 600;
        }

        &.Legendary span {
            color: #cd0e20;
            font-weight: 600;
        }

        &.Rare span {
            color: #cd770e;
            font-weight: 600;
        }
    }

    .item-craftingcost {
        span {
            color: #c88aff;
            position: relative;
            margin-left: 20px;
            font-weight: 600;

            &:before {
                content: "";
                background-image: url("/src/assets/images/gems/Thorium1.png");
                position: absolute;
                width: 20px;
                height: 30px;
                background-size: 85%;
                background-repeat: no-repeat;
                left: -19px;
                top: 0px;
            }
        }
    }

    .item-shopcost {
        span {
            color: #ffb400;
            position: relative;
            margin-left: 20px;
            font-weight: 600;

            &:before {
                content: "";
                background-image: url("/src/assets/images/gems/Gold10.png");
                position: absolute;
                position: absolute;
                width: 30px;
                height: 30px;
                background-repeat: no-repeat;
                left: -19px;
                top: 3px;
            }
        }
    }

    .item-minorCurseCost {
        span {
            color: #c88aff;
            position: relative;
            margin-left: 20px;
            font-weight: 600;

            &:before {
                content: "";
                background-image: url("/src/assets/images/gems/MajorCurse.png");
                position: absolute;
                width: 20px;
                height: 30px;
                background-size: 85%;
                background-repeat: no-repeat;
                left: -19px;
                top: 0px;
            }
        }
    }

    .item-effect {
        span {
            color: #A38662;
            font-weight: 600;
        }
    }
}
</style>