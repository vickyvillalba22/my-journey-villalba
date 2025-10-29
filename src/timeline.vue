<script setup>

import { inject } from 'vue'

const puntos = inject('puntos')


</script>

<template>

<div id="timeline" class="w100 posRel df centerY">

    <!--linea-->
    <div id="linea" class="fondoOscuro posAb"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb">

        <button 
        v-for="(punto, i) in puntos" class="punto  fondoTransparente df columna centerY fuente sinBorde"
        @click="punto.metodo"
        :key="i"
        >
            <div class="puntito fondoOscuro"></div>
            <i v-if="punto.name === 'Agregar destino'" class="fi fi-rr-plus"></i>
            {{ punto.name }}
            <i @click="punto.eliminar" v-if="punto.name != 'Agregar destino' && punto.name != 'Inicio' && punto.name != 'Final'" class="fi fi-rr-cross"></i>


        </button>

    </div>

</div>

</template>

<style scoped>

#timeline{
    height: 10vh;
}

#linea{
    width: 100%;
    height: 1px;
}
.puntito{
    width: 12px;
    height: 12px;
    border-radius: 50%;
}
#contPuntos{
    width: 100%;
}

</style>