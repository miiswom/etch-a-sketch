const container = document.getElementById('container');

for(let i=1; i < 257; i++) {
    let divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grids');
};

const blocs = document.querySelectorAll('div.grids');

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

for (const bloc of blocs) {
    bloc.addEventListener('mouseover', function colorBackground(e) {
    bloc.style.backgroundColor = randColor();
});
}