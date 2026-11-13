/* =========================================================
   EJERCICIO: AOS Y TYPED.JS
   Antes de empezar, enlaza las librerías y este archivo
   en index.html (sigue los comentarios del HTML).
   ========================================================= */

/* 1. AOS
   Inicia AOS con AOS.init().
   Después prueba a pasarle opciones: duration, offset y once. */
   AOS.init({
      duration: 2000
      offset: 100
      once: true

   })

   //Ejercicio-> Añadir animaciones de AOS a los cards (.tarjeta) con delay que vaya de izq a derecha


/* 2. TYPED.JS
   Crea un new Typed() sobre el span #typed del hero.
   En strings, pon varias cosas que se pueden ver esta noche
   ("Saturno", "la Luna llena"...).
   Ajusta typeSpeed, backSpeed y loop. */
   var typed = new Typed("#typed", {
      strings: [ "Saturno" "la Víaláctea", "venus"]
      loop: true,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500
   })


/* RETO: SIMPLEPARALLAX
   Selecciona las imágenes .parallax con querySelectorAll
   y aplícales new SimpleParallax(imagenes, { scale: 1.4 }). */

var imagenes = document.querySelectorAll(".parallax");

new SimpleParallax(imagenes, {
   orientation: "up";
   scale: 1.4;
});