<template>
    <div class="dark:bg-slate-900">
        <LayoutHeader/>
        <div>
            <slot />
        </div>
    </div>
</template>
<script setup>
import LayoutHeader from './layout-header/layout-header.vue'
</script>