<template>
    <div class=" toolbar border-gray-400  w-full h-screen">

        <div class="flex  justify-center  cursor-pointer  gap-5 mt-10">
            <button class="py-3 bg-blue-200 px-3 border-2 border rounded-2xl shadow-xl " title="pinceau">
                <Paintbrush :size="60"></Paintbrush>
            </button>

            <button class=" py-3 px-3 bg-red-100 cursor-pointer border-2 border rounded-2xl shadow-xl " title="Gomme">
                <Eraser :size="60"></Eraser>
            </button>
        </div>

        <div class="mt-10 flex flex-col g-2">
            <label for="" class="text-3xl text-gray-900  font-medium ">Couleur</label>
            <input type="color" id="color" name="" class="w-50" />
        </div>

        <div class="mt-10">

            <label for="" class="text-3xl text-gray-900  font-medium ">Epaisseur</label> <br>

            <input class="w-50" type="range" id="range" name="" min="1" max="100" />
        </div>


        <div class="mt-10  flex   flex-col   gap-2">
            <button class="border rounded-2xl px-3 py-2  shadow-xl bg-red-500 text-red-100" title="clear">
                <RotateCcw :size="60"></RotateCcw>
                Nettoyer
            </button>
            <button title="save" class="border rounded-2xl px-3 py-2 shadow-xl text-blue-600 bg-blue-400">
                Enregistrer
                <Download :size="60"></Download>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Eraser, Paintbrush, RotateCcw, Download } from 'lucide-vue-next';
</script>

<style scoped></style>