WidgetMetadata = {
  id: "alexis.cartoonnetwork",
  title: "Cartoon Network Alexis",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  description: "Cartoon Network, Warner Animation y DC Animation",
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

  // Cartoon Network
  "Freakazoid!",
  "Dexter's Laboratory",
  "Codename: Kids Next Door",
  "Ben 10",
  "Ben 10: Alien Force",
  "Ben 10: Ultimate Alien",
  "Ben 10: Omniverse",
  "Courage the Cowardly Dog",
  "The Grim Adventures of Billy & Mandy",
  "The Powerpuff Girls",
  "Samurai Jack",
  "The Amazing World of Gumball",
  "ThunderCats",

  // DC
  "Batman: The Animated Series",
  "Superman: The Animated Series",
  "Justice League",
  "Justice League Action",
  "Teen Titans",
  "Teen Titans Go!",
  "Batman Beyond",
  "Krypto the Superdog",
  "Green Lantern: The Animated Series",

  // Scooby-Doo
  "Scooby-Doo, Where Are You!",
  "Scooby-Doo! Mystery Incorporated",
  "Be Cool, Scooby-Doo!",

  // Warner
  "Animaniacs",
  "Pinky and the Brain",
  "Pinky, Elmyra & the Brain",
  "Tiny Toon Adventures",
  "Duck Dodgers",
  "The Looney Tunes Show",

  // Otros
  "Tom and Jerry"
];

async function cartoonNetwork(params = {}) {

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
