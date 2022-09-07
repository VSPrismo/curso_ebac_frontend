function validar () {
    var numb1 = document.getElementById("numb1");
    var numb2 = document.getElementById("numb2");
    if (numb1.value > numb2.value) {
        alert("Este formulário é inválido")
    }
    else if (numb1.value,numb2.value == "") {
        alert("Número não informado")
    }
    else {
        alert("Formulário está correto")
    }
    document.getElementById("myForm").submit();
}

