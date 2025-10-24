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

        <div class="df columna spaceb bloque1">

            <InfoDestino />

            <UserItems />

        </div>

        <div class="df columna bloque2">

            <Pois />

        </div>

        <div class="bloque3">

            <Itinerario />

        </div>

    </div>

</template>

<style scoped>

.panel{
    width: 95%;
    height: 70vh;
}

.bloque1{
    width: 25%;
}
.bloque2{
    width: 45%;
}
.bloque3{
    width: 20%;
}


</style>