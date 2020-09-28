let searchButton = document.getElementById('searchButton');
let createButton = document.getElementById('createButton');
//**********SEARCH FILM***********//
if(searchButton) {
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

  fetch('/films/deletefilm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(eraseFilm)
  })
    .then((respuesta) => {
      console.log(respuesta)
      location.replace("/")
    })
    .catch((e) => {
      console.log("error" + e)
    });
};

// SEARCH FILM 
function getDetails(title) {
  let filmURL = `/films/filmdetails/${title}`;
  location.replace(filmURL)
}

function editFilmPage(title) {
  let urlEdit = `films/editFilm/${title}`;
  location.replace(urlEdit)
}

// function updateFilm(title) {
//   console.log("function uploadFave");
//   let movieData = document.getElementsByTagName("span")
//   console.log(movieData);
//   let newMovie = {
//     "Title": movieData[0].value,
//     "Rating": movieData[1].value,
//     "Runtime": movieData[2].value,
//     "Genre": movieData[3].value,
//     "Director": movieData[4].value,
//     "Actors": movieData[5].value,
//     "Date": movieData[6].value,
//     "Score": movieData[7].value,
//     "Plot": movieData[8].value,
//     "Poster": document.getElementById("poster").src,
//   }
// }

if (document.getElementById('editFilm')) {

  document.getElementById('editFilm').addEventListener('click', (e) => {
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


