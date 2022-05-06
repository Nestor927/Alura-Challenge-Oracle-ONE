///////////////////////////ENCRIPTACION////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");

function btnencriptar(){
    const textEncriptado = encriptar(inputTexto.value);
    mensaje.value = textEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"], ["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////DESENCRIPTAR/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function btndesencriptar(){
    const textEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textEncriptado;
}

function desencriptar(StringParaEncriptar){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober","o"], ["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}



/////////////////////////////////////////////////////////////////////////////////////

/////////////IMPLEMENTACION BOTON COPIAR/////////////////
//////////////////////////////////////////////////////////
const $content = document.getElementById('textArea'),
    $btn = document.getElementById('btn'),
    $title = document.getElementById('salida');

$btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');
})
/////////////////////////////////////////////////////////

//////////////OCULTAR/MOSTRAR//////////////////////////
/////////////////////////////////////////////////////////

function mostrar(){
    document.getElementById('salida').style.display = 'flex';
    document.getElementById('info').style.display = 'none';
}
///////////////////////////////////////////////////////////