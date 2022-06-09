function ValidarFormulario(nombre1, apellido1, nombre2, apellido2, telefono, email, direccion, poblacion, provincia, cp, fechaEntrega) {
    
    console.log(nombre1);
    
    if(nombre1 == "") {
        alert("Introduce el nombre");
    } else if(apellido1 == "") {
        alert("Introduce los apellidos");
    } else if(nombre2 == "") {
        alert("Intoduce el nombre de entrega");
    } else if(apellido2 == "") {
        alert("Introduce el apellido de entrega");
    } else if(telefono === "") {
        alert("Introduce el telefono");
    } else if(direccion == "") {
        alert("Introduce la direccion");
    } else if(email == "") {
        alert("Introduce el email");
    } else if(poblacion == "") {
        alert("Introduce la población");
    } else if(provincia == "") {
        alert("Introduce la provincia");
    } else if(cp == "") {
        alert("Introduce el codigo postal"); 
    } else if(fechaEntrega == "") {
        alert("Introduce la fecha de entrega");
    }
}

function Funcion1(box) {
    console.log(box);
                
    var imagenes = new Array();
    var foto = document.getElementById("rosas");
    imagenes[0] = "img/rosas_rosas.jpg";
    imagenes[1] = "img/rosas_rojas.jpg";
    imagenes[2] = "img/rosas_multi.jpg";
    imagenes[3] = "img/rosas_amarillas.jpg";
    imagenes[4] = "img/rosas_blancas.jpg";
    foto.src = imagenes[parseInt(box.value)];
}

function Funcion2(blabla) {
    console.log(blabla);
}