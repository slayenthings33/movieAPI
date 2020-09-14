// const express = require("express");

//**********DOM LINKING***********//

let searchButton = document.getElementById("searchButton");
let homeButton = document.getElementById("homeButton");
let resetFormButton = document.getElementById("resetForm");
let submitFormButton = document.getElementById("submitForm");


  if (searchButton !== null) {
    homeButton.addEventListener("click", goHome) //Button event listeners
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

function showFaves() {
  let faveSect = document.getElementById("faveFilmSect");
  let parsedFaves = JSON.parse(localStorage.getItem("faveFilms"))
  for(let i=0; i<parsedFaves.length; i++) {
      if(parsedFaves !== null) { 
      let faveList = `<div id="faveItem"><div id="titleRow"><b>Title: </b> ${parsedFaves[i].Title}</div> <div id="directedRow"><b>Directed by: </b>${parsedFaves[i].Director}</div> <div id="releasedRow"><b>Released: </b> ${parsedFaves[i].Released}</div> <div id="faveButns${[i]}"><button id="detailsBtn${[i]}">Details</button><button id="editBtn${[i]}">Edit</button><button id="eraseBtn${[i]}">Erase</button></div></div>`;
      faveSect.innerHTML += faveList ;
    } else {
      faveSect.innerHTML = "";
    }
  }
}

showFaves();

