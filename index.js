const $form = document.querySelector("form")
const $input = document.querySelector("#search")
const $submit = document.querySelector(".submit")
const $main = document.querySelector("main")


function getFavoriteSuper(heroOrVillian) {
    const $div = document.createElement("div")
    div.innerHTML = ` Your favorite Super is ${favoriteSuper.name}
    <a 
    `
}



$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const favoriteSuper = formData.get("favorite-super")
    $submit.value = "Thank You!"
    localStorage.setItem("favorite-super", favoriteSuper)

})

/*const url = ("https://akabab.github.io/superhero-api/api/all.json")
fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const superHeroOrVillian = paresedResponse.map(heroOrVillian => heroOrVillian)
})*/