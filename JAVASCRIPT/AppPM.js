
function obtener_localstorage(){
    if(localStorage.getItem ("Nombre")){
        let nombre = localStorage.getItem("Nombre");
        let apellido = localStorage.getItem("Apellido");
        let docIdentidad = localStorage.getItem("Documento de Identidad");
        let celular = localStorage.getItem("Celular");
        let correo = localStorage.getItem("Correo")

        console.log(nombre);
        console.log(apellido);
        console.log(docIdentidad);
        console.log(celular);
    }else{
        console.log("No se encuentra su registro en el sistema")
    }
}




function guardar_localstorage(){

    let persona = {
        nombre: "Pedro",
        apellido: "Camacho",
        docIdentidad: "00000000",
        correo: "xxx@xxx.com",

    }

    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido", apellido);
    localStorage.setItem("Documento de Idetidad", docIdentidad);
    localStorage.setItem("Celular", celular);
    localStorage.setItem("Correo", correo);


}