const container = document.getElementById('container');

for(let i=1; i < 257; i++) {
    let divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grids');
};

const blocs = document.querySelectorAll('div.grids');

// div.style.backgroundColor = 'black';

for (const bloc of blocs) {
    bloc.addEventListener('mouseover', function colorBackground(e) {
    bloc.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
});
}

const prompt = document.getElementById('modal');
const generateButtton = document.getElementById('generate');

generateButtton.addEventListener('click', function promptUser() {

})