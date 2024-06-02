<script setup lang="ts">
    import AppHeader from '~/component/layout-main/layout-header/layout-header.vue'
    import AppFooter from '~/component/layout-main/layout-footer/layout-footer.vue'
</script>

<template>
    <AppHeader />

    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>

    <AppFooter />

    <UNotifications />
</template>