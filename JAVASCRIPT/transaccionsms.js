let pagoMovil = document.querySelector('#PagoMovil');
pagoMovil.addEventListener('submit'), (e)=>{
    e.preventDefault()
    let codigo = document.querySelector('#Codigo del banco del destinatario').value
    let telefono = document.querySelector('#Telefono del destinatario').value
    let docIdentidad = document.querySelector('#Documento de Identidad del destinatario').value
    let monto = document.querySelector('#Monto de la transacción').value
    
}


let saldo = 1000.00;

function obtener_localstorage(){
    if(localStorage.getItem ("Transaccion")){
        let nombre = localStorage.getItem("Codigo del banco del destinatario");
        let apellido = localStorage.getItem("Telefono del destinatario");
        let docIdentidad = localStorage.getItem("Documento de Identidad del destinatario");
        let correo = localStorage.getItem("Monto de la transacción");

        console.log(codigo);
        console.log(telefono);
        console.log(docIdentidad);
        console.log(monto);
    }else{
        console.log("Transacción fallida")
    }
}




function guardar_localstorage(){

    
    if (transaccion)
    localStorage.setItem("Codigo del banco del destinatario", );
    localStorage.setItem("Telefono del destinatario", telefono);
    localStorage.setItem("Documento de Idetidad del destinatario", docIdentidad);
    localStorage.setItem("Monto de la transacción", monto);
}