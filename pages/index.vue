<template>
  <LayoutApp>
    <div class="w-full">
      <div class="xl mx-auto max-w-screen-xl w-full">
        <div class="flex justify-center items-center gap-3">
          <ul id="items">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>
      </div>
    </div>
  </LayoutApp>
</template>
<script setup>
  import Sortable from 'sortablejs';
  import LayoutApp from '@/component/layout-main/layout-app.vue'
  const val = ref(50)
  const handleVolume = (value) => {
    if (value === 'add') {
      val.value++
    } else {
      val.value--
    }
  }

  onMounted(() => {
    const el = document.getElementById('items');
    const sortable = Sortable.create(el);
  })
</script>