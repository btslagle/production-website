const $form = document.querySelector("form")
const $main = document.querySelector("main")


function getFavoriteSuper(favoriteSuper) {
    const $div = document.createElement("div")
    $div.classList.add("favorite")
    div.innerHTML = ` Your favorite Super is ${favoriteSuper}
    <a href="details.html?id=${hero.id}">${hero.name}</a>
    `
    $main.append($div)
}
$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const favoriteSuper = formData.get("favorite-super")
    console.log(favoriteSuper);
    return favoriteSuper
})

const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => response.json())
    .then(paresedResponse => {
        console.log(paresedResponse)
        getFavoriteSuper(favoriteSuper)
    })