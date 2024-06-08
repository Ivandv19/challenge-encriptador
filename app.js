// Función para validar el texto ingresado antes de encriptar
function validarInput() {
    const input = document.getElementById('texto').value.trim(); // Obtener el valor del texto ingresado y eliminar espacios en blanco
    const regex = /^[a-z\s]*$/; // Expresión regular para permitir solo letras minúsculas y espacios
    if (!regex.test(input) || input === "") { // Si el texto no coincide con la expresión regular o está vacío
        alert('El texto ingresado no es válido. Por favor, use solo letras minúsculas sin acentos ni caracteres especiales.'); // Mostrar mensaje de alerta
        return false; // Devolver falso
    } else { // Si el texto es válido
        encriptar(); // Llamar a la función para encriptar
        return true; // Devolver verdadero
    }
}

// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById('texto').value; // Obtener el valor del texto ingresado
    const arr = texto.split(''); // Convertir el texto en un array de caracteres

    for (let i = 0; i < arr.length; i++) { // Recorrer cada caracter del texto
        if ('aeiou'.includes(arr[i])) { // Si el caracter es una vocal
            switch (arr[i]) { // Reemplazar cada vocal por su correspondiente encriptado
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

    const textoCifrado = arr.join(''); // Unir los caracteres encriptados para formar el texto cifrado
    console.log(textoCifrado); // Mostrar el texto cifrado en la consola
    document.getElementById("texto2").value = textoCifrado; // Establecer el texto cifrado en el segundo textarea
    document.getElementById('container-info').style.display='none';
    document.getElementById("container-info2").style.display = "flex"; // Mostrar el contenedor del segundo textarea
    document.getElementById("container-botoncopiar").style.display = 'flex';
}

// Función para desencriptar el texto
function desencriptar() {
    const textoCifrado = document.getElementById('texto').value; // Obtener el texto cifrado
    const textoDescifrado = textoCifrado // Desencriptar el texto reemplazando cada encriptación por su vocal original
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    console.log(textoDescifrado); // Mostrar el texto descifrado en la consola
    document.getElementById("texto2").value = textoDescifrado; // Establecer el texto descifrado en el segundo textarea
}

// Función para copiar el texto cifrado al portapapeles
function copiarTexto() {
    const textoCifrado = document.getElementById("texto2").value; // Obtener el texto cifrado
    navigator.clipboard.writeText(textoCifrado) // Copiar el texto cifrado al portapapeles utilizando la API del navegador
        .then(function() {
            alert("Texto copiado al portapapeles correctamente"); // Mostrar mensaje de éxito
        })
        .catch(function(error) {
            console.error("Error al copiar texto: ", error); // Mostrar mensaje de error en la consola
        });
}