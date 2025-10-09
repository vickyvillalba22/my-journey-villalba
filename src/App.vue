<script setup>

import Timeline from './timeline.vue'

let nombre ="Mateo"

</script>

<template>

<div id="app" class="df columna centerY">

  <div class="intro df columna centerX">
    <h1 class="fuente">Bienvenido {{ nombre }}!</h1>
    <p class="fuente">Aquí encontrarás toda la información sobre tu viaje</p>
  </div>

  <Timeline id="timeline" />

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
