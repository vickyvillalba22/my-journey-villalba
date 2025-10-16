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

    <section class="bordeRojo">
        <img :src="destino.cityPhoto || defImg" alt="">
        <h2>{{ destino.name }}</h2>
        <h3>{{ destino.state }}, {{ destino.country }}</h3>
        <p>{{ destino.description }}</p>
    </section>

</template>

<style></style>