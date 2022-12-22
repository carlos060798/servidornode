console.log('hola')

const openmenu = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav__link')
const close = document.querySelector('.nav__close')
const preguntas = [...document.querySelectorAll('.questions__title')];

//---menu--------------  
openmenu.addEventListener('click', () => {
  menu.classList.add('nav__link--show')
})
close.addEventListener('click', () => {
  menu.classList.remove('nav__link--show')

})

//---Preguntas--------------      
preguntas.forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    let height = 0;
    let ansewer = pregunta.nextElementSibling;
    let padding = pregunta.parentElement.parentElement;
    padding.classList.toggle('questions__padding--add')
    pregunta.children[0].classList.toggle('questions__arrow--rotate')

    if (ansewer.clientHeight === 0) {
      height = ansewer.scrollHeight;
    }
    ansewer.style.height = `${height}px`;
  })
})



 const typed = new Typed('.type', {
	strings: [
		
		'Calcula tus prestaciones sociales',
        'Liquida tus horas extas'

		
	] ,
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});  



