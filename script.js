// CREATE THE GRID

const container = document.getElementById('container');

for(let i=1; i < 257; i++) {
    let divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grids');
};

const blocs = document.querySelectorAll('div.grids');

// COLOR IN BLACK

const blackButton = document.getElementById('black-button');

blackButton.addEventListener('click', colorInBlack);

function colorInBlack() {
    for (const bloc of blocs) {
        bloc.addEventListener('mouseover', function colorBackground(e) {
        bloc.style.backgroundColor = 'black';
    })};
};

// COLOR IN PSYCHEDELIC

const psychedelicButton = document.getElementById('psychedelic-button');

psychedelicButton.addEventListener('click', colorInPsychedelic);

function colorInPsychedelic() {
    for (const bloc of blocs) {
        bloc.addEventListener('mouseover', function colorBackground(e) {
        bloc.style.backgroundColor = randomColor();
    })};
};

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};


// COLOR IN WARM

const warmButton = document.getElementById('warm-button');

warmButton.addEventListener('click', colorInWarm);

function colorInWarm() {
    for (const bloc of blocs) {
        bloc.addEventListener('mouseover', function colorBackground(e) {
        bloc.style.backgroundColor = warmColor();
    })};
};

function warmColor() {
    return "rgb(" + (Math.floor(Math.random() * 250)) + ", 0, 0)";
};

// COLOR IN COLD

const coldButton = document.getElementById('cold-button');

coldButton.addEventListener('click', colorInCold);

function colorInCold() {
    for (const bloc of blocs) {
        bloc.addEventListener('mouseover', function colorBackground(e) {
        bloc.style.backgroundColor = coldColor();
    })};
};

function coldColor() {
    return "rgb(0, 0, " + (Math.floor(Math.random() * 250)) + ")";
};

// ERASE BUTTON

const eraseButton = document.getElementById('erase-button');

eraseButton.addEventListener('click', eraseColor);

function eraseColor() {
    for (const bloc of blocs) {
        bloc.addEventListener('mouseover', function colorBackground(e) {
        bloc.style.backgroundColor = 'white';
    })};
};

// CLEAR BUTTON

const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', clearAll);

function clearAll() {
    for (const bloc of blocs) {
        bloc.style.backgroundColor = 'white';
    }};

