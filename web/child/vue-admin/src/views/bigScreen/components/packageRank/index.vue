<template>
    <div class="content-list">
        <ul class="clearfix">
            <li
                class="content-item"
                v-for="(item, index) in packageRank"
                :key="index"
            >
                {{ item.city + '：' + item.packageNum }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        packageRank: {
            // type: Array,
            // default: []
        }
    }
}
</script>

<style lang="scss" scoped>
.content-list {
    .content-item {
        padding-top: 10px;
    }
}
</style>