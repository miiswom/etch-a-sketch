const container = document.getElementById('container');

for(let i=1; i < 257; i++) {
    const bloc = document.createElement('div');
    container.appendChild(bloc);
    bloc.classList.add('grids');
}