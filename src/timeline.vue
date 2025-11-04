<script setup>

import { inject, ref, computed } from 'vue'

const puntos = inject('puntos')
const puntoActivo = inject('puntoActivo')

//manejo de timeline en mobile
const timelineMobVisible = ref(false)
function toggleTimeline (){
    timelineMobVisible.value = !timelineMobVisible.value
}

//manejo de inicio para mobile
function inicio (){
    const puntoInicio = puntos.value.find(punto => punto.name === 'Inicio')
    if (puntoInicio) {
    puntoInicio.metodo()
    //cerrar timeline
    timelineMobVisible.value = false
    }
}

const botonesMobile = computed(() => {
  return puntos.value.filter(punto => 
    punto.name === 'Inicio' || punto.name === 'Agregar destino'
  )
})

</script>

<template>

<div class="invisible visibleM">
    
    <!--botones de la timeline-->
    <button v-for="(punto, i) in botonesMobile" :key="i" @click="punto.metodo">
        <i :class="punto.icono"></i>
    </button>

    <!--boton especial de mobile-->
    <button @click="toggleTimeline">
        <i :class="timelineMobVisible ? 'fi fi-rr-cross-small' : 'fi fi-rr-menu-burger'"></i>
    </button>

</div>

<div id="timeline" class="posRel df columna centerY spacea invisibleM">

    <!--nombres-->
    <div class="w100 df spaceb">

        <div v-for="(punto, i) in puntos" class="df">

            <p class="fuente nombre" @click="punto.metodo">
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

        <button 
        v-for="(punto, i) in puntos" 
        class="punto  fondoTransparente df columna centerY fuente sinBorde placaTimeline"
        :class="{ active: puntoActivo === punto.name }" 
        @click="punto.metodo" 
        :key="i">
            
            <div class="puntito df centerY centerX" :class="punto.colorFondo">
                <i :class="punto.icono" class="blanco df"></i>
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

.punto.active .puntito {
  transform: scale(1.2);
  box-shadow: 0 0 10px #2CC295; 
  transition: all 0.25s ease;
}

</style>