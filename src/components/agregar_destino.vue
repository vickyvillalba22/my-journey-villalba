<script setup>

import { ref, reactive, inject } from 'vue';

const dialog = ref(null)
function showModal() {
  dialog.value.showModal()
}
function closeModal() {
  limpiarFormulario()
  dialog.value.close()
}
defineExpose({ showModal, closeModal })

//manejo del destino y la data ingresada por el usuario
const setDestino = inject('setDestino')

const ciudad = ref('')
const errorCiudad = ref('')
const llegada = ref('')
const horaLlegada = ref('')
const salida = ref('')
const horaSalida = ref('')
const estadia = ref('')

function formatDateTime(datetimeStr) {
  if (!datetimeStr) return ''
  const fecha = new Date(datetimeStr)
  return fecha.toLocaleString('es-ES', {
    dateStyle: 'short',
    timeStyle: 'short'
  })
}

function mayus(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function limpiarFormulario() {
  ciudad.value = ''
  llegada.value = ''
  horaLlegada.value = ''
  salida.value = ''
  horaSalida.value = ''
  estadia.value = ''
  errorCiudad.value = ''
}

function guardarInfo(){

//validacion
  if(!ciudad.value.trim()){
    errorCiudad.value = 'La ciudad/pueblo es requerida'
    return
  }

  errorCiudad.value = ''

  const userData = {
    city: mayus(ciudad.value.trim()),
    llegada: llegada.value.trim(),
    horaLlegada: formatDateTime(horaLlegada.value),
    salida: salida.value,
    horaSalida: formatDateTime(horaSalida.value),
    estadia: estadia.value,
    actividades: []
  }

  console.log(userData);

  closeModal();
  
  console.log(ciudad.value);
  setDestino(userData.city, userData)
}


</script>

<template>

    <dialog ref="dialog" class="sinBorde">

      <div class="contForm1 df centerX centerY">

        <div class="contForm2 df columna spaceb">

            <button @click="closeModal" class="fuente close df fondoTransparente sinBorde">
              <i class="fi fi-rr-cross-small"></i>
            </button>

            <i class="fi fi-tr-person-luggage verdeOscuro df centerX"></i>

          <form action="" class="df columna spacee">

            <div class="df columna">
              <label for="ciudad" class="fuente doble">Ciudad/pueblo</label>
              <input v-model="ciudad" type="text" name="ciudad" id="ciudad" class="fuente">
              
              <p v-if="errorCiudad" class="error fuente">{{ errorCiudad }}</p>
            </div>

              <div class="df spaceb">

                <div class="df columna corto">

                  <label for="llegada" class="fuente">En qué llegas</label>
                  <input v-model="llegada" type="text" name="" id="llegada" class="fuente">

                </div>

                <div class="df columna corto">

                  <label for="horaLlegada" class="fuente">Fecha y horario de llegada</label>
                  <input v-model="horaLlegada" type="datetime-local" name="" id="horaLlegada" class="fuente">

                </div>

              </div>

              <div class="df spaceb">

                <div class="df columna corto">

                  <label for="salida" class="fuente">En qué te vas</label>
                  <input v-model="salida" type="text" name="" id="salida" class="fuente">

                </div>

                <div class="df columna corto">

                  <label for="horaSalida" class="fuente">Fecha y horario de salida</label>
                  <input v-model="horaSalida" type="datetime-local" name="" id="horaSalida" class="fuente">

                </div>

              </div>

              <div class="df columna">
              
                <label for="estadia" class="fuente">Donde te quedás</label>
                <input v-model="estadia" type="text" name="" id="estadia" class="fuente">

              </div>

          </form>

          <div class="w100 df centerX">
            <button @click="guardarInfo" class="fuente fitContent sinBorde fondoVerdeOscuro blanco">Confirmar</button>
          </div>

        </div>

      </div>

    </dialog>

</template>

<style scoped>

  dialog{
    position: fixed;
    left: 40%;
    top: 30%;

    width: 25%;
    height: 60vh;

    border-radius: 20px;
  }

  .contForm1{
    width: 100%;
    height: 100%;
  }

  .contForm2{
    width: 90%;
    height: 90%;
  }

  .contForm2 i{
    font-size: 2.5em;
  }

  .close{
    justify-content: end;
  }
  .close i{
    font-size: 1.5em;
  }

  .corto{
    width: 45%;
  }

  form{
    height: 35vh;
  }

  label{
    font-size: 0.9em;
  }

  button{
    padding: 5px 20px;
    border-radius: 5px;
    font-size: 0.9em;
  }
  .error{
    font-size: 0.8em;
    color: brown;
  }

</style>