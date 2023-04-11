import { User } from "../models/user.class.js"

const registerForm = document.querySelector('#registerUser')
const users = []

const postUser = async (user) => {

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: user,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        if (response.ok !== true) {
            throw new Error(response.status)
        }
        let data = await response.json()
        console.log(data);
    } catch (error) {
        alert('Error en la solicitud ' + error)
    }




}


registerForm.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let formData = new FormData(registerForm)
    let username = formData.get('username')
    let email = formData.get('email')
    let password = formData.get('password')

    if ((username !== '') && (email !== '') && (password !== '')) {
        let user = new User(username, email, password)
        users.push(user)
        localStorage.setItem('users', JSON.stringify( users))
        postUser(JSON.stringify(user))
        // window.location = '../index.html'
    }else{
        alert('Los datos no son correctos')
    }    

})