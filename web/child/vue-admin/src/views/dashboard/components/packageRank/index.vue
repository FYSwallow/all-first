<template>
    <div class="packageRank-container">
        <div class="content-title">包裹量排名</div>
        <div class="content-list">
            <ul class="clearfix">
                <li
                    class="content-item"
                    v-for="(item, index) in packageRank"
                    :key="index"
                >{{item.city+"："+ item.packageNum}}</li>
            </ul>
        </div>
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
.packageRank-container {
    font-size: 12px;
    height: 25%;
    .content-title {
        padding-left: 5px;
        border-left: 3px solid #0bc4e9;
    }
    .content-list {
        .content-item {
            padding-top: 10px;
        }
    }
    
}
</style>