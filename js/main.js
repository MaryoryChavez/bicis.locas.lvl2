// version 1.5
var firstname = document.getElementById("name");
var lastname = document.getElementById("lastname");
var email = document.getElementById("input-email");
var pass = document.getElementById("input-password");

function showMessage(_input, _message) {
    var node = document.createElement("span");
    node.innerHTML = _message;
    return _input.parentNode.appendChild(node);
}

function validateEmpty(_allinputs) {
    if (_allinputs.value == "" && _allinputs.nextSibling == null) {
        return showMessage(_allinputs, "Este campo es obligatorio");
    }
    if (_allinputs.value != "" && _allinputs.nextSibling != null) {
        _allinputs.parentNode.removeChild(_allinputs.nextSibling);
    }
}

function validateNames(_names) {
    var num = (/[0-9._*!@#$%^&();/|<>"',+-]/).test(_names.value) //no caracteres especiales;
    var up = (/[A-Z]{1}/).test(_names.value); //primera mayuscula
    if (_names.value != "") {
        if (num == true || up == false) {
            return showMessage(_names, "Nombre invalido");
        }
    }
}

function validateMail(_mail) {
    var expression = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i; //estructura e-mail.
    if (_mail.value != "") {
        if (!expression.test(_mail.value)) {
            return showMessage(_mail, "Correo invalido");
        }
    }
}

function validatePass(_pass) {
    if (_pass.value != "") {
        if ((_pass.value).length < 6 || _pass.value == 123456 || _pass.value == 098754) {
            return showMessage(_pass, "Contraseña invalida");
        }
    }
}

function validateForm(evt) {
    validateEmpty(firstname); validateEmpty(lastname); validateEmpty(email); validateEmpty(pass); 
    validateNames(firstname); validateNames(lastname);
    validateMail(email);
    validatePass(pass);
    evt.preventDefault();
}