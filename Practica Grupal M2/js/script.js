function ValidarFormulario(nombre, apellidos, telefono, direccion, poblacion, provincia, cp, fechaEntrega) {
    if(nombre == "") {
        alert("Introduce el nombre");
    } else if(apellidos == "") {
        alert("Introduce los apellidos");
    } else if(telefono === "") {
        alert("Introduce el telefono");
    } else if(direccion == ""){
        alert("Introduce la direccion");
    } else if(poblacion == "") {
        alert("Introduce la población");
    } else if(provincia == "") {
        alert("Introduce la provincia");
    } else if(cp.isNaN) {
        alert("Introduce el codigo postal"); 
    } else if(fechaEntrega == "") {
        alert("Introduce la fecha de entrega");
    }
}

function Funcion1(box) {
    console.log(box);
                
    var imagenes = new Array();
    var foto = document.getElementById("foto");
    imagenes[0] = "img/rosas_rosas.jpg";
    imagenes[1] = "img/rosas_rojas.jpg";
    imagenes[2] = "img/rosas_multi.jpg";
    imagenes[3] = "img/rosas_amarillas.jpg";
    imagenes[4] = "img/rosas_blancas.jpg";
    foto.src = imagenes[parseInt(box.value)];
}