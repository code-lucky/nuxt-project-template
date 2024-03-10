<template>
    <div>
      <div
        class="draggable"
        draggable="true"
        @dragstart="onDragStart"
      >
        可拖拽的内容
      </div>
      <div
        class="droppable"
        @dragover.prevent
        @drop="onDrop"
      >
        拖放到此处
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      onDragStart(event) {
        event.dataTransfer.setData('text/plain', '这是拖拽的数据');
      },
      onDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        console.log('放置的数据：', data);
      }
    }
  }
  </script>
  
  <style>
  .draggable {
    cursor: move;
  }
  
  .droppable {
    border: 2px dashed #000;
  }
  </style>
  