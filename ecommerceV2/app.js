


const containerProducts = document.querySelector('#containerProducts')


// let usersSinParse =  localStorage.getItem('users')
// console.log(usersSinParse[0].username);
// console.log(typeof usersSinParse);
// let users = JSON.parse( localStorage.getItem('users'))
// console.log(users[0].username);
// console.log(typeof users);

// document.body.innerHTML += `<h1> ${users[0].username} </h1>`



const getAllProducts = async () => {
   try {
    let response = await fetch('./products.json');
    console.log(response);
    console.log(response.ok)
    console.log(response.status)
    if (response.status !== 200) {
      throw new Error(response.status)
    }
    return response.json()
   } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: `${error}`,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
   }
    
}



function htmlCards(array) {
  
  let fragmento = document.createDocumentFragment()
  for (const item of array) {
    
    let div = document.createElement('div')
    let boton = document.createElement('button')
    boton.classList.add('btn')
    boton.id = `producto-${item.id}`
    boton.textContent = `Añadir al carrito`
    boton.addEventListener('click', (event) => {
      addTocart(event)
    } )
    div.classList.add('producto')
    div.innerHTML += `
    
                                    
                                      <img src=${item.imagen} alt="producto">
                                      <h3>${item.nombre}</h3>
                                      <p>${item.descripcion}</p>
                                      <p>${item.precio}</p>
                                      <a href="#">Ver más</a>
                                      
                                
                                    
    `
    div.append(boton)
    fragmento.append(div)
    // let botonEvento = document.querySelector(`#producto-${item.id}`)
    // addTocart(botonEvento)
  }
  
  


containerProducts.append(fragmento)


}

async function addTocart(evento){
    let products = await getAllProducts()
    let arrayCarrito = JSON.parse(localStorage.getItem('carrito')) || []
    let id = evento.target.id
    id = id.slice(9)
 
    let busqueda = products.find( (elemento) =>  elemento.id == id )
    let findIndex = arrayCarrito.findIndex( product => product.id ==  busqueda.id )

    if (busqueda !== undefined) {
      if (findIndex !== -1) {
        arrayCarrito[findIndex].cantidad += 1
        localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
      }else{
        busqueda.cantidad = 1
        arrayCarrito.push(busqueda)
        localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
      }
    }
   

  

}


document.addEventListener('DOMContentLoaded', async () => {
  let products = await getAllProducts()
  let productsFilter = products.filter( product => product.destacado == true)
  htmlCards(productsFilter)
})


