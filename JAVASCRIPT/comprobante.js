var telefonoGuardado = localStorage.getItem('telefono');
var bancoGuardado = localStorage.getItem('banco');
var cedularifGuardado = localStorage.getItem('cedularif');
var montoGuardado = localStorage.getItem('monto');

document.getElementById('telefono').textContent = telefono;
document.getElementById('banco').textContent = banco;
document.getElementById('cedularif').textContent = cedularif;
document.getElementById('monto').textContent = monto;