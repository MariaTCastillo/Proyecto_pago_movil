const signupform = document.querySelector('#signupForm')
signupform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Usuario= document.querySelector('#Usuario').value
    const password= document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.Usuario === Usuario)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push({Usuario : Usuario, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')

    //Redireccion:

    window.location.href = 'login.html'
})