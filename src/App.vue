<script setup>

import { ref, provide } from 'vue'

import Timeline from './timeline.vue'
import PanelDestino from './panel_destino.vue'
import ModalDestino from './components/agregar_destino.vue'

import PanelInicio from './panel_inicio.vue'

//loader
import Loader from './components/loader.vue'
const isLoading = ref(false)

import { fetchCityData } from './api.js'

//creo el estado global de destino
const destino = ref(null)

//estado para saber qué panel esta visible
const panelVisible = ref(false)
const panelInicioVis = ref(true)

//array reactivo de ciudades
const ciudades = ref([])

//array de puntos para la linea de tiempo
const puntos = ref([

    { name: "Inicio",
      metodo: ()=>{
        panelVisible.value = false
        panelInicioVis.value = true
      }  
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

    //ver si ya existe en el array de ciudades agregadas
    const existe = ciudades.value.find(c => c.name.toLowerCase() === nuevoDestino.toLowerCase())
    if (existe) {
      destino.value = existe
      console.log('Ciudad ya existe:', destino.value)
      panelVisible.value = true
      return
    }

    panelInicioVis.value = false
    isLoading.value = true

    fetchCityData(nuevoDestino)

      .then(data => {

      //si la ciudad no existe, fetchCityData devuelve null
      if (!data) {
        alert('Ciudad no encontrada. Por favor verificá el nombre.') // O un mensaje más elegante
        isLoading.value = false
        return
      }

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
          panelInicioVis.value = false
          panelVisible.value = true
        },
        eliminar: ()=>{

          //buscamos el index
          const indexCiudad = ciudades.value.findIndex(city => city.name === destinoCompleto.name)
          //si es distinto de -1 (de que no existe) lo eliminamos del array de ciudades
          if (indexCiudad !== -1) {
            ciudades.value.splice(indexCiudad, 1)
          }

          //ahora hacemos los mismo pero con el array de puntos
          const indexPunto = puntos.value.findIndex(p => p.name === destinoCompleto.name)
          if (indexPunto !== -1) {
            puntos.value.splice(indexPunto, 1)
          }

          // Si era el destino visible, ocultar el panel
          if (destino.value && destino.value.name === destinoCompleto.name) {
            panelVisible.value = false
            destino.value = null
          }


        }
      })
      
    })
    .catch(err => console.error(err))
    .finally(()=>{
      isLoading.value = false
    })


}

//lo provee para que los hijos lo usen: al estado del destino y a la funcion que lo actualiza acá pero la llamada es en el hijo
provide('destino', destino)
provide('setDestino', setDestino)
provide('puntos', puntos)

</script>

<template>

<div id="app" class="df columna spacee centerY fondoBlanco">

  <Timeline />

  <PanelDestino v-if="panelVisible" />

  <PanelInicio v-if="panelInicioVis" />

  <ModalDestino ref="modalDestinoRef" />

  <Loader v-if="isLoading" />

</div> 

</template>

<style scoped>

#app{
  height: 100vh;
}

</style>
