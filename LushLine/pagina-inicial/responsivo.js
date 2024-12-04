function ajustarLayout() {
    let largura = window.innerWidth;
    let largurinha = largura * 0.6;

    if (window.innerHeight < largurinha) {
        document.body.classList.add('body-horizontal');
        botaoAcesso.classList.add('menu-acessivo-horizontal');
        header.classList.add('header-horizontal');
        conteudo.classList.add('conteudo-horizontal');

        
    } else {
        document.body.classList.remove('body-horizontal');
        botaoAcesso.classList.remove('menu-acessivo-horizontal');
        header.classList.remove('header-horizontal');
        conteudo.classList.remove('conteudo-horizontal');
    }
    

    if(window.innerWidth > 1111){
        if (window.innerWidth < window.innerHeight) {

            titulo.forEach(element => {
               element.classList.add('titulo2-vertical'); 
            });


            cardInformativa1.classList.add('card-informativa-vertical');
            cardInformativa2.classList.add('card-informativa-vertical');
            cardInformativa3.classList.add('card-informativa-vertical');
            cardInformativa1.classList.remove('card-informativa-horizontal3');
            cardInformativa2.classList.remove('card-informativa-horizontal3');
            cardInformativa3.classList.remove('card-informativa-horizontal3');
        }

        else{

            titulo.forEach(element => {
              element.classList.remove('titulo2-vertical');  
            });
            

            cardInformativa1.classList.add('card-informativa-horizontal3');
            cardInformativa2.classList.add('card-informativa-horizontal3');
            cardInformativa3.classList.add('card-informativa-horizontal3');
            cardInformativa1.classList.remove('card-informativa-vertical');
            cardInformativa2.classList.remove('card-informativa-vertical');
            cardInformativa3.classList.remove('card-informativa-vertical');
            
        }

    }

    if(window.innerWidth > window.innerHeight){
        
        cardFlex.classList.add('card-flex-horizontal');
        cardFlex.classList.remove('card-flex-vertical');

        spanLabel.forEach(element => {
            element.classList.add('span-label-horizontal');
            element.classList.remove('span-label-vertical');
            });

        formButton.forEach(element =>{
            element.classList.add('span-label-horizontal');
            element.classList.remove('span-label-vertical');
        })

        spanInput.forEach(element => {
        element.classList.add('span-input-horizontal');
        element.classList.remove('span-input-vertical');

        });

        tituloLogin.forEach(element =>{
            element.classList.add('titulo-login-horizontal');
            element.classList.remove('titulo-login-vertical');
        });

    conteudo.classList.add('conteudo-horizontal');
    conteudo.classList.remove('conteudo-vertical');

        botaoAcessibilidad.classList.add('botao-acessibilidade-horizontal');
        botaoAcessibilidad.classList.remove('botao-acessibilidade-vertical');



            if(window.innerWidth > 900){

                letrasPequenas.forEach(element =>{
                    element.classList.add('letras-pequenas-horizontal');
                    element.classList.remove('letras-pequenas-vertical');
                });
            }

                if(window.innerWidth < 851 || i == false){
                    botaoBarraAcessivel.forEach(element =>{
                        element.classList.remove('expansao-botao-vertical');
                        element.classList.remove('expansao-botao-horizontal');
                    });
                }
                else{
                    botaoBarraAcessivel.forEach(element =>{
                        element.classList.remove('expansao-botao-vertical');
                        element.classList.add('expansao-botao-horizontal');
                    });
                }

        
            }
    

    else{
        
        cardFlex.classList.remove('card-flex-horizontal');
        cardFlex.classList.add('card-flex-vertical');

        spanLabel.forEach(element => {
            element.classList.add('span-label-vertical');
            element.classList.remove('span-label-horizontal');
        });

        formButton.forEach(element => {
            element.classList.add('span-label-vertical');
            element.classList.remove('span-label-horizontal');
        });


        spanInput.forEach(element =>{
           element.classList.add('span-input-vertical');
           element.classList.remove('span-input-horizontal'); 
        });

        tituloLogin.forEach(element =>{
           element.classList.add('titulo-login-vertical');
           element.classList.remove('titulo-login-horizontal');
        });

        conteudo.classList.add('conteudo-vertical');
        conteudo.classList.remove('conteudo-horizontal');

        botaoAcessibilidad.classList.add('botao-acessibilidade-vertical');
        botaoAcessibilidad.classList.remove('botao-acessibilidade-horizontal');
        
            
        if(window.innerWidth > 900){

            letrasPequenas.forEach(element =>{
                element.classList.remove('letras-pequenas-horizontal');
                element.classList.add('letras-pequenas-vertical');
            });
        }

        if(window.innerWidth < 851 || i == false){
            botaoBarraAcessivel.forEach(element =>{
                element.classList.remove('expansao-botao-vertical');
                element.classList.remove('expansao-botao-horizontal');
            });
        }
        else{
            botaoBarraAcessivel.forEach(element =>{
                element.classList.add('expansao-botao-vertical');
                element.classList.remove('expansao-botao-horizontal');
            });
        }

    }


}

// Chama a função ao carregar a página
ajustarLayout();

// Adiciona um event listener para chamar a função sempre que a janela for redimensionada
window.addEventListener('resize', ajustarLayout);