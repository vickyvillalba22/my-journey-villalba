<script setup>

import { inject } from 'vue'

import InfoDestino from './components/info_destino.vue';
import UserItems from './components/user_items.vue'
import Pois from './components/pois.vue'
import Itinerario from './components/itinerario.vue';

const destino = inject('destino')

</script>

<template>

    <InfoDestino />

    <UserItems />

    <Pois />

    <Itinerario />

</template>

<style></style>