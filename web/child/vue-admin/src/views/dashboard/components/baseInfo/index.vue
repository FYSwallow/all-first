<template>
    <div class="baseInfo-container">
        <div class="content-title">基本信息</div>
        <div class="content-list">
            <ul class="clearfix">
                <li
                    class="content-item fl"
                    v-for="(val, key) in baseInfo"
                    :key="key"
                >{{key+"："+ val}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        baseInfo: {
            // type: Object,
            // default: {}
        }
    },
    
}
</script>

<style lang="scss" scoped>
.baseInfo-container {
    font-size: 12px;
    height: 20%;
    .content-list {
        margin-top: 20px;
        .content-item {
            font-size: 14px;
            padding-top: 10px;
            width: 50%;
        }
    }
    .content-title {
        padding-left: 5px;
        border-left: 3px solid #0bc4e9;
    }
}
</style>