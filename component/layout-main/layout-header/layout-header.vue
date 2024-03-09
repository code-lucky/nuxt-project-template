<template>
    <div class="w-full border-b-[1px] border-inherit shadow-sm">
        <div class="h-[80px] flex justify-center items-center">
            <UTabs :items="navList" :default-index="2" class="w-[300px] text-xl"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const navList = ref([
    {
        label: 'Home'
    },
    {
        label: 'Blog'
    },
    {
        label: 'Projects'
    }
])
</script>