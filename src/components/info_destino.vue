<script setup>

import { inject, watch, ref } from 'vue';

import UserItems from './user_items.vue'

const destino = inject('destino')
const setDestino = inject('setDestino')

//revisamos si se inyectó correctamente
if (!destino) throw new Error('No se encontró el provide "destino"')

//observamos cambios en destino
watch(destino, (nuevo) => {
    if (nuevo) {
        console.log('Destino actualizado:', nuevo)
    }
})

//imagenes
const defImg = '/assets/imgs/city-default.jpg'

</script>

<template>

    <section class="df columna spaceb">

        <div class="imagenDestino posRel df">

            <img :src="destino.cityPhoto || defImg" alt="" class="objCover">

            <div class="info posAb df columna spaceb">

            <div class="infoBase df columna spaceb">
                <h2 class="fuente blanco">{{ destino.name }}</h2>
                <h3 class="fuente blanco acento">{{ destino.state }}, {{ destino.country }}</h3>
                <p class="fuente blanco">{{ destino.description }}</p>
            </div>

                <UserItems />

            </div>

        </div>

    </section>

</template>

<style scoped>

section{
    height: 80vh;
}

section img{
    border-radius: 20px;
    height: 100%;
}

.imagenDestino{
    height: 100%;
    width: 100%;
}

.imagenDestino img{
    width: 100%;
    filter: brightness(0.7);
}
.info{
    height: 90%;
    margin: 20px;
}

.infoBase{
    height: 32vh;
}

section h2{
    font-size: 2em;
    font-weight: 500;
}

section h3{
    font-size: 1.2em;
    font-weight: 500;
}

section p{
    font-size: 0.9em;
}

@media  (max-width: 850px) {
    section{
        height: 20vh;
    }
    .info{
        display: flex;
        flex-direction: row;
    }
    .infoBase{
        width: 50%;
        max-height: 15vh;
        overflow: auto;
    }
}

</style>