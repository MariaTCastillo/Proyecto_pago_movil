const pagarform2 = document.querySelector('#pagarForm')
pagarform2.addEventListener('submit', (e)=>{
    e.preventDefault()
    var monto= document.querySelector('#monto').value

    var saldoActual= 1000.00;

    if(saldoActual >= monto){
        var saldoFinal = 0;
        saldoFinal = saldoActual - monto;

        alert('Pago Exitoso!')
        alert('A continuacion su comprobante de pago')
        alert( `Pago Exitoso Codigo de transaccion: 764893567 Telefono: 04143013362 Banco: BFC CI: 13888508 Monto: ${monto}`)
        window.location.href = 'comprobante.html'
    } else {
        alert('Saldo Insuficiente! No se puede realizar el pago.')
    }
    Datos.push({monto: monto})
    localStorage.setItem('datos', JSON.stringify(Datos))
})