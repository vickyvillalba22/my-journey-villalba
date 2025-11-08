<script setup>

import { inject } from 'vue'

const ciudades = inject('ciudades')

</script>

<template>

    <section>
        <h2>Tu recorrido completo:</h2>
        <ul>
            <li v-for="ciudad in ciudades">{{ ciudad.name }}</li>
        </ul>
    </section>

</template>

<style>
 
h2, li{
    font-family: "DM Sans", sans-serif;
}

</style>