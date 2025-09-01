const form = document.getElementById('formulario_registro');

const nombreInput = document.getElementById('nombre');
const usuarioInput = document.getElementById('usuario');
const correoInput = document.getElementById('mail');
const contrasennaInput = document.getElementById('pass');
const contrasenna2Input = document.getElementById('pass2');
const fechaInput = document.getElementById('fecha');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nombre-error').innerHTML = '';
    document.getElementById('usuario-error').innerHTML = '';
    document.getElementById('mail-error').innerHTML = '';
    document.getElementById('pass-error').innerHTML = '';
    document.getElementById('pass2-error').innerHTML = '';
    document.getElementById('fecha-error').innerHTML = '';

    if (nombreInput.value === '') {
        document.getElementById('nombre-error').innerHTML = 'Por favor, ingresa un nombre válido';
        return;
    }

    if (usuarioInput.value === '') {
        document.getElementById('usuario-error').innerHTML = 'Por favor, ingresa un nombre de usuario válido';
        return;
    }

    if (correoInput.value === '') {
        document.getElementById('mail-error').innerHTML = 'Por favor, ingresa un correo válido';
        return;
    }

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailRegex.test(correoInput.value)) {
        document.getElementById('mail-error').innerHTML = 'El campo email debe tener un formato válido';
        return;
    }

    if (contrasennaInput.value === '') {
        document.getElementById('pass-error').innerHTML = 'Por favor, ingresa una contraseña válida';
        return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    if (!passwordRegex.test(contrasennaInput.value)) {
        document.getElementById('pass-error').innerHTML = 'La contraseña debe tener de 6 a 18 caracteres, incluir al menos una mayúscula, un número y no contener caracteres especiales.';
        return;
    }

    if (contrasenna2Input.value !== contrasennaInput.value) {
        document.getElementById('pass2-error').innerHTML = 'La contraseña debe ser igual a la anterior';
        return;
    }

    if (fechaInput.value === '') {
        document.getElementById('fecha-error').innerHTML = 'Por favor, ingresa una fecha válida';
        return;
    }

    const fechaNacimiento = new Date(fechaInput.value);
    const fechaHoy = new Date();
    let edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

    if (edad < 13) {
        document.getElementById('fecha-error').innerHTML = 'Debes tener al menos 13 años para poder registrarte';
        return;
    }

    alert('¡Registrado Exitosamente!');

    form.submit();
});