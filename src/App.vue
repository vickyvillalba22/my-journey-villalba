<script setup>

import { ref, provide } from 'vue'

import Timeline from './timeline.vue'
import PanelDestino from './panel_destino.vue'
import ModalDestino from './components/agregar_destino.vue'

import { fetchCityData } from './api.js'

let nombre ="Mateo"

//creo el estado global de destino
const destino = ref(null)

//array reactivo de ciudades
const ciudades = ref([])

//array de puntos para la linea de tiempo
const puntos =ref([

    { name: "Inicio",
      metodo: ()=>{}  
    }, 

    {   name: "Agregar destino",
        metodo: ()=>{
        mostrarModal()
        } 
    },

    { name: "Final",
      metodo: ()=>{}
    }
])

const modalDestinoRef = ref(null)

function mostrarModal(){
    modalDestinoRef.value.showModal()
}

//funcion para actualizarlo y hacer el fetch
function setDestino(nuevoDestino){

    //ver si ya existe en el array
    const existe = ciudades.value.find(c => c.name.toLowerCase() === nuevoDestino.toLowerCase())
    if (existe) {
      destino.value = existe
      console.log('Ciudad ya existe:', destino.value)
      return
    }

    fetchCityData(nuevoDestino).then(data => {

      destino.value = data
      console.log(destino.value);

      ciudades.value.push(destino.value)
      console.log(ciudades.value);

      puntos.value.push({
        name: destino.value.name,
        metodo: ()=>{}
      })
      
      
    })


}

//lo provee para que los hijos lo usen: al estado del destino y a la funcion que lo actualiza acá pero la llamada es en el hijo
provide('destino', destino)
provide('setDestino', setDestino)
provide('puntos', puntos)

</script>

<template>

<div id="app" class="df columna centerY">

  <div class="intro df columna centerX">
    <h1 class="fuente">Bienvenido {{ nombre }}!</h1>
    <p class="fuente">Aquí encontrarás toda la información sobre tu viaje</p>
  </div>

  <Timeline id="timeline" />

  <PanelDestino />

  <ModalDestino ref="modalDestinoRef" />

</div> 

</template>

<style scoped>

#app{
  width: 100%;
}
.intro{
  width: 95%;
  height: 15vh;
}
#timeline{
  width: 95%;
}

</style>
