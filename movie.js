const fetch = require('node-fetch');
const db = require('./db')

// HOME
exports.getHome = (req, res) => {
     db
    .getAllFilms()
    .then((data)=>{
        res
        .status(200)
        .render("home", {
            message: 'Search for a film by title:',
            films: data
        })
    }).catch((e)=>console.log("An error has occurred:" +e));
  };

// LOAD FORM
exports.getForm = (req, res) => {
    res
        .status(200)
        .render("edit", {title:film})
}
//API fetch
exports.getFilmAPI = (req,res) => {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${req. params.title}`)
  .then(function(response) { //returns a JSON of requested film
    return response.json();
  }).then(function(data) {
        res.render("film", {
            movie: data.Title,
            route: data.Poster,
            movieName: data.Title,
            rated: data.Rated,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            released: data.Released,
            rating: data.Ratings[0].Value
        })
}).catch(e=> console.log("getFilmApi error: "+e))
}
//module to display in details.pug
exports.getDetails = (req,res) => {
    console.log(req.params)
    console.log(req.params.title)
    db.getMovieDetails(req.params.title)
    .then((data)=> {
        console.log("***********")
        console.log(data)
        res.status(200)
        .render("details", {
            //variable in pug : name in server.js generated url
            // movie: req.params.title,
            route: data.Poster,  
            movieName: data.Title,
            rated: data.Rated,
            director: data.Director,
            actors: data.Actors,
            released: data.Released,
            score: data.Score
        })
    }).catch((e)=> console.log("An error has occurred "+e))
}

exports.saveChanges = (req,res) => {
    res.status(200).render("edit", {
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
    res.render("edit", { message: 'Create your own Motion Picture!'});
    db.createMovie(film)
}
exports.saveFave = (req,res) => {
    let movie= req.body;
    console.log("Saving")
    db.createMovie(movie)
    .then(()=>{
        res
        .status(200)
        .redirect("/")
    })
    .catch((e)=> {
        console.log("An error has occurred "+e)
    })
}
// POST METHOD TO ERASE FROM DB 
exports.postDeleteFilm = (req,res) => {
    db.deleteFilmDoc (req.body)
    .then(() => {
        res
        .status(200)
        .redirect("/")
    }).catch((e)=> console.log("An error has occurred "+e))
    console.log(req.body)
}