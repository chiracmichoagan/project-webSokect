<template>
    <div class="toolbar bg-white rounded-lg shadow-lg px-4 space-y-4 h-full">
        <div class="flex justify-center gap-5 mt-10">
            <button 
                :class="`cursor-pointer p-2 rounded-full ${!drawingStore.isEraser ? 'bg-blue-100' : 'bg-gray-100'}`" 
                @click="drawingStore.setIsEraser(false)"  
                title="Pinceau">
                <Paintbrush :size="60" />
            </button>

            <button 
                :class="`cursor-pointer p-2 rounded-full ${drawingStore.isEraser ? 'bg-blue-100' : 'bg-gray-100'}`" 
                @click="drawingStore.setIsEraser(true)" 
                title="Gomme">
                <Eraser :size="60" />
            </button>
        </div>

        <div v-if="!drawingStore.isEraser" class="mt-10 flex flex-col gap-2">
            <label for="color" class="text-3xl text-gray-900 font-medium">Couleur</label>
            <input 
                type="color" 
                id="color" 
                v-model="drawingStore.color"
                @change="drawingStore.setColor(drawingStore.color)" 
                class="w-50" />
        </div>

        <div class="mt-10">
            <label for="range" class="text-3xl text-gray-900 font-medium">Épaisseur</label><br />
            <input 
                class="w-50" 
                type="range" 
                id="range" 
                v-model="drawingStore.lineWidth" 
                @change="drawingStore.setLineWidth(drawingStore.lineWidth)" 
                min="1" 
                max="100" />
        </div>

        <div class="mt-10 flex flex-col gap-2">
            <button 
                class="border rounded-2xl px-3 py-2 shadow-xl bg-red-500 text-red-100" 
                @click="clear"
                title="clear">
                <RotateCcw :size="60" />
                Nettoyer
            </button>
            <button 
                title="save" 
                class="border rounded-2xl px-3 py-2 shadow-xl text-blue-600 bg-blue-400">
                Enregistrer
                <Download :size="60" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Eraser, Paintbrush, RotateCcw, Download } from 'lucide-vue-next';
import { useDrawingStore } from '@/stores/useDrawingStore';
import { clearCanvas } from '@/utils/canvas';

const drawingStore = useDrawingStore();
const clear = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;

    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    clearCanvas(ctx, canvas.width, canvas.height);
}
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>