<script setup>

import { ref } from 'vue';

let ciudad = ref('')

function guardarInfo(){
    console.log(ciudad.value);
}

</script>

<template>

    <dialog>

        <form action="">
            <label for="ciudad">Ciudad/pueblo</label>
            <input v-model="ciudad" type="text" name="ciudad" id="ciudad">
        </form>

        <button @click="guardarInfo">Confirmar</button>

    </dialog>

</template>

<style scoped></style>