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
        res.send(`The name of the film is ${data.Title} and was directed by ${data.Director}. The film was released in ${data.Year} and received a rating of ${data.Ratings[0].Value}.`)
        // res.end()
    });
};
