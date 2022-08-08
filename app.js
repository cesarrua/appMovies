const movies = require("./movies");

const moviesDH = {

  listMovies: function () {
    movies.forEach((item) => console.log(item));
  },

  searchMovie: function (valor) {
    if (movies.find((movie) => movie.id == valor) != undefined) {
      return movies.find((movie) => movie.id == valor);
    } else if (movies.find((movie) => movie.title == valor) != undefined) {
      return movies.find((movie) => movie.title == valor);
    } else return null;
  },

  seachMoviesByGenre: function (genero) {
    return movies.filter((movie) => movie.genre === genero);
  },

  /*en esta forma de reduce, se pone el 0 del acumulador después de la función precedido de una coma (,)
    esto indicará que el contador (acum) iniciará en 0. dicha función está dentro del reduce como CALLBACK
    
  totalPrice() {
    return movies.reduce(function (acum, movie) {
      return acum + movie.price;
    }, 0);
  },
  */

  /* esta se hizo con arrow function, así que como el código se resuelve facimmente en una sola línea, el 
  valor del acumulador 0, se pone justo después de lo que queremos que haga la función
  */
  totalPrice: function(){
        return movies.reduce((acum, movie) => acum + movie.price,0);
    },

  /*changeMovieGenre(id, genero){
        let cambioGenero = this.searchMovie(id);
        cambioGenero["genre"] = genero;
        return cambioGenero;
    }*/

  changeMovieGenre: function (id, genero) {
    return (this.searchMovie(id).genre = genero);
  },
};
//console.log("listado de peliculas");
//moviesDH.listMovies();

console.log("***********BUSCAR PELICULA************");
console.log(moviesDH.searchMovie("Titanic"));
console.log("***********BUSCAR GENERO************");
console.log(moviesDH.seachMoviesByGenre("Accion"));
console.log("***********PRECIO TOTAL************");
console.log(moviesDH.totalPrice());
console.log("***********CAMBIAR GENERO************");
console.log(moviesDH.changeMovieGenre(1, "Terror"));
