function validateForm(evt) {
    lastname();
    firstname();
    email();
    pass();
    lista();
    evt.preventDefault();
}

function lastname() {
    var ape = (/[0-9._*!@#$%^&();/|<>"',+-]/).test(document.getElementById("lastname").value);

    if ((document.getElementById("lastname").value) == '') {
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Este campo es obligatorio");
        node.appendChild(textnode);
        return document.getElementsByClassName("lastname-container")[0].appendChild(node);

    } else {
        document.getElementsByClassName("lastname-container")[0].removeChild(document.getElementsByClassName("lastname-container")[0].lastChild);

        if (ape == true) {
            var node1 = document.createElement("SPAN");
            var textnode1 = document.createTextNode("No se permiten numeros o caracteres especiales");
            node1.appendChild(textnode1);
            return document.getElementsByClassName("lastname-container")[0].appendChild(node1);
        } else {
            document.getElementsByClassName("lastname-container")[0].removeChild(document.getElementsByClassName("lastname-container")[0].lastChild);
        }
    }
}

function firstname() {
    var nom = (/[0-9._*!@#$%^&();/|<>"',+-]/).test(document.getElementById("name").value);

    if ((document.getElementById("name").value) == '') {
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Este campo es obligatorio");
        node.appendChild(textnode);
        return document.getElementsByClassName("name-container")[0].appendChild(node);

    } else {
        document.getElementsByClassName("name-container")[0].removeChild(document.getElementsByClassName("name-container")[0].lastChild);

        if (nom == true) {
            var node1 = document.createElement("SPAN");
            var textnode1 = document.createTextNode("No se permiten numeros o caracteres especiales");
            node1.appendChild(textnode1);
            return document.getElementsByClassName("name-container")[0].appendChild(node1);
        } else {
            document.getElementsByClassName("name-container")[0].removeChild(document.getElementsByClassName("name-container")[0].lastChild);
        }
    }
}


function email() {
    var expression = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if ((document.getElementById("input-email").value) == '') {
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Este campo es obligatorio");
        node.appendChild(textnode);
        return document.getElementsByClassName("email-container")[0].appendChild(node);
    } else {
        document.getElementsByClassName("email-container")[0].removeChild(document.getElementsByClassName("email-container")[0].lastChild);
        if (!expression.test(document.getElementById("input-email").value)) {
            var node1 = document.createElement("SPAN");
            var textnode1 = document.createTextNode("Correo Invalido");
            node1.appendChild(textnode1);
            return document.getElementsByClassName("email-container")[0].appendChild(node1);
        } else {
            document.getElementsByClassName("email-container")[0].removeChild(document.getElementsByClassName("email-container")[0].lastChild);
        }
    }
}

function pass() {
    if ((document.getElementById("input-password").value) == '') {
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode("Este campo es obligatorio");
        node.appendChild(textnode);
        return document.getElementsByClassName("form-group")[0].appendChild(node);
    } else {
        document.getElementsByClassName("form-group")[0].removeChild(document.getElementsByClassName("form-group")[0].lastChild);
        if ((document.getElementById("input-password").value).length < 6) {
            var node1 = document.createElement("SPAN");
            var textnode1 = document.createTextNode("El minimo de caracteres es 6");
            node1.appendChild(textnode1);
            return document.getElementsByClassName("form-group")[0].appendChild(node1);
        } else {
            document.getElementsByClassName("form-group")[0].removeChild(document.getElementsByClassName("form-group")[0].lastChild);

            if ((document.getElementById("input-password").value) == "123456" || (document.getElementById("input-password").value) == "098754") {
                var node3 = document.createElement("SPAN");
                var textnode3 = document.createTextNode("El password es invalido");
                node3.appendChild(textnode3);
                return document.getElementsByClassName("form-group")[0].appendChild(node3);
            } else {
                document.getElementsByClassName("form-group")[0].removeChild(document.getElementsByClassName("form-group")[0].lastChild);
            }
        }
    }
}


function lista() {
    var node = document.createElement("SPAN");
    var textnode = document.createTextNode("Por favor eliga una bicicleta");
    node.appendChild(textnode);
    if ((document.getElementsByClassName("form-control")[4].value) == 0) {
        return document.getElementsByClassName("form-group")[1].appendChild(node);
    } else {
        document.getElementsByClassName("form-group")[1].removeChild(document.getElementsByClassName("form-group")[1].lastChild);
    }
}