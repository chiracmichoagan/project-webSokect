<template>
  <div class="flex gap-4 w-full h-screen">

    <div  class="w-[25%]">
      <ToolBar class=""></ToolBar>
    </div>

    <div class="flex-1  w-[85%]">
      <CanvasComponent></CanvasComponent>
    </div>

  </div>
</template>
<script setup lang="ts">
import ToolBar from './ToolBar.vue';
import CanvasComponent from './CanvasComponent.vue';
</script>
<style scoped></style>