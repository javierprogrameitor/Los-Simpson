
let elementImage = document.getElementById("imgPerson");
let elementImage1 = document.getElementById("imgPerson1");
let elementImage2 = document.getElementById("imgPerson2");
let elementImage3 = document.getElementById("imgPerson3");
let elementImage4 = document.getElementById("imgPerson4");
let elementImage5 = document.getElementById("imgPerson5");

let elementText = document.getElementById("couteHomer");
let elementText1 = document.getElementById("couteMarge");
let elementText2 = document.getElementById("couteBart");
let elementText3 = document.getElementById("couteLisa");
let elementText4 = document.getElementById("couteOtto");
let elementText5 = document.getElementById("couteMilhouse");

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#navbarBasicExample');

    const homerLink = document.getElementById('homerLink');
    const margeLink = document.getElementById('margeLink');
    const bartLink = document.getElementById('bartLink');
    const lisaLink = document.getElementById('lisaLink');
    const ottoLink = document.getElementById('ottoLink');
    const milhouseLink = document.getElementById('milhouseLink');

    let notificationHomer = document.getElementById('notificationHomer');
    let notificationMarge = document.getElementById('notificationMarge');
    let notificationBart = document.getElementById('notificationBart');
    let notificationLisa = document.getElementById('notificationLisa');
    let notificationOtto = document.getElementById('notificationOtto');
    let notificationMilhouse = document.getElementById('notificationMilhouse');

    let deleteHomer = document.getElementById('deleteHomer');
    let deleteMarge = document.getElementById('deleteMarge');
    let deleteBart = document.getElementById('deleteBart');
    let deleteLisa = document.getElementById('deleteLisa');
    let deleteOtto = document.getElementById('deleteOtto');
    let deleteMilhouse = document.getElementById('deleteMilhouse');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });


    homerLink.addEventListener('click', () => {
        notificationHomer.style.display = 'block';
        cuoteHomer();
    });
    margeLink.addEventListener('click', () => {
        notificationMarge.style.display = 'block';
        cuoteMarge();
    });
    bartLink.addEventListener('click', () => {
        notificationBart.style.display = 'block';
        couteBart();
    });
    lisaLink.addEventListener('click', () => {
        notificationLisa.style.display = 'block';
        couteLisa();
    });
    ottoLink.addEventListener('click', () => {
        notificationOtto.style.display = 'block';
        couteOtto();
    })
    milhouseLink.addEventListener('click', () => {
        notificationMilhouse.style.display = 'block';
        couteMilhouse();
    })


    deleteHomer.addEventListener('click', () => {
        notificationHomer.style.display = 'none';
    });
    deleteMarge.addEventListener('click', () => {
        notificationMarge.style.display = 'none';
    });
    deleteBart.addEventListener('click', () => {
        notificationBart.style.display = 'none';
    });
    deleteLisa.addEventListener('click', () => {
        notificationLisa.style.display = 'none';
    });
    deleteOtto.addEventListener('click', () => {
        notificationOtto.style.display = 'none';
    })
    deleteMilhouse.addEventListener('click', () => {
        notificationMilhouse.style.display = 'none';
    })


});

const coutesAPI = `https://thesimpsonsquoteapi.glitch.me/quotes`;
const simpsonAPI0 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=homer`;



function getPerson() {

    fetch(simpsonAPI0)
        .then(response => response.json())
        .then(data => {

            elementImage.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

function cuoteHomer() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {

            elementText.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}


const simpsonAPI1 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=marge`;
function getPerson1() {

    fetch(simpsonAPI1)
        .then(response => response.json())
        .then(data => {

            elementImage1.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

function cuoteMarge() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {

            elementText1.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}




const simpsonAPI2 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=bart`;
function getPerson2() {

    fetch(simpsonAPI2)
        .then(response => response.json())
        .then(data => {

            elementImage2.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}


function couteBart() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {

            elementText2.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}




const simpsonAPI3 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=lisa`;
function getPerson3() {

    fetch(simpsonAPI3)
        .then(response => response.json())
        .then(data => {

            elementImage3.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

function couteLisa() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {

            elementText3.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}


const simpsonAPI4 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=Otto`;
function getPerson4() {

    fetch(simpsonAPI4)
        .then(response => response.json())
        .then(data => {

            elementImage4.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

function couteOtto() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {
            elementText4.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}


const simpsonAPI5 = `https://thesimpsonsquoteapi.glitch.me/quotes?character=Milhouse Van Houten`;
function getPerson5() {

    fetch(simpsonAPI5)
        .then(response => response.json())
        .then(data => {

            elementImage5.src = data[0].image;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

function couteMilhouse() {

    fetch(coutesAPI)
        .then(response => response.json())
        .then(data => {
            elementText5.innerHTML = data[0].quote;
        })
        .catch(error => console.error("Error fetching Simpsons:", error));
}

window.onload = function () {
    getPerson();
    getPerson1();
    getPerson2();
    getPerson3();
    getPerson4();
    getPerson5();
};

