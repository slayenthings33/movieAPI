// Vista maestro obtenida a partir de el resultado obtenido de una API (se debe mostrar una imágen, un nombre y otro(s) dato(s))
// ¿Qué es una vista maestro?
// Una vista maestro es un conjunto de tarjetitas (HTML) mostradas con flex (Una cuadrícula con los elementos del fetch)
// APIS RECOMENDADAS
// https://pokeapi.co/
// https://swapi.dev/
// https://rickandmortyapi.com
// https://www.football-data.org/
// https://docs.openaq.org/

// let pokeBall = document.getElementsByClassName("pokeBall");
// let pokePic = document.getElementById("pokePic");
// let pokeAbilities = document.getElementById("pokeAbilities");
// let pokeName = document.getElementById("pokeName");


fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((response)=>
response.json()).then((pokeData) => {
    
    // console.log(pokeData)
    // pokePic.src = pokeData.sprites.front_default;
    pokeData.results.map((pokemon) => {
        //pokemon.url
        fetch(pokemon.url).then((response) => response.json()).then((pokemon)=> {
            let carta = `
                <div class=pokeBall>    
                <p id="pokeName">${pokemon.name}</p>
                <img id="pokePic" src="${pokemon.sprites.front_default}" alt="">
                <p id="pokeAbilities" src= "" ></p>
                </div>
            `;
            console.log(pokemon.abilities)
            
            
            document.getElementById("pokeContainer").innerHTML += carta;

        })
    })
})


// let carta = document.createElement("div");
// carta.classList.add('pokeBall');

// document.getElementById("pokeContainer").appendChild(carta);



// async function pokeName(response) {
//     let response = await fetch("https://pokeapi.co/api/v2/pokemon");
//     for (let i=0; i<response.length; i++) {
//     }
// }


// let name = pokeData.results[i].name;
