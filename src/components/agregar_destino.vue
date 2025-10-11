<script setup>

import { ref, inject } from 'vue';

const dialog = ref(null)
function showModal() {
  dialog.value.showModal()
}
function closeModal() {
  dialog.value.close()
}
defineExpose({ showModal, closeModal })

let ciudad = ref('')
const setDestino = inject('setDestino')

function guardarInfo(){
    //console.log(ciudad.value);
    setDestino(ciudad.value)
}


</script>

<template>

    <dialog ref="dialog">

        <form action="">
            <label for="ciudad">Ciudad/pueblo</label>
            <input v-model="ciudad" type="text" name="ciudad" id="ciudad">
        </form>

        <button @click="guardarInfo">Confirmar</button>
        <button @click="closeModal">Cerrar</button>

    </dialog>

</template>

<style scoped></style>