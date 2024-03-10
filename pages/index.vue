<template>
    <LayoutApp>
      <div class="w-full">
        <div class="xl mx-auto max-w-screen-xl w-full">
          <div class="flex justify-center items-center gap-3">
            
          </div>
        </div>
      </div>
    </LayoutApp>
  </template>
  <script setup>
  import LayoutApp from '@/component/layout-main/layout-app.vue'
  const val = ref(50)
  const handleVolume = (value) => {
    if(value === 'add'){
      val.value++
    } else {
      val.value--
    }
  }
  </script>
  