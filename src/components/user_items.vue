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

    <div class="df columna spaceb contItems">

        <div v-for="(item, i) in items" :key=i class="item df centerY">
            <i :class="item.icon" class="blanco"></i>
            <p class="blanco fuente">{{ item.data }}</p>
            <p v-if="item.horario" class="blanco fuente">{{ item.horario }}</p>
        </div>

    </div>

</template>

<style scoped>

.contItems{
    height: 18vh;
}

.item{
    background-color: #007580;
    height: 27%;
    border-radius: 5px;
}

.item i{
    padding-left: 8px;
}

.item p{
    font-size: 0.8em;
    padding-left: 8px;
}

</style>