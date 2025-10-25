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

    <section class="pois df columna">

        <h3 class="fuente">Puntos de interés</h3>

        <div class="df contPois wrap">

            <div v-for="(poi, i) in pois" :key="i" class="poi df columna centerX centerY posRel">
                <img :src="poi.photo || defImg" alt="" class="objCover">
                    <div class="posAb elementsPoi df columna spaceb">

                        <h4 class="fuente blanco">{{ poi.name }}</h4>

                        <div class="contBotones df">

                            <button 
                            class="sinBorde fuente fondoAcento fitContent">
                            <i class="fi fi-rr-info oscuro"></i>
                            </button>

                            <button 
                            @click="agregarActividades(i)"
                            class="sinBorde fuente fondoBlanco fitContent">
                            <i class="fi fi-rr-plus oscuro"></i>
                            </button>

                        </div>

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
    height: 100%;
    border: 1px solid gray;
    border-radius: 30px;

    gap: 20px;
    padding: 30px;
}

.contPois{
    gap: 20px;
    overflow: auto;
}

.poi{
    flex: 0 0 10vw; 
    height: 30vh;
}

.poi img{
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
    border-radius: 20px;
}

.elementsPoi{
    height: 90%;
    width: 90%;
    padding: 5px;
}

h4{
    font-weight: 500;
    font-size: 1em;
    width: 100%;
}

.contBotones{
    width: 100%;
    justify-content: end;
}

button{
    border-radius: 15px;
    font-size: 0.7em;
    padding: 10px;
}

i{
    font-size: 1em;
}


</style>