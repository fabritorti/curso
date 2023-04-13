const users = JSON.parse( localStorage.getItem('users') )
const loginForm = document.querySelector('#loginForm')
// console.log(users);


loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(loginForm)
    let username = formData.get('username')
    let password = formData.get('password')
    let findUser =  users.find( (user) => user.username == username && user.password == password)
    console.log(findUser);
    if (findUser == undefined) {
        Swal.fire({
            title: 'No se encontro el usuario',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'No tenes cuenta? Registrate'
          }).then((result) => {
            if (result.isConfirmed) {
             window.location = '../pages/registerForm.html'
            }
          })
    }else{
        window.location = '../index.html'
    }
})