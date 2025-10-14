<script setup>

import { inject, computed } from 'vue'

const destino = inject('destino')

const items = computed(()=>{

    if(!destino.value) return []

    return [
        {
            icon: "fi fi-tr-plane-arrival", 
            data: destino.value.llegada,
            horario: destino.value.horaLlegada
        }, 
        {
            icon: "fi fi-tr-hotel", 
            data: destino.value.estadia,
        }, 
        {   
            icon: "fi fi-tr-plane-departure", 
            data: destino.value.salida,
            horario: destino.value.horaSalida
        }
    ]


})

</script>

<template>

    <div v-for="(item, i) in items" :key=i class="bordeRojo">
        <i :class="item.icon"></i>
        <p>{{ item.data }}</p>
        <p v-if="item.horario">{{ item.horario }}</p>
    </div>

</template>

<style></style>