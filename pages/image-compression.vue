<template>
    <div class="w-full container-height">
        <div class="max-w-screen-2xl relative left-0 right-0 m-auto p-3">
            <file-pond v-if="FilePond" class="mt-3" name="file" ref="pond" label-idle="Drag or click upload image"
                allow-multiple="false" @init="handleFilePondInit" @addfile="handleAddFile"
                @removefile="handleRemoveFile" accepted-file-types="image/*"></file-pond>

            <div class="mt-3 flex gap-3">
                <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                    @click="compressionImage">compression</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import vueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
    import imageCompression from 'browser-image-compression';

    const FilePond = ref(null);
    const pond = ref(null);
    const base64Data = ref('');
    const toast = useToast();
    const selectedFile = ref<File | null>(null);

    const handleFilePondInit = () => {
        console.log('handleFilePondInit...');
    };

    const handleAddFile = (error, file) => {
        if (error) {
            console.error('add error:', error);
            return;
        }
        console.log('add file:', file);
        if (file && file.file instanceof File) {
            selectedFile.value = file.file;
        } else {
            console.error('The file added is not an instance of File');
        }
    };

    const handleRemoveFile = (error, file) => {
        if (error) {
            console.error('delete error:', error);
            return;
        }
        console.log('successfully delete:', file);
        selectedFile.value = null;
    };

    const compressionImage = async () => {
        if (!selectedFile.value) {
            toast.error('No file selected');
            return;
        }

        const file = selectedFile.value;

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 800,
            useWebWorker: true
        };

        try {
            const compressedFile = await imageCompression(file, options);
            console.log('compressed file:', compressedFile);

            // 显示压缩后的图片
            const reader = new FileReader();
            reader.readAsDataURL(compressedFile);
            reader.onload = (e) => {
                console.log('compressed image data URL:', e.target.result);
                base64Data.value = e.target.result;
            };
        } catch (error) {
            console.error('Error compressing image:', error);
            toast.error('Error compressing image');
        }
    };

    onMounted(() => {
        FilePond.value = vueFilePond(FilePondPluginImagePreview);
    });
</script>

<style scoped>
    .container-height {
        min-height: calc(100vh - 64px - 4rem);
    }
</style>
