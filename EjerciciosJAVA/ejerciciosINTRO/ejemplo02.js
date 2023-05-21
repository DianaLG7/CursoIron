//Creacion de una matriz unidimensional
/*El siguiente ejemplo crea un arreglo mensajes con una longitud de 0, 
pero despues asigna valores a mensajes[0] y a mensajes[99], por lo que la longitud final del arreglo pasa a ser de 100. */
let mensajes = [];
mensajes[0] = "Hola";
mensajes[99] = "mundo";

if (mensajes.length === 100) {
   console.log("La longitud es de 100.");
}







