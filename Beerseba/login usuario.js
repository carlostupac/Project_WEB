
const MAILVALID = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const RE_VACIO = /^\s*$/

const COLOR_FONDO_EDICION = "#FF5E62"

function validateformLogin(){

    res = true
    var num03 = document.forms["mylogin"]["mail"].value;
    var num01 = document.forms["mylogin"]["password"].value;
    /* definiendo variables */
   

    if ((num03 == null || num03 == "") || (num01 == null || num01 == "")) {
        /*Si las variables estan vacias salta la sig. alerta*/
        alert("Falta completar campos");
        res = false;
    }

    return res 
}

function validarmail(Id){

    var patron = MAILVALID 

    var contenido = doc.getElementById(Id).value;

    if (patron.test(contenido)){
        alert("mail correcto")
        return true
    }
    else{
        alert ("mail incorrecto")
        return false
    }

}

function esVacio(miID) {
    var patron = RE_VACIO;
  
    var contenido = document.getElementById(miID).value;
    return patron.test(contenido);
}
  
function editandoColorFondo(miID) {

    document.getElementById(miID).style.backgroundColor = COLOR_FONDO_EDICION;
}

function evAgregarClase() {
    agregarClase(this.id, "recuadre");
}

function errorColorFondo(miID) {
    document.getElementById(miID).style.backgroundColor = COLOR_FONDO_ERROR;
  }



