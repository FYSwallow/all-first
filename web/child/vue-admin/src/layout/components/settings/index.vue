<template>
    <div class="setting-container">
        <div class="setting-title">页面样式设置</div>
        <div class="setting-list">
            <div class="setting-item">
                <span>主题颜色</span>
                <el-color-picker v-model="color1"></el-color-picker>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color1: '#409EFF'
        }
    }
}
</script>

<style lang='scss' scoped>
.setting-container {
    padding: 10px;
    .setting-title {
        margin: 10px 0;
    }
    .setting-list {
        .setting-item span {
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
        }
    }
}
</style>