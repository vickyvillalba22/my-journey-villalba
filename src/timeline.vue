<script setup>

import { inject } from 'vue'

const puntos = inject('puntos')


</script>

<template>

<div id="timeline" class="posRel df centerY bordeRojo">

    <!--linea-->
    <div id="linea" class="fondoOscuro posAb df centerY"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb bordeRojo">

        <button 
        v-for="(punto, i) in puntos" class="punto  fondoTransparente df columna centerY fuente sinBorde placaTimeline"
        @click="punto.metodo"
        :key="i"
        >
            <!--mas agregar
            <i v-if="punto.name === 'Agregar destino'" class="fi fi-rr-plus"></i>-->

            <div class="puntito fondoOscuro"></div>
            {{ punto.name }}
            <i 
            @click="punto.eliminar" 
            v-if="punto.name != 'Agregar destino' && punto.name != 'Inicio' && punto.name != 'Final'" 
            class="fi fi-rr-cross posAb"
            ></i>


        </button>

    </div>

</div>

</template>

<style scoped>

#timeline{
    height: 10vh;
    width: 90vw;
}

.placaTimeline{
    width: 4vw;
    border-radius: 5px;
    padding: 5px;
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