<script setup>

import { computed, inject } from 'vue';

const destino = inject('destino')

const actividades = computed(() => destino.value?.actividades ?? [])

//console.log(actividades);

</script>

<template>

    <div class="itinerario df columna spacee">

        <h3 class="fuente">Mis actividades</h3>

        <div class="df columna contActividades">

            <div v-for="(act, i) in actividades" :key="i" class="actividad">
                <p class="fuente">{{ act.name }}</p>
            </div>

        </div>

    </div>

</template>

<style scoped>

.itinerario{
    height: 25vh;
}

.actividad{

    border-radius: 8px;
    padding: 5px;
    width: 100%;
    height: fit-content;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

}

.actividad p{
    padding-left: 12px;
}

.contActividades{
    gap: 8px;
}



</style>