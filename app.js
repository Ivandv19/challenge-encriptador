function validarInput() {
    var input = document.getElementById('texto').value;
    var regex = /^[a-z\s]*$/;
    if (!regex.test(input)) {
        alert('El texto ingresado no es válido. Por favor, use solo letras minúsculas sin acentos ni caracteres especiales.');
        return false;
    } else {
        encriptar();
        return true;
    }
}


function encriptar() {
    const texto = document.getElementById('texto').value;
    const arr = texto.split('');

    for (let i = 0; i < arr.length; i++) {
        if ('aeiou'.includes(arr[i])) {
            switch (arr[i]) {
                case 'a':
                    arr[i] = 'ai';
                    break;
                case 'e':
                    arr[i] = 'enter';
                    break;
                case 'i':
                    arr[i] = 'imes';
                    break;
                case 'o':
                    arr[i] = 'ober';
                    break;
                case 'u':
                    arr[i] = 'ufat';
                    break;
            }
        }
    }

    const textoCifrado = arr.join('');
    console.log(textoCifrado);
    // Asigna el texto encriptado al valor del input
    document.getElementById("texto2").value = textoCifrado;

    // Después de que la encriptación se complete, mostramos el contenedor del input
    document.getElementById("texto2Container").style.display = "block";
}

function desencriptar() {
    const textoCifrado = document.getElementById('texto').value;
    const textoDescifrado = textoCifrado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    console.log(textoDescifrado);
    document.getElementById("texto2").value = textoDescifrado;
}