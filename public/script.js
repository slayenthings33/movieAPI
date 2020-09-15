// const express = require("express");

//**********DOM LINKING***********//

let searchButton = document.getElementById("searchButton");
let homeButton = document.getElementById("homeButton");
let resetFormButton = document.getElementById("resetForm");
let submitFormButton = document.getElementById("submitForm");
let detailsBtn = document.getElementById("detailsBtn");
let editBtn = document.getElementById("editBtn");
let deleteBtn= document.getElementById("deleteBtn");
let faveSect = document.getElementById("faveSect");


//**********SEARCH FILM***********//

if (searchButton !== null) {
  homeButton.addEventListener("click", goHome) //Button event listeners
  searchButton.addEventListener("click", getInput)
  function getInput() {   //Insert  into URL to access API
    let userInput = document.getElementById("userInput");
    titleURL = userInput.value
    console.log(titleURL);
    location.replace(`/films/${titleURL}`)
  }
}

function goHome() {  //Refresh home page
  location.replace("/")
} 

//**********DISPLAY FAVES***********//

function showFaves() {
  let faveSect = document.getElementById("faveFilmSect");
  let parsedFaves = JSON.parse(localStorage.getItem("faveFilms"))
  for(let i=0; i<parsedFaves.length; i++) {
    if(parsedFaves !== null) { 
      let faveList = `<div id="faveItem"><div id="titleRow"><b>Title: </b> ${parsedFaves[i].Title}</div> <div id="directedRow"><b>Directed by: </b>${parsedFaves[i].Director}</div> <div id="releasedRow"><b>Released: </b> ${parsedFaves[i].Released}</div> <div id="faveButns${i}"><button id="detailsBtn${i}" onlick="getDetails">Details</button><button id="editBtn${i}" onclick="editFave">Edit</button><button id="deleteBtn${i}" onclick="deleteFilm(${i})">Delete</button></div></div>`;
      faveSect.innerHTML += faveList ;
    } else {
      faveSect.innerHTML = "";
    }
  }
}
showFaves();

//**********BUTTON FUNCTIONS***********//
// deleteBtn.addEventListener("click", eraseFilm);

function deleteFilm(pos) {
  // console.log(typeof(localStorage.getItem("faveFilms"))); <stored as string
  let faveFilmsParsed = JSON.parse(localStorage.getItem("faveFilms")); 
  // console.log(typeof(faveFilmsParsed)); <- converted to object
  faveFilmsParsed.splice(pos,1);
  let verifyDelete = confirm("Are you sure you want to remove this film from your list of Favorites?")
  if(verifyDelete) {
    localStorage.setItem("faveFilms", JSON.stringify(faveFilmsParsed));
    window.location.reload();  
  }
}


// detailsBtn.addEventListener("click", getDetails);
function getDetails() {
  if(detailsBtn !== null) {
    console.log("function getDetails")
  }
}

// editBtn.addEventListener("click", editFave);
function editFave() {
  if(editBtn !== null) {
    console.log("function editFave")

  }
}