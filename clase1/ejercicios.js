// alert("JS funcionando")
// 1. Declarar una variable de nombre “auto”, asignarle el valor “Corolla” y mostrarla por
// consola*.
// 2. Asignarle el valor “308” a la variable declarada en el ejercicio anterior y mostrarla por
// consola.
// 3. A la misma variable de los ejercicios anteriores, asignarle el valor “C4”. Volver a
// mostrarla por consola.
// 4. Declarar dos variables “nombre” y “apellido”, asignarles tu nombre y apellido. Luego
// mostrar por consola ambos valores. Usar un solo console.log( )
// 5. Dada una variable llamada “fruta” con el valor “naranja”. Declarar una variable
// “tipoDeLaVariableFruta” y asignarle como valor el tipo de la variable “fruta”. **
// 6. Para los ejercicios 1, 2 y 3, mostrar por consola el tipo de la variable en cada nueva
// asignación.

let auto = "Corolla";
console.log(auto)
console.log(typeof auto)

auto = 308;
console.log(auto);
console.log(typeof auto)

auto = "C4"
console.log(auto);
console.log(typeof auto)


var nombre = "Mathias";
var apellido = "Barbosa"
console.log("El nombre es: ", nombre, "El apellido es: ", apellido);
console.log("El nombre es: " + nombre + "El apellido es: " + apellido);

// const myObj = {firstname:"Angelica",  lastname:"Violi"};
// console.log("El nombre es: " + myObj.firstname + " El apellido es " + myObj.lastname);

let fruta = "Naranja"
let tipoDeLaVariableFruta = typeof fruta
let tipoDeLaVariableFruta2 = typeof( fruta)

console.log(tipoDeLaVariableFruta);
console.log(tipoDeLaVariableFruta2);