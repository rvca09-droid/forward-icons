WidgetMetadata = {
  id: "alexis.foxkids",
  title: "Fox Kids Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de Fox Kids para Forward",
  author: "Alexis",
  modules: [
    {
      id: "foxkids",
      title: "Fox Kids",
      functionName: "foxkids",
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
  "Goosebumps",
  "Beast Machines: Transformers",
  "Silver Surfer",
  "The Tick",
  "Duckman",
  "The Real Ghostbusters",
  "Godzilla: The Series",
  "Gargoyles",
  "X-Men",
  "Beast Wars: Transformers",
  "Mega Man",
  "Spider-Man",
  "Spider-Man Unlimited",
  "Sonic Underground",
  "Mighty Morphin Power Rangers",
  "Jumanji",
  "Tales from the Cryptkeeper"
];

async function foxkids(params = {}) {
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
