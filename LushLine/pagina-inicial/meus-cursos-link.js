function meusCursosLink(){

if (localStorage.getItem(username) === password) {
    window.location.href = "meus-cursos.html";
} 

else {
  document.getElementById('p-footer').scrollIntoView({behavior:'smooth'});
  alert("Para acessar a página, deve fazer Login")
}

}

function irParaLogin(){
      document.getElementById('p-footer').scrollIntoView({behavior:'smooth'});
}