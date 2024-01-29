//burger

function toggleMenu() {
    let menu = document.querySelector('.menu');
    let menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('transform');
    menu.classList.toggle('active');
    console.log('Menu toggled');
};

//gallery

function GalleryItem(id, src, alt, buttonText,boxText){
    this.id = id;
    this.src = src;
    this.alt = alt;
    this.buttonText = buttonText;
    this.boxText = boxText;
}

let box1 = new GalleryItem('box-1-div', 
'/assets/icons8-wallet-96.png', 
'', 
'Investering', 
'Investering er en måde at tjene penge på, ved at købe aktier i et firma, og derefter sælge dem igen, når de er steget i værdi.');

let box2 = new GalleryItem('box-2-div', 
'/assets/icons8-euro-96.png', 
'', 
'Køb valuta', 
'Køb valuta, og se kurserne live. Vi har alle valutaer, og du kan købe dem med det samme.');

let box3 = new GalleryItem('box-3-div', 
'/assets/icons8-crypto-96.png', 
'', 
'Krypto', 
'Krypto er fremtiden, investere nu.');

let box4 = new GalleryItem('box-4-div', 
'/assets/icons8-stocks-96.png', 
'', 
'Se kurser', 
'Se kurser, live, på aktier, valuta og kryptovaluta.');

let boxes = [box1, box2, box3, box4];

let middleDiv = document.querySelector('#middle-div');

boxes.forEach(box => {
    let newBox = document.createElement('div');
    newBox.id = box.id;
    newBox.classList.add('box');
    newBox.innerHTML = 
    `
        <div class="top-box">
            <img src="${box.src}" alt="${box.alt} class="box-icon">
            <button class="box-button pretty-button">${box.buttonText}
        </div>
        <p class="box-text">${box.boxText}</p>
    `;
    middleDiv.append(newBox);
});


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

//form

let form = document.getElementById('subscription-form');
let subHeader = document.getElementById('sub-header');


console.log('Adding event listener to form:', form);

form.addEventListener('submit', (e) => {
    console.log('Form submitted');
    e.preventDefault();
    let nombre = document.getElementById('fuldenavn').value;
    let email = document.getElementById('email').value;
    console.log('Nombre:', nombre);
    form.classList.add('hidden');
    subHeader.innerHTML = `Thank you for messaging us ${nombre}! An email has been sent to ${email}`;
});