let lupa = document.querySelector('.lupa_search');
let mae_search = document.querySelector('.mae_search');
let x = document.querySelector('.x_search');

lupa.addEventListener('click', ()=>{

mae_search.classList.add('lupa-ativada');

})

x.addEventListener('click', ()=>{

    mae_search.classList.remove('lupa-ativada')

})