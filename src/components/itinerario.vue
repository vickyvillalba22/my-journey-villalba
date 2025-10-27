<script setup>

import { computed, inject } from 'vue';

const destino = inject('destino')

const actividades = computed(() => destino.value?.actividades ?? [])

console.log(actividades);

//imagenes
const defImg = '/assets/imgs/poi-default.jpg'

function deleteAct(index){
    destino.value.actividades.splice(index, 1)
}

</script>

<template>

    <div class="itinerario">

        <div class="cajaItinerario df columna">

            <h3 class="fuente">Mis actividades</h3>

            <div class="df columna contActividades">

                <div v-for="(act, i) in actividades" :key="i" class="actividad fondoBlanco df spaceb">

                    <img :src="act.photo || defImg" alt="">
                    <p class="fuente">{{ act.name }}</p>

                    <button 
                    class="fondoTransparente sinBorde"
                    @click="deleteAct(i)"
                    >
                    <i class="fi fi-rr-cross-small"></i>
                    </button>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

.itinerario{
    border: 1px solid rgba(128, 128, 128, 0.54);
    border-radius: 30px;
    padding: 20px;
    height: 100%;
    overflow: auto;
}

.cajaItinerario{
    gap: 10px;
}

h3{
    font-weight: 400;
}

.actividad{

    border-radius: 8px;
    padding: 5px;
    width: 100%;
    height: fit-content;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

}

.actividad img{
    width: 25%;
    border-radius: 5px;
}

.actividad p{
    padding-left: 12px;
}

.contActividades{
    gap: 8px;
}

button i{
    font-size: 1.5em;
}



</style>