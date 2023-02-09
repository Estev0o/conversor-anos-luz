function converterLuz(){

var anosLuz = 9.461e15;
var nome = document.getElementById("nome").value;

var anosLuzValor = document.getElementById("valor").value;

var resultado = anosLuzValor * anosLuz;

var load = document.getElementById("load");
load.innerHTML = `<h3> Olá ${nome} ! <br> confira o resultado de Anos-Luz para KM: ${resultado} </h3> `
document.getElementById("img").src="https://scitechdaily.com/images/Traveling-Through-Space.gif";
    
}

