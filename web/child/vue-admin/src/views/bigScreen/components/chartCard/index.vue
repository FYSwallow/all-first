<template>
    <div class="card-container">
        <div class="content-title">{{ title }}</div>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
.card-container {
    font-size: 12px;
    padding: 24px;
    height: 100%;
    overflow: hidden;
    .content-title {
        padding-left: 5px;
        border-left: 3px solid #0bc4e9;
    }
}
</style>