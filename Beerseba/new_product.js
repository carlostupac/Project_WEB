function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe sin validar

    // Obtener los valores de los campos
    var nombre = document.getElementById("nom01").value.trim();
    var descripcion = document.getElementById("desc01").value.trim();
    var categoria = document.querySelector('input[name="opcion"]:checked');
    var talles = document.querySelectorAll('input[type="checkbox"]:checked');
    var archivo = document.getElementById("arch01").value;
    var color = document.getElementById("colorPicker").value;

    // Validación del campo "Nombre Producto"
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del producto.");
        return false;
    }

    // Validación del campo "Descripción"
    if (descripcion === "") {
        alert("Por favor, ingresa la descripción del producto.");
        return false;
    }

    // Validación de "Categoría" (radio buttons)
    if (categoria === null) {
        alert("Por favor, selecciona una categoría.");
        return false;
    }

    // Validación de "Talles" (checkboxes)
    if (talles.length === 0) {
        alert("Por favor, selecciona al menos un talle.");
        return false;
    }

    // Validación del campo "Archivo" (imagen)
    if (archivo === "") {
        alert("Por favor, selecciona una imagen para el producto.");
        return false;
    }

    // Validación del campo "Color"
    if (color === "#000000") { // Cambia este valor si deseas que el negro sea válido
        alert("Por favor, selecciona un color diferente.");
        return false;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert("Formulario enviado con éxito.");
    event.target.submit(); // Envía el formulario si todo está correcto
}

// Agregar el evento de validación al formulario
document.querySelector("form").addEventListener("submit", validarFormulario);
