const fetch = require('node-fetch');

exports.getHome = (req, res) => {
    res.send("Hola Mundo")
}
exports.getForm = (req, res) => {
    res.render("form", {"title":"hola"})
}
exports.getTitle = (req,res) => {
    let title = req.params.title;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8f00377f&t=${title}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        res.send(`The name of the film is ${data.Title}, was directed by ${data.Director}. The film was released in ${data.Year} and received a rating of ${data.Ratings[0].Value}.`)
        // res.end()
    });
};
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
exports.editFave = (req,res) => {
    console.log(req.query)
    console.log("************************************+++")
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

exports.saveFave = (req,res) => {
    console.log("Guardando")
    console.log(req.params)
    console.log(req.body)
    console.log(req.query)
    res.json(req.body)
    //res.json({dato:"hola"})
}