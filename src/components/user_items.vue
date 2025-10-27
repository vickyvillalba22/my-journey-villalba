<script setup>

import { inject, computed, ref } from 'vue'

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

const hoverItem = ref(null)

</script>

<template>

    <div class="df columna spaceb contItems">

        <div 
        v-for="(item, i) in items" 
        :key=i 
        class="item df centerY fitContent" :class="[item.colorFondo, { expandido: hoverItem === i }]"
        @mouseenter="hoverItem = i"
        @mouseleave="hoverItem = null"
        >
            <i :class="item.icon" class="blanco"></i>
            <p v-if="hoverItem === i" class="blanco fuente">{{ item.data }}</p>
            <p v-if="hoverItem === i && item.horario" class="blanco fuente">{{ item.horario }}</p>

        </div>

    </div>

</template>

<style scoped>

.item{
    height: fit-content;
    border-radius: 50%;
    gap: 10px;
}

.item.expandido{
    border-radius: 10px;
    width: fit-content;
}

.item i{
    padding: 10px;
}

.item p{
    font-size: 0.8em;
    padding-right: 10px;
}

</style>