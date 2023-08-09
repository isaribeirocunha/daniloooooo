//1)
var texto = "Isadora Ribeiro da Cunha"
var textoMudado = texto.replace(/[Tt]/g, '7')

console.log(textoMudado)

//2)
var texto = "Isadora Ribeiro é o meu nome, a palavra que será contada é Isadora, já que Isadora é meu nome";

var palavraContada = "Isadora";
var expressaoRegular = new RegExp('\\b' + palavraContada + '\\b', 'gi');
var contagem = (texto.match(expressaoRegular) || []).length;

console.log(`A palavra "${palavraContada}" aparece ${contagem} vezes no texto.`);

//3)

/*var input = "TextoComMaiusculas";
var regex = /^[A-Z]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas letras maiúsculas.");
} else {
    console.log("A entrada não contém apenas letras maiúsculas.");
}*/
//////////////////////////////////////////////////////////
/*var input = "textosemmenusculas";
var regex = /^[a-z]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas letras minúsculas.");
} else {
    console.log("A entrada não contém apenas letras minúsculas.");
}*/
var input = "!@#$%^&*()";
var regex = /^[^a-zA-Z0-9]+$/;

if (regex.test(input)) {
    console.log("A entrada contém apenas caracteres especiais.");
} else {
    console.log("A entrada não contém apenas caracteres especiais.");
}