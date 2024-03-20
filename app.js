
const textocifrado = document.getElementById('textoCifrado');



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
    let arr2 = [];
    for (let i of texto) {
        if (i.includes("a") == true || i.includes("e") == true || i.includes("i") == true || i.includes("o") == true || i.includes("u") == true) {

            if (i.includes("a") == true) {
                arr.push(i);
                var texto2 = i.replace("a", 'ai');
                arr2.push(texto2);
            }

            if (i.includes("e") == true) {
                arr.push(i);
                var texto3 = i.replace("e", 'enter');
                arr2.push(texto3);
            }
            if (i.includes("i") == true) {
                arr.push(i);
                var texto4 = i.replace("e", 'enter');
                arr2.push(texto4);
            }

            if (i.includes("o") == true) {
                arr.push(i);
                var texto5 = i.replace("o", 'ober');
                arr2.push(texto5);
            }

            if (i.includes("u") == true) {
                arr.push(i);
                var texto6 = i.replace("u", 'ofat');
                arr2.push(texto6);
            }

        } else {
            arr.push(i);
            arr2.push(i);
        }
        console.log(arr);
        console.log(arr2);
    }


}



function descifrar(texto) {


}

function asignarTextoCifrado(textocifrado) {


}
