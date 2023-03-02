let pokemon = [
    { 
        number:"001",
        name:"Bulbasaur", 
        type:["grass", "poison"]
    }, 
    {
        number:"002",
        name:"Ivysaur", 
        type:["grass", "poison"] 
    }, 
    {
        number:"003",
        name:"Venusaur", 
        type:["grass", "poison"]
    }, 
    { 
        number:"004",
        name:"Charmander", 
        type:["fire"]
    }, 
    {
        number:"005",
        name:"Charmeleon", 
        type:["fire"]
    },
    { 
        number:"006",
        name:"Charizard", 
        type:["fire", "flying"]
    }, 
    {
        number:"007",
        name:"Squirtle", 
        type:["water"] 
    }, 
    {
        number:"008",
        name:"Wartortle", 
        type:["water"]
    },
    { 
        number:"009",
        name:"Blastoise", 
        type:["water"]
    }, 
    {
        number:"010",
        name:"Caterpie", 
        type:["bug"] 
    }, 
    {
        number:"011",
        name:"Metapod", 
        type:["bug"]
    }, 
    { 
        number:"012",
        name:"Butterfree", 
        type:["bug", "flying"]
    }, 
    {
        number:"013",
        name:"Weedle", 
        type:["bug", "poison"]
    },
    { 
        number:"014",
        name:"Kakuna", 
        type:["bug", "poison"]
    }, 
    {
        number:"015",
        name:"Beedrill", 
        type:["bug", "poison"]
    }, 
    {
        number:"016",
        name:"Pidgey", 
        type:["normal", "flying"]
    },
    { 
        number:"017",
        name:"Pidgeotto", 
        type:["normal", "flying"]
    }, 
    {
        number:"018",
        name:"Pidgeot", 
        type:["normal", "flying"] 
    }, 
    {
        number:"019",
        name:"Rattata", 
        type:["normal"]
    }, 
    { 
        number:"020",
        name:"Raticate", 
        type:["normal"]
    }, 
    {
        number:"021",
        name:"Spearrow", 
        type:["normal", "flying"]
    },
    { 
        number:"022",
        name:"Fearow", 
        type:["normal", "flying"]
    }, 
    {
        number:"023",
        name:"Ekans", 
        type:["poison"] 
    }, 
    {
        number:"024",
        name:"Arbok", 
        type:["poison"]
    },
    { 
        number:"025",
        name:"Pikachu", 
        type:["electric"]
    }, 
    {
        number:"026",
        name:"Raichu", 
        type:["electric"] 
    }, 
    {
        number:"027",
        name:"Sandshrew", 
        type:["ground"]
    }, 
    { 
        number:"028",
        name:"Sandslash", 
        type:["ground"]
    }, 
    {
        number:"029",
        name:"Nidoran", 
        type:["poison"]
    },
    { 
        number:"030",
        name:"Nidorina", 
        type:["poison"]
    }, 
    {
        number:"031",
        name:"Nidoqueen", 
        type:["poison", "ground"]
    }, 
    {
        number:"032",
        name:"Nidoran", 
        type:["poison"]
    }
];

function pintarPokedex(){
    var constructorPokemon = "";
    var result = "";

    for(var i=0; i<pokemon.length; i++){
        constructorPokemon +=   "<div class='pokemon'>";
        constructorPokemon +=       "<div class='photo " + pokemon[i].type[0] + "'>" + "<img src='photos/" + pokemon[i].number + ".png'>" + "</div>";
        constructorPokemon +=       "<div class='info'>";
        constructorPokemon +=           "<h6>" + pokemon[i].number + "</h6>";
        constructorPokemon +=           "<h4>" + pokemon[i].name + "</h4>";

        // Inicia constructor de lista de tipos
        constructorPokemon +=           "<div class='type-list'>";

        for(var j=0; j<pokemon[i].type.length; j++){
            constructorPokemon += "<div class='type " + pokemon[i].type[j] + "'>" + pokemon[i].type[j] + "</div>";
        }

        constructorPokemon +=           "</div>";
        // Termina constructor de lista de tipos

        constructorPokemon +=       "</div>";
        constructorPokemon +=   "</div>";
    }

    console.log(constructorPokemon);

    result = constructorPokemon;

    document.getElementById("pokemonList").innerHTML = result;
}