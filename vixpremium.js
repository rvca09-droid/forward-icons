WidgetMetadata = {
  id: "alexis.vixpremium",
  title: "ViX Premium Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de ViX Premium para Forward",
  author: "Alexis",
  modules: [
    {
      id: "vixpremium",
      title: "ViX Premium",
      functionName: "vixpremium",
      cacheDuration: 3600,
      params: [
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "es-MX"
        }
      ]
    }
  ]
};

const titles = [
  "Ellas soy yo, Gloria Trevi",
  "El Gallo de Oro",
  "La Hora Marcada",
  "Juegos Interrumpidos",
  "Lalola",
  "María Félix: La Doña",
  "La Mujer del Diablo",
  "Mujeres Asesinas",
  "Pacto de Sangre",
  "Y Llegaron de Noche",
  "Polen",
  "La Sustituta"
];

async function vixpremium(params = {}) {
  const language = params.language || "es-MX";
  let results = [];

  for (const title of titles) {
    try {
      const response = await Widget.tmdb.get(
        "search/tv",
        {
          params: {
            query: title,
            language: language
          }
        }
      );

      if (
        response &&
        response.results &&
        response.results.length > 0
      ) {
        const item = response.results[0];

        results.push({
          id: item.id,
          type: "tmdb",
          title: item.name,
          description: item.overview,
          releaseDate: item.first_air_date,
          backdropPath: item.backdrop_path,
          posterPath: item.poster_path,
          rating: item.vote_average,
          mediaType: "tv"
        });
      }
    } catch (error) {
      console.error(
        "Error buscando:",
        title,
        error
      );
    }
  }

  return results;
}
