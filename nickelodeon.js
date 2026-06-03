WidgetMetadata = {
  id: "alexis.nickelodeon",
  title: "Nickelodeon Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de Nickelodeon para Forward",
  author: "Alexis",
  modules: [
    {
      id: "nickelodeon",
      title: "Nickelodeon",
      functionName: "nickelodeon",
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

  // Nicktoons
  "Hey Arnold!",
  "Aaahh!!! Real Monsters",
  "Avatar: The Last Airbender",
  "Danny Phantom",
  "SpongeBob SquarePants",
  "Rugrats",
  "All Grown Up!",
  "Rugrats: 2021",
  "The Fairly OddParents",

  // Tortugas Ninja
  "Teenage Mutant Ninja Turtles 2012",
  "Tales of the Teenage Mutant Ninja Turtles",

  // Live Action
  "Clarissa Explains It All",
  "Are you afraid of the dark, 
  "Kenan & Kel",
  "Drake & Josh",
  "iCarly",
  "Victorious",
  "Ned's Declassified School Survival Guide",
  "Big Time Rush",

  // Nuevas
  "Kamp Koral: SpongeBob's Under Years",

];

async function nickelodeon(params = {}) {

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
