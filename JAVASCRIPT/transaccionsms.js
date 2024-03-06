let pagoMovil = document.querySelector('#pagoMovil')
pagoMovil.addEventListener('submit', (e)=>{
    e.preventDefault()
    let codigo = document.querySelector('#codigo').value
    let telefono = document.querySelector('#telefono').value
    let docIdentidad = document.querySelector('#documento').value
    let monto = document.querySelector('#monto').value   


    const cantidadCodigo = 4;
    const cantidadtelefono = 11;
    const cantidadocIdentidad = 8;
    
        if(codigo.length = cantidadCodigo) {

        } else {
            alert('Dato invalido.');
        }
        if(telefono.length = cantidadtelefono) {
  
        } else {
            alert('Dato invalido.');
        }

        if(docIdentidad.length = cantidadocIdentidad) {
           
        } else {
            alert('Dato invalido.');
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