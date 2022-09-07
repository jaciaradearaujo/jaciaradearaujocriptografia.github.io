var botaoCriptografar = document.querySelector(".btn-criptografar");
var botaoDesencriptografar = document.querySelector(".btn-desencriptografar");
var boneco = document.querySelector(".recipiente-boneco");
var h3 = document.querySelector(".recipiente-h3");
var paragrafo = document.querySelector(".recipiente-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoCriptografar.onclick = criptografar;
botaoDesencriptografar.onclick = desencriptografar;

function criptografar(){
    ocultarFrente();
    var area = recuperarTexto()
    resultado.textContent = criptografarTexto(area);
  
}

function desencriptografar(){
    ocultarFrente();
    var area = recuperarTexto()
    resultado.textContent = desencriptografarTexto(area);
    
}

function recuperarTexto() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarFrente(){
    boneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";
     
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
        textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
       textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
        textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
        textoFinal = textoFinal + "ufat"
        }
       else {
        textoFinal = textoFinal + texto[i];
       }
             
    }
    return textoFinal;
}

function desencriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

     
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
             
    }
    return textoFinal;
}


