WidgetMetadata = {
  id: "alexis.shudder",
  title: "Shudder Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de Shudder para Forward",
  author: "Alexis",
  modules: [
    {
      id: "shudder",
      title: "Shudder",
      functionName: "shudder",
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

const items = [
  { title: "V/H/S/Beyond", type: "movie" },
  { title: "V/H/S/Halloween", type: "movie" },
  { title: "V/H/S/99", type: "movie" },
  { title: "V/H/S/94", type: "movie" },
  { title: "V/H/S/85", type: "movie" },
  { title: "Creepshow", type: "tv" },
  { title: "Hell Motel", type: "tv" },
  { title: "The Dead Lands", type: "tv" },
  { title: "Cuando acecha la maldad", type: "movie" },
  { title: "Birth/Rebirth", type: "movie" },
  { title: "Clown in a Cornfield", type: "movie" },
  { title: "Oddity", type: "movie" },
  { title: "V/H/S: Viral", type: "movie" },
  { title: "Kids vs. Aliens", type: "movie" },
  { title: "Watcher", type: "movie" },
  { title: "Late Night with the Devil", type: "movie" },
  { title: "In the Mind of a Demon", type: "movie" },
  { title: "Run Rabbit Run", type: "movie" },
  { title: "Night Patrol", type: "movie" },
  { title: "Whistle", type: "movie" },
  { title: "The Crucifix: Blood of the Exorcist", type: "movie" },
  { title: "Fear Cabin: The Last Weekend", type: "movie" },
  { title: "Lilly Lives Alone", type: "movie" },
  { title: "Tenants", type: "movie" },
  { title: "Vieja Loca", type: "movie" },
  { title: "The Carpenter's Son", type: "movie" },
  { title: "The Damned", type: "movie" },
  { title: "The Shadow", type: "movie" },
  { title: "Romi", type: "movie" },
  { title: "Good Boy", type: "movie" },
  { title: "No One Will Save You", type: "movie" },
  { title: "The Night House", type: "movie" },
  { title: "Wayang Puaka", type: "movie" },
  { title: "Possum", type: "movie" },
  { title: "Caveat", type: "movie" },
];

async function shudder(params = {}) {
  const language = params.language || "es-MX";
  let results = [];

  for (const itemInfo of items) {
    try {
      const response = await Widget.tmdb.get(
        `search/${itemInfo.type}`,
        {
          params: {
            query: itemInfo.title,
            language: language
          }
        }
      );

      if (response && response.results && response.results.length > 0) {
        const item = response.results[0];

        results.push({
          id: item.id,
          type: "tmdb",
          title: item.title ?? item.name,
          description: item.overview,
          releaseDate: item.release_date ?? item.first_air_date,
          backdropPath: item.backdrop_path,
          posterPath: item.poster_path,
          rating: item.vote_average,
          mediaType: itemInfo.type
        });
      }
    } catch (error) {
      console.error("Error buscando:", itemInfo.title, error);
    }
  }

  return results;
}
