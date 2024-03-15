'use strict';

const images = [
    { 'id': '1', 'url':'./src/Mugiwaras.jpg' },
    { 'id': '2', 'url':'./src/Kaido vs Luffy.jpeg' },
    { 'id': '3', 'url':'./src/Luffy Gear 5.jpeg' },
    { 'id': '4', 'url':'./src/Roger vs Barba Branca.jpg' },
    { 'id': '5', 'url':'./src/Roronoa Zoro.jpeg' },
    { 'id': '6', 'url':'./src/Yonkous.jpeg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        const fileName = image.url.split('/').pop().split('.')[0];
        imgElement.alt = fileName;
        
        const divElement = document.createElement('div');
        divElement.classList.add('item');
        divElement.appendChild(imgElement);
        
        container.appendChild(divElement);
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
