<script setup>

import { inject } from 'vue'

import InfoDestino from './components/info_destino.vue';
import Pois from './components/pois.vue'
import Itinerario from './components/itinerario.vue';

const destino = inject('destino')

</script>

<template>

    <div class="panel df spaceb">

        <div class="df columna spaceb bloque1">

            <InfoDestino />

        </div>

        <div class="derecho df spaceb">

            <div class="df columna bloque2">

                <Pois />

            </div>

            <div class="bloque3">

                <Itinerario />

            </div>

        </div>

    </div>

</template>

<style scoped>

.panel{
    width: 90vw;
    height: 80vh;
}

.bloque1{
    width: 25%;
}

.derecho{
    width: 70%;
}

.bloque2{
    width: 60%;
}
.bloque3{
    width: 35%;
}

@media (max-width: 850px){
    .bloque1{
        width: 100%;
    }
    .panel{
        flex-direction: column;
        justify-content: space-between;
    }

    .derecho{
        width: 100%;
        height: 55vh;
    }
}

@media (max-width: 500px){
    .panel{
        margin-top: 15vh;
        gap: 20px;
    }
    .derecho{
        flex-direction: column;
        gap: 20px;
    }

    .bloque2{
        width: 100%;
    }
    .bloque3{
        width: 100%;
    }
}


</style>