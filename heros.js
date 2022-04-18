const main = document.querySelector("main")

const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const superHeros = paresedResponse.map(hero => hero)
    superHeros.forEach(hero => {
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
    }).catch(redirect)
});

function redirect() {
    window.location.href = "404.html"
}