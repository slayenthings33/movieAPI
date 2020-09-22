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
const bodyParser = require('body-parser');

//***********MIDDLEWARE************//

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/films",express.static('public'));
app.use("/films/details", express.static('public'));
app.use("/films/edit", express.static('public'));
app.use("/films/create", express.static('public'))

//***********VIEW ENGINE************//

app.set("views", "./views") //Where to read to pug
app.set("view engine", "pug") //View generating motor

//***********ROUTES************//

// HOME PAGE
app.get('/', movie.getHome);

// CREATE MOVIE PAGE
app.get('/films/create', movie.createMovie)

// SEARCH MOVIE RESULT PAGE
app.get("/films/details/:id", movie.getDetails);

// app.get("*", films.getError);
// EDIT MOVE RESULTS PAGE 
app.get("/films/edit/:id", movie.saveChanges) 

//  when user enters movie title, call function getTitle
//  app.get("/api/films/:title?", movie.getTitle)
//when url reads "/films/:title -> render this...
app.get('/films/:title', movie.getFilmAPI);

// SAVE FILM
app.post("/films/save",movie.saveFave)

app.listen(port, () => {
  console.log(`You are connected to: ${port}`)
})