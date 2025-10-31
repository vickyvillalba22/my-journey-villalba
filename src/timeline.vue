<script setup>

import { inject } from 'vue'

const puntos = inject('puntos')


</script>

<template>

<div id="timeline" class="posRel df columna centerY bordeRojo">

    <!--nombres-->
    <div class="w100 df spaceb">

        <div v-for="(punto, i) in puntos" class="df">

            <p class="fuente" @click="punto.metodo">
                {{ punto.name }}
            </p>

        </div>

    </div>

    <!--cont linea y puntos-->
    <div class="w100 df centerY">

    <!--linea-->
    <div id="linea" class="fondoOscuro df centerY posAb"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb posAb">

        <button v-for="(punto, i) in puntos" class="punto  fondoTransparente df columna centerY fuente sinBorde placaTimeline" @click="punto.metodo" :key="i">
            
            <div class="puntito df centerY centerX" :class="punto.colorFondo">
                <i :class="punto.icono" class="blanco"></i>
            </div>

        </button>

    </div>
    <!--puntos-->

    </div>
    <!--cont linea y puntos-->

</div>

</template>

<style scoped>

#timeline{
    height: 10vh;
    width: 90vw;
}

.placaTimeline{
    border-radius: 5px;
    padding: 10px 0px;
}

#linea{
    width: 100%;
    height: 1px;
}
.puntito{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
#contPuntos{
    width: 100%;
}
.cruz{
    font-size: 0.7em;
}

</style>