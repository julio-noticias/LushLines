// Função para registrar usuário
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(username)) {
        if(i == false){
        document.getElementById('registerMessage').innerText = 'Esse usuário já existe, tente mudar o nome';
        }
        else{
            alert("Esse usuário já existe, tente mudar o nome");
        }
    }
    else {
        // Armazena o usuário e a senha
        localStorage.setItem(username, password);
        document.getElementById('registerMessage').innerText = 'Usuário registrado com sucesso!';
    }
});


// Função para login de usuário
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário existe e se a senha está correta
    if (localStorage.getItem(username) === password) {
        window.location.href = "meus-cursos.html";
    } else {
        if(i == false){
        document.getElementById('message').innerText = 'Nome de usuário ou senha incorretos.';
        }
        else{
            alert("Nome de usuário ou senha incorretos.");
        }
    }
});