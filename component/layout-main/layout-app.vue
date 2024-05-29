<template>
    <div>
        <LayoutHeader />
        <div class="content-container">
            <slot />
        </div>
        <LayoutFooter />
    </div>
</template>
<script setup>
    import LayoutHeader from './layout-header/layout-header.vue'
    import LayoutFooter from './layout-footer/layout-footer.vue'
</script>
<style scoped>
    .content-container{
        min-height: calc(100vh - 52px);
    }
</style>