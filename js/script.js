var texto = document.querySelector("#texto");
var botao_criptografar = document.querySelector(".criptografia");
var botao_descriptografar = document.querySelector(".descriptografia");
var botao_copiar = document.querySelector(".botao-copiar").style.display = 'none';
var texto_digitado = document.querySelector(".texto-digitado").style.display = 'none';

//Botoes para criptografar texto e descriptografar
botao_criptografar.addEventListener("click", criptografa);
botao_descriptografar.addEventListener("click", descriptografa);

function descriptografa() {
    var aux = texto.value;
    //Tratando o erro caso insira algum texto vazio
    if(textoVazio(aux)){
        return;
    }
    aux = aux.replace(/enter/gi, "e");
    aux = aux.replace(/imes/gi, "i");
    aux = aux.replace(/ai/gi, "a");
    aux = aux.replace(/ober/gi, "o");
    aux = aux.replace(/ufat/gi, "u");

    ajustes(aux);
}
function criptografa() {
    var aux = texto.value;
    if(textoVazio(aux)){
        return;
    }
    aux = aux.replace(/e/gi, "enter");
    aux = aux.replace(/i/gi, "imes");
    aux = aux.replace(/a/gi, "ai");
    aux = aux.replace(/o/gi, "ober");
    aux = aux.replace(/u/gi, "ufat");
    ajustes(aux);
}
function ajustes(aux) {
    var remove = document.querySelector(".vazio").style.display = 'none';
    var botao_copiar = document.querySelector(".botao-copiar").style.display = 'block';
    var texto_digitado = document.querySelector(".texto-digitado").style.display = 'block';

    var p = document.querySelector(".resultado");
    p.textContent = aux;
}
function textoVazio(aux) {
    if (aux.length < 1) {
        texto.placeholder = "⚠ Este campo não pode estar vazio!";
        return true;
    }
}
let btn = document.querySelector('.botao-copiar');

btn.addEventListener('click', function(e) {

  let textArea = document.querySelector('.resultado');
  textArea.select();
  document.execCommand('copy');
  
});