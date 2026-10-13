//Aquesta constant simbolitza la velocitat.
//Realment és el número de píxels que ens movem
//en la pantalla quan prémem una de les tecles de
//moviment
const pixels_a_moure = 15;

document.addEventListener('DOMContentLoaded', main);

const sonido = new Audio('./audio/musica_fons.mp3');
const sonido_avio = new Audio('./audio/avio_es_mou.mp3');

sonido.play();
sonido.loop = true;

function main() {
  document.getElementById('nivell1').addEventListener('click', fondo1);
  document.getElementById('nivell2').addEventListener('click', fondo2);
}

function moureEsquerra() {
  let element = document.getElementById("avio");
  element.style.left = getAvioPos(element).left - pixels_a_moure + "px";
  if (getAvioPos(element).left < 0) {
    element.style.left = "0px";
  }
}

function moureDreta() {
  let element = document.getElementById("avio");
  element.style.left = getAvioPos(element).left + pixels_a_moure + "px";
  const limiteDerecho = document.documentElement.clientWidth - element.offsetWidth;
  if (getAvioPos(element).left > limiteDerecho) {
    element.style.left = limiteDerecho + "px";
  }
}

function moureAmunt() {
  let element = document.getElementById("avio");
  element.style.top = getAvioPos(element).top - pixels_a_moure + "px";
  if (getAvioPos(element).top < 0) {
    element.style.top = "0px";
  }
}

function moureAvall() {
  let element = document.getElementById("avio");
  element.style.top = getAvioPos(element).top + pixels_a_moure + "px";
  if (getAvioPos(element).top > window.innerHeight - element.offsetHeight) {
    element.style.top = window.innerHeight - element.offsetHeight + "px";
  } 
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

  if (evt.key === "1") {
    if (sonido.paused) {
      sonido.play();
    } else {
      sonido.pause();
    }
  }

  const posicioAnterior = getAvioPos();

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
  }

  const posicioActual = getAvioPos();

  if (posicioActual.left !== posicioAnterior.left || posicioActual.top !== posicioAnterior.top) {
    sonido_avio.play();
    document.getElementById("avio").classList.add("moviment");
  }
}

/**
 * Funció encarregada de fer el que calga quan es pare l'avió
 */
function pararAvio() {
  console.log("parem l'avió");
  document.getElementById("avio").classList.remove("moviment");
}

function docReady() {
  window.addEventListener("keydown", moureAvio);
  window.addEventListener("keyup", pararAvio);
}

/**
 * Funció per a cambiar el fondo
 */
function fondo1() {
  document.body.style.backgroundImage = "url('fons_nivells/nivell1.jpg')";
}
function fondo2() {
  document.body.style.backgroundImage = "url('fons_nivells/nivell2.jpg')";
}
