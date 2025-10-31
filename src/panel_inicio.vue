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

<main class="df bordeRojo spaceb">

<section id="heroSection" class="bordeRojo df posRel">

    <img src="/assets/imgs/home-hero.jpg" alt="" class="objCover w100">

    <div class="intro df columna centerX posAb bordeRojo">
        <h1 class="fuente blanco">Bienvenido {{ nombre }}!</h1>
        <p class="fuente blanco">Aquí podrás registrar toda la información necesaria sobre tu viaje.</p>
    </div>

</section>

<section class="puntosFamosos df columna spacee">

    <p class="fuente">Podrás acceder a puntos de interés relevantes de cada destino</p>

    <div class="df wrap contPois">
        <div v-for="poi in famosos" class="poi posRel df centerX centerY">
            <img :src="poi.imagen" alt="" class="w100 objCover">
            <h3 class="fuente posAb blanco">{{ poi.titulo }}</h3>
        </div>
    </div>

</section>

<section class="extras df columna">

    <div class="itinerario">
        <p class="fuente">Y armar tu itinerario personalizado: </p>
        <div class="df columna">
            <div v-for="act in activities" class="actividad fondoBlanco df spaceb centerY">
                <img :src="act.imagen" alt="" class="objCover">
                <h3 class="fuente w100">{{ act.titulo }}</h3>
            </div>
        </div>
    </div>

    <div class="cta df">
        <h4 class="fuente">Haz click en “Agregar destino” y comienza a planear tu próxima aventura!</h4>
        <img src="/assets/imgs/character1.png" alt="" class="w100 objCover">
    </div>



</section>

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
.intro{
    width: 80%;
}

.puntosFamosos{
    width: 40%;
}
.puntosFamosos p{
    font-size: 1.5em;
}
.contPois{
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

.extras{
    width: 25%;
}

.itinerario{
    height: 50vh;
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
    height: 10vh;
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
    gap: 8px;
}

.cta{
    height: 25vh;
}
h4{
    font-weight: 700;
    font-size: 1.3em;
}
.cta img{
    height: 10vh;
}


</style>