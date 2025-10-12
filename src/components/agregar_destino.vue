<script setup>

import { ref, reactive, inject } from 'vue';

const dialog = ref(null)
function showModal() {
  dialog.value.showModal()
}
function closeModal() {
  dialog.value.close()
}
defineExpose({ showModal, closeModal })

//manejo del destino y la data ingresada por el usuario
const setDestino = inject('setDestino')

const ciudad = ref('')
const llegada = ref('')
const horaLlegada = ref('')
const salida = ref('')
const horaSalida = ref('')
const estadia = ref('')

function guardarInfo(){

  const userData = {
    city: ciudad.value,
    llegada: llegada.value,
    horaLlegada: horaLlegada.value,
    salida: salida.value,
    horaSalida: horaSalida.value,
    estadia: estadia.value
  }

  console.log(userData);
  
  console.log(ciudad.value);
  setDestino(ciudad.value, userData)
}


</script>

<template>

    <dialog ref="dialog">

        <form action="">

            <label for="ciudad">Ciudad/pueblo</label>
            <input v-model="ciudad" type="text" name="ciudad" id="ciudad">

            <label for="llegada">En qué llegas</label>
            <input v-model="llegada" type="text" name="" id="llegada">

            <label for="horaLlegada">Horario</label>
            <input v-model="horaLlegada" type="datetime-local" name="" id="horaLlegada">

            <label for="salida">En qué te vas</label>
            <input v-model="salida" type="text" name="" id="salida">

            <label for="horaSalida">Horario</label>
            <input v-model="horaSalida" type="datetime-local" name="" id="horaSalida">

            <label for="estadia">Donde te quedás</label>
            <input v-model="estadia" type="text" name="" id="estadia">

        </form>

        <button @click="guardarInfo">Confirmar</button>
        <button @click="closeModal">Cerrar</button>

    </dialog>

</template>

<style scoped></style>