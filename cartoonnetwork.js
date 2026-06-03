WidgetMetadata = {
  id: "alexis.cartoonnetwork",
  title: "Cartoon Network Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Lista personalizada de Cartoon Network para Forward",
  author: "Alexis",
  modules: [
    {
      id: "cartoonNetwork",
      title: "Cartoon Network",
      functionName: "cartoonNetwork",
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
  "Freakazoid!",
  "Dexter's Laboratory",
  "Codename: Kids Next Door",
  "Ben 10",
  "Courage the Cowardly Dog",
  "The Grim Adventures of Billy & Mandy",
  "The Powerpuff Girls",
  "Justice League",
  "The Flintstones",
  "The Jetsons",
  "Teen Titans",
  "Scooby-Doo, Where Are You!",
  "The Amazing World of Gumball",
  "Batman: The Animated Series",
  "Superman: The Animated Series",
  "Pinky and the Brain",
  "Tiny Toon Adventures",
  "Samurai Jack",
  "Animaniacs",
  "Pinky, Elmyra & the Brain",
  "Tom and Jerry"
];

async function cartoonNetwork(params = {}) {
  const language = params.language || "es-MX";
  let results = [];

  for (const title of titles) {
    try {
      const response = await Widget.tmdb.get("search/tv", {
        params: {
          query: title,
          language: language
        }
      });

      if (response && response.results && response.results.length > 0) {
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
      console.error("Error buscando:", title, error);
    }
  }

  return results;
}
