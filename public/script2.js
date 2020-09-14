//***************FILM PAGE****************//

let favoriteButton = document.getElementById("favoriteButton");
// import {importantData} from './script';
// let importantData = importantData();

if(favoriteButton !== null) {
  favoriteButton.addEventListener("click", uploadLocal)
function uploadLocal() {
    let movieName=document.getElementById("movie")
    let releaseDate=document.getElementById("released")
    let director=document.getElementById("director")
    let rating= document.getElementById("rating")
    let poster= document.getElementById("poster")
    // console.log(movieName.innerText);
    let array = []; //Empty array to add films
    let newMovie = {  //Create JSON template 
      Title: movieName.innerText,
      Director: director.innerText,
      Released: releaseDate.innerText,
      Rating: rating.innerText,
      Poster: poster.src
    }
    if(localStorage.getItem("faveFilms") !== null) { //if local is not empty -> parse our stringified JSON and save into array 
      array = JSON.parse(localStorage.getItem("faveFilms"))
    } else {
      array= []; // if local is empty, our array is vacio
    }
    array.push(newMovie); //add our JSON to array
    localStorage.setItem("faveFilms",JSON.stringify(array)) //save our array to local
    }
}
