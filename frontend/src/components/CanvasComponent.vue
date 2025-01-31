<template>
   <canvas @mousedown="satrtDrawing" @mousemove="draw" ref="canvasRef" class="border w-full   border-dark">

   </canvas>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);

const toolbarRef = ref<HTMLDivElement | null>(null);

const lastPoint = ref<{ x: number, y: number } | null>(null);

const resizeCanvas = () => {
   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   console.log(toolbar);
   if (!canvas ||  !toolbar) return;
   canvas.width = window.innerWidth - toolbar.clientWidth;
   canvas.width = window.innerHeight;
}

// Démarrer me dessin
const satrtDrawing = (e: MouseEvent) => {
   console.log('start drawing', e);

   lastPoint.value = {
      x: e.clientX,
      y: e.clientY
   }

   console.log(lastPoint.value)
}

// Dessiner
const draw = (el: MouseEvent) => {
   console.log('drawing', el);

   const canvas = canvasRef.value;
   const toolbar = document.querySelector('.toolbar');
   console.log(toolbar);
   
   if (!canvas) return;
   const rect = canvas.getBoundingClientRect();
   if(!rect) return; 
   console.log(rect);
   
   

   const cuurentPoint = {
      x: el.clientX,
      y: el.clientY
   }

   if (!lastPoint.value) return;

   const ctx = canvas.getContext('2d');
   

   ctx.beginPath();
   ctx.strokeStyle = "red";
   ctx.moveTo(lastPoint.value.x, lastPoint.value.y);
   ctx.lineTo(cuurentPoint.x, cuurentPoint.y);
   ctx.stroke();


}

onMounted(() => {
   resizeCanvas();
   const canvas = canvasRef.value;
   if (!canvas) return;
   const ctx = canvas.getContext('2d');
   canvasRef.value.getContext('2d')

   console.log(canvasRef.value)
})

</script>

<style scoped></style>