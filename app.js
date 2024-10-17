// Función para validar el texto ingresado antes de encriptar
function validarInput(text) {
    // Expresión regular que permite solo letras minúsculas y espacios
    const regex = /^[a-z\s]*$/;
    // Obtener el textarea con ID "texto" del DOM
    const textArea = document.getElementById("texto");
    
    // Quitar la clase de error (si existe) antes de validar
    textArea.classList.remove("error");

    // Validar si el campo de texto está vacío
    if (text === "") {
        alert("El campo de texto no puede estar vacío."); // Mostrar alerta si está vacío
        textArea.classList.add("error"); // Agregar clase de error para cambiar el borde a rojo
        return false; // Retornar falso porque no pasó la validación
    }
    
    // Validar si el texto ingresado cumple con la expresión regular (solo letras minúsculas y espacios)
    if (!regex.test(text)) {
        alert("El texto ingresado no es válido. Por favor, use solo letras minúsculas sin acentos ni caracteres especiales.");
        textArea.classList.add("error"); // Agregar clase de error si no cumple la validación
        return false; // Retornar falso si no pasa la validación
    }

    // Si pasa todas las validaciones, retornar verdadero
    return true;
}

// Función para encriptar el texto
function encriptar() {
    // Obtener el valor ingresado en el textarea "texto" y eliminar los espacios en blanco al inicio y final
    const input = document.getElementById("texto").value.trim();
    
    // Si el texto es válido, proceder con la encriptación
    if (validarInput(input)) {
        // Convertir el texto en un array de caracteres
        const arr = input.split("");
        
        // Recorrer cada carácter del texto
        for (let i = 0; i < arr.length; i++) {
            // Si el carácter es una vocal, reemplazarlo según el caso
            if ("aeiou".includes(arr[i])) {
                switch (arr[i]) {
                    case "a":
                        arr[i] = "ai"; // Reemplazar "a" por "ai"
                        break;
                    case "e":
                        arr[i] = "enter"; // Reemplazar "e" por "enter"
                        break;
                    case "i":
                        arr[i] = "imes"; // Reemplazar "i" por "imes"
                        break;
                    case "o":
                        arr[i] = "ober"; // Reemplazar "o" por "ober"
                        break;
                    case "u":
                        arr[i] = "ufat"; // Reemplazar "u" por "ufat"
                        break;
                }
            }
        }

        // Unir los caracteres modificados en un string
        const textoCifrado = arr.join("");
        
        // Ocultar el contenedor del primer textarea
        document.getElementById("container-info").style.display = "none";
        // Mostrar el contenedor del segundo textarea (donde aparecerá el texto cifrado)
        document.getElementById("container-info2").style.display = "flex";
        // Establecer el valor cifrado en el segundo textarea
        document.getElementById("texto2").value = textoCifrado;
        // Mostrar el botón para copiar el texto cifrado
        document.getElementById("container-botoncopiar").style.display = "flex";
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert("Error al encriptar texto");
    }
}

// Función para desencriptar el texto
function desencriptar() {
    // Obtener el texto ingresado en el textarea "texto" y eliminar los espacios en blanco al inicio y final
    const textoCifrado = document.getElementById("texto").value.trim();
    
    // Validar el texto antes de proceder con la desencriptación
    if (validarInput(textoCifrado)) {
        // Reemplazar cada conjunto encriptado con su vocal original
        const textoDescifrado = textoCifrado
            .replace(/ai/g, "a") // Reemplazar "ai" por "a"
            .replace(/enter/g, "e") // Reemplazar "enter" por "e"
            .replace(/imes/g, "i") // Reemplazar "imes" por "i"
            .replace(/ober/g, "o") // Reemplazar "ober" por "o"
            .replace(/ufat/g, "u"); // Reemplazar "ufat" por "u"

        // Ocultar el contenedor del primer textarea
        document.getElementById("container-info").style.display = "none";
        // Mostrar el contenedor del segundo textarea (donde aparecerá el texto descifrado)
        document.getElementById("container-info2").style.display = "flex";
        // Establecer el valor descifrado en el segundo textarea
        document.getElementById("texto2").value = textoDescifrado;
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert("Error al desencriptar texto");
    }
}

// Función para copiar el texto cifrado al portapapeles utilizando async/await
async function copiarTexto() {
    // Obtener el texto cifrado del segundo textarea
    const textoCifrado = document.getElementById("texto2").value;
    
    try {
        // Intentar copiar el texto al portapapeles
        await navigator.clipboard.writeText(textoCifrado);
        // Mostrar un mensaje de éxito
        alert("Texto copiado al portapapeles correctamente");
    } catch (error) {
        // Mostrar un mensaje de error en caso de que falle
        console.error("Error al copiar texto: ", error);
    }
}