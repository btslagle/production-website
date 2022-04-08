const houses = document.querySelector(".houses")
const main = document.querySelector("main")

const url = ("https://anapioficeandfire.com/api/houses")

fetch(url).then(response => {
    return response.json()
}).then(paresedResponse => {
    const houses = paresedResponse.map(result => result)
    console.log(houses)
    houses.forEach(house => {
        const $banner = document.createElement("div")
        $banner.classList.add("banner")
        $banner.innerHTML = `
                    <h2>${house.name}
                    <img src="" alt "Image of ${house.name}" />
                    <p>${house.name} is lead by ${house.heir},${house.title} in ${house.region}, in realm ${house.seats}<p>
                    `
        main.append($banner)
    });
});