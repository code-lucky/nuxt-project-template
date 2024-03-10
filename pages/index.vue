<template>
    <LayoutApp>
      <div class="w-full h-[calc(100vh-90px)]">
        <div class="xl mx-auto colors-blue max-w-screen-xl w-full">
          <div class="flex justify-center items-center gap-3">
            <UIcon name="i-system-uicons-volume-minus" class="text-4xl text-white" @click="handleVolume('minus')"/>
            <URange v-model="val" class="max-w-[400px]"/>
            <UIcon name="i-system-uicons-volume-add" class="text-4xl text-white" @click="handleVolume('add')"/>
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
  