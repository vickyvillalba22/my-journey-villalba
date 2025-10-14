<script setup>

import { inject, computed } from 'vue'

const destino = inject('destino')

const items = computed(()=>{

    if(!destino.value) return []

    return [
        {
            icon: "fi fi-tr-plane-arrival", 
            data: destino.value.llegada
        }, 
        {
            icon: "fi fi-tr-plane-departure", 
            data: destino.value.estadia
        }, 
        {   
            icon: "fi fi-tr-hotel", 
            data: destino.value.salida
        }
    ]


})

</script>

<template>

    <div v-for="(item, i) in items" :key=i>
        <i :class="item.icon"></i>
        <p>{{ item.data }}</p>
    </div>


</template>

<style></style>