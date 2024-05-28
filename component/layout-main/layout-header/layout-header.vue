<template>
    <div
        class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5] h-[64px] max-h-[64px]">
        <div class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4">
            <div>
                Front-end tools
            </div>
            <div class="flex space-x-4 items-center divide-x divide-gray-500">
                <div class="flex space-x-4 text-sm items-center"><a href="/blank" class=""><span
                            class="text-gray-700 dark:text-gray-300 light:text-gray-950">Blank</span></a><a href="/post"
                        class=""><span class="text-gray-700 dark:text-gray-300 light:text-gray-950">Post</span></a><a
                        href="/test" class=""><span
                            class="text-gray-700 dark:text-gray-300 light:text-gray-950">Test</span></a>
                </div>

                <div class="pl-4 flex space-x-3 text-xl">
                    <div class="flex items-center">
                        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                            <UIcon class="cursor-pointer" name="i-line-md:moon-alt-to-sunny-outline-loop-transition" />
                        </UDropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const items = [
        [{
            label: 'Light',
            icon: 'i-line-md:moon-alt-to-sunny-outline-loop-transition'
        }, {
            label: 'Dark',
            icon: 'i-line-md:moon-rising-alt-loop'
        }, {
            label: 'System',
            icon: 'i-line-md:cog'
        }]
    ]
</script>