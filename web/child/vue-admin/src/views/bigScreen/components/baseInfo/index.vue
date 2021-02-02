<template>
    <div class="content-list">
        <ul class="clearfix">
            <li
                class="content-item fl"
                v-for="(val, key) in baseInfo"
                :key="key"
            >
                {{ key + '：' + val }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        baseInfo: {
            // type: Object,
            // default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
.content-list {
    margin-top: 20px;
    .content-item {
        font-size: 14px;
        padding-top: 10px;
        width: 50%;
    }
}
</style>