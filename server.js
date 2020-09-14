// [GET] dame una pelicula por titulo. Devuelve JSON. Ruta: api/films/:titulo
// Para tus favoritas( fakear BBDD con LocalStorage):
// [GET] Dame todas las peliculas guardadas. Devuelve un array de JSON. Ruta: /api/films
// [DELETE] borra una pelicula api/films
// [PUT] actualiza una peli guardada en LocalStorage api/films/:id
// Si la ruta no existe, se debe devolver 404 Not Found

const express = require("express")
const app = express()
const port = 3000
const movie = require("./movie")
const fetch = require('node-fetch');
const { response } = require("express");

app.set("views", "./views") //Where to read to pug
app.set("view engine", "pug") //View generating motor

app.use(express.static('public'));
app.use("/films",express.static('public'));

// app.get("/", movie.getHome)
app.get('/', function (req, res) {
  res.render('home', { message: 'Welcome to MovieSpot, your very own personal Movie Database!'});
});

app.get("/form", function(req,res) {
  res.render("form", {})
})


//  when user enters movie title, call function getTitle
//  app.get("/api/films/:title?", movie.getTitle)
//when url reads "/films/:title -> render this...
app.get('/films/:title', function (req, res) { //API fetch
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${req. params.title}`)
  .then(function(response) { //returns a JSON of requested film
    return response.json();
  }) 
  .then(function(data) {
    res.render('film', {  //render film.pug with this data from API
     movieName:data.Title,movie: data.Title, released: data.Released, director: data.Director, rating: data.Ratings[0].Value, route: data.Poster});
      
    });
  });

app.listen(port, () => {
  console.log(`You are connected to: ${port}`)
})