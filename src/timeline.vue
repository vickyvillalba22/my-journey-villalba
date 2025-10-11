<script setup>

import { ref } from 'vue'
import ModalDestino from './components/agregar_destino.vue'

//inject info del destino

const puntos = [

    { name: "Inicio",
      metodo: ()=>{}  
    }, 

    { name: "Agregar destino",
      metodo: ()=>{
        mostrarModal()
      } 
    },

    { name: "Final",
      metodo: ()=>{}
    }
]

const modalDestinoRef = ref(null)

function mostrarModal(){
    modalDestinoRef.value.showModal()
}

</script>

<template>

<div id="timeline" class="w100 posRel df centerY">

    <!--linea-->
    <div id="linea" class="fondoOscuro posAb"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb">
        <button 
        v-for="punto in puntos" class="punto  fondoTransparente df columna centerY fuente sinBorde"
        @click="punto.metodo"
        >
            <div class="puntito fondoOscuro"></div>
            {{ punto.name }}
        </button>
    </div>

    <ModalDestino ref="modalDestinoRef" />

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