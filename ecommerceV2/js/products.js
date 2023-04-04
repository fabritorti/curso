const containerProducts = document.querySelector('#containerProducts')
const inputSearch = document.querySelector('#inputSearch')


const arrayCarrito = []


function htmlCards(arrayProductos) {
  
    containerProducts.innerHTML = ''

    let fragmento = document.createDocumentFragment()
  
    arrayProductos.forEach(function(elemento){
        let div = document.createElement('div')
        let boton = document.createElement('button')
        boton.classList.add('btn')
        boton.id = `producto-${elemento.id}`
        boton.textContent = `Añadir al carrito`

        div.classList.add('producto')
        div.innerHTML += `
        
                                        
                                          <img src=.${elemento.imagen} alt="producto">
                                          <h3>${elemento.nombre}</h3>
                                          <p>${elemento.descripcion}</p>
                                          <p>${elemento.precio}</p>
                                          <a href="#">Ver más</a>
                                        
        `
      
        div.append(boton)
        fragmento.append(div)
        addTocart(boton)
    })
    
  containerProducts.append(fragmento)
  
//   let botones = document.querySelectorAll(`.btn`)
//   botones.forEach(function(boton){
  
//     addTocart(boton)
  
//   })
  
  
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


htmlCards(productosInformaticos)

inputSearch.addEventListener('input', function(evento){
    console.log(evento.target.value);
    let productName = evento.target.value

    let busqueda = productosInformaticos.filter( (elemento) => elemento.nombre.includes(productName))
    console.log('resultado => ', busqueda);
    htmlCards(busqueda)
})