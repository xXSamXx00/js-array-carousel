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
const titleElement = document.getElementById("title")
const textElement = document.getElementById("text")
// 
for (let i = 0; i < items.length; i++) {
    const item = `<img src="${items[i]}">`;
    itemElement.innerHTML += item
}

document.querySelectorAll(".items")[0].classList.add("select_image")
document

let plusOne = 0
heroImage.setAttribute("src", `./${items[0]}`)


buttonSlideUp.addEventListener("click", function() {
    if (plusOne == 0) {
        plusOne = items.length - 1
    } else {
        plusOne = plusOne - 1
    }

    heroImage.setAttribute("src", `./${items[plusOne]}`)
    
    document.querySelector(".items.select_image").classList.remove("select_image")
    document.querySelectorAll(".items")[plusOne].classList.add("select_image")
})

buttonSlideDown.addEventListener("click", function() {
    if (plusOne == items.length - 1) {
        plusOne = 0
    } else {
        plusOne = plusOne + 1
    }
    
    heroImage.setAttribute("src", `./${items[plusOne]}`)



})