<script setup>

import { ref } from 'vue';

let ciudad = ref('')

function guardarInfo(){
    console.log(ciudad.value);
}

const dialog = ref(null)

function showModal() {
  dialog.value.showModal()
}

function closeModal() {
  dialog.value.close()
}

defineExpose({ showModal, closeModal })

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