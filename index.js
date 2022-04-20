const $form = document.querySelector("form")
const $main = document.querySelector("main")


$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const favoriteSuper = formData.get("favorite-super")
    getFavoriteSuper(favoriteSuper);
})


function getFavoriteSuper(favoriteSuper) {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(response => response.json())
        .then(paresedResponse => {
            const favSuper = paresedResponse.map(response => response).find(response => response.name === `${favoriteSuper}`)
            const div = document.createElement("div")
            div.classList.add("favorite")
            div.innerHTML = ` <h2> Your favorite Super is ${favSuper.name}! </h2>
            <img src = ${favSuper.images.md} alt = ${favSuper.name} />
            `

            $main.append(div)
        }).catch(error => {
            window.location.href = "404.html"
        })
}