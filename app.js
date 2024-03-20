function botonCifrar() {

    cifrar();

}



function cifrar() {

    var texto = document.getElementById('texto').value;
    /*   
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

    //recorremos cada caracter de nuestro texto en busca de las letras y las cambiamos
    let arr = [];
    
    for (let i of texto) {
        if (i.includes("a") == true || i.includes("e") == true || i.includes("i") == true || i.includes("o") == true || i.includes("u") == true) {

            if (i.includes("a") == true) {
                var texto2 = i.replace("a", 'ai');
                arr.push(texto2);
            }

            if (i.includes("e") == true) {
                var texto3 = i.replace("e", 'enter');
                arr.push(texto3);
            }

            if (i.includes("i") == true) {
                var texto4 = i.replace("i", 'imes');
                arr.push(texto4);
            }

            if (i.includes("o") == true) {
                var texto5 = i.replace("o", 'ober');
                arr.push(texto5);
            }

            if (i.includes("u") == true) {
                var texto6 = i.replace("u", 'ofat');
                arr.push(texto6);
            }

        } else {
            arr.push(i);

        }
    }
    
    textocifrado = arr.join('');
    return document.getElementById("textoCifrado").value = textocifrado;
}

function botonDescifrar() {

}

function descifrar(texto) {

}

function asignarTextoCifrado() {



}
