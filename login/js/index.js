
const form = document.getElementById ("login_form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const password = document.getElementById("contraseña");
const passwordError = document.querySelector("#password + span.error");
const boton = document.getElementById("btn-enviar")

email.addEventListener('change', function (event) {

    if (email.validity.valid) {
        emailError.innerHTML = '';
        emailError.className = 'error';
    } else {
        debugger
        showError();
    }
});

form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    debugger
    if (email.validity.valueMissing) {
        emailError.textContent = 'El correo es requerido';

    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'El correo no existe';
    }
    emailError.className = 'error activo';
};

function showError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'La contraseña es requerida';

    } else if (password.validity.typeMismatch) {
        passwordError.textContent = 'Contraseña incorrecta';
        debugger
    }
    passwordError.className = 'error activo';
}