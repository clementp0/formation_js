'use strict';
function removecss() {
    var myobj = document.getElementById("codecss");
    myobj.remove();
}
// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
const exo1 = document.getElementById('exo1');

colors.forEach ((color) => {
 let elementdiv = document.createElement('div');
 elementdiv.textContent = color;
 elementdiv.style.backgroundColor = color;
 exo1.append(elementdiv);

 elementdiv.addEventListener('click',function(){
     console.log(this.textContent);
 });
});


// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

const exo2 = document.createElement('section');
exo2.id = 'exo2';

exo2.style.minHeight = '250px';
exo2.style.width = '90%';
exo2.style.margin = 'auto';
exo2.style.border = '1px solid black';
exo1.after(exo2);

let div2 = document.createElement('div');
div2.style.backgroundColor = 'black';
exo2.append(div2);

exo2.addEventListener('mousemove', function(e){
    div2.style.width = e.clientX + 'px';
    div2.style.height = e.clientY + 'px';
    div2.style.maxHeight = '350px';
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = document.createElement('section');
exo3.id = 'exo3';
exo2.after(exo3);

let div3 = document.createElement('div');
div3.textContent = names[0];
exo3.append(div3);

exo3.addEventListener('click', function(){
    let rand = Math.floor(Math.random()*names.length);
    div3.textContent = names[rand];
});

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const exo4 = document.createElement('section');
exo4.id = 'exo4';
exo3.after(exo4);

let button4 = document.createElement('button');
button4.textContent = 'Track';
exo4.append(button4);

let exo4X = document.createElement('div');
let exo4Y = document.createElement('div');

exo4.append(exo4X);
exo4.append(exo4Y);

let exo4toggle = false;
button4.addEventListener('click', function(){
    exo4toggle = !exo4toggle;
    if(exo4toggle) {
        document.addEventListener('mousemove', exo4Move);
    }
    else{
        document.removeEventListener('mousemove', exo4Move);
    }
});

function exo4Move(e){
    console.log(e.clientX, e.clientY);
    exo4X.innerHTML = e.clientX;
    exo4Y.innerHTML = e.clientY;
}


// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const exo5 = document.createElement('section');
exo5.id = 'exo5';
exo4.after(exo5);

let div5 = document.createElement('div');
div5.textContent = 'Drag me';
exo5.append(div5);

let exo5Toggle = false;
exo5.addEventListener('mousedown', function(){
    document.addEventListener('mousemove', exo5move);
});

exo5.addEventListener('mouseup', function(){
    document.removeEventListener('mousemove', exo5move);
});

function exo5move(e) {
    div5.style.position = 'fixed';
    div5.style.top = e.clientY+'px';
    div5.style.left = e.clientX+'px';
    console.log();
}
