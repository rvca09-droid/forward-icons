WidgetMetadata = {
  id: "alexis.a24",
  title: "A24 Alexis",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Colección personalizada de A24 para Forward",
  author: "Alexis",
  modules: [
    {
      id: "a24",
      title: "A24",
      functionName: "a24",
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
  { title: "Babygirl", type: "movie" },
  { title: "The Whale", type: "movie" },
  { title: "Beau Is Afraid", type: "movie" },
  { title: "I Saw the TV Glow", type: "movie" },
  { title: "Beef", type: "tv" },
  { title: "C'mon C'mon", type: "movie" },
  { title: "The Sky Is Everywhere", type: "movie" },
  { title: "Civil War", type: "movie" },
  { title: "The Iron Claw", type: "movie" },
  { title: "When You Finish Saving the World", type: "movie" },
  { title: "Death of a Unicorn", type: "movie" },
  { title: "High Life", type: "movie" },
  { title: "Bring Her Back", type: "movie" },
  { title: "Uncut Gems", type: "movie" },
  { title: "A Different Man", type: "movie" },
  { title: "The Drama", type: "movie" },
  { title: "Eddington", type: "movie" },
  { title: "Eternity", type: "movie" },
  { title: "The Front Room", type: "movie" },
  { title: "Heretic", type: "movie" },
  { title: "Dream Scenario", type: "movie" },
  { title: "The Inspection", type: "movie" },
  { title: "The Deepest Breath", type: "movie" },
  { title: "Irma Vep", type: "tv" },
  { title: "The Legend of Ochi", type: "movie" },
  { title: "The Green Knight", type: "movie" },
  { title: "Look Into My Eyes", type: "movie" },
  { title: "Marty Supreme", type: "movie" },
  { title: "Materialists", type: "movie" },
  { title: "MaXXXine", type: "movie" },
  { title: "Lamb", type: "movie" },
  { title: "Opus", type: "movie" },
  { title: "Pearl", type: "movie" },
  { title: "Mother Mary", type: "movie" },
  { title: "Janet Planet", type: "movie" },
  { title: "White Noise", type: "movie" },
  { title: "The Sympathizer", type: "tv" },
  { title: "The Smashing Machine", type: "movie" },
  { title: "Sunny", type: "tv" },
  { title: "Everything Everywhere All at Once", type: "movie" },
  { title: "It Comes at Night", type: "movie" },
  { title: "The Zone of Interest", type: "movie" },
  { title: "Y2K", type: "movie" },
  { title: "Tuesday", type: "movie" },
  { title: "Warfare", type: "movie" }
];

async function a24(params = {}) {
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
