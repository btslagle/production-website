$main = document.querySelector("main")

function superDetails(hero) {
    const $div = document.createElement("div")

    $div.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.images.md}">
        <ul class ="biography">
        <li>Full Name: ${hero.biography.fullName}</li>
        <li>Alter Egos: ${hero.biography.alterEgos}</li>
        <li>Aliases: ${hero.biography.aliases}</li>
        <li>First Apperance: ${hero.biography.firstApperance}</li>
        <li>Alignment: ${hero.biography.alignment}</li>
        </ul>
        <br>
        <ul class= "power">
        <li>Intelligence: ${hero.powerstats.intelligence}</li>
        <li>Strength: ${hero.powerstats.strength}</li>
        <li>Speed: ${hero.powerstats.speed}</li>
        <li>Durability: ${hero.powerstats.durability}</li>
        <li>Power: ${hero.powerstats.power}</li>
        <li>Combaat${hero.powerstats.combat}</li>
        </ul>


    `
    $main.append($div)
}


const queryString = new URLSearchParams(window.location.search)
fetch(`https://akabab.github.io/superhero-api/api/id/${queryString.get("id")}.json`)
    .then((response) => response.json())
    .then((parsedResponse) => {
        const details = parsedResponse
        superDetails(details)
    })