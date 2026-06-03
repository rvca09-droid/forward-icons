WidgetMetadata = {
  id: "alexis.peacock",
  title: "Peacock Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de Peacock para Forward",
  author: "Alexis",
  modules: [
    {
      id: "peacock",
      title: "Peacock",
      functionName: "peacock",
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
  "M.I.A.",
  "Teacup",
  "Ted",
  "Twisted Metal",
  "The 'Burbs",
  "All Her Fault",
  "The Copenhagen Test",
  "Dan Brown's The Lost Symbol",
  "Devil in Disguise: John Wayne Gacy",
  "Hysteria!",
  "John Carpenter's Suburban Screams",
  "Law & Order: Organized Crime",
  "Long Bright River",
  "Monk",
  "The Miniature Wife",
  "Ponies",
  "Queer as Folk",
  "Fight Night: The Million Dollar Heist",
  "Those About to Die"
];

async function peacock(params = {}) {
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
