<template>
    <div class="rightPanel-container" :class="{show: show}">
        <div class="rightPanel-bg" @click="showSetting"></div>
        <div class="rightPanel">
            <div class="handle-button" @click="showSetting">
                <i :class="show?'el-icon-close':'el-icon-setting'" />
            </div>
            <div class="rightPanel-list">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        showSetting: function() {
            this.show = !this.show
        }
    }
}
</script>

<style lang='scss' scoped>
.rightPanel-container {
    position: fixed;
    .rightPanel-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        display: none;
    }
    .rightPanel {
        position: fixed;
        width: 0;
        top: 0;
        right: 0;
        bottom: 0%;
        background-color: #fff;
        transition: all ease 0.28s;
        .handle-button {
            position: absolute;
            top: 200px;
            left: 0;
            transform: translate(-100%,-50%);
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: chartreuse;
            border-radius: 6px 0 0 6px;
            font-size: 24px;
            color: #fff;
        }
    }
}
.show {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2001;
    .rightPanel-bg {
        display: block;
    }
    .rightPanel {
        width: 200px;
    }
}
</style>