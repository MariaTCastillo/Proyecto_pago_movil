let pagoMovil = document.querySelector('#PagoMovil');
pagoMovil.addEventListener('submit'), (e)=>{
    e.preventDefault()
    let transaccion = document.querySelector('#Transaccion').value
    String.split('-')
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

    let transaccion = {
        codigo: "0000",
        telefono: "00000000000",
        docIdentidad: "00000000",
        monto: "0000.00",
    }
    if (transaccion)
    localStorage.setItem("Codigo del banco del destinatario", );
    localStorage.setItem("Telefono del destinatario", telefono);
    localStorage.setItem("Documento de Idetidad del destinatario", docIdentidad);
    localStorage.setItem("Monto de la transacción", monto);
}