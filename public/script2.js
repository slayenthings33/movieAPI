//***************FILM PAGE****************//

let favoriteButton = document.getElementById("favoriteButton");
// import {importantData} from './script';
// let importantData = importantData();

  favoriteButton.addEventListener("click", ()=> {
  console.log("function uploadData");
  let movieData = document.getElementsByTagName("span")
  let newMovie={
    "Poster": document.getElementById("poster").src,
    "Title":movieData[0].innerText,
    "Rating": movieData[1].innerText,
    "Director":movieData[2].innerText,
    "Actors": movieData[3].innerText,
    "Plot": movieData[4].innerText,
    "Date":movieData[5].innerText,
    "Score": movieData[6].innerText,
  }
  fetch('/films/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'},
    body:JSON.stringify(newMovie)
      })
      .then((response)=>{
        console.log("Data uploaded successfully!")
        location.replace("/");
        console.log(response)
      })
    .catch((e)=>{
      console.log("error "+e)
      })});