let form = document.querySelector('#formDatosPersona')
let div = document.querySelector('#container')


form.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log(evento);
    console.dir(evento.target);
    console.dir(evento.target.children);
    console.dir(evento.target.children[0].value);
    let formData = new FormData(form)

    // let nombre = formData.get('nombre')
    // let apellido = formData.get('apellido')
    // let dni = formData.get('dni')
    // let cel = formData.get('cel')


    let persona = {
        nombre: formData.get('nombre'),
        apellido:  formData.get('apellido'),
        dni: formData.get('dni'),
        cel: formData.get('cel')

    }

    div.innerHTML = `
                        <h3 class="display"> ${persona.nombre} </h3>
                        <h3 class="display"> ${persona['apellido']} </h3>
                        <h3 class="display" > ${persona.dni} </h3>
                        <h3 class="display"> ${persona.cel} </h3>
    
    
    
    `

})