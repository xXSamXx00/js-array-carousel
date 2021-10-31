const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];


const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
]

// DOM
const previewElement = document.querySelector('.preview');
const thumbsElement = document.querySelector('.thumbs');
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');


// Inizializzazione variabili
let activeItem = 0

for (let index = 0; index < items.length; index++) {
    const image_path = items[index];

    const element = `
    <div class="preview__item">
      <img src="${image_path}" alt="">
      <div class="text">
        <h2>${title[index]}</h2>
        <p>${text[index]}</p>
      </div>
    </div>`

    previewElement.insertAdjacentHTML('beforeend', element)

    const thumbImage = `
    <img class="thumb_image" src="${image_path}">`

    thumbsElement.insertAdjacentHTML('beforeend', thumbImage)
}

document.getElementsByClassName('thumb_image')[0].classList.add('activeThumb')
document.getElementsByClassName('preview__item')[activeItem].classList.add('active')

nextElement.addEventListener('click', function() {
    if (activeItem == items.length - 1) {
        activeItem = 0
    } else {
        activeItem = activeItem + 1
    }

    document.querySelector('.preview__item.active').classList.remove('active')
    document.getElementsByClassName('preview__item')[activeItem].classList.add('active')

    document.querySelector('.thumb_image.activeThumb').classList.remove('activeThumb')
    document.getElementsByClassName('thumb_image')[activeItem].classList.add('activeThumb')
})

prevElement.addEventListener('click', function() {
    if (activeItem == 0) {
        activeItem = items.length - 1
    } else {
        activeItem = activeItem - 1
    }
    document.querySelector('.preview__item.active').classList.remove('active')
    document.getElementsByClassName('preview__item')[activeItem].classList.add('active')

    document.querySelector('.thumb_image.activeThumb').classList.remove('activeThumb')
    document.getElementsByClassName('thumb_image')[activeItem].classList.add('activeThumb')
})