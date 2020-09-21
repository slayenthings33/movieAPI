const fetch = require('node-fetch');
const ddbb = require('./ddbb')

exports.getHome = (req, res) => {
    res.send("Hola Mundo")
}
exports.getForm = (req, res) => {
    res.render("form", {"title":"hola"})
}
// exports.getTitle = (req,res) => {
//     let title = req.params.title;
//     fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${title}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data) {
//         res.send(`The name of the film is ${data.Title}, was directed by ${data.Director}. The film was released in ${data.Year} and received a rating of ${data.Ratings[0].Value}.`)
//         // res.end()
//     });
// };
exports.getFilmAPI = (req,res) => {
    //API fetch
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${req. params.title}`)
  .then(function(response) { //returns a JSON of requested film
    return response.json();
  }) 
  .then(function(data) {
    res.render('film', {  //render film.pug with this data from API
     movieName:data.Title,movie: data.Title, released: data.Released, director: data.Director, rating: data.Ratings[0].Value, route: data.Poster, actors: data.Actors, rated: data.Rated});
  }).catch(console.log("getFilmApi error"))
}
//module to display in details.pug
exports.getDetails = (req,res) => {
    res.render("details", {
        movie: req.query.title,
        poster: req.query.src,  //variable in pug : name in server.js generated url
        movieName: req.query.title,
        rated: req.query.rated,
        director: req.query.director,
        actors: req.query.actors,
        released: req.query.released,
        rating: req.query.rating
    })
}
exports.saveChanges = (req,res) => {
    console.log(req.query)
    console.log(req.params)
    res.render("edit", {
        id: req.params.id,
        title: req.query.title,
        rating: req.query.rating,
        director: req.query.director,
        actors: req.query.actors,
        release: req.query.release,
        score: req.query.score,
        poster: req.query.poster
    })
} 
exports.createMovie = (req,res) => {
    res.render("edit", {})
    // ddbb.createMovie(film)
}
exports.saveFave = (req,res) => {
    let movie= req.body;
    console.log("Guardando")
    console.log(req.body)
    ddbb.createMovie(movie)
    // res.json(req.body)
    // res.json({dato:"hola"})
}
