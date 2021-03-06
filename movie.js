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
// ERROR PAGE 
// exports.getErrorPage = (req,res) =>{
//     res
//     .status(404)
//     .render("error", {
//         message: "Uh oh, looks like you took a wrong turn somewhere...",
//         message2: "ERROR 404"
//     });
// };
// LOAD FORM
exports.getForm = (req, res) => {
    res
        .status(200)
        .render("edit", {title:film})
}
//API fetch
exports.getFilmAPI = (req,res) => {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${req.params.title}`)
  .then(function(response) { //returns a JSON of requested film
    return response.json();
  }).then(function(data) {
        res.render("film", {
            movieName: data.Title,
            route: data.Poster,
            movieName: data.Title,
            rated: data.Rated,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            released: data.Released,
            score: data.imdbRating,
            awards: data.Awards,
            genre: data.Genre,
            runtime: data.Runtime,
        })
    }).catch(e=> console.log("getFilmApi error: "+e))
}
// MODULE TO DISPLAY DETAILS PUG
exports.getDetails = (req,res) => {
    console.log("**********************")
    console.log(req.params)
    db.getMovieDetails(req.params.title)
    .then((data)=> {
        console.log(data)
        res.status(200)
        .render("details", {
            //variable in pug : name in server.js generated url
            route: data.Poster,  
            movieName: data.Title,
            rating: data.Rating,
            runtime: data.Runtime,
            genre: data.Genre,
            director: data.Director,
            actors: data.Actors,
            released: data.Date,
            score: data.Score,
            plot: data.Plot

        })
    }).catch((e)=> console.log("An error has occurred "+e))
}
// MODULE TO UPLOAD FILM TO DB FROM FILM PUG 
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

// MODULE LOAD FORM PUG WITH DETAILS FROM DB 
exports.getEditFilm = (req,res) => {
    db.getMovieDetails(req.params.title)
    .then((data)=> {
        console.log("getEditFilm module")
        console.log(data)
        res.render("edit", {
            route: "/films/postEditFilm",
            message: "Edit your favorite Film!!",
            _id: data._id,
            posterEdit: data.Poster,  
            titleEdit: data.Title,
            ratingEdit: data.Rating,
            runtimeEdit: data.Runtime,
            genreEdit: data.Genre,
            directorEdit: data.Director,
            actorsEdit: data.Actors,
            releasedEdit: data.Date,
            scoreEdit: data.Score,
            plotEdit:data.Plot
        })
    }).catch((e)=>console.log(`And error occurred ${e}`))
}
// MODULE SAVE THE USERS EDITED FAVED FILM 
exports.saveChanges = (req,res) => {
    console.log("saveChanges module")
    db.updateFilmDoc(req.params.title)
    res.status(200).render("edit", {
        id: req.params.id,
        title: req.query.title,
        rating: req.query.rating,
        director: req.query.director,
        actors: req.query.actors,
        release: req.query.release,
        score: req.query.score,
        poster: req.query.poster,
        plot: req.query.plot
    })
} 
// MODULE TO LOAD CREATE FILM PUG 
exports.createMovie = (req,res) => {
    res.render("edit", { message: 'Create your own Motion Picture!'});
    db.createMovie(film)
}

// POST METHOD TO ERASE FROM DB 
exports.postDeleteFilm = (req,res) => {
    db.deleteFilmDoc(req.body)
    .then(() => {
        res
        .status(200)
        .redirect("/")
    }).catch((e)=> console.log("An error has occurred "+e))
    // console.log(req.body)
}

// POST METHOD TO EDIT FROM DB 
exports.postEditFilm = (req,res) => {
    console.log(req.body)
    let id = req.body._id;
    console.log("*********UPLOAD FORM DATA***************");
    console.log(id);
    db.updateFilmDoc(id, req.body)
    .then(()=> {
        res
        .status(200)
        .redirect("/");
    }).catch((e)=> console.log("An unexpected error has occurred:"+e))
}
