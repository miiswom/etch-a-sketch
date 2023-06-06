const container = document.getElementById('container');

for(let i=1; i < 257; i++) {
    let divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grids');
};

const blocs = document.querySelectorAll('div.grids');

// div.style.backgroundColor = 'black';

for (const bloc of blocs) {
    bloc.addEventListener('mouseover', function colorBackground() {
    bloc.style.backgroundColor = 'black';
});

}