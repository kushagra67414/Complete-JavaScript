const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];


const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop')

const cancelbutton = document.querySelector('.btn--passive')
const confirmbutton = cancelbutton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entrytextsection = document.getElementById('entry-text');
const movies = [];
 
const updateui = () =>{
if(movies.length === 0 ){

entrytextsection.style.display = 'block';
}else {

    entrytextsection.style.display = 'none';

}

};
const deleteMoviehandler = (movieID) =>{
    let  identifyindex = 0;
    for(const movie of movies){
        if(movie.id == movieID){
break;

        }
        identifyindex++;
    }
movies.splice(identifyindex , 1);
const listroot = document.getElementById('movie-list');
// listroot.children[identifyindex].remove();
listroot.removeChild(listroot.children[identifyindex]);

};

const rendernewmovieElement = (id , title , imageurl , rating) =>{

    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class = "movie-element__image">
    <img src="${imageurl}" alt = "${title}">
    </div>
    <div class = "movie-element__info"><h2> ${title} </h2>
    <p> ${rating}/5 stars</p>
    </div>
    `;

    
    newMovieElement.addEventListener('click' , deleteMoviehandler.bind(null ,id ));
    const listroot = document.getElementById('movie-list');
    listroot.append(newMovieElement);
};


const togglebackdrop = () => {
    backdrop.classList.toggle('visible');  
    clearmovieinput();

};

const togglemoviemodal = () => {
    addMovieModal.classList.toggle('visible');

    togglebackdrop();
    

};

const backdropclickhandler = () =>{
togglemoviemodal();

};

const clearmovieinput = () =>{
    for(const usrtinput of userInputs){
        usrtinput.value = '';
    }
};

const cancelhandler = () => {
    togglemoviemodal();
    clearmovieinput();
};

const confirmbuttonhandler = () =>{
    const titlevalue = userInputs[0].value;
    const imageUrlvalue = userInputs[1].value;
    const ratingvalue = userInputs[2].value;

    if(titlevalue.trim() === '' || imageUrlvalue.trim() === '' ||  ratingvalue.trim() === '' || +ratingvalue < 1 || +ratingvalue >5 ){

        alert('enter valid values');
        return;
     } 

     const newmovies = {
        id: Math.random().toString,
        title: titlevalue,
        image : imageUrlvalue,
        rating : ratingvalue
     };
     movies.push(newmovies);
     console.log(movies);
     togglemoviemodal();
     clearmovieinput();
     rendernewmovieElement(newmovies.id , newmovies.title ,  newmovies.image , newmovies.rating);
     updateui(); 
};

startAddMovieButton.addEventListener('click' , togglemoviemodal);
backdrop.addEventListener('click' ,  backdropclickhandler);
cancelbutton.addEventListener('click' , cancelhandler);
confirmbutton.addEventListener('click' , confirmbuttonhandler); 