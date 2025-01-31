<template>
  <div class="flex h-screen">

    <div ref="toolbarRef" class="w-100 border-2 border-red-500">
      <ToolBar class=""></ToolBar>
    </div>

    <div class="flex-1 border-2 border-blue-500">
      <CanvasComponent></CanvasComponent>
    </div>

  </div>
</template>
<script setup lang="ts">
import ToolBar from './ToolBar.vue';
import CanvasComponent from './CanvasComponent.vue';
</script>
<style scoped></style>