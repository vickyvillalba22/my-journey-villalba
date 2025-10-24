<script setup>

import { ref, provide } from 'vue'

import Timeline from './timeline.vue'
import PanelDestino from './panel_destino.vue'
import ModalDestino from './components/agregar_destino.vue'

import { fetchCityData } from './api.js'

let nombre ="Mateo"

//creo el estado global de destino
const destino = ref(null)

//estado para saber si el panel esta visible
const panelVisible = ref(false)

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

//data ingresada por el user
const dataUser = ref(null)

const modalDestinoRef = ref(null)

function mostrarModal(){
    modalDestinoRef.value.showModal()
}

//funcion para actualizarlo y hacer el fetch
function setDestino(nuevoDestino, datosUser){

    //ver si ya existe en el array
    const existe = ciudades.value.find(c => c.name.toLowerCase() === nuevoDestino.toLowerCase())
    if (existe) {
      destino.value = existe
      console.log('Ciudad ya existe:', destino.value)
      panelVisible.value = true
      return
    }

    fetchCityData(nuevoDestino).then(data => {

      //fusionar la data de la API con la info del usuario
      const destinoCompleto = {
        ...data,       // datos traídos del fetch
        ...datosUser   // datos ingresados por el usuario
      }

      destino.value = destinoCompleto
      console.log('Destino completo:', destino.value)

      ciudades.value.push(destinoCompleto)
      console.log(ciudades.value);

      panelVisible.value = true

      //Agregar punto en la timeline, siempre después de “Inicio” y antes de “Agregar destino”
      let posAgregar = puntos.value.findIndex(punto => punto.name === "Agregar destino");

      puntos.value.splice(posAgregar, 0, {
        name: destino.value.name,
        metodo: ()=>{
          destino.value = destinoCompleto
          panelVisible.value = true
        }
      })
      
    })


}

//lo provee para que los hijos lo usen: al estado del destino y a la funcion que lo actualiza acá pero la llamada es en el hijo
provide('destino', destino)
provide('setDestino', setDestino)
provide('puntos', puntos)

</script>

<template>

<div id="app" class="df columna centerY fondoBlanco">

  <div class="intro df columna centerX">
    <h1 class="fuente">Bienvenido {{ nombre }}!</h1>
    <p class="fuente">Aquí encontrarás toda la información sobre tu viaje</p>
  </div>

  <Timeline id="timeline" />

  <PanelDestino v-if="panelVisible" />

  <ModalDestino ref="modalDestinoRef" />

</div> 

</template>

<style scoped>

#app{
  height: 100vh;
}

.intro{
  width: 95%;
  height: 15vh;
}
#timeline{
  width: 95%;
}

</style>
