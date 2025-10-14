<script setup>

import { inject, computed } from 'vue'

const destino = inject('destino')

const pois = computed(() => destino.value?.pois || [])

console.log(pois);


</script>

<template>

    <h3>Puntos de interés</h3>

    <div v-for="(poi, i) in pois" :key="i">
        <h4>{{ poi.name }}</h4>
    </div>

</template>

<style></style>