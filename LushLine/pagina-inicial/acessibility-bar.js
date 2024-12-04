// Aumentar a Fonte //

let i = false;

fontSize = 1;
fontSizeP = 1;


function aumentarFonte() {

    if(fontSize < 1){
        fontSize = 1;
        fontSizep = 1;
    }
    
    fontSize += 0.04;
    fontSizep += 0.03;

    
    if(fontSize < 1.20){

            document.body.style.fontSize = fontSize*100 + "%";

            letrasPequenas.forEach(element => {
                const currentFontSizePx = parseFloat(window.getComputedStyle(element).fontSize); 
                const newFontSizePx = currentFontSizePx * fontSizep; 

                element.style.fontSize = `${newFontSizePx}px`; });

            cardInformativaP.forEach(element => {
                const currentFontSizePx = parseFloat(window.getComputedStyle(element).fontSize); 
                const newFontSizePx = currentFontSizePx * fontSize; 

                element.style.fontSize = `${newFontSizePx}px`; });

        }

    }


//Diminuir a Fonte//


function diminuirFonte() {

    fontSize -= 0.04;
    fontSizep -= 0.03;
    
   if(fontSize > 1){
        fontSize = 1;
        fontSizep = 1;
    }
        if (fontSize < 0.86) {
        
    }

    else{

    document.body.style.fontSize = fontSize*100+"%";

    letrasPequenas.forEach(element => {
        const currentFontSizePx = parseFloat(window.getComputedStyle(element).fontSize); 
        const newFontSizePx = currentFontSizePx * fontSizep; 

        element.style.fontSize = `${newFontSizePx}px`; });

    cardInformativaP.forEach(element => {
        const currentFontSizePx = parseFloat(window.getComputedStyle(element).fontSize); 
        const newFontSizePx = currentFontSizePx * fontSize; 

        element.style.fontSize = `${newFontSizePx}px`; });
        
    }

}

function leitorTela() {
    alert("Leitor de tela ativado! O conteúdo será lido em voz alta")
}


function contrasteCores() {
    isHighContrast = !isHighContrast;

    if (isHighContrast) {
        document.body.classList.add("high-contrast");
        header.classList.add("high-contrast");
        header.classList.add("high-contrast-degrade");
        menuAuxiliar.classList.add("menu-auxiliar-contraste");
        cardInformativa1.classList.add("high-contrast-degrade-down");
        cardInformativa2.classList.add("high-contrast-degrade-down");
        cardInformativa3.classList.add("high-contrast-degrade-down");

        footer.classList.add("high-contrast-degrade");

        pFooter.forEach(element => {
            element.classList.add("high-contrast-p");
        });
        
        preenchimentoP.forEach(element =>{
            element.classList.add("high-contrast-p");
        });




        //Remover modo noturno//


        document.body.classList.remove("modo-noturno");
        header.classList.remove("modo-noturno");
        header.classList.remove("modo-noturno-degrade");
        menuAuxiliar.classList.remove("menu-auxiliar-contraste");
        cardInformativa1.classList.remove("modo-noturno-degrade-down");
        cardInformativa2.classList.remove("modo-noturno-degrade-down");
        cardInformativa3.classList.remove("modo-noturno-degrade-down");

        footer.classList.remove("modo-noturno-degrade");

        preenchimentoP.forEach(element =>{
            element.classList.remove("modo-noturno-p");
        });

        pFooter.forEach(element => {
            element.classList.remove("modo-noturno-p");
    });

        cardFlex.classList.remove("degrade");

    }

    else {
        document.body.classList.remove("high-contrast");
        header.classList.remove("high-contrast");
        header.classList.remove("high-contrast-degrade");
        menuAuxiliar.classList.remove("menu-auxiliar-contraste");
        cardInformativa1.classList.remove("high-contrast-degrade-down");
        cardInformativa2.classList.remove("high-contrast-degrade-down");
        cardInformativa3.classList.remove("high-contrast-degrade-down");
        footer.classList.remove("high-contrast-degrade");

        pFooter.forEach(element => {
            element.classList.remove("high-contrast-p");
            });

        preenchimetoP.forEach(element =>{
            element.classList.remove("high-contrast-p");
        });


        if(isModoNoturno == false){
        cardFlex.classList.add("degrade");
        }
        else{
            document.body.classList.add("modo-noturno");
                header.classList.add("modo-noturno");
                header.classList.add("modo-noturno-degrade");
                menuAuxiliar.classList.add("menu-auxiliar-contraste");
                cardInformativa1.classList.add("modo-noturno-degrade-down");
                cardInformativa2.classList.add("modo-noturno-degrade-down");
                cardInformativa3.classList.add("modo-noturno-degrade-down");

                footer.classList.add("modo-noturno-degrade");

                pFooter.forEach(element => {
                    element.classList.add("modo-noturno-p");
                });

                preenchimentoP.forEach(element => {
                   element.classList.add("modo-noturno-p"); 
                });

                if(window.innerWidth > 800){
                main.classList.add("main-image");
                }
                else{
                    main.classList.add("main-image-mobile");
                }
            }
        }


    }


//botao de acessibilidade//

function botaoAcessibilidade() {

    i = !i;

    if(window.innerWidth > 850){
        if(window.innerWidth > window.innerHeight){
            botaoBarraAcessivel.forEach(element =>{
                element.classList.remove('expansao-botao-vertical');
                element.classList.add('expansao-botao-horizontal');
            });
        }
        else{
            botaoBarraAcessivel.forEach(element =>{
                element.classList.add('expansao-botao-vertical');
                element.classList.remove('expansao-botao-horizontal');
            });
        }
    }


    if(i == false){
        botaoBarraAcessivel.forEach(element =>{
            element.classList.remove('expansao-botao-vertical');
            element.classList.remove('expansao-botao-horizontal');
        });
    }

    
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


        document.body.classList.add("modo-noturno");
        header.classList.add("modo-noturno");
        header.classList.add("modo-noturno-degrade");
        menuAuxiliar.classList.add("menu-auxiliar-contraste");
        cardInformativa1.classList.add("modo-noturno-degrade-down");
        cardInformativa2.classList.add("modo-noturno-degrade-down");
        cardInformativa3.classList.add("modo-noturno-degrade-down");

        footer.classList.add("modo-noturno-degrade");
        
        pFooter.forEach(element => {
            element.classList.add("modo-noturno-p");
    });
        
        preenchimentoP.forEach(element =>   {
           element.classList.add("modo-noturno-p"); 
        });


        if(window.innerWidth > 800){
        main.classList.add("main-image");
        }
        else{
            main.classList.add("main-image-mobile");
        }



        //Remover high-contrast//

        document.body.classList.remove("high-contrast");
        header.classList.remove("high-contrast");
        header.classList.remove("high-contrast-degrade");
        menuAuxiliar.classList.remove("menu-auxiliar-contraste");
        cardInformativa1.classList.remove("high-contrast-degrade-down");
        cardInformativa2.classList.remove("high-contrast-degrade-down");
        cardInformativa3.classList.remove("high-contrast-degrade-down");
        footer.classList.remove("high-contrast-degrade");

        pFooter.forEach(element => {
            element.classList.remove("high-contrast-p");
            });

        preenchimentoP.forEach(element =>{
            element.classList.remove("high-contrast-p");
        });


        cardFlex.classList.remove("degrade");
    }

    else {
        document.body.classList.remove("modo-noturno");
        header.classList.remove("modo-noturno");
        header.classList.remove("modo-noturno-degrade");
        menuAuxiliar.classList.remove("menu-auxiliar-contraste");
        cardInformativa1.classList.remove("modo-noturno-degrade-down");
        cardInformativa2.classList.remove("modo-noturno-degrade-down");
        cardInformativa3.classList.remove("modo-noturno-degrade-down");

        footer.classList.remove("modo-noturno-degrade");

        pFooter.forEach(element => {
            element.classList.remove("modo-noturno-p");
    });

        preenchimentoP.forEach(element =>{
           element.classList.remove("modo-noturno-p"); 
        });


        main.classList.remove("main-image");
        main.classList.remove("main-image-mobile");

        if(isHighContrast == false){
        cardFlex.classList.add("degrade");
        }
        else{
            document.body.classList.add("high-contrast");
            header.classList.add("high-contrast");
            header.classList.add("high-contrast-degrade");
            menuAuxiliar.classList.add("menu-auxiliar-contraste");
            cardInformativa1.classList.add("high-contrast-degrade-down");
            cardInformativa2.classList.add("high-contrast-degrade-down");
            cardInformativa3.classList.add("high-contrast-degrade-down");

            footer.classList.add("high-contrast-degrade");

            pFooter.forEach(element => {
                element.classList.add("high-contrast-p");
            });

            preenchimentoP.forEach(element =>{
               element.classList.add("high-contrast-p"); 
            });
        }
    }
}