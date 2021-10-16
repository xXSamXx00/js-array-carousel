// Inserisco tutti gli array
const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const titles = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise']
const texts = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.', 'Lorem ipsum', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam']
// Prendo da Html gli elementi
const buttonSlideUp = document.getElementById("slide_up")
const buttonSlideDown = document.getElementById("slide_down")
const heroImage = document.querySelector(".hero_image>img")
const sweden = document.getElementById("svezia")
sweden
const itemElement = document.querySelector(".items")
// 
for (let i = 0; i < items.length; i++) {
    const item = `<img src="${items[i]}">`;
    itemElement.innerHTML += item
}

let plusOne = 0
heroImage.setAttribute("src", `./${items[0]}`)

buttonSlideUp.addEventListener("click", function() {
    heroImage.setAttribute("src", `./${items[++plusOne]}`) 

})

buttonSlideDown.addEventListener("click", function() {
    heroImage.setAttribute("src", `./${items[--plusOne]}`)
})
