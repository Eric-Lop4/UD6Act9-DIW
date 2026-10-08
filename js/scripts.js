//Aquesta constant simbolitza la velocitat.
//Realment és el número de píxels que ens movem
//en la pantalla quan prémem una de les tecles de
//moviment
const pixels_a_moure = 15;

document.addEventListener('DOMContentLoaded', main);

function main() {
    document.getElementById('nivell1').addEventListener('click', fondo1);
    document.getElementById('nivell2').addEventListener('click', fondo2);
}

function moureEsquerra() {
  let element = document.getElementById("avio");
  //ací agafarem la posició actual on estiga l'avió amb
  //getAvioPos(element)
  //i el mourem "pixels_a_moure" píxels cap a l'esquerra.
  //Ex:
  //   getAvioPos(element).left torna la posició de l'eix X de l'avió
  //   getAvioPos(element).top torna la posició de l'eix Y de l'avió
  //Per a canviar-li la posició a un element html cal
  //posar  element.style ... (cerca per internet per veure
  //quines propietats té style que estiguen relacionades amb posicions)
  //************** per completar per l'alumne *******/
  //                   todo                         */
  //*************************************************/
  element.style.left = getAvioPos(element).left - pixels_a_moure + "px";
}

function moureDreta() {
  let element = document.getElementById("avio");
  //ací agafarem la posició actual on estiga l'avió amb
  //getAvioPos(element)
  //i el mourem "pixels_a_moure" píxels cap a la dreta.
  //Ex:
  //   getAvioPos(element).left torna la posició de l'eix X de l'avió
  //   getAvioPos(element).top torna la posició de l'eix Y de l'avió
  //Per a canviar-li la posició a un element html cal
  //posar  element.style ... (cerca per internet per veure
  //quines propietats té style que estiguen relacionades amb posicions)
  //************** per completar per l'alumne *******/
  //                   todo                         */
  //*************************************************/
  element.style.left = getAvioPos(element).left + pixels_a_moure + "px";
}

function moureAmunt() {
  let element = document.getElementById("avio");
  //ací agafarem la posició actual on estiga l'avió amb
  //getAvioPos(element)
  //i el mourem "pixels_a_moure" píxels cap amunt.
  //Ex:
  //   getAvioPos(element).left torna la posició de l'eix X de l'avió
  //   getAvioPos(element).top torna la posició de l'eix Y de l'avió
  //Per a canviar-li la posició a un element html cal
  //posar  element.style ... (cerca per internet per veure
  //quines propietats té style que estiguen relacionades amb posicions)
  //************** per completar per l'alumne *******/
  //                   todo                         */
  //*************************************************/
  element.style.top = getAvioPos(element).top - pixels_a_moure + "px";
}

function moureAvall() {
  let element = document.getElementById("avio");
  //ací agafarem la posició actual on estiga l'avió amb
  //getAvioPos(element)
  //i el mourem "pixels_a_moure" píxels cap avall.
  //Ex:
  //   getAvioPos(element).left torna la posició de l'eix X de l'avió
  //   getAvioPos(element).top torna la posició de l'eix Y de l'avió
  //Per a canviar-li la posició a un element html cal
  //posar  element.style ... (cerca per internet per veure
  //quines propietats té style que estiguen relacionades amb posicions)
  //************** per completar per l'alumne *******/
  //                   todo                         */
  //*************************************************/
  element.style.top = getAvioPos(element).top + pixels_a_moure + "px";
}

function passarANumero(n) {
  return parseInt(n == "auto" ? 0 : n);
}

/**
 * Aquesta funció en torna una objecte amb la posició actual de l'avió a la pantalla
 * return obj.left --> posició de l'avió de l'eix X
 *        obj.top --> posició de l'avió de l'eix Y
 */
function getAvioPos() {
  let obj = {
    left: passarANumero(getComputedStyle(avio).left),
    top: passarANumero(getComputedStyle(avio).top),
  };
  return obj;
}

/**
 * Funció encarregada de controlar quina tecla s'ha "apretat"
 * @param {*} evt: event que es llança
 */
function moureAvio(evt) {
  switch (evt.keyCode) {
    case 37:
      /** hem apretat la tecla de fletxa esquerra */
      moureEsquerra();
      break;
    case 39:
      /** hem apretat la tecla de fletxa dreta */
      moureDreta();
      break;
    case 38:
      /** hem apretat la tecla de fletxa amunt */
      moureAmunt();
      break;
    case 40:
      /** hem apretat la tecla de fletxa avall */
      moureAvall();
      break;
    //************** per completar per l'alumne *******/
    //                   todo                         */
    //*************************************************/
    //mira quina tecla és el valor 1 el teclat i fes
    //que la música s'active o es desactive segons estava
    //abans activada o no activada
  }
}
/**
 * Funció encarregada de fer el que calga quan es pare l'avió
 */
function pararAvio() {
  console.log("parem l'avió");
}

function docReady() {
  window.addEventListener("keydown", moureAvio);
  window.addEventListener("keyup", pararAvio);
}

/**
 * Funció per a cambiar el fondo
 */
function fondo1 () {
  document.body.style.backgroundImage = "url('/fons_nivells/nivell1.jpg')";
}
function fondo2 () {
  document.body.style.backgroundImage = "url('/fons_nivells/nivell2.jpg')";
}
