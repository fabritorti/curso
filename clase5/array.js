let autos = ["Civic", "Etios", 308]
console.log(autos);
// console.log(autos[0]);
// console.log(autos[1]);
// console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
    
}

autos.push(true)

console.log(autos);

autos.unshift('honda')

console.log(autos);

autos.pop()

console.log(autos);

autos.shift()

console.log(autos);

let botones = document.querySelectorAll('button')

botones.forEach(function(elemento){
    elemento.addEventListener('click', function(evento){
        alert(`agregaste el producto ${evento.target.id}`)
    })
})