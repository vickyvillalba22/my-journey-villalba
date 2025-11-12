<script setup>

import { inject, ref, computed, TransitionGroup } from 'vue'

const puntos = inject('puntos')
const puntoActivo = inject('puntoActivo')

//manejo de timeline en mobile
const timelineMobVisible = ref(false)
function toggleTimeline (){
    timelineMobVisible.value = !timelineMobVisible.value
}

const botonesMobile = computed(() => {
  return puntos.value.filter(punto => 
    punto.name === 'Inicio' || punto.name === 'Agregar destino'
  )
})

</script>

<template>

<!--mobile-->
<header class="invisible spaceb df centerY">

    <div class="df spaceb">
    
        <!--botones de la timeline-->
        <button v-for="(punto, i) in botonesMobile" :key="i" @click="punto.metodo" class="df sinBorde columna centerY fondoTransparente">
            <i :class="[punto.icono, punto.colorFondo]" class="df centerY blanco"></i>
            <p class="fuente">{{ punto.name }}</p>
        </button>

        <!--boton especial de mobile-->
        <button @click="toggleTimeline" class="df sinBorde columna centerY fondoTransparente">
            <i :class="timelineMobVisible ? 'fi fi-rr-cross-small' : 'fi fi-rr-road'" class="fondoVerdeOscuro df centerY blanco"></i>
            <p class="fuente">Mi ruta</p>
        </button>

    </div>

</header>

<!--desktop-->
<div :class="timelineMobVisible ? 'visibleM' : 'invisibleM'" class="contLinea df spaceb">

    <div id="timeline" class="df columna centerY posRel spacea">

    <!--nombres-->
    <div class="w100 df spaceb" id="nombres">

        <div v-for="(punto, i) in puntos" class="df">

            <p class="fuente" @click="punto.metodo" :class="punto.name === 'Agregar destino' ? 'accion' : 'nombre'">
                {{ punto.name }}
            </p>

        </div>

    </div>

    <!--cont linea y puntos-->
    <div id="lineaPuntos" class="w100 df centerY">

    <!--linea-->
    <div id="linea" class="fondoOscuro df centerY posAb"></div>

    <!--puntos-->
    <div id="contPuntos" class="df spaceb posAb">

       <TransitionGroup name="point" tag="div" class="df spaceb w100 botonesTransition"> 

        <button 
        v-for="(punto, i) in puntos" 
        class="punto fondoTransparente df columna centerY fuente sinBorde placaTimeline"
        :class="{ active: puntoActivo === punto.name }" 
        @click="punto.metodo" 
        :key="punto.name">
            
            <div class="puntito df centerY centerX" :class="punto.colorFondo">
                <i :class="punto.icono" class="blanco df"></i>
            </div>

        </button>

       </TransitionGroup>

    </div>
    <!--puntos-->

    </div>
    <!--cont linea y puntos-->

    <!--botones eliminar-->
    <div class="w100 df spaceb eliminar">
        <button v-for="punto in puntos" @click="punto.eliminar" class="sinBorde">
            <i v-if="punto.name!=='Inicio'&&punto.name!=='Final'&&punto.name!=='Agregar destino'" class="fi fi-rr-cross"></i>
        </button>
    </div>

    </div>

</div>

</template>

<style scoped>

header{
    display: none;
    height: 12vh;
}

.contLinea{
    height: 12vh;
}
#nombres{
    margin-bottom: 25px;
    font-size: 0.8em;
}
.nombre{
    text-align: center;
    cursor: pointer;
}
.accion{
    background-color: white;
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}
.eliminar{
    margin-top: 25px;
}
.eliminar i{
    font-size: 0.7em;
}

#timeline{
    height: 8vh;
    width: 90vw;
}

.placaTimeline{
    border-radius: 5px;
    padding: 10px 0px;
}

#linea{
    width: 100%;
    height: 1px;
}
.puntito{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
}
#contPuntos{
    width: 100%;
}
.cruz{
    font-size: 0.7em;
}

.punto.active .puntito {
  transform: scale(1.2);
  box-shadow: 0 0 10px #2CC295; 
  transition: all 0.25s ease;
}

/*animacion*/
.point-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.point-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.point-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 500px){
    header{
        display: flex;
        justify-content: center;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: #F0F5F4;
    }
    header div{
        width: 80%;
    }
    header i{
        padding: 10px;
        border-radius: 50%;
    }
    header p{
        font-size: 1.1em;
        margin-top: 10px;
    }

    .contLinea{
        width: 40%;
        height: 100vh;
        position: fixed;
        z-index: 2;        
        left: 0;

        background: #F0F5F4;
        box-shadow: 0 -10px 20px rgba(0,0,0,0.5);
    }
    #timeline {
        height: 100vh;
        width: 100%;

        flex-direction: row;

        background: #F0F5F4;
        
        left: 0;
        z-index: 2;
        padding: 15px;
    }

    #nombres{
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 60%;
        margin-right: 15px;
    }
    #nombres div p{
        text-align: right;
        width: 100%;
    }
    #lineaPuntos{
        display: flex;
        justify-content: center;
        height: 100%;
    }

    #contPuntos {
        flex-direction: column;
        height: 100%;
        width: 30%;

    }
    .botonesTransition{
        flex-direction: column;
        height: 100%;

    }
    #linea {
        width: 2px;
        height: 100%;
    }

    .timeline-mobile-open {
        display: block;
    }

    .timeline-mobile-closed {
        display: none;
    }

    .closeLinea{
        height: 100%;
        display: flex;
        align-items: first baseline;
    }
}

</style>