<template>
   <canvas @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @mouseout="stopDrawing" ref="canvasRef"
      class="border-2">
   </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { drawLine } from '@/utils/canvas';
import { useDrawingStore } from '@/stores/useDrawingStore';
import { useSocketStore } from '@/stores/useSocketStore';


const canvasRef = ref<HTMLCanvasElement | null>(null);
const lastPoint = ref<{ x: number, y: number } | null>(null);
// const isDrawing = ref(false);

const drawingStore = useDrawingStore();
const socketStore = useSocketStore();

const resizeCanvas = () => {
   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   if (!canvas || !toolbar) return;

   canvas.width = window.innerWidth - toolbar.clientWidth;
   canvas.height = window.innerHeight;

}

// Démarrer le dessin
const startDrawing = (e: MouseEvent) => {
   // isDrawing.value = true;
   drawingStore.setIsDrawing(true);
   lastPoint.value = {
      x: e.clientX,
      y: e.clientY
   }
}

// Dessiner
const draw = (e: MouseEvent) => {
   if (!drawingStore.isDrawing || !lastPoint.value) return;

   const canvas = canvasRef.value;
   if (!canvas) return;
   const rect = canvas.getBoundingClientRect();
   const ctx = canvas.getContext('2d');
   if (!ctx) return;

   const currentPoint = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
   };

   if (!lastPoint.value) return;
   drawLine(ctx, lastPoint.value, currentPoint, drawingStore.color, drawingStore.lineWidth, drawingStore.isEraser);
   socketStore.emit('draw', { points: [lastPoint.value, currentPoint], color: drawingStore.color, lineWidth: drawingStore.lineWidth, isEraser: drawingStore.isEraser });
   lastPoint.value = currentPoint;
}

// Arrêter le dessin
const stopDrawing = () => {
   drawingStore.setIsDrawing(false);
   lastPoint.value = null;
}

onMounted(() => {
   socketStore.connect();
   //Ecout de l'événement draw
   socketStore.socket?.on('draw',
      (data) => {
         console.log(data);

      }
   )
   window.addEventListener('resize', resizeCanvas);

   resizeCanvas();
   const canvas = canvasRef.value;
   if (!canvas) return;
   const ctx = canvas.getContext('2d');

});
</script>

<style scoped>
/* Ajoutez du style si nécessaire */
</style>