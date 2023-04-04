import { User } from "../models/user.class.js"

const registerForm = document.querySelector('#registerUser')
const users = []


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
        window.location = '../index.html'
    }else{
        alert('Los datos no son correctos')
    }    

})