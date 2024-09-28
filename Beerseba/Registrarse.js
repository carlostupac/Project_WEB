
/* https://regexr.com/3a2i5 */
const pattern_mail = /([\w\.]+)@([\w\.]+)\.(\w+)/

/* Validación de campo (1º Nombre).
Permite incluir:
-Un nombre normal o compuesto.
-Caracteres alfabeticos ("Ñ, ñ y ü").
-Uso de prep, contrac. y art.
-Uso de Iniciales. */
const pattern_nombre = /([\w\.]+)@([\w\.]+)\.(\w+)([\w\.]+)@([\w\.]+)\.(\w+)/

/* Validación de campo (1º Apellido).
Permite incluir:
-Un apellido normal o compuesto.
-Caracteres alfabeticos ("Ñ, ñ y ü").
-Uso de prep. "de ó De ó Del" delante, contrac. y art.
-Uso de Iniciales.
-Ver ejemplos. */
const pattern_apellido = /([\w\.]+)@([\w\.]+)\.(\w+)([\w\.]+)@([\w\.]+)\.(\w+)/

/* 8 digitos*/
const pattern_dni = /\d{8}/

/* 10 digitos*/
const pattern_celular = /\d{10}/

/*La contraseña debe tener:
Al entre 8 y 16 caracteres, 
Al menos un dígito, al menos una minúscula, 
Al menos una mayúscula y 
Al menos un caracter no alfanumérico*/
const pattern_clave = /"^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$"/


function alerta_error(f,g,h){
    /*Pinta el campo para validar */
    var a = document.getElementById(f)
    a.setAttribute("style", "background-color: white")

    /*Devuelve en consola para validar */
    var a = document.getElementById(f).value
    var x = h.test(a)
    var b = document.getElementById(g)

    if(x || a.length==0){
        console.log("mail correcto")
        b.setAttribute("class","anular")
    } else{
        console.log("mail incorrecto")
        b.setAttribute("class","aparecer")
    }

    /*Pinta el campo para validar */

}

function evento_1(){
    alerta_error("id_mail","alerta_mail",pattern_mail)
}

function evento_2(){
    alerta_error("id_nombre","alerta_nombre",pattern_nombre)
}

function evento_3(){
    alerta_error("id_apellido","alerta_apellido",pattern_apellido)
}

function evento_4(){
    alerta_error("id_dni","alerta_dni",pattern_dni)
}

function evento_5(){
    alerta_error("id_celular","alerta_celular",pattern_celular)
}

function evento_6(){
    alerta_error("id_clave","alerta_clave",pattern_clave)
}


function validar_todo(){

    /* valida el checkbox y el select */
    var a = document.getElementById("id_seleccionar")
    if (a.value=="0"){
        var b = document.getElementById("alerta_seleccionar")
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_box4")
    if (a.checked==false){
        var b = document.getElementById("alerta_box")
        b.setAttribute("class","aparecer")
    }

    /* valida que no haya campos vacios */
    var a = document.getElementById("id_mail").value
    var b = document.getElementById("alerta_mail")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_nombre").value
    var b = document.getElementById("alerta_nombre")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_apellido").value
    var b = document.getElementById("alerta_apellido")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_dni").value
    var b = document.getElementById("alerta_dni")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_celular").value
    var b = document.getElementById("alerta_celular")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    var a = document.getElementById("id_clave").value
    var b = document.getElementById("alerta_clave")
    if(a==""){
        b.setAttribute("class","aparecer")
    }

    /* si existe algun clase "aparecer", envia una alerta */
    a = document.getElementsByClassName("aparecer")
    if (a.length==0){
        alert("Registro completado")
    } else{
        alert("Revisar las indicaciones resaltadas")
    }
    
}

function evento_7(){
    b=document.getElementById("alerta_box")
    b.setAttribute("class","anular")
}

function evento_8(){
    b=document.getElementById("alerta_seleccionar")
    b.setAttribute("class","anular")
}


function cargar_eventos(){

    /* alertas de mail, nombre, apellido, dni, celular y clave con regex*/
    document.getElementById("id_mail").addEventListener("blur", evento_1);
    document.getElementById("id_nombre").addEventListener("blur", evento_2);
    document.getElementById("id_apellido").addEventListener("blur", evento_3);
    document.getElementById("id_dni").addEventListener("blur", evento_4);
    document.getElementById("id_celular").addEventListener("blur", evento_5);
    document.getElementById("id_clave").addEventListener("blur", evento_6);

    /* boton registrarme*/
    document.getElementById("id_button").addEventListener("click", validar_todo);

    /* borra la alerta el checkbox y el select */
    document.getElementById("id_box4").addEventListener("click", evento_7);    
    document.getElementById("id_seleccionar").addEventListener("input", evento_8);
}