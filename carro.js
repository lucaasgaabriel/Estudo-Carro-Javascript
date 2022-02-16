var statusCarro = "Ligado"
var aceleracao = 0
var rotacaoDoVolante = 0
var farol = "O farol ligou junto com o carro"


function ligarDesligar () {
    if (statusCarro == "Ligado"){
        statusCarro = "O carro foi ligado";

    } else {        
        statusCarro = "O carro foi desligado";
    }
    return statusCarro;
}

function farolCarro () {
    if(statusCarro === "O carro foi ligado"){
        farol = "O farol ligou junto com o carro";
    } else {
        farol = "O farol desligou junto com o carro, ligue o carro para funcionar!";
    }
    return farol;
}


function acelerar (incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s";
}


function frear (decremento) {
    aceleracao = aceleracao - decremento;
    
    return "Desacelerando para " + aceleracao + "m/s";
}


function girarVolante (anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º"
}