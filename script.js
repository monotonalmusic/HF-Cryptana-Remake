//burger

function toggleMenu() {
    let menu = document.querySelector('.menu');
    let menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('transform');
    menu.classList.toggle('active');
    console.log('Menu toggled');
};


//slider

let slider = document.querySelector('.slider-slide');
let sliderHeader = document.querySelector('#overlay-header');
let sliderPara = document.querySelector('#overlay-text');

let sliderArray = [
    "/assets/slider01.jpg",
    "/assets/slider03.jpg"
];

let sliderTextHeader = [
    "Kontakt din ekspert",
    "Investere i din fremtid"
];

let sliderTextPara = [
    "Cryptera Invest har døgnservice, så du kan altid kontakte os, hvis du har spørgsmål eller brug for hjælp.",
    "Bruge en sikker og pålidelig platform til at investere i din fremtid."
];

let i = 1;

function changeImage() {
    slider.src = sliderArray[i];
    sliderHeader.innerHTML = sliderTextHeader[i];
    sliderPara.innerHTML = sliderTextPara[i];
    i++;
    if (i >= sliderArray.length) {
        i = 0;
    }
};

setInterval(changeImage, 5000);