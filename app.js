

function cifrar() {

    const texto = document.getElementById('caja1').value;
    
    var arr = [];

    for (let i of texto) {
        if (i.includes("a") == true || i.includes("e") == true || i.includes("i") == true || i.includes("o") == true || i.includes("u") == true) {

            if (i.includes("a") == true) {
                var letra0 = i.replace("a", 'ai');
                arr.push(letra0);
            }

            if (i.includes("e") == true) {
                var letra1 = i.replace("e", 'enter');
                arr.push(letra1);
            }

            if (i.includes("i") == true) {
                var letra2 = i.replace("i", 'imes');
                arr.push(letra2);
            }

            if (i.includes("o") == true) {
                var letra3 = i.replace("o", 'ober');
                arr.push(letra3);
            }

            if (i.includes("u") == true) {
                var letra4 = i.replace("u", 'ufat');
                arr.push(letra4);
            }

        } else {

            arr.push(i);
        }

    }

    textoCifrado = arr.join('');
    console.log(textoCifrado);
    return document.getElementById("textoCifrado").value = textoCifrado;

}

function descifrar() {

    const lista1 = []
    lista1.push(caja1.value)

    const listaModificada = lista1.map(function (elemento) {
        return elemento.replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    });

    
    textoCifrado = listaModificada.toString();
    console.log(textoCifrado);
    return document.getElementById("textoCifrado").value = textoCifrado;

}
