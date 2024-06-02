<template>
  <div class="flex w-full justify-center">
    <div class="max-w-screen-2xl w-full items-center flex justify-center vh">
      <h1 class="text-center flex flex-col font-bold">
        <span class="drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black">
          <span class="font-change-color-1">Front-end</span>
        </span>
        <span class="drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black">
          <span class="font-change-color-2">Tools</span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script setup>
  import LayoutApp from '@/component/layout-main/layout-app.vue'
</script>

<style scoped>
  .vh {
    height: calc(100vh - 52px - 64px);
  }

  /* .font-change-color-1,
  .font-change-color-2 {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-size: 200% 200%;
    animation: gradient-animation 6s infinite;
  }

  .font-change-color-2 {
    animation-delay: 3s;
  }

  @media (prefers-color-scheme: light) {
    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 50% 50%;
      }

      75% {
        background-position: 100% 50%;
      }

      100% {
        color: #000;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 50% 50%;
      }

      75% {
        background-position: 100% 50%;
      }

      100% {
        color: #fff;
      }
    }
  } */


  /* .font-change-color-1 {
    background-image: linear-gradient(45deg, rgb(21, 198, 174), rgb(22, 78, 162));
  }

  .font-change-color-2 {
    background-image: linear-gradient(45deg, rgb(112, 10, 208), rgb(119, 45, 63));
  } */
</style>