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
            paresedResponse.find(response => response.name === favoriteSuper)
            getFavoriteSuper(favoriteSuper)
            const div = document.createElement("div")
            $div.classList.add("favorite")
            div.innerHTML = ` <h2> Your favorite Super is? </h2>
            `
            $main.append(div)
        })
}






