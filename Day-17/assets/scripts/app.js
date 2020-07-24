const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];


const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop')
const togglebackdrop = () => {
    backdrop.classList.toggle('visible');  

};

const togglemoviemodal = () => {
    addMovieModal.classList.toggle('visible');

    togglebackdrop();

};

const backdropclickhandler = () =>{
togglemoviemodal();

};
startAddMovieButton.addEventListener('click' , togglemoviemodal);
backdrop.addEventListener('click' ,  backdropclickhandler);