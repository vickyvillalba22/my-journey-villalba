<script setup>

const icons = ["fi fi-tr-plane-arrival", "fi fi-tr-plane-departure", "fi fi-tr-hotel"]


</script>

<template>

    <div v-for="icon in icons">
        <i :class="icon"></i>
        <p></p>
    </div>


</template>

<style></style>