//function to generate a random number
//current amount of pokemon = 1025
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function generatePokemon(){

    //chooses a random pokemon using their id number
    randomPokemon = "https://pokeapi.co/api/v2/pokemon/" + String(getRandomInt(1,1025))

    try{
        const response = await fetch(randomPokemon)

        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }  
    catch(error){
        console.error(error);
    }
}