// Inserisco tutti gli array
const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const titles = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise']
const texts = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.', 'Lorem ipsum', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam']
// Gli unisco con spread
const itemsTitlesTexts = [...items, ...titles, ...texts]
// Prendo da Html gli elementi
const heroImage = document.querySelector(".hero_image")
const buttonSlideUp = document.getElementById("slide_up")
const buttonSlideDown = document.getElementById("slide_down")
//  
buttonSlideUp.addEventListener("click", function() {
    for (let i = 0; i < itemsTitlesTexts.length; i++) {
        const elements = itemsTitlesTexts[i];
        console.log(elements);
    }

})

buttonSlideDown.addEventListener("click", function() {

})
