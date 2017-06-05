// Efecto para el scroll del menú
var menuScroll = document.getElementById("menuConJs"); // conectamos con el id del nav
	
	//Evento
	window.onscroll = function(){
		"use strict";

		//Condiciones para que se aplique
		if(document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280){ // si la cantidad de scroll es mayor a la altura del inicio, se le aplique la clase fixed
			menuScroll.classList.add("scroll");
		}else {
			menuScroll.classList.remove("scroll"); // para que cuando sea menor a la altura del inicio, se quite.
		}
	};	



/* Intentos - Fallidos

	var menuScroll = document.getElementById("menuConJs"); // conectamos con el id del nav
	
	//Evento
	window.addEventListener("scroll", function(){
		//Condiciones para que se aplique
		if(window.pageYOffset > altura){ // si la cantidad de scroll es mayor a la altura del inicio, se le aplique la clase fixed
			menuScroll.classList.add("fixed");
		}else {
			menuScroll.classList.remove("fixed"); // para que cuando sea menor a la altura del inicio, se quite.
		}
	});
	
*/

// Código de apoyo
/*
var altura = menuScroll.offsetTop;// propiedad que muestra la distancia que desde el inicio de la pagina hasta el menú. Se puede ver comnnnnnn (alert(menuScroll.offsetTop);)
alert(menuScroll.offsetTop);

alert(menuScroll.pageYOffset); // para calcular la altura en que queremos que comience el Scroll