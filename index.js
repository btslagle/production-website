const $form = document.querySelector("form")
const $main = document.querySelector("main")
const reset = document.querySelector("reset")




$form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let favoriteSuper = formData.get("favorite-super")
    getFavoriteSuper(favoriteSuper);
})


function getFavoriteSuper(favoriteSuper) {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(response => response.json())
        .then(paresedResponse => {
            const favSuper = paresedResponse.map(response => response).find(response => response.name === `${favoriteSuper}`)
            const div = document.createElement("div")
            if (favSuper.biography.alignment === "good") {
                div.classList.add("hero")
            }
            if (favSuper.biography.alignment === "bad") {
                div.classList.add("villain")
            }
            div.innerHTML = ` 
                <h2> Your favorite Super is ${favSuper.name}! </h2>
                <img src = ${favSuper.images.md} alt = ${favSuper.name} />
                <ul class ="biography">
                <li>Full Name: ${favSuper.biography.fullName}</li>
                <li>Alter Egos: ${favSuper.biography.alterEgos}</li>
                <li>Aliases: ${favSuper.biography.aliases}</li>
                <li>First Apperance: ${favSuper.biography.firstApperance}</li>
                <li>Alignment: ${favSuper.biography.alignment}</li>
                <li>Origin: ${favSuper.biography.placeofBirth}</li>
                </ul>
                <br>
                <ul class= "power">
                <li>Intelligence: ${favSuper.powerstats.intelligence}</li>
                <li>Strength: ${favSuper.powerstats.strength}</li>
                <li>Speed: ${favSuper.powerstats.speed}</li>
                <li>Durability: ${favSuper.powerstats.durability}</li>
                <li>Power: ${favSuper.powerstats.power}</li>
                <li>Combat: ${favSuper.powerstats.combat}</li>
                </ul>
                `
            $main.append(div)
        }).catch(error => {
            window.location.href = "404.html"
        })
}