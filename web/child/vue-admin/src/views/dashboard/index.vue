<template>
    <div class="dashboard-container">
        <component :is="currentRole" />
    </div>
</template>

<script>
import adminDashboard from './admin/index'
export default {
    name: 'dashboard',
    components: {adminDashboard},
    data() {
        return {
            currentRole: 'adminDashboard'
        }
    }
}
</script>

<style>

</style>