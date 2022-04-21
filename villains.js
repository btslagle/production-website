const main = document.querySelector("main")

const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const villains = paresedResponse.map(villain => villain)
    villains.forEach(villain => {
        const $villains = document.createElement("div")
        if (villain.biography.alignment === "bad") {
            $villains.classList.add("villain")
            $villains.innerHTML = `
            <h2>${villain.name}</h2>
            <img src="${villain.images.sm}" alt "Image of ${villain.name}" />
            <a class = "black" href="details.html?id=${villain.id}">${villain.name}</a>
            <p>${villain.name} is know for working with ${villain.connections.groupAffiliation}</p>
            <p> Alignment: ${villain.biography.alignment}</p>
            `
            main.append($villains)
        }
    }).catch(error => {
        window.location.href = "404.html"
    })
});