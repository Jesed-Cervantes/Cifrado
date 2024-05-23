function cifrarCesar(texto, desplazamiento) {
    let textoCifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);
            if ((codigo >= 65) && (codigo <= 90)) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            } else if ((codigo >= 97) && (codigo <= 122)) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }
        textoCifrado += char;
    }
    return textoCifrado;
}

function descifrarCesar(textoCifrado, desplazamiento) {
    return cifrarCesar(textoCifrado, -desplazamiento);
}

document.getElementById('cifrarFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let textoOriginal = document.getElementById('TextoCifrar').value;
    let desplazamiento = parseInt(document.getElementById('Desplazamiento').value);


    const textoCifrado = cifrarCesar(textoOriginal, desplazamiento);
    document.getElementById('resultado').textContent = `Texto cifrado: ${textoCifrado}`;

    const textoDescifrado = descifrarCesar(textoCifrado, desplazamiento); // Usar textoCifrado para descifrar
    document.getElementById('TextoDesincriptado').textContent = `Texto desincriptado: ${textoDescifrado}` ;
});






