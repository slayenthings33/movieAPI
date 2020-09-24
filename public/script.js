//**********DOM LINKING***********//

let searchButton = document.getElementById("searchButton");
let createButton = document.getElementById("createButton");
let resetFormButton = document.getElementById("resetForm");
let submitFormButton = document.getElementById("submitForm");
let faveSect = document.getElementById("faveSect");

//**********SEARCH FILM***********//

if (searchButton) {
  searchButton.addEventListener("click", getInput) //Button event listeners
  function getInput() {   //Insert  into URL to access API
  let userInput = document.getElementById("userInput");
  location.replace(`/films/${userInput.value}`)
  }
}

//**********CREATE FILM***********//

if(createButton) {
  createButton.addEventListener('click', createFilm)
  function createFilm() {
    location.replace(`/films/create/`)
  }
}

//**********HOME PAGE***********//

function goHome() {  //Refresh home page
  location.replace("/")
}

//**********BUTTON FUNCTIONS***********//

function deleteFilm(title) {
  let eraseFilm = {
    "Title": title
  }

  fetch('/films/deletedb', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify(eraseFilm)
  })
    .then((respuesta)=>{
      console.log("The film was deleted successfully")
      console.log(respuesta)
      console.log("replace location")
      location.replace("/")
      })
    .catch((e)=>{
      console.log("error"+e)
    });
};

// SEARCH FILM 
function getDetails(title){
  console.log("function getDetails")
  // console.log(title);
  let filmURL = `/films/details/${title}`;
  location.replace(filmURL)
}

function editFave(pos) {
  let arr2edit = JSON.parse(localStorage.getItem("faveFilms")); 
  console.log(arr2edit[pos])
  location.replace(`/films/edit/${pos}?title=${arr2edit[pos].Title}&release=${arr2edit[pos].Released}&rating=${arr2edit[pos].filmRating}&director=${arr2edit[pos].Director}&actors=${arr2edit[pos].Actors}&score=${arr2edit[pos].Score}&poster=${arr2edit[pos].Poster}`) 
  //pos = onclick template string above
}

if(document.getElementById('editFave')) {
  document.getElementById('editFave').addEventListener('click', (e)=>{
    e.preventDefault();
    let array3edit = JSON.parse(localStorage.getItem("faveFilms"));
    //  let title=document.getElementById('movie').value;
    let id = document.getElementById("id").innerText
 console.log(array3edit);
 
     let editedMovie = {
       Title: document.getElementById("title").value,
       Poster: document.getElementById("poster").value,
      filmRating: document.getElementById("rating").value,
      Director: document.getElementById("director").value,
      Released: document.getElementById("released").value,
      Score: document.getElementById("score").value,
      Actors: document.getElementById("actors").value
    }
    array3edit[id] = editedMovie;
    localStorage.setItem('faveFilms', JSON.stringify(array3edit))
    location.replace('/')
  })
}