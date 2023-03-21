
const arrayCarrito = []

const containerProducts = document.querySelector('#containerProducts')

// for (let index = 0; index < productosInformaticos.length; index++) {
  
//     console.log(productosInformaticos[index].descripcion);
// }

function htmlCards(elemento) {
  
  let fragmento = document.createDocumentFragment()

  
    let div = document.createElement('div')
    let boton = document.createElement('button')
    boton.classList.add('btn')
    boton.id = `producto-${elemento.id}`
    boton.textContent = `Añadir al carrito`

    div.classList.add('producto')
    div.innerHTML += `
    
                                    
                                      <img src=${elemento.imagen} alt="producto">
                                      <h3>${elemento.nombre}</h3>
                                      <p>${elemento.descripcion}</p>
                                      <p>${elemento.precio}</p>
                                      <a href="#">Ver más</a>
                                      
                                
                                    
    `
    div.append(boton)
    fragmento.append(div)
  


containerProducts.append(fragmento)

let botonEvento = document.querySelector(`#producto-${elemento.id}`)
addTocart(botonEvento)

}

function addTocart(boton){
  boton.addEventListener('click', function(evento){
    // console.log(evento);
    // console.dir(evento.target);
    // console.dir(evento.target.parentNode.children);
    // console.dir(evento.target.parentNode.children[1].textContent);
    let id = evento.target.id
    id = id.slice(9)
    console.log(id);
    let busqueda = productosInformaticos.find( (elemento) =>  elemento.id == id )
    

    arrayCarrito.push(busqueda)

    console.log(arrayCarrito);

  })
}


for (let i = 0; i < productosInformaticos.length; i++) {
  
  if (productosInformaticos[i].destacado == true) {
    htmlCards(productosInformaticos[i])   

  }else{
    continue
  }
  
}

