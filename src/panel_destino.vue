<script setup>

import { inject } from 'vue'

import InfoDestino from './components/info_destino.vue';
import UserItems from './components/user_items.vue'
import Pois from './components/pois.vue'

const destino = inject('destino')

</script>

<template>

    <InfoDestino />

    <UserItems />

    <Pois />

</template>

<style></style>