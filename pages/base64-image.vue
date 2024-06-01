<template>
    <LayoutApp>
        <UNotifications />
        <div class="w-full container-height">
            <div class="max-w-screen-2xl relative left-0 right-0 m-auto p-3">

                <UTextarea color="white" variant="none" placeholder="Here is the generated base64 data"
                    v-model="base64Data" resize
                    class="w-full custom-height border-slate-300 border border-solid rounded-md mt-6" :rows="12" />

                <div class="mt-3 flex gap-3">
                    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                        @click="downloadFile">Generate File</button>
                    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 rounded min-w-20"
                        @click="paste">paste</button>
                    <button class="bg-violet-500 shadow-lg shadow-violet-500/50 text-white p-2 rounded min-w-20"
                        @click="clear">Clear</button>
                </div>
            </div>
        </div>
    </LayoutApp>
</template>

<script setup>
    import { ref } from 'vue';
    import LayoutApp from '@/component/layout-main/layout-app.vue';
    const base64Data = ref('');
    const toast = useToast();

    const generate = () => {
        const files = pond.value.getFiles();
        if (files.length === 0) {
            toast.error('No selection file');
            return;
        }

        const file = files[0].file;
        if (!file.type.startsWith('image/')) {
            toast.error('The selection is not a picture');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            base64Data.value = e.target.result; // 将Base64数据存储在data中
        };
        reader.readAsDataURL(file);
    };

    const clear = () => {
        base64Data.value = '';
    };

    const paste = () =>{
        navigator.clipboard.readText().then(text => {
            base64Data.value = text;
        }).catch(err => {
            console.log('Failed to read clipboard contents: ', err)
        });
    }

    const base64ToFile = (base64, filename) => {
        const arr = base64.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

    const downloadFile = () => {
        if (!base64Data.value) {
            toast.error('No Base64 data available to convert');
            return;
        }

        const file = base64ToFile(base64Data.value, 'downloaded_image.png');
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success('File downloaded successfully');
    };
</script>

<style scoped>
    .container-height {
        min-height: calc(100vh - 64px - 4rem);
    }
</style>