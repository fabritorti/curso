// alert("Hola mundo")
var nombreUsuario;
nombreUsuario = "Juan";

let apellidoUsuario = "Gonzalez";

const edadUsuario = 18;


//* tipos de datos

// let texto = "cadena de texto" // string
// console.log(typeof texto);
// console.log( texto.toUpperCase() );
// console.log( texto.toLowerCase() );

// let numero = 30.453445645 // Number
// console.log(typeof numero);
// console.log( numero.toFixed(2));
// let numero2 = "40"
// console.log(typeof numero2); // string
// console.log( typeof Number(numero2));

// let tieneHijos = false // boolean
// console.log(typeof tieneHijos);
// let indefinido = undefined // undefined
// console.log(typeof indefinido);
// let nulo = null // null
// console.log(typeof nulo);


// let objeto = {}
// let array = []
// let funcion = function() {} // funcion

// Estructuras de control
//*  operadores
// igualdad == 5 == "5"
// estricta igualdad === 5 === '5'
// mayor mayor o igual menor menor o igual > >= < <=
// distinto != 5 != '5'
// desigualdad estricta !== 5 !== '5'
// and &&  esMayordeEdad && tienePermisoParaIngresar // para que se cumpla ambos valores tienen que ser verdadero
// OR ||  esMayordeEdad || tienePermisoParaIngresar // para que se cumpla con un solo valor alcanza
// ! 

// * condicionales
// let mayorDeEdad = 18

// if(edadUsuario >= mayorDeEdad ) {
//     // instruccciones para ejecutar
//     alert('Podes ingresar') 
// }

// console.log('Continua la ejecucion');


//* var vs let 
// var saludo = "Hola, como estan?"

// if (true) {
//     var saludo = 'Buenas noches'
// }

// console.log(saludo);

// let saludo = "Hola, como estan?"


// if (true) {
//     let saludo = 'buenas noches'
//     console.log(saludo);
// }

// console.log(saludo);


// * condicionales dobles

// let clima = prompt('ingrese el clima: calor, lluvia')
// console.log(clima);

// if( clima === 'calor'){
//     alert("si salis, lleva una botella de agua o usa protector")
// }
// // } else {
// //     alert("sali como quieras")
// // }

// if( clima === 'calor'){
//     alert("si salis, lleva una botella de agua o usa protector")
// } else if( clima == 'lluvia'){
//     alert("lleva arbigo")
// } else{
//     alert("sali como quieras")
// }


// * switch 

// let color = prompt("color")

// color = color.toLowerCase()

// switch (color) {
//     case 'rojo':
//         alert("el color seleccionado es: " + color)
//         break;
//     case 'azul':
//         alert("el color seleccionado es: " + color)
//         break;

//     case 'verde':
//         alert("el color seleccionado es: " + color)
//         break;


//     default:
//         alert('No tenemos ese color ' + color)
//         break;
// }


// * Bucles

let contador = 2

// while(contador <= 5){
//     console.log( "la variable contador tiene el valor de: " + contador);
//     // contador = contador + 1
//     contador++
// }

// do{
//     console.log( "la variable contador tiene el valor de: " + contador);
//     contador ++
// }while(contador < 5)

// for( let i = 0; i <= 5; i++){
//     if (i == 3) {
//         continue
//     }
//     console.log("la variable contador tiene el valor de: " + i);
// }

// for( let i = 0; i <= 5; i++){
//     if (i == 3) {
//         break
//     }
//     console.log("la variable contador tiene el valor de: " + i);
// }

// for (const iterator of object) {
    
// }

// for (const key in object) {
   
// }

// * Funciones
//  function saludar() {
//     alert("hola bienvenido " +  nombreUsuario + " " + apellidoUsuario)
//  }

//  saludar()


// function saludar(saludo, nombre, apellido){
//     alert(saludo + " " + nombre + " " + apellido)
// }

// let nombrePersona = prompt('como te llamas?')
// let apellidoPersona = prompt('como es tu apellido?')
// let horaDelDia = prompt("Que hora es")


// // saludar('Hola, buen dia', "Jose", "Lopez")
// // saludar('Hola, buenas tardes', "Nestor", "Algo")

// if (horaDelDia >= 8  && horaDelDia <= 12) {
//     saludar('Hola Buen dia', nombrePersona, apellidoPersona)
    
// }else if( horaDelDia >= 13 && horaDelDia <= 20){
//     saludar('Hola buenas tardes', nombrePersona, apellidoPersona)
// }else if( horaDelDia >= 21 && horaDelDia <= 24){
//     saludar('Hola buenas noches', nombrePersona, apellidoPersona)
// }else{
//     alert("Anda a dormir")
// }


function suma(num1, num2){
    let resultado = num1 + num2
    // console.log(resultado);
    return resultado
}

// console.log( suma(10, 5) );

let resultadoFuncion = suma(6, 30)

console.log(suma(6, 30));

function tablaDeMultiplicar(parametro){

    for( let i = 1; i <= 10; i++){
        let multi = i * parametro
        console.log('el resultado de ' + i + ' * ' + parametro + " es :" + multi );
    }

}

// tablaDeMultiplicar(5)
// tablaDeMultiplicar(123)
// tablaDeMultiplicar(23534)
// tablaDeMultiplicar(10)

let btn = document.querySelector('#btn')
let div = document.querySelector("#div")

btn.addEventListener("click", () => {
    div.style.backgroundColor = 'red'
    div.style.width = '200px'
    div.style.heigth = '200px'
    document.body.innerHTML += '<h1> Producto agregado al carrito</h1>'
})