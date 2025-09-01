/* Declarando errores */
const form = document.getElementById('formulario_registro');

const nombreInput = document.getElementById('nombre');
const usuarioInput = document.getElementById('usuario');
const correoInput = document.getElementById('mail');
const contrasennaInput = document.getElementById('pass');
const contrasenna2Input = document.getElementById('pass2');
const fechaInput = document.getElementById('fecha');


/* Construyendo funciones de error y limpiar error */
function mostrarError(id, mensaje) {
    document.getElementById(id).classList.add('is-invalid');
    document.getElementById(id + '-error').innerText = mensaje;
}

function limpiarErrores() {
    const campos = ['nombre', 'usuario', 'mail', 'pass', 'pass2', 'fecha'];
    campos.forEach(campo => {
        document.getElementById(campo + '-error').innerText = "";
        document.getElementById(campo).classList.remove("is-invalid");
    });
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    limpiarErrores();

    let valido = true;

    if (nombreInput.value.trim() === '') {
        mostrarError('nombre', 'Por favor, ingresa un nombre válido');
        valido = false;
    }

    if (usuarioInput.value.trim() === '') {
        mostrarError('usuario', 'Por favor, ingresa un nombre de usuario válido');
        valido = false;
    }

    if (correoInput.value.trim() === '') {
        mostrarError('mail', 'Por favor, ingresa un correo válido');
        valido = false;
    } else {
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mailRegex.test(correoInput.value)) {
            mostrarError('mail', 'El campo email debe tener un formato válido');
            valido = false;
        }
    }

    if (contrasennaInput.value === '') {
        mostrarError('pass', 'Por favor, ingresa una constraseña válida');
        valido = false;
    } else {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        if (!passwordRegex.test(contrasennaInput.value)) {
            mostrarError('pass', 'La contraseña debe tener de 6 a 18 caracteres, incluir al menos una mayúscula, un número y no contener caracteres especiales');
            valido = false;
        }
    }

    if (contrasenna2Input.value !== contrasennaInput.value) {
        mostrarError('pass2', 'La constraseña debe ser igual a la anterior');
        valido = false;
    }

    if (fechaInput.value === '') {
        mostrarError('fecha', 'Por favor, ingresa una fecha válida');
        valido = false;
    } else {
        const fechaNacimiento = new Date(fechaInput.value);
        const fechaHoy = new Date();
        let edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
        const fechaMes = fechaHoy.getMonth() - fechaNacimiento.getMonth();
        if (fechaMes < 0 || (fechaMes === 0 && fechaHoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (edad < 13) {
            mostrarError('fecha', 'Debes tener al menos 13 años para poder registrarte');
            valido = false;
        }
    }

    if (valido) {
        alert('¡Registrado Exitosamente!');

        form.submit();
    }
});