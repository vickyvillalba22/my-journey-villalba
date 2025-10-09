<script setup>

import ModalDestino from './components/agregar_destino.vue'

const puntos = [
    { name: "Inicio"}, 
    { name: "Final"}
]

function agregarDestino(){
    ModalDestino.showModal()
}

</script>

<template>

<div class="w100 posRel">

    <!--linea-->
    <div id="linea" class="fondoOscuro posAb"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb">
        <button v-for="punto in puntos" class="punto  fondoTransparente df columna centerY fuente sinBorde">
            <div class="puntito fondoOscuro"></div>
            {{ punto.name }}
        </button>
    </div>
    <button @click="agregarDestino">Agregar destino</button>

</div>

</template>

<style scoped>

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