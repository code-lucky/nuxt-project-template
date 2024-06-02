<template>
    <div class="w-full container-height">
        <div class="max-w-screen-2xl relative left-0 right-0 m-auto p-3">
            <file-pond class="mt-3" name="file" ref="pond" label-idle="Drag or click upload image"
                allow-multiple="false" @init="handleFilePondInit" @addfile="handleAddFile"
                @removefile="handleRemoveFile" accepted-file-types="image/*"></file-pond>

            <UTextarea color="white" variant="none" placeholder="Here is the generated base64 data" v-model="base64Data"
                resize class="w-full custom-height border-slate-300 border border-solid rounded-md mt-6" :rows="12" />

            <div class="mt-3 flex gap-3">
                <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                    @click="generate">Generate</button>
                <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                    @click="copyData">Copy</button>
                <button class="bg-violet-500 shadow-lg shadow-violet-500/50 text-white p-2 rounded min-w-20"
                    @click="clear">Clear</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import LayoutApp from '@/component/layout-main/layout-app.vue'
    import vueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

    const FilePond = vueFilePond(FilePondPluginImagePreview);
    const pond = ref(null)
    const base64Data = ref('')
    const toast = useToast()

    const handleFilePondInit = () => {
        console.log('handleFilePondInit...')
    }

    const handleAddFile = (error, file) => {
        if (error) {
            console.error('add error:', error);
            return;
        }
        console.log('add file:', file);
    }

    const handleRemoveFile = (error, file) => {
        if (error) {
            console.error('delete error:', error);
            return;
        }
        console.log('successfully delete:', file);
    }


    const generate = () => {
        const files = pond.value.getFiles();
        if (files.length === 0) {
            console.warn('No selection file');
            return;
        }

        const file = files[0].file;
        if (!file.type.startsWith('image/')) {
            toast.add({
                id: '2',
                title: 'Notification',
                description: 'Please upload an image type file',
                icon: 'i-material-symbols-light-error',
                timeout: 3500,
                color: 'red'
            })
            console.warn('The selection is not a picture');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            base64Data.value = e.target.result; // 将Base64数据存储在data中
        };
        reader.readAsDataURL(file);
    }

    const clear = () => {
        base64Data.value = ''
    }
    const copyData = () => {
        navigator.clipboard.writeText(base64Data.value)
            .then(() => {
                toast.add({
                    id: '1',
                    title: 'Notification',
                    description: 'Copy success',
                    icon: 'i-ep-success-filled',
                    timeout: 2000,
                })
            })
            .catch(err => {
                toast.add({
                    id: '2',
                    title: 'Notification',
                    description: 'Copy failure',
                    icon: 'i-material-symbols-light-error',
                    timeout: 2000,
                    color: 'red'
                })
            });
    }
</script>

<style scoped>
    .container-height {
        min-height: calc(100vh - 64px - 4rem);
    }
</style>