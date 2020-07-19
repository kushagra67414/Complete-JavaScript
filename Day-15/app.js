const listitemsElement = document.querySelectorAll('li');

for( const listitemsEL of listitemsElement){

    console.dir(listitemsEL);
}

                    // ALTERNATE WAY 

const abc = document.getElementsByTagName('li');

for( const l of abc){

    console.dir(l);
}

const ul = document.body.firstElementChild.nextElementSibling;
const firstli = ul.firstElementChild;
console.log(firstli);

const h1 = document.getElementById('main-title');
h1.textContent = 'Some New Title !' ; 
h1.style.color = 'white';
h1.style.backgroundColor = 'black' ;

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent +  ' Changed!!!' ;


const section = document.querySelector('section');

// section.style.backgroundColor = 'blue';
section.className = 'red-bgg';

const button = document.querySelector('button');

button.addEventListener('click', () => {
// if(section.className === 'red-bgg visible'){
//     section.className = 'red-bgg invisible';
// }else{
//     section.className = 'red-bgg visible';

// }

section.classList.toggle('invisible');
});
