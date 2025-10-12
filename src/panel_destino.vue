<script setup>

import { inject } from 'vue'

import InfoDestino from './components/info_destino.vue';

const destino = inject('destino')

</script>

<template>

    <InfoDestino v-if="destino" />

</template>

<style></style>