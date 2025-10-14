<script setup>

import { computed, inject } from 'vue';

const destino = inject('destino')

const actividades = computed(() => destino.value?.actividades ?? [])

//console.log(actividades);

</script>

<template>

    <div class="bordeRojo">

        <h3>Mis actividades</h3>

        <div v-for="(act, i) in actividades" :key="i">
            <p>{{ act.name }}</p>
        </div>

    </div>

</template>

<style></style>