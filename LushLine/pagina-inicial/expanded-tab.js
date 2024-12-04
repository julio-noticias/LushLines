let dropdown1 = document.querySelector('.esconder1');
let dropdown2 = document.querySelector('.esconder2');
let dropdown3 = document.querySelector('.esconder3');
let elementos = document.querySelector('.elementos');
let elementos2 = document.querySelector('.elementos-onclick');

let btnExpandedTab = false;

dropdown1.textContent = "";
dropdown2.textContent = "";
dropdown3.textContent = "";

 function expandedTab(){
   if(btnExpandedTab = true){
      elementos.classList.remove('elementos-onclick');
      elementos.classList.add('elementos');
      dropdown1.classList.toggle('esconder1');
      dropdown2.classList.toggle('esconder2');
      dropdown3.classList.toggle('esconder3');

      dropdown1.textContent = "";
      dropdown2.textContent = "";
      dropdown3.textContent = "";

      btnExpandedTab = false;
    }

    else{

      elementos.classList.add('elementos-onclick');
      elementos.classList.remove('elementos');



    dropdown1.textContent = "Atividade 1";
    dropdown2.textContent = "Atividade 2";
    dropdown3.textContent = "Atividade 3";
    
    btnExpandedTab = true;
    }

 }