function validarCompra() {
    res = true
    var color = document.forms["form.detalles"]["color"].value;
    var talle = document.forms["form.detalles"]["talle"].value;

    if ((color == null || color == "") || (talle == null || talle == "")) {
        alert("Falta completar campos");
        res = false;
    }

    return res 
    }
    // Función para incrementar la cantidad
function agregaUno() {
    var currentValue = parseInt(document.getElementById('contador').value);
    document.getElementById('contador').value = currentValue + 1;
}

// Función para decrementar la cantidad
function restaUno() {
    var currentValue = parseInt(document.getElementById('contador').value);
    if (currentValue > 1) {
        document.getElementById('contador').value = currentValue - 1;
    }
}

    //let cont = 0
    
//function agregaUno(){
   // cont = cont +1
   // document.getElementById('agrega').innerHTML = contador
//}

//function restaUno(){
  //  cont = cont - 1
    //document.getElementById('disminuye').innerHTML = contador 
//}