let pagoMovil = document.querySelector('#PagoMovil')
pagoMovil.addEventListener('submit', (e)=>{
    e.preventDefault()
    let codigo = document.querySelector('#Codigo del banco del destinatario').value
    let telefono = document.querySelector('#Telefono del destinatario').value
    let docIdentidad = document.querySelector('#Documento de Identidad del destinatario').value
    let monto = document.querySelector('#Monto de la transacción').value   


    const cantidadCodigo = 4;
    const cantidadtelefono = 11;
    const cantidadocIdentidad = 8;
    
    function validarCodigo(codigo, cantidadCodigo) {
        if(codigo.length > cantidadCodigo || codigo.length < cantidadCodigo) {
            console.log("Dato invalido.");
        } else {
            console.log("Dato valido.");
        }
    }
    function validarTelefono(telefono, cantidadtelefono) {
        if(telefono.length > cantidadtelefono || telefono.length < cantidadtelefono) {
            console.log("Dato invalido.");
        } else {
            console.log("Dato valido.");
        }
    }
    function validarDocIdentidad(docIdentidad, cantidadocIdentidad) {
        if(docIdentidad.length > cantidadocIdentidad || docIdentidad.length < cantidadocIdentidad) {
            console.log("Dato invalido.");
        } else {
            console.log("Dato valido.");
        }
    }
    let saldo = 1000.00;
    if(saldo >= monto){
        let saldoFinal = 0;
        saldoFinal = saldo - monto;

        alert('Pago Exitoso!')
        alert('A continuacion su comprobante de pago')
        alert( `Pago Exitoso Codigo de transaccion: 764893567 Telefono: ${telefono}  Banco: ${codigo}  CI: ${docIdentidad}  Monto: ${monto}`)
    } else {
        alert('Saldo Insuficiente! No se puede realizar el pago.')
    }
})