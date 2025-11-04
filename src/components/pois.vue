<script setup>

import { inject, computed, ref } from 'vue'
import Poi from './poi.vue'

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

            <!--le paso props que están en este componente para que las use en cada card que renderiza y recibe el emit del evento "agregar"-->
            <Poi
            v-for="(poi, i) in pois"
            :key="i"
            :poi="poi"
            :index="i"
            :def-img="defImg"
            @agregar="agregarActividades"
            />

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

@media (max-width: 500px){
    .pois{
        height: 30vh;
        justify-content: space-around;
    }
    .contPois{
        gap: 20px;
        flex-wrap: nowrap;
        overflow: auto;
    }
    section h3{
        font-size: 1.5em;
        font-weight: 500;
    }
}


</style>