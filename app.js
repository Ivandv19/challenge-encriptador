

function cifrar() {
    //paso mi texto del html a js
    const texto = document.getElementById('texto').value;
    //convierto mi texto a un array
    const arr = texto.split('');
    //creo un bucle que itere en cada elemento de mi array
    for (let i = 0; i < arr.length; i++) {
        //creo condicional para saber si mi elemento contiene alguna de las letras 'aeiou'
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
    document.getElementById("texto2").value = textoCifrado;

}

function descifrar() {

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
