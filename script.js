
// intentos disponibles para adivinar
let intentos = 6;



let palabra = "APPLE";

// fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
// 	.then(response => response.json())
// 	.then(response => {
//         console.log(response)
//         palabra = response[0].toUpperCase()
//     })
// 	.catch(err => console.error(err));

// siempre tenemos solo 5 caracteres
// var wordle = ["X", "X", "X", "X", "X"];



// obtenemos el intento
function getGuess() {
  let entrada = document.getElementById("guess");
  entrada = entrada.value;
  entrada = entrada.toLowerCase(); //siempre ponemos todo a minusculas, para case insensitive
  return entrada;
}

// verificamos si ganamos
function checkWin(incorrectos) {
  var guessInput = document.getElementById("guess");
  var button = document.getElementById("guessbutton");

  if (incorrectos == 0) {
    display("<h1>YOU WIN!😀</h1>");
    button.disabled = true;
    guessInput.disabled = true;
  } else if (intentos == 0) {
    display("<h1>YOU LOSE!😖</h1>");
    button.disabled = true;
    guessInput.disabled = true;
  }
}

function display (content){
  let contenedor = getElementById('guesses');
  contenedor.innerHTML = content;
}
// Que pasa cuando se presiona el boton.
// var button = document.getElementById("guessbutton");
// button.addEventListener("click", addGrid); // llama a la funciona add grid

function addBox(){

}

function addGrid() {
    let incorrectos = 5;
    intentos--;
    let color = 'grey';
    let value = getGuess();
    value = value.toUpperCase(); // Hacemos todo en mayusculas
    let row = document.createElement('div');
    row.className = 'row';
    let grid = document.getElementById("grid");
    for (let i in value){
        if (palabra[i] == value[i]){
            color = 'green';
            incorrectos--; 
        } else if (palabra.includes(value[i])){
            color = 'yellow';
        } else {
            color = 'grey';
        }
        let col = addLetter(value[i],color);
        row.appendChild(col)
    }
    grid.appendChild(row)
    checkWin(incorrectos)
  }

function addLetter(letter,color){
    let span = document.createElement('span');
    span.className = 'letter';
    span.innerHTML = letter;
    span.style.backgroundColor = color;
    return span;
}



function sum(a,b){
  return a+b
}
function subs(a,b){
  return a+b
}

module.exports = sum;