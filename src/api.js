// geoapifyFetch.js
// Funciones para obtener ciudad + POIs + fotos usando Geoapify + Wikimedia

const GEO_API_KEY = "d0981da0845143fe846850ec0248c924";
const GEO_BASE = "https://api.geoapify.com/v2/places"
const WIKI_API = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages|extracts&format=json&pithumbsize=400&titles="

// Obtener coordenadas de la ciudad
export async function getCityCoords(cityName) {
  try {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(cityName)}&format=json&apiKey=${GEO_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results || data.results.length === 0) return null;
    const city = data.results[0];
    return { lat: city.lat, lon: city.lon };
  } catch (error) {
    console.error("Error en getCityCoords:", error);
    return null;
  }
}

// Obtener POIs cerca de las coordenadas (max 10)
export async function getPOIs(lat, lon, maxPOIs = 10) {
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

// Obtener foto de Wikimedia para un POI
export async function getPhoto(poiName) {
  try {
    const res = await fetch(`${WIKI_API}${encodeURIComponent(poiName)}`);
    const data = await res.json();
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    if (page?.thumbnail?.source) return page.thumbnail.source;
    return null;
  } catch (error) {
    console.error("Error en getPhoto:", error);
    return null;
  }
}

// Función principal: ciudad + POIs con fotos
export async function fetchCityData(cityName, maxPOIs = 10) {
  try {
    const coords = await getCityCoords(cityName);
    if (!coords) return null;

    const pois = await getPOIs(coords.lat, coords.lon, maxPOIs);

    const poisWithPhotos = await Promise.all(
      pois.map(async (poi) => ({
        name: poi.properties.name,
        location: poi.geometry,
        photo: await getPhoto(poi.properties.name)
      }))
    );

    return {
      name: cityName,
      coords,
      pois: poisWithPhotos
    };
  } catch (error) {
    console.error("Error en fetchCityData:", error);
    return null;
  }
}



