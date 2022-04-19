const main = document.querySelector("main")

const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const villians = paresedResponse.map(villian => villian)
    villians.forEach(villian => {
        const $villians = document.createElement("div")
        if (villian.biography.alignment === "bad") {
            $villians.classList.add("villian")
            $villians.innerHTML = `
            <h2>${villian.name}</h2>
            <img src="${villian.images.sm}" alt "Image of ${villian.name}" />
            <a href="details.html?id=${villian.id}">${villian.name}</a>
            <p>${villian.name} is know for working with ${villian.connections.groupAffiliation}</p>
            <p> Alignment: ${villian.biography.alignment}</p>
            `
            main.append($villians)
        }
    }).catch(error => {
        window.location.href = "404.html"
    })
});