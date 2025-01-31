<template>
  <div>
    <div class="text-3xl font-bold text-teal-400 underline cursor-pointer">Hello Tailwind CSS!</div>
    <UserPen :size="32" class="inline-block ml-2" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserPen } from 'lucide-vue-next';
</script>
<style scoped></style>