<template>
    <div class="flex w-full justify-center container-height">
        <div class="max-w-screen-2xl w-full mt-4 p-4 flex flex-col md:flex-row gap-5">
            <div class="md:w-1/2 w-full">
                <UTextarea color="white" variant="none" placeholder="Please enter the data to be formatted"
                    v-model="data" resize class="w-full custom-height border-slate-300 border border-solid rounded-md"
                    :style="{height: customHeight}" />

                <div class="mt-3 flex gap-3">
                    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                        @click="formatData">Format</button>
                    <button class="bg-violet-500 shadow-lg shadow-violet-500/50 text-white p-2 rounded min-w-20"
                        @click="clearData">Clear</button>
                </div>
            </div>
            <div class="md:w-1/2 w-full border-slate-300 border border-solid rounded-md overflow-auto"
                :style="{height: customHeight}">
                <vue-json-pretty v-if="previewData" :data="previewData" :showLineNumber="true" :showIcon="true"
                    :editable="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import LayoutApp from '@/component/layout-main/layout-app.vue'
    import VueJsonPretty from 'vue-json-pretty';
    import 'vue-json-pretty/lib/styles.css';
    const customHeight = ref('600px')

    const data = ref('')

    const previewData = ref()

    const formatData = () => {
        previewData.value = JSON.parse(data.value)
    }

    const clearData = () => {
        data.value = ''
        previewData.value = ''
    }
</script>

<style scoped>
    .container-height {
        min-height: calc(100vh - 64px - 4rem);
    }
</style>