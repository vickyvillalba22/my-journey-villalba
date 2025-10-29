// geoapifyFetch.js
// Funciones para obtener ciudad + POIs + fotos + descripción usando Geoapify + Wikipedia

const GEO_API_KEY = "d0981da0845143fe846850ec0248c924";
const GEO_BASE = "https://api.geoapify.com/v2/places";
const WIKI_API = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages|extracts&format=json&exintro=true&explaintext=true&pithumbsize=400&titles=";

// Obtener coordenadas, provincia y país de la ciudad
export async function getCityCoords(cityName) {
  try {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(cityName)}&format=json&apiKey=${GEO_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results || data.results.length === 0) return null;

    const city = data.results[0];
    return {
      lat: city.lat,
      lon: city.lon,
      state: city.state || city.county || "Provincia desconocida",
      country: city.country || "País desconocido"
    };
  } catch (error) {
    console.error("Error en getCityCoords:", error);
    return null;
  }
}

// Obtener POIs cerca de las coordenadas (máx. 10)
export async function getPOIs(lat, lon, maxPOIs = 20) {
  try {
    const url = `${GEO_BASE}?categories=tourism.sights&filter=circle:${lon},${lat},5000&limit=${maxPOIs}&apiKey=${GEO_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.features || [];
  } catch (error) {
    console.error("Error en getPOIs:", error);
    return [];
  }
}

// Obtener foto y descripción breve de Wikipedia
export async function getWikiData(name) {
  try {
    const res = await fetch(`${WIKI_API}${encodeURIComponent(name)}`);
    const data = await res.json();
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    return {
      photo: page?.thumbnail?.source || null,
      description: page?.extract
        ? page.extract.split(". ").slice(0, 2).join(". ") + "."
        : null
    };
  } catch (error) {
    console.error("Error en getWikiData:", error);
    return { photo: null, description: null };
  }
}

// Función principal: ciudad + POIs + descripción + fotos
export async function fetchCityData(cityName, maxPOIs = 20) {
  try {
    const coords = await getCityCoords(cityName);
    if (!coords) return null;

    const pois = await getPOIs(coords.lat, coords.lon, maxPOIs);

    const poisWithPhotos = await Promise.all(
      pois.map(async (poi) => {
        const wiki = await getWikiData(poi.properties.name);
        return {
          name: poi.properties.name,
          location: poi.geometry,
          photo: wiki.photo,
          description: wiki.description
        };
      })
    );

    // Descripción general del destino
    const cityWiki = await getWikiData(cityName);

    return {
      name: cityName,
      coords: { lat: coords.lat, lon: coords.lon },
      state: coords.state,
      country: coords.country,
      description: cityWiki.description,
      cityPhoto: cityWiki.photo,
      pois: poisWithPhotos
    };
  } catch (error) {
    console.error("Error en fetchCityData:", error);
    return null;
  }
}




