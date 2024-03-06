const pagarform = document.querySelector('#pagarForm')
pagarform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const telefono= document.querySelector('#telefono').value
    const banco= document.querySelector('#banco').value
    const cedularif= document.querySelector('#cedularif').value
    var monto= document.querySelector('#monto').value

    var saldoActual= 1000.00;

    if(saldoActual >= monto){
        var saldoFinal = 0;
        saldoFinal = saldoActual - monto;

        alert('Pago Exitoso!')
        alert('A continuacion su comprobante de pago')
        alert( `Pago Exitoso Codigo de transaccion: 764893567 Telefono: ${telefono}  Banco: ${banco}  CI: ${cedularif}  Monto: ${monto}`)
        window.location.href = 'comprobante.html'
    } else {
        alert('Saldo Insuficiente! No se puede realizar el pago.')
    }

    Datos.push({telefono : telefono, banco: banco, cedularif: cedularif, monto: monto})
    localStorage.setItem('datos', JSON.stringify(Datos))
})