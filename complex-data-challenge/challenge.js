class Movie {
  constructor(name, director, release, imdbRating, runtime) {
      this.name = name;
      this.director = director;
      this.release = release;
      this.imdbRating = imdbRating;
      this.runtime = runtime;
  }
}

const movies = [
  new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
  new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
  new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38"),
];

// Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.release >= 2000));

// Get all movies director begins with T
console.log(movies.filter((movie) => movie.director[0].toLowerCase() == "t"));
// Get the first movie in the list where the name contains "the"
console.log(movies.find((movie) => movie.name.toLowerCase().includes("the")));
// Get the total run time of all movies in seconds
console.log(
  movies.map((movie) => movie.runtime.replace(/h/g, ".").replace(/m/g, ""))


);


// get the average imdb rating of all movies in the set

// Get the newest movie

// Get movies that have a greater run time that 90mins