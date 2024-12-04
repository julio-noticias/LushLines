//Declaração de Variáveis de tamanho de fontes//

let fontSize = 16;
let tituloFont = 26;
let botaoExpansivoFont = 12;
let iconMaisFont = 17;

let liFont= 10;

let liItemText1 = document.querySelector('.list-item1');
let liItemText2 = document.querySelector('.list-item2');
let liItemText3 = document.querySelector('.list-item3');
let liItemText4 = document.querySelector('.list-item4');
let liItemText5 = document.querySelector('.list-item5');

let pItens = document.querySelectorAll('p');


let isHighContrast = false;
let isModoNoturno = false;

let header = document.querySelector('header');
let container = document.querySelector('.container-inicio');
let titulo = document.querySelector('.titulo');
let botaoAcesso = document.querySelector('.menu-acessivo');
let biSearch = document.querySelector('.bi-search');
let biX = document.querySelector('.bi-x');
let botaoExpansivo = document.querySelector('#botao-expansivo');
let botaoAcessibilidad = document.querySelector('.botao-acessibilidade');

let lebron = document.querySelector('.lebron');

function aumentarFonte() {
    
    if (fontSize < 30) {

        fontSize += 1;
        tituloFont += 1;
        botaoExpansivoFont += 1;
        liFont += 0.375;

        botaoAcessibilidad.style.fontSize = 16 + "px";

        titulo.style.fontSize = tituloFont + "px";

        document.body.style.fontSize = fontSize + "px";

        botaoExpansivo.style.fontSize = botaoExpansivoFont + "px";

        liItemText1.style.fontSize = liFont+"px";
        liItemText2.style.fontSize = liFont+"px";
        liItemText3.style.fontSize = liFont+"px";
        liItemText4.style.fontSize = liFont+"px";
        liItemText5.style.fontSize = liFont+"px";

        pItens.style.fontSize = fontSize+"px";

    }

    else {
        fontSize = 30;
        tituloFont = 40;
        botaoExpansivoFont = 26;
        liFont = 15;
    }
}

function diminuirFonte() {
    fontSize -= 2;
    tituloFont -= 2;
    botaoExpansivoFont -= 2;
    liFont -= 0.75;

    titulo.style.fontSize = tituloFont + "px";
    document.body.style.fontSize = fontSize + "px";
    botaoExpansivo.style.fontSize = botaoExpansivoFont + "px";
    liItemText1.style.fontSize = liFont+"px";
    liItemText2.style.fontSize = liFont+"px";
    liItemText3.style.fontSize = liFont+"px";
    liItemText4.style.fontSize = liFont+"px";
    liItemText5.style.fontSize = liFont+"px";

    if (fontSize < 10) {

        fontSize = 10;
        tituloFont = 20;
        botaoExpansivoFont = 12;
        liFont = 6;
}
}

function leitorTela() {
    alert("Leitor de tela ativado! O conteúdo será lido em voz alta")
}

function contrasteCores() {
    isHighContrast = !isHighContrast;

    if (isHighContrast) {
        document.body.classList.add("high-contrast");
        titulo.classList.add("high-contrast");
        container.classList.add("high-contrast-border");
        biSearch.classList.add("high-contrast");
        biX.classList.add("high-contrast");
        botaoExpansivo.classList.add("high-contrast-button-color");

        lebron.classList.add("lebron1");

        

        document.body.classList.remove("modo-noturno");
        titulo.classList.remove("modo-noturno");
        container.classList.remove("modo-noturno-border");
        biSearch.classList.remove("modo-noturno");
        biX.classList.remove("modo-noturno");
        botaoExpansivo.classList.remove("modo-noturno-button-color");
    }
    else {
        document.body.classList.remove("high-contrast");
        titulo.classList.remove("high-contrast");
        container.classList.remove("high-contrast-border");
        biSearch.classList.remove("high-contrast");
        biX.classList.remove("high-contrast");
        botaoExpansivo.classList.remove("high-contrast-button-color");

        lebron.classList.remove("lebron1");
    }
}

//botao de acessibilidade//

function botaoAcessibilidade() {
    let botaoSemBorda1 = document.querySelector('.sem-borda1');
    let botaoSemBorda2 = document.querySelector('.sem-borda2');
    let botaoSemBorda3 = document.querySelector('.sem-borda3');
    let botaoSemBorda4 = document.querySelector('.sem-borda4');

    let iconMais = document.querySelector('.bi-plus-lg');
    let iconMenos = document.querySelector('.bi-dash');
    let iconOlho = document.querySelector('.bi-eye');
    let iconSol = document.querySelector('.bi-brightness-high-fill');


    botaoAcesso.classList.toggle("menu-acessivo-after");
    botaoSemBorda1.classList.toggle("expansao-botao");
    botaoSemBorda2.classList.toggle("expansao-botao");
    botaoSemBorda3.classList.toggle("expansao-botao");
    botaoSemBorda4.classList.toggle("expansao-botao");

    iconMais.classList.toggle("bi-plus-lg1");
    iconMenos.classList.toggle("bi-dash1");
    iconOlho.classList.toggle("bi-eye1");
    iconSol.classList.toggle("bi-brightness-high-fill1");

}

//Modo Noturno//

function modoNoturno(){
    isModoNoturno = !isModoNoturno;

    if (isModoNoturno) {

        
        header.classList.add("modo-noturno");
        document.body.classList.add("modo-noturno");
        titulo.classList.add("modo-noturno");
        container.classList.add("modo-noturno-border");
        biSearch.classList.add("modo-noturno");
        biX.classList.add("modo-noturno");
        botaoExpansivo.classList.add("modo-noturno-button-color");

        document.body.classList.remove("high-contrast");
        titulo.classList.remove("high-contrast");
        container.classList.remove("high-contrast-border");
        biSearch.classList.remove("high-contrast");
        biX.classList.remove("high-contrast");
        botaoExpansivo.classList.remove("high-contrast-button-color");
    }
    else {
        document.body.classList.remove("modo-noturno");
        titulo.classList.remove("modo-noturno");
        container.classList.remove("modo-noturno-border");
        biSearch.classList.remove("modo-noturno");
        biX.classList.remove("modo-noturno");
        botaoExpansivo.classList.remove("modo-noturno-button-color");
    }
}