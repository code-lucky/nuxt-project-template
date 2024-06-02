<script lang="ts" setup>
    import LayoutHeader from '~/components/layout/Header.vue'
    import LayoutFooter from '~/components/layout/Footer.vue'
</script>

<template>
    <Body class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950">
        <LayoutHeader />
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
        <LayoutFooter/>
    </Body>
</template>