const houses = document.querySelector(".houses")
const main = document.querySelector("main")




const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const superHeros = paresedResponse.map(hero => hero)

    superHeros.forEach(hero => {
        const $heros = document.createElement("div")
        $heros.classList.add("hero")
        $heros.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.images.sm}" alt "Image of ${hero.name}" />
            <p>${hero.name} is know for working with ${hero.connections.groupAffiliation}</p>
            <p> Alignment: ${hero.biography.alignment}</p>
            
            `
        main.append($heros)

        if (hero.biography.alignment === "bad") {
            $heros.classList.replace("hero", "villian")


        }

    });


});