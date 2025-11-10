<script setup>

import { inject } from 'vue'
import { jsPDF } from "jspdf"

const ciudades = inject('ciudades')

function descargarPDF (){
        
    const doc = new jsPDF()

    doc.text("Itinerario de viaje:", 10, 20)

    let y = 30

    // Recorre las ciudades e imprime solo los nombres
    ciudades.value.forEach((ciudad, i) => {
        doc.text(`${i + 1}. ${ciudad.name}`, 10, y)
        y += 10
    })

    doc.save("miViaje.pdf")
}

</script>

<template>

    <section class="df columna centerY spaceb">

        <h2 v-if="ciudades.length === 0">Aquí podrás ver tu itinerario de viaje completo, cuando agregues destinos!</h2>

        <h2 v-else>Tu recorrido completo:</h2>

        <ul>
            <li v-for="ciudad in ciudades">{{ ciudad.name }}</li>
        </ul>

        <div class="w100 df boxBottom centerY spaceb">

            <button v-if="ciudades.length !== 0" @click="descargarPDF" class="sinBorde fondoMedio blanco">Descargar en PDF</button>

            <img src="/assets/imgs/viajera.png" alt="" class="objCover viajera">

        </div>

    </section>

</template>

<style scoped>
 
h2, li, button{
    font-family: "DM Sans", sans-serif;
}

h2{
    font-weight: 400;
}

section{
    background-color: white;
    width: 30vw;
    height: 75vh;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
section ul{
    height: 50vh;
    width: 90%;
}
.viajera{
    height: 100%;
    transform: scale(3) translateY(-25%);
}

button{
    padding: 10px;
    border-radius: 10px;
}

.boxBottom{
    height: 10vh;
}

</style>