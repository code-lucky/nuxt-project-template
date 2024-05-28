<template>
    <div>
        <LayoutHeader/>
        <div>
            <slot />
        </div>
    </div>
</template>
<script setup>
import LayoutHeader from './layout-header/layout-header.vue'
</script>