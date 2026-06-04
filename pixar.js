WidgetMetadata = {
  id: "alexis.pixar",
  title: "Pixar Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de películas Pixar para Forward",
  author: "Alexis",
  modules: [
    {
      id: "pixar",
      title: "Pixar",
      functionName: "pixar",
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
  { title: "Toy Story", type: "movie" },
  { title: "Toy Story 2", type: "movie" },
  { title: "Toy Story 3", type: "movie" },
  { title: "WALL·E", type: "movie" },
  { title: "Brave", type: "movie" },
  { title: "Up", type: "movie" },
  { title: "The Good Dinosaur", type: "movie" },
  { title: "Toy Story 4", type: "movie" },
  { title: "Soul", type: "movie" },
  { title: "Ratatouille", type: "movie" },
  { title: "Monsters, Inc.", type: "movie" },
  { title: "Monsters University", type: "movie" },
  { title: "Luca", type: "movie" },
  { title: "The Incredibles", type: "movie" },
  { title: "Incredibles 2", type: "movie" },
  { title: "Lightyear", type: "movie" },
  { title: "Hoppers", type: "movie" },
  { title: "Elio", type: "movie" },
  { title: "Inside Out", type: "movie" },
  { title: "Elemental", type: "movie" },
  { title: "Coco", type: "movie" },
  { title: "Cars", type: "movie" },
  { title: "Cars 2", type: "movie" },
  { title: "Cars 3", type: "movie" },
  { title: "Finding Nemo", type: "movie" },
  { title: "Finding Dory", type: "movie" },
  { title: "A Bug's Life", type: "movie" },
  { title: "Bao", type: "movie" }
];

async function pixar(params = {}) {
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
