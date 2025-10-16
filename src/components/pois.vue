<script setup>

import { inject, computed, ref } from 'vue'

const destino = inject('destino')

const pois = computed(() => destino.value?.pois || [])

//console.log(pois);

function agregarActividades(i){

    //chequear que existe destino
    if (!destino.value || !destino.value.actividades) return

    //chequear que no se ingrese 2 veces el mismo poi
    const poi = pois.value[i]
    if (!destino.value.actividades.includes(poi)) {
            destino.value.actividades.push(poi)
    }

}

//imagenes
const defImg = '/assets/imgs/poi-default.jpg'

</script>

<template>

    <div class="bordeRojo pois">

        <h3>Puntos de interés</h3>

        <div class="df spacee">

            <div v-for="(poi, i) in pois" :key="i" class="poi">
                <img :src="poi.photo || defImg" alt="" class="objCover">
                <h4>{{ poi.name }}</h4>
                <button @click="agregarActividades(i)">Agregar a mis actividades</button>
            </div>

        </div>

    </div>

</template>

<style scoped>

.pois{
    height: 40vh;
    gap: 10px;

    overflow: auto;
}

.poi{
    width: 30%;
}

.poi img{
    width: 100%;
    height: 30vh;
}

</style>