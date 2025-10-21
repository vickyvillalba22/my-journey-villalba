<script setup>

import { inject, watch, ref } from 'vue';

const destino = inject('destino')
const setDestino = inject('setDestino')

//revisamos si se inyectó correctamente
if (!destino) throw new Error('No se encontró el provide "destino"')

//observamos cambios en destino
watch(destino, (nuevo) => {
    if (nuevo) {
        console.log('Destino actualizado:', nuevo)
    }
})

//imagenes
const defImg = '/assets/imgs/city-default.jpg'

</script>

<template>

    <section class="df columna spaceb">

        <img :src="destino.cityPhoto || defImg" alt="" class="objCover">
        <h2 class="fuente">{{ destino.name }}</h2>
        <h3 class="fuente verdeOscuro">{{ destino.state }}, {{ destino.country }}</h3>
        <p class="fuente">{{ destino.description }}</p>

    </section>

</template>

<style scoped>

section{
    height: 50vh;
}

section img{
    height: 25vh;
    border-radius: 10px;
}

section h3{
    font-size: 1em;
    font-weight: 500;
}

section p{
    font-size: 0.9em;
    height: 14vh;
    overflow: auto;
}

</style>