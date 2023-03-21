
//*  obtener elementos

// let p = document.getElementsByTagName("p")
let p = document.querySelectorAll('p')
console.log(p);
console.log(p[0]);

// let li = document.getElementsByClassName('navItem')
// let li = document.querySelectorAll('.navItem')
let li = document.querySelector('.navItem')

console.log(li);

// let tituloPrincipal = document.getElementById('tituloPrincipal')
let tituloPrincipal = document.querySelector('#tituloPrincipal')
console.log(tituloPrincipal);

//* Propiedades para modificar

console.log( tituloPrincipal.id);
 tituloPrincipal.id = 'nuevoId'
 tituloPrincipal.innerHTML = '<em> Hola Mundo!!!! </em>'
//  tituloPrincipal.innerText = '<em> Tambien cambia el contenido </em>' 
console.log( tituloPrincipal.style);
//  tituloPrincipal.style.color = 'red'


 let div = document.querySelector('#divContenedor')

 div.style.backgroundColor = 'blue'
 console.log(div.children);
 console.log(div.classList);

//  let p = document.querySelectorAll('p')

console.log(p);

for (let i = 0; i < 5; i++) {
    p[i].style.color = 'red'
    
}

//* Crear elementos

let h1 = document.createElement("h1")

let texto = document.createTextNode('Este es un texto para una etiqueta creada dinamicamente')



h1.append(texto)

document.body.append(h1)

// * Eventos

let btn = document.querySelector('#btnClick')

function evento(){
    alert('hiciste click')
}

// btn.addEventListener('click', evento )
btn.addEventListener('click', function(){
    // h1.style.color = 'green'

    if (h1.style.color == 'green') {
        h1.style.color = 'red'
    }else{
        h1.style.color = 'green'
    }

} )
