let searchButton = document.getElementById("searchButton");
let homeButton = document.getlElementById("homeButton");
let resetForm = document.getElementById("resetForm");
let submitForm = document.getElementById("submitForm");


// homeButton.addEventListener("click", goHome) 
searchButton.addEventListener("click", getInput)
submitForm.addEventListener("click", submitForm)

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

// function goHome() {
//   location.replace("/")
// }

  