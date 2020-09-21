// const express = require("express");
// const bodyParser = require("body-parser");

//**********DOM LINKING***********//

let searchButton = document.getElementById("searchButton");
let createButton = document.getElementById("createButton");
let resetFormButton = document.getElementById("resetForm");
let submitFormButton = document.getElementById("submitForm");
//let detailsBtn = document.getElementById("detailsBtn");
//let editBtn = document.getElementById("editBtn");
//let deleteBtn= document.getElementById("deleteBtn");
let faveSect = document.getElementById("faveSect");


//**********SEARCH FILM***********//

if (searchButton) {
    searchButton.addEventListener("click", getInput) //Button event listeners
  function getInput() {   //Insert  into URL to access API
    let userInput = document.getElementById("userInput");
    titleURL = userInput.value
    console.log(titleURL);
    location.replace(`/films/${titleURL}`)
  }
}

//**********CREATE FILM***********//

if(createButton) {
  createButton.addEventListener('click', createFilm)
  function createFilm() {
    let userInput = document.getElementById("userInput");
    titleURL = userInput.value
    location.replace(`/create/${titleURL}`)
  }
}

if(editFave) {

}


//**********HOME PAGE***********//

function goHome() {  //Refresh home page
  location.replace("/")
} 

//**********DISPLAY FAVES***********//

function showFaves() {
  let faveSect = document.getElementById("faveFilmSect");
  let parsedFaves = JSON.parse(localStorage.getItem("faveFilms"));
    for(let i=0; i<parsedFaves.length; i++) {
    if(parsedFaves !== null) { 
      let faveList = `<div id="faveItem"><div id="titleRow"><b>Title: </b> ${parsedFaves[i].Title}</div> <div id="directedRow"><b>Directed by: </b>${parsedFaves[i].Director}</div> <div id="releasedRow"><b>Released: </b> ${parsedFaves[i].Released}</div> <div id="faveButns"><button id="detailsBtn" onclick="getDetails(${i})">Details</button><button id="editBtn" onclick="editFave('${i}')">Edit</button><button id="deleteBtn${i}" onclick="deleteFilm(${i})">Delete</button></div></div>`;
      // ${i}?title=${parsedFaves[i].Title} <-- onclick()
      faveSect.innerHTML += faveList ;
    } else {
      faveSect.innerHTML = "";
    }
  }
}

if(document.getElementById("faveFilmSect")) showFaves(); //only execute showFaves when faveFilmSect exists


//**********BUTTON FUNCTIONS***********//

// deleteBtn.addEventListener("click", eraseFilm);
function deleteFilm(pos) {
  // console.log(typeof(localStorage.getItem("faveFilms"))); <stored as string
  let faveFilmsParsed = JSON.parse(localStorage.getItem("faveFilms")); 
  // console.log(typeof(faveFilmsParsed)); <- converted to object
  faveFilmsParsed.splice(pos,1);
  let verifyDelete = confirm("Are you absolutely POSITIVE you want to remove this film from your list of Favorites?")
  if(verifyDelete) {
    localStorage.setItem("faveFilms", JSON.stringify(faveFilmsParsed));
    window.location.reload();  
  } 
};


function getDetails(pos){
  let array = JSON.parse(localStorage.getItem("faveFilms"));
  // console.log(array[pos].Title);
  location.replace(`/details/${pos}?title=${array[pos].Title}&released=${array[pos].Released}&director=${array[pos].Director}&rated=${array[pos].filmRating}&rating=${array[pos].Score}&src=${array[pos].Poster}&actors=${array[pos].Actors}`)
}
// editBtn.addEventListener("click", editFave);
function editFave(pos) {
  let arr2edit = JSON.parse(localStorage.getItem("faveFilms")); 
  console.log(arr2edit[pos])
  location.replace(`edit/${pos}?title=${arr2edit[pos].Title}&release=${arr2edit[pos].Released}&rating=${arr2edit[pos].filmRating}&director=${arr2edit[pos].Director}&actors=${arr2edit[pos].Actors}&score=${arr2edit[pos].Score}&poster=${arr2edit[pos].Poster}`) //pos = onclick template string above
}
if(document.getElementById('editFave'))
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