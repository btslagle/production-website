const main = document.querySelector("main")
const $search = document.querySelector(".search-wrapper")

const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url)
    .then(response => response.json())
    .then(paresedResponse => {
        return paresedResponse.map(hero => hero)
            .forEach(hero => {
                const $heros = document.createElement("div")
                if (hero.biography.alignment === "good") {
                    $heros.classList.add("hero")
                    $heros.innerHTML = `
                    <h2>${hero.name}</h2>
                    <img src="${hero.images.sm}" alt "Image of ${hero.name}" />
                    <a href="details.html?id=${hero.id}">${hero.name}</a>
                    <p>${hero.name} is know for working with ${hero.connections.groupAffiliation}</p>
                    <p> Alignment: ${hero.biography.alignment}</p>
                    `
                    main.append($heros)
                }
            }).catch((error => {
                window.location.href = "404.html"
            }))
    })