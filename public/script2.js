//***************FILM PAGE****************//

let favoriteButton = document.getElementById("favoriteButton");

  favoriteButton.addEventListener("click", ()=> {
    console.log("function uploadFave");
    let movieData = document.getElementsByTagName("span")
    console.log(movieData);
    let newMovie={
      "Title":movieData[0].innerText,
      "Rating": movieData[1].innerText,
      "Runtime": movieData[2].innerText,
      "Genre": movieData[3].innerText,
      "Director":movieData[4].innerText,
      "Actors": movieData[5].innerText,
      "Date":movieData[6].innerText,
      "Score": movieData[7].innerText,
      "Plot": movieData[8].innerText,
      "Poster": document.getElementById("poster").src,
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