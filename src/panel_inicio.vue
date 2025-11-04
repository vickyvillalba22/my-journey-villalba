<script setup>

let nombre ="Mateo"

const famosos = [
  {
    "titulo": "Torre Eiffel",
    "imagen": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80"
  },
  {
    "titulo": "Coliseo Romano",
    "imagen": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"
  },
  {
    "titulo": "Taj Mahal",
    "imagen": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80"
  },
  {
    "titulo": "Machu Picchu",
    "imagen": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80"
  },
  {
    "titulo": "Gran Muralla China",
    "imagen": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
  },
  {
    "titulo": "Estatua de la Libertad",
    "imagen": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80"
  }
]

const activities = [
  {
    "titulo": "Buceo en arrecifes",
    "imagen": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
  },
  {
    "titulo": "Senderismo en montaña",
    "imagen": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
  },
  {
    "titulo": "Tour gastronómico",
    "imagen": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
  }
]

</script>

<template>

<main class="df spaceb">

<section id="heroSection" class="df posRel">

    <img src="/assets/imgs/home-hero.jpg" alt="" class="objCover w100">

    <div class="intro df columna centerX posAb">
        <h1 class="fuente blanco">Bienvenido {{ nombre }}!</h1>
        <p class="fuente blanco">Aquí podrás registrar toda la información necesaria sobre tu viaje.</p>
    </div>

</section>

<div class="derecho df spaceb">

<section class="puntosFamosos df columna spacee centerY marco">

    <p class="fuente">Podrás acceder a puntos de interés relevantes de cada destino</p>

    <div class="df wrap contPois centerX">
        <div v-for="poi in famosos" class="poi posRel df centerX centerY">
            <img :src="poi.imagen" alt="" class="w100 objCover">
            <h3 class="fuente posAb blanco">{{ poi.titulo }}</h3>
        </div>
    </div>

</section>

<section class="extras df columna spaceb">

    <div class="itinerario bordeRojo df columna spacee marco">
        <p class="fuente">Y armar tu itinerario personalizado: </p>
        <div class="df columna contActividades">
            <div v-for="act in activities" class="actividad fondoBlanco df spaceb centerY">
                <img :src="act.imagen" alt="" class="objCover">
                <h3 class="fuente w100">{{ act.titulo }}</h3>
            </div>
        </div>
    </div>

    <div class="cta marco df">
        <h4 class="fuente">Haz click en <span class="fuente verdeOscuro">“Agregar destino”</span> y comienza a planear tu próxima aventura!</h4>
        <img src="/assets/imgs/character1.png" alt="" class="w100 objCover">
    </div>



</section>

</div>

</main>



</template>

<style scoped>

main{
    width: 90vw;
    height: 80vh;
}

#heroSection{
    width: 25%;
    height: 80vh;
}
#heroSection img{
    border-radius: 20px;
    filter: brightness(0.8);
}
h1{
    font-size: 2.7em;
}
.intro{
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
    gap: 10px;
}

.derecho{
    width: 70%;
}

.puntosFamosos{
    width: 60%;
}
.puntosFamosos p{
    font-size: 1.5em;
    font-weight: 300;
    width: 90%;
}
.contPois{
    width: 95%;
    gap: 20px;
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

.poi h3{
    text-align: center;
    font-size: 1.2em;
}

.extras{
    width: 35%;
}

.marco{
    border: 1px solid gray;
    border-radius: 20px;
}

.itinerario{
    height: 45vh;
    padding: 5%;
}
.itinerario p{
    font-size: 1.2em;
    font-weight: 300;
}
h3{
    font-weight: 400;
    font-size: 1em;
    text-align: left;
}
.actividad{

    border-radius: 8px;
    padding: 5px;
    width: 100%;
    height: 8vh;
    gap: 10px;

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
    gap: 15px;
}

.cta{
    height: 30vh;
    padding: 5%;
}
h4{
    font-weight: 500;
    font-size: 1.3em;
}
.cta img{
    height: 100%;
}

@media (max-width: 850px){
    main{
        flex-direction: column;
    }
    #heroSection{
        width: 100%;
        height: 15vh;
    }
    .intro{
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 90%;
        margin: 5%;
    }
    #heroSection img{
        filter: none;
    }
    .intro h1{
        width: 60%;
        color: black;
        font-size: 2.3em;
    }
    .intro p{
        font-size: 1em;
        width: 40%;
        color: black;
    }
    .derecho{
        width: 100%;
    }
    .contPois{
        overflow: auto;
    }
    .poi{
        flex: 0 0 20vw; 
        height: 20vh;
    }
    .puntosFamosos, .derecho{
        height: 60vh;
    }
    .puntosFamosos{
        gap: 20px;
    }
    .puntosFamosos p{
        width: 80%;
        margin-top: 8%;
        font-size: 1.3em;
    }
    .itinerario{
        height: 55%;
    }
    .actividad{
        height: 7vh;
    }
    .cta{
        height: 40%;
    }
    .cta img{
        width: 40%;
        height: 60%;
        transform: translate(0, 50%);
    }
    h4{
        font-weight: 500;
        font-size: 1.2em;
        margin: 5%;
    }
}

@media (max-width: 500px){
    .intro{
        flex-direction: column;
    }
    .intro h1, .intro p{
        width: 100%;
    }
    .derecho{
        flex-direction: column;
    }
    .puntosFamosos{
        width: 100%;
    }
    .contPois{
        width: 80%;
        flex-wrap: nowrap;
        margin-bottom: 10%;
    }
    .extras{
        width: 100%;
        justify-content: space-evenly;
    }
    .cta{
        display: flex;
        align-items: center;
        height: 30%;
    }
    .cta img{
        width: 40%;
        height: 100%;
        transform: translate(0, 0);
    }
}


</style>