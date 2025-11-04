<script setup>

import { computed, inject } from 'vue';

const destino = inject('destino')

const actividades = computed(() => destino.value?.actividades ?? [])

console.log(actividades);

//imagenes
const defImg = '/assets/imgs/act-default.jpg'

function deleteAct(index){
    destino.value.actividades.splice(index, 1)
}

</script>

<template>

    <div class="itinerario">

        <div class="cajaItinerario df columna">

            <h3 class="fuente">Mis actividades</h3>

            <div class="df columna contActividades">

                <div v-for="(act, i) in actividades" :key="i" class="actividad fondoBlanco df spaceb centerY">

                    <img :src="act.photo || defImg" alt="" class="objCover">

                    <p class="fuente w100">{{ act.name }}</p>

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
    height: 10vh;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.actividad img{
    width: 25%;
    border-radius: 5px;
    height: 100%;
}

.actividad p{
    padding-left: 12px;
    text-align: left;
    font-size: 0.9em;
}

.contActividades{
    gap: 8px;
    overflow: auto;
    height: 70vh;
}

button i{
    font-size: 1.5em;
}

@media (max-width: 850px){
    .contActividades{
        gap: 8px;
        overflow: auto;
        height: 45vh;
    }
}
@media (max-width: 500px){
    .contActividades{
        gap: 8px;
        overflow: auto;
        height: 25vh;
    }
}

</style>