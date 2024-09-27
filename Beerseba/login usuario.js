document.getElementById('login-form').addEventListener('submit', function (event) {
    // Evitamos que el formulario se envíe antes de validarlo
    event.preventDefault();

    // Variables de los campos
    const emailInput = document.getElementById('UserEmail');
    const passwordInput = document.getElementById('Userpassword');

    // Limpiar los mensajes de error al intentar enviar el formulario de nuevo
    clearErrors();

    // Validación
    const isEmailValid = validateEmail(emailInput);
    const isPasswordValid = validatePassword(passwordInput);

    // Si ambas validaciones son correctas, el formulario se puede enviar
    if (isEmailValid && isPasswordValid) {
        // Aquí puedes enviar el formulario
        // por ejemplo: this.submit(); // o usando AJAX si lo deseas
        alert("Formulario válido. Enviando...");
    }
});

function validateEmail(input) {
    const emailValue = input.value.trim();
    const emailError = document.getElementById('email-error');
    
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        emailError.textContent = "El correo es obligatorio.";
        emailError.style.display = "block";
        input.classList.add('input-error');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
        emailError.style.display = "block";
        input.classList.add('input-error');
        return false;
    }

    input.classList.remove('input-error');
    return true;
}

function validatePassword(input) {
    const passwordValue = input.value.trim();
    const passwordError = document.getElementById('Userpassword');

    if (passwordValue === "") {
        passwordError.textContent = "La contraseña es obligatoria.";
        passwordError.style.display = "block";
        input.classList.add('input-error');
        return false;
    }

    input.classList.remove('input-error');
    return true;
}

function clearErrors() {
    // Ocultamos todos los mensajes de error
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = "none";
    });

    // Eliminamos las clases de error en los inputs
    const errorInputs = document.querySelectorAll('.input-error');
    errorInputs.forEach(input => {
        input.classList.remove('input-error');
    });
}
