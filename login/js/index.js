
const form= document.getElementsByTagName("login_form")[0];
const email= document.getElementsById("email");
const emailError= document.querySelector("#email + span.error");
const password= document.getElementsById("contraseña");
const passwordError= document.querySelector("#password + span.error");
const boton= document.getElementsById("btn-enviar")

email.addEventListener( 'input', function (event){
if(email.validity.valid){
emailError.innerHTML= '';
emailError.className= 'error';
}else{
    showError();
    debugger
}
});
form.addEventListener( 'submit',function(event){
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
});
debugger
 function showError(){
    if(email.validity.valueMissing){
        emailError.textContent=  'El correo es requerido';

   }else if(email.validity.typeMismatch){
            emailError.textContent= 'El correo no existe';
        }
        emailError.className= 'error activo';
    };
function showError(){
    if(password.validity.valueMissing){
        passwordError.textContent= 'La contraseña es requerida';
    
    }else if(password.validity.typeMismatch){
        passwordError.textContent= 'Contraseña incorrecta';
        debugger
    }
    passwordError.className= 'error activo';
}