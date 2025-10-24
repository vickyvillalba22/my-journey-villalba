<script setup>

import { inject, computed } from 'vue'

const destino = inject('destino')

const items = computed(()=>{

    if(!destino.value) return []

    return [
        {
            icon: "fi fi-tr-plane-arrival", 
            data: destino.value.llegada,
            horario: destino.value.horaLlegada,
            colorFondo: "fondoMedio"
        },  
        {   
            icon: "fi fi-tr-plane-departure", 
            data: destino.value.salida,
            horario: destino.value.horaSalida,
            colorFondo: "fondoVerdeOscuro"
        },
        {
            icon: "fi fi-tr-hotel", 
            data: destino.value.estadia,
            colorFondo: "fondoAzul"
        }
    ]


})

</script>

<template>

    <div class="df columna spaceb contItems">

        <div v-for="(item, i) in items" :key=i class="item df centerY fitContent" :class="item.colorFondo">
            <i :class="item.icon" class="blanco"></i>
            <p class="blanco fuente">{{ item.data }}</p>
            <p v-if="item.horario" class="blanco fuente">{{ item.horario }}</p>
        </div>

    </div>

</template>

<style scoped>

.item{
    height: fit-content;
    border-radius: 50%;
}

.item i{
    padding: 10px;
}

.item p{
    font-size: 0.8em;
}

</style>