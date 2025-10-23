<script setup>

import { inject } from 'vue'

import InfoDestino from './components/info_destino.vue';
import UserItems from './components/user_items.vue'
import Pois from './components/pois.vue'
import Itinerario from './components/itinerario.vue';

const destino = inject('destino')

</script>

<template>

    <div class="panel df spaceb">

        <div class="df columna spaceb izquierdo">

            <InfoDestino />

            <UserItems />

        </div>

        <div class="df columna derecho">

            <Pois />

            <Itinerario />

        </div>

    </div>

</template>

<style scoped>

.panel{
    width: 95%;
}

.izquierdo{
    width: 25%;
    height: 70vh;
}

.derecho{
    width: 65%;
    height: 70vh;
}


</style>