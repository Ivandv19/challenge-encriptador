// Función para validar el texto ingresado antes de encriptar
function validarInput(text) {
    const regex = /^[a-z\s]*$/; // Expresión regular para permitir solo letras minúsculas y espacios
    if (!regex.test(text) || text === "") {
        // Si el texto no coincide con la expresión regular o está vacío
        alert( "El texto ingresado no es válido. Por favor, use solo letras minúsculas sin acentos ni caracteres especiales."); // Mostrar mensaje de alerta
        return false; // Devolver falso
    } else {
        return true; // Devolver verdadero
    }
}

// Función para encriptar el texto
function encriptar() {
    const input = document.getElementById("texto").value.trim(); // Obtener el valor del texto ingresado y eliminar espacios en blanco
    if (validarInput(input)) {
        const arr = input.split(""); // Convertir el texto en un array de caracteres
        for (let i = 0; i < arr.length; i++) {
            // Recorrer cada caracter del texto
            if ("aeiou".includes(arr[i])) {
                // Si el caracter es una vocal
                switch (arr[i]) {
                    case "a":
                        arr[i] = "ai";
                        break;
                    case "e":
                        arr[i] = "enter";
                        break;
                    case "i":
                        arr[i] = "imes";
                        break;
                    case "o":
                        arr[i] = "ober";
                        break;
                    case "u":
                        arr[i] = "ufat";
                        break;
                }
            }
        }

        const textoCifrado = arr.join(""); // Unir los caracteres encriptados para formar el texto cifrado
        document.getElementById("container-info").style.display = "none";
        document.getElementById("container-info2").style.display = "flex"; // Mostrar el contenedor del segundo textarea
        document.getElementById("texto2").value = textoCifrado; // Establecer el texto cifrado en el segundo textarea
        document.getElementById("container-botoncopiar").style.display = "flex";
    } else {
        alert("error al encriptar texto");
    }
}

// Función para desencriptar el texto
function desencriptar() {
    const textoCifrado = document.getElementById("texto").value.trim(); // Obtener el texto cifrado
    const textoDescifrado = textoCifrado // Desencriptar el texto reemplazando cada encriptación por su vocal original
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("container-info").style.display = "none";
    document.getElementById("container-info2").style.display = "flex"; // Mostrar el contenedor del segundo textarea
    document.getElementById("texto2").value = textoDescifrado; // Establecer el texto descifrado en el segundo textarea
}

// Función para copiar el texto cifrado al portapapeles utilizando async/await
async function copiarTexto() {
    const textoCifrado = document.getElementById("texto2").value; // Obtener el texto cifrado
    try {
        await navigator.clipboard.writeText(textoCifrado); // Intentar copiar el texto al portapapeles
        alert("Texto copiado al portapapeles correctamente"); // Mostrar mensaje de éxito
    } catch (error) {
        console.error("Error al copiar texto: ", error); // Mostrar mensaje de error en la consola
        alert("No se pudo copiar el texto al portapapeles. Inténtalo nuevamente."); // Mostrar mensaje de error al usuario
    }
}
