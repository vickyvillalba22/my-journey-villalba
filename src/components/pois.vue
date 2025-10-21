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

    <section class="pois df columna spacee">

        <h3 class="fuente">Puntos de interés</h3>

        <div class="df contPois">

            <div v-for="(poi, i) in pois" :key="i" class="poi df columna centerX centerY posRel">
                <img :src="poi.photo || defImg" alt="" class="objCover">
                    <div class="posAb elementsPoi df columna spaceb">
                        <h4 class="fuente blanco">{{ poi.name }}</h4>
                        <button 
                        @click="agregarActividades(i)"
                        class="sinBorde fuente fondoAcento"
                        >Agregar a mis actividades</button>
                    </div>
            </div>

        </div>

    </section>

</template>

<style scoped>

section h3{
    font-size: 1.2em;
}

/*Pois: section*/
.pois{
    height: 40vh;
}

.contPois{
    gap: 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
}

.poi{
    flex: 0 0 10vw; 
    height: 30vh;
}

.poi img{
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
    border-radius: 10px;
}

.elementsPoi{
    height: 90%;
    width: 90%;
}

h4{
    font-weight: 300;
    font-size: 0.9em;
}

button{
    border-radius: 5px;
    font-size: 0.7em;
    padding: 5px 0px;
}


</style>