<template>
    <div>
        <LayoutHeader />
        <div>
            <div class="top-header"></div>
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
    .top-header{
        height: 64px;
    }
</style>