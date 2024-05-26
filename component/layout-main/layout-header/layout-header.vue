<template>
    <div class="w-full border-b-[1px] border-inherit shadow-sm bg-white dark:bg-slate-900 dark:border-0">
        <div class="h-[80px] flex items-center w-full justify-between px-[50px] gap-[10px]">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="../../../public/images/logo.svg"
                alt="">
            <UHorizontalNavigation :links="links">
                <template #default="{ link }">
                    <span class="group-hover:text-primary relative">{{ link.label }}</span>
                </template>
            </UHorizontalNavigation>
            <!-- <UTabs :items="navList" v-model="currentIndex" class="w-[400px] h-[40px]" @change="changeNav" /> -->
            <UIcon v-if="!isDark" name="i-carbon-light" class="text-xl cursor-pointer dark:text-white"
                @click="changeDarkMode" />
            <UIcon v-else name="i-carbon-moon" class="text-xl cursor-pointer dark:text-white" @click="changeDarkMode" />
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const currentIndex = ref(0)
    const navList = ref([
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Blog',
            path: '/blog'
        },
        {
            label: 'Projects',
            path: '/projects'
        }
    ])

    const isDark = ref(false)

    const route = useRoute()

    const links = [{
        label: 'Horizontal Navigation',
        to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
    }, {
        label: 'Command Palette',
        to: '/components/command-palette'
    }, {
        label: 'Table',
        to: '/components/table'
    }]

    const changeDarkMode = () => {
        isDark.value = !isDark.value
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('light', isDark.value)
    }

    const changeNav = (index) => {
        currentIndex.value = index
        navigateTo({
            path: navList.value[index].path,
            query: {}
        });
    }

    onMounted(() => {
        if (localStorage.getItem('light') === 'true') {
            isDark.value = true
            document.documentElement.classList.add('dark')
        }

        nextTick(() => {
            // Get current path
            const path = window.location.pathname
            navList.value.forEach((item, index) => {
                if (item.path === path) {
                    currentIndex.value = index
                }
            })
        })
    })
</script>