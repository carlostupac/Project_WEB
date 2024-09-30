const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("mylogin")
const pEmail = document.getElementById("warning-mail")
const pPass = document.getElementById("warning-password")

form.addEventListener("submit", e=>{
    e.preventDefault()
    pEmail.innerHTML = ""
    pPass.innerHTML = ""
    /*Los resetea*/

    let warningA = ""
    let warningB = ""

    let ExpRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    /*expresion regular para el email*/
    
    let expRegPass = /^[A-Z][a-zA-Z0-9]*\d.*/
    /*Expresion regular para que la contraseña contenga la primera letra mayuscula y al menos un numero*/
    
    let entrar = false
    /*inicializa la variable en falso */

    if(!ExpRegEmail.test(email.value)){
        warningA += 'El Email no es valido <br>';
        entrar = true
    }

    if (!expRegPass.test(pass.value)){
        warningB += 'La contraseña no es válida <br>'
        entrar = true
    }

    if (entrar){
        pEmail.innerHTML = warningA
        pPass.innerHTML = warningB

    }

})