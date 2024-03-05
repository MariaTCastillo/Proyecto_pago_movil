const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Usuario = document.querySelector('#Usuario').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser =  Users.find(user => user.Usuario === Usuario && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.Usuario}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'indexhome.html'
})