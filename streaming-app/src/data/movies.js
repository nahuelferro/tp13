const movies = [
  {
    id: 1,
    title: "Interstellar",
    description: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar el futuro de la humanidad.",
    genre: "Ciencia ficción",
    duration: "169 min",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 2,
    title: "El Padrino",
    description: "La historia de la familia Corleone en el corazón del crimen organizado.",
    genre: "Drama / Crimen",
    duration: "175 min",
    image: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg"
  },
  {
    id: 3,
    title: "Inception",
    description: "Un ladrón que roba secretos corporativos a través de sueños debe plantar una idea en la mente de un CEO.",
    genre: "Acción / Ciencia ficción",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    id: 4,
    title: "Titanic",
    description: "Un artista pobre y una joven de clase alta se enamoran a bordo del malogrado RMS Titanic.",
    genre: "Romance / Drama",
    duration: "195 min",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    description: "Los Vengadores restantes deben encontrar una forma de revertir el daño causado por Thanos.",
    genre: "Acción / Superhéroes",
    duration: "181 min",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 6,
    title: "Joker",
    description: "La historia del origen del villano más icónico de Gotham.",
    genre: "Drama / Crimen",
    duration: "122 min",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 7,
    title: "Spider-Man: No Way Home",
    description: "Peter Parker debe lidiar con la apertura del multiverso y la llegada de villanos de otros mundos.",
    genre: "Acción / Superhéroes",
    duration: "148 min",
    image: "https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg"
  },
  {
    id: 8,
    title: "La La Land",
    description: "Un músico y una actriz luchan por alcanzar sus sueños en Los Ángeles.",
    genre: "Musical / Romance",
    duration: "128 min",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
  },
  {
    id: 9,
    title: "The Matrix",
    description: "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
    genre: "Ciencia ficción / Acción",
    duration: "136 min",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 10,
    title: "Forrest Gump",
    description: "Un hombre con un bajo coeficiente intelectual vive eventos históricos clave mientras busca a su amor de infancia.",
    genre: "Drama / Romance",
    duration: "142 min",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
  id: 11,
  title: "The Dark Knight",
  description: "Batman enfrenta a su mayor enemigo: el Joker, quien busca sumir a Gotham en el caos.",
  genre: "Acción / Crimen / Drama",
  duration: "152 min",
  image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
  id: 12,
  title: "Gladiator",
  description: "Un general romano busca venganza contra el emperador corrupto que asesinó a su familia.",
  genre: "Acción / Drama / Historia",
  duration: "155 min",
  image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
  id: 13,
  title: "Toy Story",
  description: "Cuando un nuevo juguete llega, Woody debe lidiar con los celos y una nueva aventura.",
  genre: "Animación / Comedia / Familiar",
  duration: "81 min",
  image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
  id: 14,
  title: "Shrek",
  description: "Un ogro solitario emprende un viaje para rescatar a una princesa con un gran secreto.",
  genre: "Animación / Aventura / Comedia",
  duration: "90 min",
  image: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg"
  },
  {
  id: 15,
  title: "The Lion King",
  description: "Simba, un joven león, debe reclamar su lugar como rey tras la trágica muerte de su padre.",
  genre: "Animación / Drama / Aventura",
  duration: "88 min",
  image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
  id: 16,
  title: "Black Panther",
  description: "T'Challa regresa a Wakanda para reclamar su trono, pero enfrenta un desafío inesperado.",
  genre: "Acción / Ciencia ficción / Superhéroes",
  duration: "134 min",
  image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
  id: 17,
  title: "Pulp Fiction",
  description: "Historias entrelazadas de crimen, violencia y redención en el inframundo de Los Ángeles.",
  genre: "Crimen / Drama",
  duration: "154 min",
  image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
  id: 18,
  title: "Up",
  description: "Un anciano y un niño explorador viajan en una casa voladora para cumplir una promesa.",
  genre: "Animación / Aventura / Comedia",
  duration: "96 min",
  image: "https://image.tmdb.org/t/p/w500/xycF4aBzrKfa1jmP703J5oCbKuA.jpg"
  },
  {
  id: 19,
  title: "The Shawshank Redemption",
  description: "Un hombre condenado por un crimen que no cometió encuentra esperanza en prisión.",
  genre: "Drama / Crimen",
  duration: "142 min",
  image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
  id: 20,
  title: "Doctor Strange in the Multiverse of Madness",
  description: "Stephen Strange abre una puerta al multiverso y debe enfrentarse a consecuencias devastadoras.",
  genre: "Acción / Fantasía / Superhéroes",
  duration: "126 min",
  image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
  }
];

export default movies;
