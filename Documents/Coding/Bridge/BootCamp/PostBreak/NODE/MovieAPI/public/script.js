let searchButton = document.getElementById("searchButton");
let homeButton = document.getElementById("homeButton");
let resetFormButton = document.getElementById("resetForm");
let submitFormButton = document.getElementById("submitForm");


// homeButton.addEventListener("click", goHome) 
searchButton.addEventListener("click", getInput)
submitFormButton.addEventListener("click", submitForm)
submitFormButton.addEventListener("click", uploadLocal)

function getInput() {
  let userInput = document.getElementById("userInput");
  titleURL = userInput.value
  console.log(titleURL);
  location.replace(`/films/${titleURL}`)
}
function submitForm() {
  let titleInput = document.getElementById("titleInput");
  let directorInput = document.getElementById("directorInput");
  let yearInput = document.getElementById("yearInput");
}
function uploadLocal() {
  console.log("function: upload")
  localStorage.setItem()
  
}

// function goHome() {
//   location.replace("/")
// }

  