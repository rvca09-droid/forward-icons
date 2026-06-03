WidgetMetadata = {
  id: "alexis.cartoonnetwork",
  title: "Cartoon Network Alexis",
  version: "1.1.0",
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
          title: "Idioma",
          type: "language",
          value: "es-MX"
        }
      ]
    }
  ]
};

async function cartoonNetwork() {
  return [

    // Cartoon Network clásicos
    { id: 314, type: "tmdb" },      // Fenomenoide
    { id: 387, type: "tmdb" },      // El laboratorio de Dexter
    { id: 2705, type: "tmdb" },     // KND
    { id: 30984, type: "tmdb" },    // Coraje el perro cobarde
    { id: 3937, type: "tmdb" },     // Billy y Mandy
    { id: 652, type: "tmdb" },      // Las Chicas Superpoderosas
    { id: 4614, type: "tmdb" },     // Samurai Jack
    { id: 37606, type: "tmdb" },    // El Increíble Mundo de Gumball

    // Ben 10
    { id: 4686, type: "tmdb" },     // Ben 10 (2005)
    { id: 8067, type: "tmdb" },     // Ben 10 Alien Force
    { id: 34860, type: "tmdb" },    // Ben 10 Ultimate Alien
    { id: 4682, type: "tmdb" },     // Ben 10 Omniverse

    // DC
    { id: 1604, type: "tmdb" },     // Batman
    { id: 513, type: "tmdb" },      // Superman
    { id: 1637, type: "tmdb" },     // Liga de la Justicia
    { id: 3611, type: "tmdb" },     // Jóvenes Titanes (2003)
    { id: 2288, type: "tmdb" },     // Batman del Futuro
    { id: 3218, type: "tmdb" },     // Krypto el Superperro
    { id: 44006, type: "tmdb" },    // Green Lantern Animated Series
    { id: 67198, type: "tmdb" },    // Justice League Action
    { id: XXXXX, type: "tmdb" },    // Bat-Fam

    // Scooby-Doo
    { id: 1924, type: "tmdb" },     // Scooby-Doo
    { id: 18123, type: "tmdb" },    // Scooby-Doo Mystery Incorporated
    { id: 62106, type: "tmdb" },    // Be Cool Scooby-Doo
    { id: 94954, type: "tmdb" },    // Velma

    // Warner Bros
    { id: 4339, type: "tmdb" },     // Animaniacs
    { id: 1996, type: "tmdb" },     // Pinky y Cerebro
    { id: XXXXX, type: "tmdb" },    // Pinky, Elvira y Cerebro
    { id: 1995, type: "tmdb" },     // Tiny Toon Adventures
    { id: 3767, type: "tmdb" },     // Duck Dodgers
    { id: 37664, type: "tmdb" },    // The Looney Tunes Show

    // Otros
    { id: 34391, type: "tmdb" },    // ThunderCats 2011
    { id: XXXXX, type: "tmdb" },    // DreamWorks Dragons
    { id: 45140, type: "tmdb" },    // Teen Titans Go!

  ];
}
