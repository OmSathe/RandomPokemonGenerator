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

        //getting the info for infocard
        const pokemonName = data.name;
        const pokemonTypings = data.types;
        
        //string which will be comma seperated with the pokemon typings
        let pokemonTyping = "Type(s): ";

        if (pokemonTypings.length == 2){
            pokemonTyping += pokemonTypings[0].type.name.charAt(0).toUpperCase() + pokemonTypings[0].type.name.slice(1) + ", " + pokemonTypings[1].type.name.charAt(0).toUpperCase() + pokemonTypings[1].type.name.slice(1);
        }
        else {
            pokemonTyping += pokemonTypings[0].type.name.charAt(0).toUpperCase() + pokemonTypings[0].type.name.slice(1);
        }
        
        //updates the text content of the paragraph in the html
        document.getElementById("pokemonName").textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        document.getElementById("pokemonTyping").textContent = pokemonTyping;

        //changes visibility of info card
        const infoCard = document.getElementById("infoCard");
        infoCard.classList.remove("hidden");

    }  
    catch(error){
        console.error(error);
    }
}

async function generatePokemonTeam(){
    //function creates a team of 6 pokemon
    try{
        //loops to add a random pokemon into the team
        for (let i = 0; i < 6; i++) {
            randomPokemon = "https://pokeapi.co/api/v2/pokemon/" + String(getRandomInt(1,1025))

            const response = await fetch(randomPokemon)

            if(!response.ok){
                throw new Error("could not fetch resource");
            }

            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            //this line below will get each id from 1-6
            const imgElement = document.getElementById(`pokemonImg${i + 1}`);

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";

            //getting the info for infocard
            const pokemonName = data.name;
            const pokemonTypings = data.types;

            //string which will be comma seperated with the pokemon typings
            let pokemonTyping = "Type(s): ";

            if (pokemonTypings.length == 2){
                pokemonTyping += pokemonTypings[0].type.name.charAt(0).toUpperCase() + pokemonTypings[0].type.name.slice(1) + ", " + pokemonTypings[1].type.name.charAt(0).toUpperCase() + pokemonTypings[1].type.name.slice(1);
            }
            else {
                pokemonTyping += pokemonTypings[0].type.name.charAt(0).toUpperCase() + pokemonTypings[0].type.name.slice(1);
            }

            //updates the text content of the paragraph in the html
            document.getElementById(`pokemonName${i + 1}`).textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            document.getElementById(`pokemonTyping${i + 1}`).textContent = pokemonTyping;

            //changes visibility of info card
            const infoCard = document.getElementById(`infoCard${i + 1}`);
            infoCard.classList.remove("hidden");
        }
    }
    catch(error){
        console.error(error);
    }
}