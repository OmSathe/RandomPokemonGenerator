fetch("https://pokeapi.co/api/v2/pokemon/decidueye")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error(error));