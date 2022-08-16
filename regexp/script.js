var passwd = document.querySelector('#passwd');
var ingresar = document.querySelector('#ingresar');
var filtro = /^(?=.*\d)(?=.*[a-zA-Z]).\S{12,24}$/gm;
contraseña(passwd);
ingresar.addEventListener('click', (e) => {
    e.preventDefault();
})
function contraseña(inputElement) {
    inputElement.addEventListener('blur', () => {
        inputElement.isValid = false;
        if (inputElement.type === 'password' && filtro.test(inputElement.value)) {
            inputElement.isValid = true;
            alert('Contraseña válida');
        } else if (inputElement.isValid === false) {
            alert('Contraseña inválida');
        }
    })
}
