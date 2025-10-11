<script setup>

import { inject, watch } from 'vue';

const destino = inject('destino')
const setDestino = inject('setDestino')

// Revisamos si se inyectó correctamente
if (!destino) throw new Error('No se encontró el provide "destino"')

// Observamos cambios en destino
watch(destino, (nuevo) => {
    if (nuevo) {
        console.log('Destino actualizado:', nuevo)
    }
})


</script>

<template>

    <section class="bordeRojo">
        <img src="" alt="">
        <h2></h2>
        <h3></h3>
        <p></p>
    </section>

</template>

<style></style>