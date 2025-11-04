<script setup>

import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    poi: Object,
    index: Number,
    defImg: String
})

const emits = defineEmits(['agregar'])

//creo una var reactiva para el estado de la card
const mostrarInfo = ref(false) 

function toggleInfo(){

    //cambio el estado 
    mostrarInfo.value = !mostrarInfo.value

}

</script>

<template>

<!--card front-->
    <div v-if="!mostrarInfo" class="poi df columna centerX centerY posRel">

        <img :src="poi.photo || defImg" alt="" class="objCover">

            <div class="posAb elementsPoi df columna spaceb">

                <h4 class="fuente blanco">{{ poi.name }}</h4>

                <div class="contBotones df">

                    <button 
                    @click="toggleInfo"
                    class="sinBorde fuente fondoAcento fitContent">
                        <i class="fi fi-rr-information oscuro df"></i>
                    </button>

                    <button 
                    @click="emits('agregar', index)"
                    class="sinBorde fuente fondoBlanco fitContent">
                        <i class="fi fi-rr-plus oscuro df"></i>
                    </button>

                </div>

            </div>
    </div>

<!--card back-->
<div v-else class="card-back fondoVerdeOscuro df columna spaceb">

    <button @click.stop="toggleInfo" class="sinBorde fitContent">
        <i class= "fi fi-rr-angle-left df"></i>
    </button>

    <h4 class="fuente blanco">{{ poi.name }}</h4>

    <p v-if="poi.description" class="fuente blanco">{{ poi.description }}</p>
    <p v-else class="fuente blanco">No hay descripción disponible</p>

    <div class="df contBotones">
        <button 
        @click="emits('agregar', index)"
        class="sinBorde fuente fondoBlanco fitContent">
            <i class="fi fi-rr-plus oscuro df"></i>
        </button>
    </div>


</div>

</template>

<style scoped>


.poi, .card-back{
    flex: 0 0 10vw; 
    height: 30vh;
    border-radius: 20px;
}
.card-back{
    padding: 10px;
}
.card-back p{
    font-size: 0.8em;
    overflow: auto;
    height: 40%;
}
.card-back i{
    font-size: 0.8em;
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

@media (max-width: 850px){
    .poi, .card-back{
        flex: 0 0 20vw; 
        height: 25vh;
    }
}
@media (max-width: 500px){
    .poi, .card-back{
        flex: 0 0 30vw; 
        height: 100%;
    }
}
</style>