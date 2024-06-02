<template>
    <div
        class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5] h-[64px] max-h-[64px]">
        <div class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4">
            <div>
                <a href="/" class=""><span class="text-gray-700 dark:text-gray-300 light:text-gray-950">Front-end
                        tools</span></a>
            </div>
            <div class="hidden space-x-4 items-center divide-x divide-gray-500 md:flex">
                <div class="flex space-x-4 text-sm items-center">
                    <template v-for="(item,idx) in tbas" :key="idx">
                        <span class="text-gray-700 dark:text-gray-300 light:text-gray-950">
                            <UDropdown :items="item.children" :popper="{ placement: 'bottom-start' }">
                                {{item.label}}
                            </UDropdown>
                        </span>
                    </template>

                </div>

                <div class="pl-4 flex space-x-3 text-xl">
                    <div class="flex items-center" v-if="colorMode.preference">
                        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                            <template v-if="colorMode.preference == 'light'">
                                <UIcon class="cursor-pointer"
                                    name="i-line-md:moon-alt-to-sunny-outline-loop-transition" />
                            </template>
                            <template v-else>
                                <UIcon class="cursor-pointer" name="i-line-md:moon-rising-alt-loop" />
                            </template>

                        </UDropdown>
                    </div>
                </div>
            </div>

            <div class="flex items-center md:hidden">
                <div class="flex items-center">
                    <UIcon v-if="isMenu" class="cursor-pointer" :size="24" name="i-line-md:align-center" @click="isMenu = !isMenu"/>
                    <UIcon v-else class="cursor-pointer" :size="24" name="i-line-md:align-left"  @click="isMenu = !isMenu"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const colorMode = useColorMode()
    const isMenu = ref(false)
    const items = [
        [{
            label: 'Light',
            icon: 'i-line-md:moon-alt-to-sunny-outline-loop-transition',
            click: () => setTheme('light')
        }, {
            label: 'Dark',
            icon: 'i-line-md:moon-rising-alt-loop',
            click: () => setTheme('dark')
        }]
    ]

    const tbas = ref(
        [
            { 
                label: 'JSON', 
                children: [
                    [{ 
                        label: 'JSON Format',
                        click: ()=> {location.href = '/json-format'}
                     }]
                ] 
            },
            { 
                label: 'Image', 
                children: [
                    [{ 
                        label: 'Image to base64',
                        click: ()=> {location.href = '/image-base64'}
                     },{
                        label: 'Base64 to image',
                        click: ()=> {location.href = '/base64-image'}
                     }]
                ] 
            }
        ]
    )

    const setTheme = (theme) => {
        colorMode.preference = theme
    }
</script>